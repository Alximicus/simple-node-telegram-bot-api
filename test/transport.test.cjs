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
    req.destroy = () => { sent.destroyed = true; };
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
    (e) => { assert.deepEqual(e, { ok: false, code: 400, description: 'Bad Request', parameters: { retry_after: 1 } }); return true; });
  await assert.rejects(api.sendPhoto({ chat_id: 42, photo: file }),
    (e) => { assert.deepEqual(e, { ok: false, code: 400, description: 'Bad Request', parameters: { retry_after: 1 } }); return true; });
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

function stalledRequest(respond) {
  const state = { destroyed: false, calls: 0 };
  https.request = (options, callback) => {
    state.calls++;
    const req = new EventEmitter();
    req.destroy = (error) => {
      state.destroyed = true;
      if (error) req.emit('error', error);
      req.emit('close');
    };
    req.end = () => {
      if (!respond) return;
      const res = new EventEmitter();
      res.setEncoding = () => {};
      callback(res);
      respond(res, req);
    };
    return req;
  };
  return state;
}

test('stalled JSON request is rejected and destroyed at its deadline', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const state = stalledRequest();
  const promise = new TelegramAPI('dummy', 25).getMe();
  const rejection = assert.rejects(promise, { code: 'ETIMEDOUT' });
  t.mock.timers.tick(25);
  await rejection;
  assert.equal(state.destroyed, true);
});

test('long polling deadline includes Telegram timeout plus network margin', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const state = stalledRequest();
  const promise = new TelegramAPI('dummy', 25).getUpdates({ timeout: 30 });
  const rejection = assert.rejects(promise, { code: 'ETIMEDOUT' });
  t.mock.timers.tick(44999);
  assert.equal(state.destroyed, false);
  t.mock.timers.tick(1);
  await rejection;
  assert.equal(state.destroyed, true);
});

for (const event of ['aborted', 'close', 'error']) {
  test(`partial JSON response rejects on ${event}`, async () => {
    stalledRequest((res) => { res.emit('data', '{"ok":'); res.emit(event, new Error('response failure')); });
    await assert.rejects(new TelegramAPI('dummy').getMe(), /aborted|closed|failure/);
  });
}

test('successful requests clear their deadline and ignore normal close events', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const state = stalledRequest((res, req) => {
    res.emit('data', '{"ok":true,"result":true}');
    res.emit('end'); res.emit('close'); req.emit('close');
  });
  assert.deepEqual(await new TelegramAPI('dummy', 25).getMe(), { ok: true, result: true });
  t.mock.timers.tick(1000);
  assert.equal(state.destroyed, false);
});

test('serialization failure creates no network request', async () => {
  const state = stalledRequest();
  const params = { chat_id: 42 }; params.text = params;
  await assert.rejects(new TelegramAPI('dummy').sendMessage(params), TypeError);
  assert.equal(state.calls, 0);
});

test('multipart shares the request deadline and destroys a stalled upload', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const state = stalledRequest();
  const rejected = assert.rejects(new TelegramAPI('dummy', 25).sendPhoto({ chat_id: 42, photo: file }), { code: 'ETIMEDOUT' });
  await new Promise(setImmediate);
  t.mock.timers.tick(25);
  await rejected;
  assert.equal(state.destroyed, true);
});
