import * as https from 'https';
import { RequestOptions } from 'https';
const request = require('request');

import { ITelegramResponse, ITelegramResponseData, Telegram } from './types';

export class TelegramAPI implements Telegram.Bot {
  constructor(
    readonly botId: string,
  ) {
  }

  addStickerToSet(params: Telegram.Params.AddStickerToSet): ITelegramResponse<true> {
    return this._call('addStickerToSet', params);
  }

  answerCallbackQuery(params: Telegram.Params.AnswerCallbackQuery): ITelegramResponse<true> {
    return this._call('answerCallbackQuery', params);
  }

  answerInlineQuery(params: Telegram.Params.AnswerInlineQuery): ITelegramResponse<true> {
    return this._call('answerInlineQuery', params);
  }

  answerPreCheckoutQuery(params: Telegram.Params.AnswerPreCheckoutQuery): ITelegramResponse<true> {
    return this._call('answerPreCheckoutQuery', params);
  }

  answerShippingQuery(params: Telegram.Params.AnswerShippingQuery): ITelegramResponse<true> {
    return this._call('answerShippingQuery', params);
  }

  answerWebAppQuery(params: Telegram.Params.AnswerWebAppQuery): ITelegramResponse<Telegram.SentWebAppMessage> {
    return this._call('answerWebAppQuery', params);
  }

  approveChatJoinRequest(params: Telegram.Params.ApproveChatJoinRequest): ITelegramResponse<true> {
    return this._call('approveChatJoinRequest', params);
  }

  banChatMember(params: Telegram.Params.BanChatMember): ITelegramResponse<true> {
    return this._call('banChatMember', params);
  }

  banChatSenderChat(params: Telegram.Params.BanChatSenderChat): ITelegramResponse<true> {
    return this._call('banChatSenderChat', params);
  }

  close(): ITelegramResponse<true> {
    return this._call('close');
  }

  closeForumTopic(params: Telegram.Params.CloseForumTopic): ITelegramResponse<true> {
    return this._call('closeForumTopic', params);
  }

  closeGeneralForumTopic(params: Telegram.Params.CloseGeneralForumTopic): ITelegramResponse<true> {
    return this._call('closeGeneralForumTopic', params);
  }

  copyMessage(params: Telegram.Params.CopyMessage): ITelegramResponse<Telegram.MessageId> {
    return this._call('copyMessage', params);
  }

  createChatInviteLink(params: Telegram.Params.CreateChatInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('createChatInviteLink', params);
  }

  createForumTopic(params: Telegram.Params.CreateForumTopic): ITelegramResponse<Telegram.ForumTopic> {
    return this._call('createForumTopic', params);
  }

  createInvoiceLink(params: Telegram.Params.CreateInvoiceLink): ITelegramResponse<string> {
    return this._call('createInvoiceLink', params);
  }

  createNewStickerSet(params: Telegram.Params.CreateNewStickerSet): ITelegramResponse<true> {
    return this._call('createNewStickerSet', params);
  }

  declineChatJoinRequest(params: Telegram.Params.DeclineChatJoinRequest): ITelegramResponse<true> {
    return this._call('declineChatJoinRequest', params);
  }

  deleteChatPhoto(params: Telegram.Params.DeleteChatPhoto): ITelegramResponse<true> {
    return this._call('deleteChatPhoto', params);
  }

  deleteChatStickerSet(params: Telegram.Params.DeleteChatStickerSet): ITelegramResponse<true> {
    return this._call('deleteChatStickerSet', params);
  }

  deleteForumTopic(params: Telegram.Params.DeleteForumTopic): ITelegramResponse<true> {
    return this._call('deleteForumTopic', params);
  }

  deleteMessage(params: Telegram.Params.DeleteMessage): ITelegramResponse<true> {
    return this._call('deleteMessage', params);
  }

  deleteMyCommands(params: Telegram.Params.DeleteMyCommands): ITelegramResponse<true> {
    return this._call('deleteMyCommands', params);
  }

  deleteStickerFromSet(params: Telegram.Params.DeleteStickerFromSet): ITelegramResponse<true> {
    return this._call('deleteStickerFromSet', params);
  }

  deleteStickerSet(params: Telegram.Params.DeleteStickerSet): ITelegramResponse<true> {
    return this._call('deleteStickerSet', params);
  }

  deleteWebhook(params: Telegram.Params.DeleteWebhook): ITelegramResponse<true> {
    return this._call('deleteWebhook', params);
  }

  editChatInviteLink(params: Telegram.Params.EditChatInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('editChatInviteLink', params);
  }

