import { TelegramAPI, Telegram, ITelegramResponse } from '@alximicus/simple-node-telegram-bot-api';

const api = new TelegramAPI('token');
const bot: Telegram.Bot = api;
const user: ITelegramResponse<Telegram.User> = api.getMe();
const photo: Telegram.InputFile = { file: Buffer.from('photo'), name: 'photo.jpg' };
const message: ITelegramResponse<Telegram.Message> = api.sendPhoto({ chat_id: 1, photo });
const params: Telegram.Params.SendMessage = { chat_id: 1, text: 'Hello' };
bot.sendMessage(params);
// @ts-expect-error chat_id remains required
api.sendMessage({ text: 'Hello' });
// @ts-expect-error result is User, not Message
const wrong: ITelegramResponse<Telegram.Message> = api.getMe();
void user;
void message;
void wrong;
