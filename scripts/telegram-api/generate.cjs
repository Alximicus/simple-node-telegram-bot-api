const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { parseArgs } = require('node:util');
const { createHash } = require('node:crypto');
const { spawnSync } = require('node:child_process');
const { parseAPI, renderTypes, renderClient } = require('./parser.cjs');

const root = path.resolve(__dirname, '../..');
const sourceURL = 'https://core.telegram.org/bots/api';

function uploadWarnings(api) {
  const types = new Map(api.types.map((type) => [type.name, type]));
  function containsFile(type, visited = new Set()) {
    if (/\bInputFile\b/.test(type)) return true;
    return (type.match(/\b[A-Z][A-Za-z0-9]*\b/g) || []).some((name) => {
      if (visited.has(name) || !types.has(name)) return false;
      const next = new Set([...visited, name]);
      const definition = types.get(name);
      return definition.alias ? containsFile(definition.alias, next) : definition.fields.some((field) => /attach:\/\//.test(field.description) || containsFile(field.type, next));
    });
  }
  return api.methods.flatMap((method) => {
    const direct = method.fields.filter((field) => /\bInputFile\b/.test(field.type));
    const nested = method.fields.filter((field) => !direct.includes(field) && containsFile(field.type));
    if (direct.length < 2 && !nested.length) return [];
    return [{ method: method.name, directFiles: direct.map((field) => field.name), nestedFiles: nested.map((field) => field.name),
      limitation: 'The current transport uploads one top-level InputFile per request. Additional and nested files require transport changes; file IDs/URLs can be used where supported.' }];
  });
}

async function generate({ html, outDir, check = false, applyDir }) {
  if (check && applyDir) throw new Error('--check and --write cannot be combined');
  const api = parseAPI(html);
  const currentClient = await fs.readFile(path.join(root, 'src/TelegramAPI.ts'), 'utf8');
  const currentTypes = await fs.readFile(path.join(root, 'src/types.ts'), 'utf8');
  const names = (source, regex) => [...source.matchAll(regex)].map((match) => match[1]);
  const previousMethods = names(currentClient, /^  ([a-z][A-Za-z0-9]*)\(/gm).filter((name) => name !== 'constructor');
  const previousTypes = names(currentTypes, /^  export type ([A-Z][A-Za-z0-9]*)\b/gm);
  const difference = (before, after) => ({ added: after.filter((name) => !before.includes(name)), removed: before.filter((name) => !after.includes(name)) });
  const report = {
    source: sourceURL,
    sha256: createHash('sha256').update(html).digest('hex'),
    version: api.version,
    date: api.date,
    types: api.types.length,
    methods: api.methods.length,
    changes: {
      types: difference(previousTypes, api.types.map((type) => type.name)),
      methods: difference(previousMethods, api.methods.map((method) => method.name)),
    },
    uploadWarnings: uploadWarnings(api),
    review: 'Review all generated field, parameter and return-type changes before updating src. Successful compilation does not guarantee backward compatibility or Telegram runtime behavior.',
  };
  const outputs = {
    'types.ts': renderTypes(api),
    'TelegramAPI.ts': renderClient(api, currentClient),
    'report.json': JSON.stringify(report, null, 2) + '\n',
  };
  const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'telegram-api-generator-'));
  try {
    for (const [name, content] of Object.entries(outputs)) await fs.writeFile(path.join(temporary, name), content);
    const compilation = spawnSync(process.execPath, [path.join(root, 'node_modules/typescript/bin/tsc'),
      '--ignoreConfig', '--noEmit', '--strict', 'false', '--strictNullChecks', '--skipLibCheck', 'false',
      '--target', 'es2015', '--module', 'Node16', '--moduleResolution', 'Node16', '--lib', 'es2015',
      '--typeRoots', path.join(root, 'node_modules/@types'), '--types', 'node',
      path.join(temporary, 'types.ts'), path.join(temporary, 'TelegramAPI.ts'),
    ], { encoding: 'utf8', timeout: 60000 });
    if (compilation.error || compilation.status !== 0) {
      throw new Error(`Generated files failed type-checking. Destination files were not changed.\n${compilation.error || ''}${compilation.stdout || ''}${compilation.stderr || ''}`);
    }
    if (check) {
      for (const [name, content] of Object.entries(outputs)) {
        const existing = await fs.readFile(path.join(outDir, name), 'utf8').catch(() => null);
        if (existing !== content) throw new Error(`Generated output differs: ${name}`);
      }
    } else {
      await fs.mkdir(outDir, { recursive: true });
      for (const [name, content] of Object.entries(outputs)) await fs.writeFile(path.join(outDir, name), content);
      if (applyDir) {
        await fs.mkdir(applyDir, { recursive: true });
        for (const name of ['types.ts', 'TelegramAPI.ts']) {
          await fs.writeFile(path.join(applyDir, name), outputs[name]);
        }
      }
    }
  } finally {
    await fs.rm(temporary, { recursive: true, force: true });
  }
  return report;
}

async function main() {
  const { values } = parseArgs({ options: {
    html: { type: 'string' }, 'out-dir': { type: 'string', default: 'generated/telegram-api' },
    check: { type: 'boolean', default: false }, write: { type: 'boolean', default: false }, help: { type: 'boolean', short: 'h' },
  } });
  if (values.help) {
    console.log('Usage: npm run generate:api -- [--html saved-api.html] [--out-dir generated/telegram-api] [--check | --write]\nFetches official documentation unless --html is supplied. Validates both generated files before writing.\n--write also updates src/types.ts and src/TelegramAPI.ts after validation (npm run update:api).\n--check compares with existing output without changing files. No generation runs during install, build or publish.');
    return;
  }
  if (values.check && values.write) throw new Error('--check and --write cannot be combined');
  let html;
  if (values.html) html = await fs.readFile(path.resolve(values.html), 'utf8');
  else {
    const response = await fetch(sourceURL, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`Telegram documentation request failed: HTTP ${response.status}`);
    html = await response.text();
  }
  const report = await generate({ html, outDir: path.resolve(values['out-dir']), check: values.check, applyDir: values.write ? path.join(root, 'src') : undefined });
  console.log(`${report.version}: ${report.types} types, ${report.methods} methods. Type-check passed.`);
  console.log(`${values.check ? 'Verified' : 'Generated'}: ${path.resolve(values['out-dir'])}`);
  if (values.write) console.log('Updated src/types.ts and src/TelegramAPI.ts. Review the diff and run npm test.');
  console.log(`Review report.json: ${report.uploadWarnings.length} methods have upload limitations in the existing transport.`);
}

if (require.main === module) main().catch((error) => { console.error(error.message); process.exitCode = 1; });
module.exports = { generate, uploadWarnings };