  editForumTopic(params: Telegram.Params.EditForumTopic): ITelegramResponse<true> {
    return this._call('editForumTopic', params);
  }

  editGeneralForumTopic(params: Telegram.Params.EditGeneralForumTopic): ITelegramResponse<true> {
    return this._call('editGeneralForumTopic', params);
  }

  editMessageCaption(params: Telegram.Params.EditMessageCaption): ITelegramResponse<Telegram.Message | true> {
    return this._call('editMessageCaption', params);
  }

  editMessageLiveLocation(params: Telegram.Params.EditMessageLiveLocation): ITelegramResponse<Telegram.Message | true> {
    return this._call('editMessageLiveLocation', params);
  }

  editMessageMedia(params: Telegram.Params.EditMessageMedia): ITelegramResponse<Telegram.Message | true> {
    return this._call('editMessageMedia', params);
  }

  editMessageReplyMarkup(params: Telegram.Params.EditMessageReplyMarkup): ITelegramResponse<Telegram.Message | true> {
    return this._call('editMessageReplyMarkup', params);
  }

  editMessageText(params: Telegram.Params.EditMessageText): ITelegramResponse<Telegram.Message | true> {
    return this._call('editMessageText', params);
  }

  exportChatInviteLink(params: Telegram.Params.ExportChatInviteLink): ITelegramResponse<string> {
    return this._call('exportChatInviteLink', params);
  }

  forwardMessage(params: Telegram.Params.ForwardMessage): ITelegramResponse<Telegram.Message> {
    return this._call('forwardMessage', params);
  }

  getChat(params: Telegram.Params.GetChat): ITelegramResponse<Telegram.Chat> {
    return this._call('getChat', params);
  }

  getChatAdministrators(params: Telegram.Params.GetChatAdministrators): ITelegramResponse<readonly Telegram.ChatMember[]> {
    return this._call('getChatAdministrators', params);
  }

  getChatMember(params: Telegram.Params.GetChatMember): ITelegramResponse<Telegram.ChatMember> {
    return this._call('getChatMember', params);
  }

  getChatMemberCount(params: Telegram.Params.GetChatMemberCount): ITelegramResponse<number> {
    return this._call('getChatMemberCount', params);
  }

  getChatMenuButton(params: Telegram.Params.GetChatMenuButton): ITelegramResponse<Telegram.MenuButton> {
    return this._call('getChatMenuButton', params);
  }

  getCustomEmojiStickers(params: Telegram.Params.GetCustomEmojiStickers): ITelegramResponse<readonly Telegram.Sticker[]> {
    return this._call('getCustomEmojiStickers', params);
  }

  getFile(params: Telegram.Params.GetFile): ITelegramResponse<Telegram.File> {
    return this._call('getFile', params);
  }

  getForumTopicIconStickers(): ITelegramResponse<readonly Telegram.Sticker[]> {
    return this._call('getForumTopicIconStickers');
  }

  getGameHighScores(params: Telegram.Params.GetGameHighScores): ITelegramResponse<readonly Telegram.GameHighScore[]> {
    return this._call('getGameHighScores', params);
  }

  getMe(): ITelegramResponse<Telegram.User> {
    return this._call('getMe');
  }

  getMyCommands(params: Telegram.Params.GetMyCommands): ITelegramResponse<readonly Telegram.BotCommand[]> {
    return this._call('getMyCommands', params);
  }

  getMyDefaultAdministratorRights(params: Telegram.Params.GetMyDefaultAdministratorRights): ITelegramResponse<Telegram.ChatAdministratorRights> {
    return this._call('getMyDefaultAdministratorRights', params);
  }

  getMyDescription(params: Telegram.Params.GetMyDescription): ITelegramResponse<Telegram.BotDescription> {
    return this._call('getMyDescription', params);
  }

  getMyShortDescription(params: Telegram.Params.GetMyShortDescription): ITelegramResponse<Telegram.BotShortDescription> {
    return this._call('getMyShortDescription', params);
  }

  getStickerSet(params: Telegram.Params.GetStickerSet): ITelegramResponse<Telegram.StickerSet> {
    return this._call('getStickerSet', params);
  }

  getUpdates(params: Telegram.Params.GetUpdates): ITelegramResponse<readonly Telegram.Update[]> {
    return this._call('getUpdates', params);
  }

  getUserProfilePhotos(params: Telegram.Params.GetUserProfilePhotos): ITelegramResponse<Telegram.UserProfilePhotos> {
    return this._call('getUserProfilePhotos', params);
  }

