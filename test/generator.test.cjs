const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { parseAPI, normalizeType, inferReturn, renderTypes, renderClient } = require('../scripts/telegram-api/parser.cjs');
const { generate, uploadWarnings } = require('../scripts/telegram-api/generate.cjs');
const fixture = () => fs.readFile(path.join(__dirname, 'fixtures/telegram-api.html'), 'utf8');

test('parses optional fields, recursive arrays, dynamic unions, empty types and custom InputFile', async () => {
  const api = parseAPI(await fixture());
  assert.equal(api.version, 'Bot API 7.4');
  assert.equal(api.date, 'May 28, 2024');
  assert.equal(api.types.length, 9);
  const types = Object.fromEntries(api.types.map((type) => [type.name, type]));
  assert.equal(types.Message.fields[1].optional, true);
  assert.equal(types.Message.fields[2].type, 'ReadonlyArray<ReadonlyArray<string>>');
  assert.equal(types.InaccessibleMessage.fields[0].type, '0');
  assert.equal(types.MaybeInaccessibleMessage.alias, 'Message | InaccessibleMessage');
  assert.equal(types.ForumTopicClosed.alias, 'unknown');
  assert.equal(types.CallbackGame.alias, 'Readonly<{}>');
  assert.equal(types.RichText.alias, 'string | ReadonlyArray<RichText> | RichTextBold');
  assert.deepEqual(types.InputFile.fields.map(({ name, type }) => [name, type]), [['file', 'Buffer'], ['name', 'string']]);
});

test('captures final no-parameter method and concrete return types', async () => {
  const api = parseAPI(await fixture());
  assert.deepEqual(api.methods.map(({ name, returnType }) => [name, returnType]), [
    ['getMe', 'User'], ['sendPhoto', 'Message'], ['editMessageText', 'Message | true'],
    ['getUpdates', 'ReadonlyArray<Message>'], ['close', 'true'],
  ]);
  assert.equal(api.methods[1].fields[0].optional, false);
  assert.equal(api.methods[1].fields[2].optional, true);
});

test('normalizes comma-separated media unions and refuses unknown types or returns', () => {
  assert.equal(normalizeType('Array of A, B and C', new Set(['A', 'B', 'C'])), 'ReadonlyArray<A | B | C>');
  assert.throws(() => normalizeType('New undocumented scalar', new Set()), /Unrecognized/);
  assert.throws(() => inferReturn('newMethod', 'Use this method.', new Set()), /Cannot infer/);
  assert.equal(inferReturn('setGameScore', 'The Message is returned, otherwise True is returned. Returns an error if force is False.', new Set(['Message'])), 'Message | true');
});

test('rejects changed tables, missing metadata, duplicate fields and missing parameter tables', async () => {
  const html = await fixture();
  assert.throws(() => parseAPI(html.replace('<th>Required</th>', '<th>Changed</th>')), /Unexpected table/);
  assert.throws(() => parseAPI(html.replace('Bot API 7.4', 'No version')), /version is missing/);
  assert.throws(() => parseAPI(html.replace('<td>from</td>', '<td>message_id</td>')), /duplicate field/);
  assert.throws(() => parseAPI(html.replace('Requires no parameters. Returns True', 'Returns True')), /no parameter table/);
});

test('renders the established API layout, escapes comments and preserves maintained transport', async () => {
  const api = parseAPI(await fixture());
  const current = await fs.readFile(path.join(__dirname, '../src/TelegramAPI.ts'), 'utf8');
  const types = renderTypes(api);
  assert.match(types, /export namespace Telegram/);
  assert.match(types, /export namespace Params/);
  assert.match(types, /export interface Bot/);
  assert.match(types, /comment terminator \* \/\./);
  const client = renderClient(api, current);
  assert.match(client, /getMe\(\): ITelegramResponse<Telegram.User>/);
  assert.match(client, /this\._sendForm\('sendPhoto', params, 'photo'\)/);
  assert.equal(client.slice(client.indexOf('  private _call<')), current.slice(current.indexOf('  private _call<')));
});

test('reports nested attachment and multiple direct-file limitations', async () => {
  const api = parseAPI(await fixture());
  api.types.push({ name: 'InputMedia', fields: [{ name: 'media', type: 'string', description: 'Use attach://file.' }] });
  api.methods.push({ name: 'sendMedia', fields: [{ name: 'media', type: 'ReadonlyArray<InputMedia>' }] });
  api.methods[1].fields.push({ name: 'thumbnail', type: 'InputFile | string' });
  const warnings = uploadWarnings(api);
  assert.deepEqual(warnings.map(({ method }) => method), ['sendPhoto', 'sendMedia']);
  assert.deepEqual(warnings[1].nestedFiles, ['media']);
});

test('generation validates, is deterministic, and leaves existing output intact on errors', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'telegram-generator-test-'));
  try {
    const html = await fixture();
    await generate({ html, outDir: directory });
    const before = await fs.readFile(path.join(directory, 'types.ts'), 'utf8');
    await generate({ html, outDir: directory, check: true });
    await assert.rejects(generate({ html: html.replace('Integer or String', 'UnexpectedType'), outDir: directory }), /Unrecognized/);
    assert.equal(await fs.readFile(path.join(directory, 'types.ts'), 'utf8'), before);
    const invalid = html.replace('</body>', '<h4>Readonly</h4><p>Currently holds no information.</p></body>');
    await assert.rejects(generate({ html: invalid, outDir: directory }), /failed type-checking/);
    assert.equal(await fs.readFile(path.join(directory, 'types.ts'), 'utf8'), before);
    await fs.writeFile(path.join(directory, 'types.ts'), 'changed');
    await assert.rejects(generate({ html, outDir: directory, check: true }), /output differs/);
    assert.equal(await fs.readFile(path.join(directory, 'types.ts'), 'utf8'), 'changed');
  } finally {
    await fs.rm(directory, { recursive: true, force: true });
  }
});

test('update mode writes both validated source files and preserves them on validation failure', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'telegram-update-test-'));
  const outDir = path.join(directory, 'preview');
  const applyDir = path.join(directory, 'src');
  try {
    const html = await fixture();
    await generate({ html, outDir, applyDir });
    for (const name of ['types.ts', 'TelegramAPI.ts']) {
      assert.equal(await fs.readFile(path.join(applyDir, name), 'utf8'), await fs.readFile(path.join(outDir, name), 'utf8'));
    }
    assert.deepEqual((await fs.readdir(applyDir)).sort(), ['TelegramAPI.ts', 'types.ts']);
    const before = await fs.readFile(path.join(applyDir, 'types.ts'), 'utf8');
    const invalid = html.replace('</body>', '<h4>Readonly</h4><p>Currently holds no information.</p></body>');
    await assert.rejects(generate({ html: invalid, outDir, applyDir }), /failed type-checking/);
    assert.equal(await fs.readFile(path.join(applyDir, 'types.ts'), 'utf8'), before);
    await assert.rejects(generate({ html, outDir, applyDir, check: true }), /cannot be combined/);
  } finally {
    await fs.rm(directory, { recursive: true, force: true });
  }
});
