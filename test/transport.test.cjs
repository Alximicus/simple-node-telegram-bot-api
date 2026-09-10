const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const https = require('node:https');
const { EventEmitter } = require('node:events');
const { TelegramAPI } = require('../lib');

const originalRequest = https.request;
afterEach(() => { https.request = originalRequest; });

function intercept(reply = { ok: true, result: { message_id: 1 } }, failure) {
  const sent = {};
  https.request = (options, callback) => {
    sent.options = options;
    const req = new EventEmitter();
    req.write = (body) => { sent.body = body; };
    req.end = (body) => {
      if (body !== undefined) sent.body = body;
      queueMicrotask(() => {
        if (failure === 'request') return req.emit('error', new Error('network failure'));
        const res = new EventEmitter();
        res.setEncoding = () => {};
        callback(res);
        if (failure === 'response') return res.emit('error', new Error('response failure'));
        if (failure === 'aborted') return res.emit('aborted');
        const data = typeof reply === 'string' ? reply : JSON.stringify(reply);
        res.emit('data', data.slice(0, 4));
        res.emit('data', data.slice(4));
        res.emit('end');
      });
    };
    return req;
  };
  return sent;
}

const api = new TelegramAPI('test-token');
const file = { file: Buffer.from([0, 255, 13, 10, 128]), name: 'фото.png' };

test('JSON calls preserve endpoint, payload and response envelope', async () => {
  const sent = intercept();
  const result = await api.sendMessage({ chat_id: 42, text: 'Привіт' });
  assert.deepEqual(result, { ok: true, result: { message_id: 1 } });
  assert.equal(sent.options.hostname, 'api.telegram.org');
  assert.equal(sent.options.path, '/bottest-token/sendMessage');
  assert.equal(sent.options.method, 'POST');
  assert.deepEqual(JSON.parse(sent.body), { chat_id: 42, text: 'Привіт' });
});

test('file IDs continue using JSON', async () => {
  const sent = intercept();
  await api.sendPhoto({ chat_id: 42, photo: 'file-id' });
  assert.equal(sent.options.headers['Content-Type'], 'application/json');
  assert.equal(JSON.parse(sent.body).photo, 'file-id');
});

test('multipart preserves binary data, Unicode, structured fields, false and zero', async () => {
  const sent = intercept();
  await api.sendPhoto({ chat_id: 42, photo: file, caption: 'Привіт', disable_notification: false,
    message_thread_id: 0, reply_markup: { inline_keyboard: [] }, parse_mode: undefined });
  assert.equal(sent.options.path, '/bottest-token/sendPhoto');
  assert.equal(sent.options.headers['Content-Length'], sent.body.length);
  const form = await new Response(sent.body, { headers: { 'Content-Type': sent.options.headers['Content-Type'] } }).formData();
  assert.equal(form.get('photo').name, file.name);
  assert.deepEqual(Buffer.from(await form.get('photo').arrayBuffer()), file.file);
  assert.equal(form.get('caption'), 'Привіт');
  assert.equal(form.get('chat_id'), '42');
  assert.equal(form.get('disable_notification'), 'false');
  assert.equal(form.get('message_thread_id'), '0');
  assert.equal(form.get('reply_markup'), '{"inline_keyboard":[]}');
  assert.equal(form.has('parse_mode'), false);
});

test('every existing upload endpoint uses the correct multipart field', async () => {
  const pairs = [['sendAnimation', 'animation'], ['sendAudio', 'audio'], ['sendDocument', 'document'],
    ['sendVideo', 'video'], ['sendVideoNote', 'video_note'], ['sendVoice', 'voice'],
    ['setChatPhoto', 'photo'], ['setStickerSetThumbnail', 'thumbnail'], ['setWebhook', 'certificate']];
  for (const [method, field] of pairs) {
    const sent = intercept({ ok: true, result: true });
    await api[method]({ [field]: file });
    assert.equal(sent.options.path, `/bottest-token/${method}`);
    const form = await new Response(sent.body, { headers: { 'Content-Type': sent.options.headers['Content-Type'] } }).formData();
    assert.deepEqual(Buffer.from(await form.get(field).arrayBuffer()), file.file);
  }
});

test('API error shapes stay compatible for JSON and multipart', async () => {
  const error = { ok: false, error_code: 400, description: 'Bad Request', parameters: { retry_after: 1 } };
  intercept(error);
  await assert.rejects(api.sendMessage({ chat_id: 42, text: 'test' }),
    (e) => { assert.deepEqual(e, { ok: false, code: 400, description: 'Bad Request' }); return true; });
  await assert.rejects(api.sendPhoto({ chat_id: 42, photo: file }),
    (e) => { assert.deepEqual(e, { ok: false, code: 400, description: 'Bad Request' }); return true; });
});

for (const failure of ['request', 'response', 'aborted']) {
  test(`multipart rejects ${failure} failures`, async () => {
    intercept(undefined, failure);
    await assert.rejects(api.sendPhoto({ chat_id: 42, photo: file }), /failure|aborted/);
  });
}

test('multipart rejects invalid JSON', async () => {
  intercept('not JSON');
  await assert.rejects(api.sendPhoto({ chat_id: 42, photo: file }), SyntaxError);
});