  getWebhookInfo(): ITelegramResponse<Telegram.WebhookInfo | Readonly<{ url: unknown; }>> {
    return this._call('getWebhookInfo');
  }

  hideGeneralForumTopic(params: Telegram.Params.HideGeneralForumTopic): ITelegramResponse<true> {
    return this._call('hideGeneralForumTopic', params);
  }

  leaveChat(params: Telegram.Params.LeaveChat): ITelegramResponse<true> {
    return this._call('leaveChat', params);
  }

  logOut(): ITelegramResponse {
    return this._call('logOut');
  }

  pinChatMessage(params: Telegram.Params.PinChatMessage): ITelegramResponse<true> {
    return this._call('pinChatMessage', params);
  }

  promoteChatMember(params: Telegram.Params.PromoteChatMember): ITelegramResponse<true> {
    return this._call('promoteChatMember', params);
  }

  reopenForumTopic(params: Telegram.Params.ReopenForumTopic): ITelegramResponse<true> {
    return this._call('reopenForumTopic', params);
  }

  reopenGeneralForumTopic(params: Telegram.Params.ReopenGeneralForumTopic): ITelegramResponse<true> {
    return this._call('reopenGeneralForumTopic', params);
  }

  restrictChatMember(params: Telegram.Params.RestrictChatMember): ITelegramResponse<true> {
    return this._call('restrictChatMember', params);
  }

  revokeChatInviteLink(params: Telegram.Params.RevokeChatInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('revokeChatInviteLink', params);
  }

  sendAnimation(params: Telegram.Params.SendAnimation): ITelegramResponse<Telegram.Message> {
    if (typeof params.animation === 'object') {
      return this._sendForm('sendAnimation', params, 'animation');
    }
    return this._call('sendAnimation', params);
  }

  sendAudio(params: Telegram.Params.SendAudio): ITelegramResponse<Telegram.Message> {
    if (typeof params.audio === 'object') {
      return this._sendForm('sendAudio', params, 'audio');
    }
    return this._call('sendAudio', params);
  }

  sendChatAction(params: Telegram.Params.SendChatAction): ITelegramResponse<true> {
    return this._call('sendChatAction', params);
  }

  sendContact(params: Telegram.Params.SendContact): ITelegramResponse<Telegram.Message> {
    return this._call('sendContact', params);
  }

  sendDice(params: Telegram.Params.SendDice): ITelegramResponse<Telegram.Message> {
    return this._call('sendDice', params);
  }

  sendDocument(params: Telegram.Params.SendDocument): ITelegramResponse<Telegram.Message> {
    if (typeof params.document === 'object') {
      return this._sendForm('sendDocument', params, 'document');
    }
    return this._call('sendDocument', params);
  }

  sendGame(params: Telegram.Params.SendGame): ITelegramResponse<Telegram.Message> {
    return this._call('sendGame', params);
  }

  sendInvoice(params: Telegram.Params.SendInvoice): ITelegramResponse<Telegram.Message> {
    return this._call('sendInvoice', params);
  }

  sendLocation(params: Telegram.Params.SendLocation): ITelegramResponse<Telegram.Message> {
    return this._call('sendLocation', params);
  }

  sendMediaGroup(params: Telegram.Params.SendMediaGroup): ITelegramResponse<readonly Telegram.Message[]> {
    return this._call('sendMediaGroup', params);
  }

  sendMessage(params: Telegram.Params.SendMessage): ITelegramResponse<Telegram.Message> {
    return this._call('sendMessage', params);
  }

  sendPhoto(params: Telegram.Params.SendPhoto): ITelegramResponse<Telegram.Message> {
    if (typeof params.photo === 'object') {
      return this._sendForm('sendPhoto', params, 'photo');
    }

    return this._call('sendPhoto', params);
  }

  sendPoll(params: Telegram.Params.SendPoll): ITelegramResponse<Telegram.Message> {
    return this._call('sendPoll', params);
  }

  sendSticker(params: Telegram.Params.SendSticker): ITelegramResponse<Telegram.Message> {
    return this._call('sendSticker', params);
  }

  sendVenue(params: Telegram.Params.SendVenue): ITelegramResponse<Telegram.Message> {
    return this._call('sendVenue', params);
  }

  sendVideo(params: Telegram.Params.SendVideo): ITelegramResponse<Telegram.Message> {
    if (typeof params.video === 'object') {
      return this._sendForm('sendVideo', params, 'video');
    }
    return this._call('sendVideo', params);
  }

  sendVideoNote(params: Telegram.Params.SendVideoNote): ITelegramResponse<Telegram.Message> {
    if (typeof params.video_note === 'object') {
      return this._sendForm('sendVideoNote', params, 'video_note');
    }
    return this._call('sendVideoNote', params);
  }

  sendVoice(params: Telegram.Params.SendVoice): ITelegramResponse<Telegram.Message> {
    if (typeof params.voice === 'object') {
      return this._sendForm('sendVoice', params, 'voice');
    }
    return this._call('sendVoice', params);
  }

  setChatAdministratorCustomTitle(params: Telegram.Params.SetChatAdministratorCustomTitle): ITelegramResponse<true> {
    return this._call('setChatAdministratorCustomTitle', params);
  }

  setChatDescription(params: Telegram.Params.SetChatDescription): ITelegramResponse<true> {
    return this._call('setChatDescription', params);
  }

  setChatMenuButton(params: Telegram.Params.SetChatMenuButton): ITelegramResponse<true> {
    return this._call('setChatMenuButton', params);
  }

  setChatPermissions(params: Telegram.Params.SetChatPermissions): ITelegramResponse<true> {
    return this._call('setChatPermissions', params);
  }

  setChatPhoto(params: Telegram.Params.SetChatPhoto): ITelegramResponse<true> {
    if (typeof params.photo === 'object') {
      return this._sendForm('setChatPhoto', params, 'photo');
    }
    return this._call('setChatPhoto', params);
  }

  setChatStickerSet(params: Telegram.Params.SetChatStickerSet): ITelegramResponse<true> {
    return this._call('setChatStickerSet', params);
  }

  setChatTitle(params: Telegram.Params.SetChatTitle): ITelegramResponse<true> {
    return this._call('setChatTitle', params);
  }

  setCustomEmojiStickerSetThumbnail(params: Telegram.Params.SetCustomEmojiStickerSetThumbnail): ITelegramResponse<true> {
    return this._call('setCustomEmojiStickerSetThumbnail', params);
  }

  setGameScore(params: Telegram.Params.SetGameScore): ITelegramResponse<Telegram.Message | true> {
    return this._call('setGameScore', params);
  }

  setMyCommands(params: Telegram.Params.SetMyCommands): ITelegramResponse<true> {
    return this._call('setMyCommands', params);
  }

  setMyDefaultAdministratorRights(params: Telegram.Params.SetMyDefaultAdministratorRights): ITelegramResponse<true> {
    return this._call('setMyDefaultAdministratorRights', params);
  }

  setMyName(params: Telegram.Params.SetMyName): ITelegramResponse<true> {
    return this._call('setMyName', params);
  }

  getMyName(params: Telegram.Params.GetMyName): ITelegramResponse<Telegram.BotName> {
    return this._call('getMyName', params);
  }

  setMyDescription(params: Telegram.Params.SetMyDescription): ITelegramResponse<true> {
    return this._call('setMyDescription', params);
  }

  setMyShortDescription(params: Telegram.Params.SetMyShortDescription): ITelegramResponse<true> {
    return this._call('setMyShortDescription', params);
  }

  setPassportDataErrors(params: Telegram.Params.SetPassportDataErrors): ITelegramResponse<true> {
    return this._call('setPassportDataErrors', params);
  }

  setStickerEmojiList(params: Telegram.Params.SetStickerEmojiList): ITelegramResponse<true> {
    return this._call('setStickerEmojiList', params);
  }

  setStickerKeywords(params: Telegram.Params.SetStickerKeywords): ITelegramResponse<true> {
    return this._call('setStickerKeywords', params);
  }

  setStickerMaskPosition(params: Telegram.Params.SetStickerMaskPosition): ITelegramResponse<true> {
    return this._call('setStickerMaskPosition', params);
  }

  setStickerPositionInSet(params: Telegram.Params.SetStickerPositionInSet): ITelegramResponse<true> {
    return this._call('setStickerPositionInSet', params);
  }

  setStickerSetThumbnail(params: Telegram.Params.SetStickerSetThumbnail): ITelegramResponse<true> {
    if (typeof params.thumbnail === 'object') {
      return this._sendForm('setStickerSetThumbnail', params, 'thumbnail');
    }
    return this._call('setStickerSetThumbnail', params);
  }

  setStickerSetTitle(params: Telegram.Params.SetStickerSetTitle): ITelegramResponse<true> {
    return this._call('setStickerSetTitle', params);
  }

  setWebhook(params: Telegram.Params.SetWebhook): ITelegramResponse<true> {
    if (typeof params.certificate === 'object') {
      return this._sendForm('setWebhook', params, 'certificate');
    }
    return this._call('setWebhook', params);
  }

  stopMessageLiveLocation(params: Telegram.Params.StopMessageLiveLocation): ITelegramResponse<Telegram.Message | true> {
    return this._call('stopMessageLiveLocation', params);
  }

  stopPoll(params: Telegram.Params.StopPoll): ITelegramResponse<Telegram.Poll> {
    return this._call('stopPoll', params);
  }

  unbanChatMember(params: Telegram.Params.UnbanChatMember): ITelegramResponse<true> {
    return this._call('unbanChatMember', params);
  }

  unbanChatSenderChat(params: Telegram.Params.UnbanChatSenderChat): ITelegramResponse<true> {
    return this._call('unbanChatSenderChat', params);
  }

  unhideGeneralForumTopic(params: Telegram.Params.UnhideGeneralForumTopic): ITelegramResponse<true> {
    return this._call('unhideGeneralForumTopic', params);
  }

  unpinAllGeneralForumTopicMessages(params: Telegram.Params.UnpinAllGeneralForumTopicMessages): ITelegramResponse<true> {
    return this._call('unpinAllGeneralForumTopicMessages', params);
  }

  unpinAllChatMessages(params: Telegram.Params.UnpinAllChatMessages): ITelegramResponse<true> {
    return this._call('unpinAllChatMessages', params);
  }

  unpinAllForumTopicMessages(params: Telegram.Params.UnpinAllForumTopicMessages): ITelegramResponse<true> {
    return this._call('unpinAllForumTopicMessages', params);
  }

  unpinChatMessage(params: Telegram.Params.UnpinChatMessage): ITelegramResponse<true> {
    return this._call('unpinChatMessage', params);
  }

  uploadStickerFile(params: Telegram.Params.UploadStickerFile): ITelegramResponse<Telegram.File> {
    return this._call('uploadStickerFile', params);
  }

  private _call<
    ResponseT extends {},
    K extends keyof Telegram.Bot,
    ParamsT extends Parameters<Telegram.Bot[K]>[0], // all methods have a single object parameter
  >(
    endpoint: K,
    params?: ParamsT,
  ): ITelegramResponse<ResponseT> {
    const options: RequestOptions = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${this.botId}/${endpoint}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return new Promise<ITelegramResponseData<ResponseT>>((resolve, reject) => {
      const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        let fullData = '';
        res
          .on('data', (chunk: any) => {
            fullData += chunk;
          })
          .on('end', (a) => {
            try {
              let result = JSON.parse(fullData);

              if (!!result && !result.ok) {
                return reject({
                  ok: result.ok,
                  code: result.error_code,
                  description: result.description
                })
              }
              return resolve(result);
            } catch (e) {
              console.error(e);
              return reject(e);
            }
          });
      });

      req.on('error', (e) => {
        return reject(e);
      });

      try {
        if (params != null) {
          req.write(JSON.stringify(params));
        }
      } catch (e) {
        return reject(e);
      }

      req.end();
    });
  }

  private _sendForm<
    ResponseT extends {},
    K extends keyof Telegram.Bot,
    ParamsT extends Parameters<Telegram.Bot[K]>[0], // all methods have a single object parameter
  >(
    endpoint: K,
    params: ParamsT,
    fileField: keyof ParamsT,
  ): ITelegramResponse<ResponseT> {
    if (params == null)  {
      throw new Error('Unexpected error: params must exist');
    }

    return new Promise((resolve, reject) => {
      // TODO: drop request and use not deprecated lib
      request({
        url: `https://api.telegram.org/bot${this.botId}/${endpoint}`,
        method: 'POST',
        formData: {
          ...params,
          // TODO: not best solution
          [fileField]: this._formatFile(params[fileField as string]),
        },
      }, (err, resp, body) => {
        let parsedBody;

        try {
          parsedBody = JSON.parse(body);
        } catch (e) {
          console.error(e);
          return reject(e);
        }

        if (err || !parsedBody.ok) {
          console.error(err || parsedBody)
          return reject(err || parsedBody);
        }

        return resolve(parsedBody);
      });
    });
  }

  // make file format suitable for request lib
  private _formatFile(input: Telegram.InputFile): FormattedInputFile {
    return {
      value: input.file,
      options: {
        filename: input.name ?? 'victory',
      }
    }
  }
}

type FormattedInputFile = Readonly<{
  value: Buffer;
  options: Readonly<{
    filename: string;
  }>;
}>;
