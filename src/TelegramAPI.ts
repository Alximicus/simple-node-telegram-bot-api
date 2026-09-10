import https = require('node:https');
import type { RequestOptions } from 'node:https';

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

  answerChatJoinRequestQuery(params: Telegram.Params.AnswerChatJoinRequestQuery): ITelegramResponse<true> {
    return this._call('answerChatJoinRequestQuery', params);
  }

  answerGuestQuery(params: Telegram.Params.AnswerGuestQuery): ITelegramResponse<Telegram.SentGuestMessage> {
    return this._call('answerGuestQuery', params);
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

  approveSuggestedPost(params: Telegram.Params.ApproveSuggestedPost): ITelegramResponse<true> {
    return this._call('approveSuggestedPost', params);
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

  convertGiftToStars(params: Telegram.Params.ConvertGiftToStars): ITelegramResponse<true> {
    return this._call('convertGiftToStars', params);
  }

  copyMessage(params: Telegram.Params.CopyMessage): ITelegramResponse<Telegram.MessageId> {
    return this._call('copyMessage', params);
  }

  copyMessages(params: Telegram.Params.CopyMessages): ITelegramResponse<ReadonlyArray<Telegram.MessageId>> {
    return this._call('copyMessages', params);
  }

  createChatInviteLink(params: Telegram.Params.CreateChatInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('createChatInviteLink', params);
  }

  createChatSubscriptionInviteLink(params: Telegram.Params.CreateChatSubscriptionInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('createChatSubscriptionInviteLink', params);
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

  declineSuggestedPost(params: Telegram.Params.DeclineSuggestedPost): ITelegramResponse<true> {
    return this._call('declineSuggestedPost', params);
  }

  deleteAllMessageReactions(params: Telegram.Params.DeleteAllMessageReactions): ITelegramResponse<true> {
    return this._call('deleteAllMessageReactions', params);
  }

  deleteBusinessMessages(params: Telegram.Params.DeleteBusinessMessages): ITelegramResponse<true> {
    return this._call('deleteBusinessMessages', params);
  }

  deleteChatPhoto(params: Telegram.Params.DeleteChatPhoto): ITelegramResponse<true> {
    return this._call('deleteChatPhoto', params);
  }

  deleteChatStickerSet(params: Telegram.Params.DeleteChatStickerSet): ITelegramResponse<true> {
    return this._call('deleteChatStickerSet', params);
  }

  deleteEphemeralMessage(params: Telegram.Params.DeleteEphemeralMessage): ITelegramResponse<true> {
    return this._call('deleteEphemeralMessage', params);
  }

  deleteForumTopic(params: Telegram.Params.DeleteForumTopic): ITelegramResponse<true> {
    return this._call('deleteForumTopic', params);
  }

  deleteMessage(params: Telegram.Params.DeleteMessage): ITelegramResponse<true> {
    return this._call('deleteMessage', params);
  }

  deleteMessageReaction(params: Telegram.Params.DeleteMessageReaction): ITelegramResponse<true> {
    return this._call('deleteMessageReaction', params);
  }

  deleteMessages(params: Telegram.Params.DeleteMessages): ITelegramResponse<true> {
    return this._call('deleteMessages', params);
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

  deleteStory(params: Telegram.Params.DeleteStory): ITelegramResponse<true> {
    return this._call('deleteStory', params);
  }

  deleteWebhook(params: Telegram.Params.DeleteWebhook): ITelegramResponse<true> {
    return this._call('deleteWebhook', params);
  }

  editChatInviteLink(params: Telegram.Params.EditChatInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('editChatInviteLink', params);
  }

  editChatSubscriptionInviteLink(params: Telegram.Params.EditChatSubscriptionInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('editChatSubscriptionInviteLink', params);
  }

  editEphemeralMessageCaption(params: Telegram.Params.EditEphemeralMessageCaption): ITelegramResponse<true> {
    return this._call('editEphemeralMessageCaption', params);
  }

  editEphemeralMessageMedia(params: Telegram.Params.EditEphemeralMessageMedia): ITelegramResponse<true> {
    return this._call('editEphemeralMessageMedia', params);
  }

  editEphemeralMessageReplyMarkup(params: Telegram.Params.EditEphemeralMessageReplyMarkup): ITelegramResponse<true> {
    return this._call('editEphemeralMessageReplyMarkup', params);
  }

  editEphemeralMessageText(params: Telegram.Params.EditEphemeralMessageText): ITelegramResponse<true> {
    return this._call('editEphemeralMessageText', params);
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

  editMessageChecklist(params: Telegram.Params.EditMessageChecklist): ITelegramResponse<Telegram.Message> {
    return this._call('editMessageChecklist', params);
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

  editStory(params: Telegram.Params.EditStory): ITelegramResponse<Telegram.Story> {
    return this._call('editStory', params);
  }

  editUserStarSubscription(params: Telegram.Params.EditUserStarSubscription): ITelegramResponse<true> {
    return this._call('editUserStarSubscription', params);
  }

  exportChatInviteLink(params: Telegram.Params.ExportChatInviteLink): ITelegramResponse<string> {
    return this._call('exportChatInviteLink', params);
  }

  forwardMessage(params: Telegram.Params.ForwardMessage): ITelegramResponse<Telegram.Message> {
    return this._call('forwardMessage', params);
  }

  forwardMessages(params: Telegram.Params.ForwardMessages): ITelegramResponse<ReadonlyArray<Telegram.MessageId>> {
    return this._call('forwardMessages', params);
  }

  getAvailableGifts(): ITelegramResponse<Telegram.Gifts> {
    return this._call('getAvailableGifts');
  }

  getBusinessAccountGifts(params: Telegram.Params.GetBusinessAccountGifts): ITelegramResponse<Telegram.OwnedGifts> {
    return this._call('getBusinessAccountGifts', params);
  }

  getBusinessAccountStarBalance(params: Telegram.Params.GetBusinessAccountStarBalance): ITelegramResponse<Telegram.StarAmount> {
    return this._call('getBusinessAccountStarBalance', params);
  }

  getBusinessConnection(params: Telegram.Params.GetBusinessConnection): ITelegramResponse<Telegram.BusinessConnection> {
    return this._call('getBusinessConnection', params);
  }

  getChat(params: Telegram.Params.GetChat): ITelegramResponse<Telegram.ChatFullInfo> {
    return this._call('getChat', params);
  }

  getChatAdministrators(params: Telegram.Params.GetChatAdministrators): ITelegramResponse<ReadonlyArray<Telegram.ChatMember>> {
    return this._call('getChatAdministrators', params);
  }

  getChatGifts(params: Telegram.Params.GetChatGifts): ITelegramResponse<Telegram.OwnedGifts> {
    return this._call('getChatGifts', params);
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

  getCustomEmojiStickers(params: Telegram.Params.GetCustomEmojiStickers): ITelegramResponse<ReadonlyArray<Telegram.Sticker>> {
    return this._call('getCustomEmojiStickers', params);
  }

  getFile(params: Telegram.Params.GetFile): ITelegramResponse<Telegram.File> {
    return this._call('getFile', params);
  }

  getForumTopicIconStickers(): ITelegramResponse<ReadonlyArray<Telegram.Sticker>> {
    return this._call('getForumTopicIconStickers');
  }

  getGameHighScores(params: Telegram.Params.GetGameHighScores): ITelegramResponse<ReadonlyArray<Telegram.GameHighScore>> {
    return this._call('getGameHighScores', params);
  }

  getManagedBotAccessSettings(params: Telegram.Params.GetManagedBotAccessSettings): ITelegramResponse<Telegram.BotAccessSettings> {
    return this._call('getManagedBotAccessSettings', params);
  }

  getManagedBotToken(params: Telegram.Params.GetManagedBotToken): ITelegramResponse<string> {
    return this._call('getManagedBotToken', params);
  }

  getMe(): ITelegramResponse<Telegram.User> {
    return this._call('getMe');
  }

  getMyCommands(params: Telegram.Params.GetMyCommands): ITelegramResponse<ReadonlyArray<Telegram.BotCommand>> {
    return this._call('getMyCommands', params);
  }

  getMyDefaultAdministratorRights(params: Telegram.Params.GetMyDefaultAdministratorRights): ITelegramResponse<Telegram.ChatAdministratorRights> {
    return this._call('getMyDefaultAdministratorRights', params);
  }

  getMyDescription(params: Telegram.Params.GetMyDescription): ITelegramResponse<Telegram.BotDescription> {
    return this._call('getMyDescription', params);
  }

  getMyName(params: Telegram.Params.GetMyName): ITelegramResponse<Telegram.BotName> {
    return this._call('getMyName', params);
  }

  getMyShortDescription(params: Telegram.Params.GetMyShortDescription): ITelegramResponse<Telegram.BotShortDescription> {
    return this._call('getMyShortDescription', params);
  }

  getMyStarBalance(): ITelegramResponse<Telegram.StarAmount> {
    return this._call('getMyStarBalance');
  }

  getStarTransactions(params: Telegram.Params.GetStarTransactions): ITelegramResponse<Telegram.StarTransactions> {
    return this._call('getStarTransactions', params);
  }

  getStickerSet(params: Telegram.Params.GetStickerSet): ITelegramResponse<Telegram.StickerSet> {
    return this._call('getStickerSet', params);
  }

  getUpdates(params: Telegram.Params.GetUpdates): ITelegramResponse<ReadonlyArray<Telegram.Update>> {
    return this._call('getUpdates', params);
  }

  getUserChatBoosts(params: Telegram.Params.GetUserChatBoosts): ITelegramResponse<Telegram.UserChatBoosts> {
    return this._call('getUserChatBoosts', params);
  }

  getUserGifts(params: Telegram.Params.GetUserGifts): ITelegramResponse<Telegram.OwnedGifts> {
    return this._call('getUserGifts', params);
  }

  getUserPersonalChatMessages(params: Telegram.Params.GetUserPersonalChatMessages): ITelegramResponse<ReadonlyArray<Telegram.Message>> {
    return this._call('getUserPersonalChatMessages', params);
  }

  getUserProfileAudios(params: Telegram.Params.GetUserProfileAudios): ITelegramResponse<Telegram.UserProfileAudios> {
    return this._call('getUserProfileAudios', params);
  }

  getUserProfilePhotos(params: Telegram.Params.GetUserProfilePhotos): ITelegramResponse<Telegram.UserProfilePhotos> {
    return this._call('getUserProfilePhotos', params);
  }

  getWebhookInfo(): ITelegramResponse<Telegram.WebhookInfo> {
    return this._call('getWebhookInfo');
  }

  giftPremiumSubscription(params: Telegram.Params.GiftPremiumSubscription): ITelegramResponse<true> {
    return this._call('giftPremiumSubscription', params);
  }

  hideGeneralForumTopic(params: Telegram.Params.HideGeneralForumTopic): ITelegramResponse<true> {
    return this._call('hideGeneralForumTopic', params);
  }

  leaveChat(params: Telegram.Params.LeaveChat): ITelegramResponse<true> {
    return this._call('leaveChat', params);
  }

  logOut(): ITelegramResponse<true> {
    return this._call('logOut');
  }

  pinChatMessage(params: Telegram.Params.PinChatMessage): ITelegramResponse<true> {
    return this._call('pinChatMessage', params);
  }

  postStory(params: Telegram.Params.PostStory): ITelegramResponse<Telegram.Story> {
    return this._call('postStory', params);
  }

  promoteChatMember(params: Telegram.Params.PromoteChatMember): ITelegramResponse<true> {
    return this._call('promoteChatMember', params);
  }

  readBusinessMessage(params: Telegram.Params.ReadBusinessMessage): ITelegramResponse<true> {
    return this._call('readBusinessMessage', params);
  }

  refundStarPayment(params: Telegram.Params.RefundStarPayment): ITelegramResponse<true> {
    return this._call('refundStarPayment', params);
  }

  removeBusinessAccountProfilePhoto(params: Telegram.Params.RemoveBusinessAccountProfilePhoto): ITelegramResponse<true> {
    return this._call('removeBusinessAccountProfilePhoto', params);
  }

  removeChatVerification(params: Telegram.Params.RemoveChatVerification): ITelegramResponse<true> {
    return this._call('removeChatVerification', params);
  }

  removeMyProfilePhoto(): ITelegramResponse<true> {
    return this._call('removeMyProfilePhoto');
  }

  removeUserVerification(params: Telegram.Params.RemoveUserVerification): ITelegramResponse<true> {
    return this._call('removeUserVerification', params);
  }

  reopenForumTopic(params: Telegram.Params.ReopenForumTopic): ITelegramResponse<true> {
    return this._call('reopenForumTopic', params);
  }

  reopenGeneralForumTopic(params: Telegram.Params.ReopenGeneralForumTopic): ITelegramResponse<true> {
    return this._call('reopenGeneralForumTopic', params);
  }

  replaceManagedBotToken(params: Telegram.Params.ReplaceManagedBotToken): ITelegramResponse<string> {
    return this._call('replaceManagedBotToken', params);
  }

  replaceStickerInSet(params: Telegram.Params.ReplaceStickerInSet): ITelegramResponse<true> {
    return this._call('replaceStickerInSet', params);
  }

  repostStory(params: Telegram.Params.RepostStory): ITelegramResponse<Telegram.Story> {
    return this._call('repostStory', params);
  }

  restrictChatMember(params: Telegram.Params.RestrictChatMember): ITelegramResponse<true> {
    return this._call('restrictChatMember', params);
  }

  revokeChatInviteLink(params: Telegram.Params.RevokeChatInviteLink): ITelegramResponse<Telegram.ChatInviteLink> {
    return this._call('revokeChatInviteLink', params);
  }

  savePreparedInlineMessage(params: Telegram.Params.SavePreparedInlineMessage): ITelegramResponse<Telegram.PreparedInlineMessage> {
    return this._call('savePreparedInlineMessage', params);
  }

  savePreparedKeyboardButton(params: Telegram.Params.SavePreparedKeyboardButton): ITelegramResponse<Telegram.PreparedKeyboardButton> {
    return this._call('savePreparedKeyboardButton', params);
  }

  sendAnimation(params: Telegram.Params.SendAnimation): ITelegramResponse<Telegram.Message> {
    if (params.animation != null && typeof params.animation === 'object') {
      return this._sendForm('sendAnimation', params, 'animation');
    }
    if (params.thumbnail != null && typeof params.thumbnail === 'object') {
      return this._sendForm('sendAnimation', params, 'thumbnail');
    }
    return this._call('sendAnimation', params);
  }

  sendAudio(params: Telegram.Params.SendAudio): ITelegramResponse<Telegram.Message> {
    if (params.audio != null && typeof params.audio === 'object') {
      return this._sendForm('sendAudio', params, 'audio');
    }
    if (params.thumbnail != null && typeof params.thumbnail === 'object') {
      return this._sendForm('sendAudio', params, 'thumbnail');
    }
    return this._call('sendAudio', params);
  }

  sendChatAction(params: Telegram.Params.SendChatAction): ITelegramResponse<true> {
    return this._call('sendChatAction', params);
  }

  sendChatJoinRequestWebApp(params: Telegram.Params.SendChatJoinRequestWebApp): ITelegramResponse<true> {
    return this._call('sendChatJoinRequestWebApp', params);
  }

  sendChecklist(params: Telegram.Params.SendChecklist): ITelegramResponse<Telegram.Message> {
    return this._call('sendChecklist', params);
  }

  sendContact(params: Telegram.Params.SendContact): ITelegramResponse<Telegram.Message> {
    return this._call('sendContact', params);
  }

  sendDice(params: Telegram.Params.SendDice): ITelegramResponse<Telegram.Message> {
    return this._call('sendDice', params);
  }

  sendDocument(params: Telegram.Params.SendDocument): ITelegramResponse<Telegram.Message> {
    if (params.document != null && typeof params.document === 'object') {
      return this._sendForm('sendDocument', params, 'document');
    }
    if (params.thumbnail != null && typeof params.thumbnail === 'object') {
      return this._sendForm('sendDocument', params, 'thumbnail');
    }
    return this._call('sendDocument', params);
  }

  sendGame(params: Telegram.Params.SendGame): ITelegramResponse<Telegram.Message> {
    return this._call('sendGame', params);
  }

  sendGift(params: Telegram.Params.SendGift): ITelegramResponse<true> {
    return this._call('sendGift', params);
  }

  sendInvoice(params: Telegram.Params.SendInvoice): ITelegramResponse<Telegram.Message> {
    return this._call('sendInvoice', params);
  }

  sendLivePhoto(params: Telegram.Params.SendLivePhoto): ITelegramResponse<Telegram.Message> {
    if (params.live_photo != null && typeof params.live_photo === 'object') {
      return this._sendForm('sendLivePhoto', params, 'live_photo');
    }
    if (params.photo != null && typeof params.photo === 'object') {
      return this._sendForm('sendLivePhoto', params, 'photo');
    }
    return this._call('sendLivePhoto', params);
  }

  sendLocation(params: Telegram.Params.SendLocation): ITelegramResponse<Telegram.Message> {
    return this._call('sendLocation', params);
  }

  sendMediaGroup(params: Telegram.Params.SendMediaGroup): ITelegramResponse<ReadonlyArray<Telegram.Message>> {
    return this._call('sendMediaGroup', params);
  }

  sendMessage(params: Telegram.Params.SendMessage): ITelegramResponse<Telegram.Message> {
    return this._call('sendMessage', params);
  }

  sendMessageDraft(params: Telegram.Params.SendMessageDraft): ITelegramResponse<true> {
    return this._call('sendMessageDraft', params);
  }

  sendPaidMedia(params: Telegram.Params.SendPaidMedia): ITelegramResponse<Telegram.Message> {
    return this._call('sendPaidMedia', params);
  }

  sendPhoto(params: Telegram.Params.SendPhoto): ITelegramResponse<Telegram.Message> {
    if (params.photo != null && typeof params.photo === 'object') {
      return this._sendForm('sendPhoto', params, 'photo');
    }
    return this._call('sendPhoto', params);
  }

  sendPoll(params: Telegram.Params.SendPoll): ITelegramResponse<Telegram.Message> {
    return this._call('sendPoll', params);
  }

  sendRichMessage(params: Telegram.Params.SendRichMessage): ITelegramResponse<Telegram.Message> {
    return this._call('sendRichMessage', params);
  }

  sendRichMessageDraft(params: Telegram.Params.SendRichMessageDraft): ITelegramResponse<true> {
    return this._call('sendRichMessageDraft', params);
  }

  sendSticker(params: Telegram.Params.SendSticker): ITelegramResponse<Telegram.Message> {
    if (params.sticker != null && typeof params.sticker === 'object') {
      return this._sendForm('sendSticker', params, 'sticker');
    }
    return this._call('sendSticker', params);
  }

  sendVenue(params: Telegram.Params.SendVenue): ITelegramResponse<Telegram.Message> {
    return this._call('sendVenue', params);
  }

  sendVideo(params: Telegram.Params.SendVideo): ITelegramResponse<Telegram.Message> {
    if (params.video != null && typeof params.video === 'object') {
      return this._sendForm('sendVideo', params, 'video');
    }
    if (params.thumbnail != null && typeof params.thumbnail === 'object') {
      return this._sendForm('sendVideo', params, 'thumbnail');
    }
    if (params.cover != null && typeof params.cover === 'object') {
      return this._sendForm('sendVideo', params, 'cover');
    }
    return this._call('sendVideo', params);
  }

  sendVideoNote(params: Telegram.Params.SendVideoNote): ITelegramResponse<Telegram.Message> {
    if (params.video_note != null && typeof params.video_note === 'object') {
      return this._sendForm('sendVideoNote', params, 'video_note');
    }
    if (params.thumbnail != null && typeof params.thumbnail === 'object') {
      return this._sendForm('sendVideoNote', params, 'thumbnail');
    }
    return this._call('sendVideoNote', params);
  }

  sendVoice(params: Telegram.Params.SendVoice): ITelegramResponse<Telegram.Message> {
    if (params.voice != null && typeof params.voice === 'object') {
      return this._sendForm('sendVoice', params, 'voice');
    }
    return this._call('sendVoice', params);
  }

  setBusinessAccountBio(params: Telegram.Params.SetBusinessAccountBio): ITelegramResponse<true> {
    return this._call('setBusinessAccountBio', params);
  }

  setBusinessAccountGiftSettings(params: Telegram.Params.SetBusinessAccountGiftSettings): ITelegramResponse<true> {
    return this._call('setBusinessAccountGiftSettings', params);
  }

  setBusinessAccountName(params: Telegram.Params.SetBusinessAccountName): ITelegramResponse<true> {
    return this._call('setBusinessAccountName', params);
  }

  setBusinessAccountProfilePhoto(params: Telegram.Params.SetBusinessAccountProfilePhoto): ITelegramResponse<true> {
    return this._call('setBusinessAccountProfilePhoto', params);
  }

  setBusinessAccountUsername(params: Telegram.Params.SetBusinessAccountUsername): ITelegramResponse<true> {
    return this._call('setBusinessAccountUsername', params);
  }

  setChatAdministratorCustomTitle(params: Telegram.Params.SetChatAdministratorCustomTitle): ITelegramResponse<true> {
    return this._call('setChatAdministratorCustomTitle', params);
  }

  setChatDescription(params: Telegram.Params.SetChatDescription): ITelegramResponse<true> {
    return this._call('setChatDescription', params);
  }

  setChatMemberTag(params: Telegram.Params.SetChatMemberTag): ITelegramResponse<true> {
    return this._call('setChatMemberTag', params);
  }

  setChatMenuButton(params: Telegram.Params.SetChatMenuButton): ITelegramResponse<true> {
    return this._call('setChatMenuButton', params);
  }

  setChatPermissions(params: Telegram.Params.SetChatPermissions): ITelegramResponse<true> {
    return this._call('setChatPermissions', params);
  }

  setChatPhoto(params: Telegram.Params.SetChatPhoto): ITelegramResponse<true> {
    if (params.photo != null && typeof params.photo === 'object') {
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

  setManagedBotAccessSettings(params: Telegram.Params.SetManagedBotAccessSettings): ITelegramResponse<true> {
    return this._call('setManagedBotAccessSettings', params);
  }

  setMessageReaction(params: Telegram.Params.SetMessageReaction): ITelegramResponse<true> {
    return this._call('setMessageReaction', params);
  }

  setMyCommands(params: Telegram.Params.SetMyCommands): ITelegramResponse<true> {
    return this._call('setMyCommands', params);
  }

  setMyDefaultAdministratorRights(params: Telegram.Params.SetMyDefaultAdministratorRights): ITelegramResponse<true> {
    return this._call('setMyDefaultAdministratorRights', params);
  }

  setMyDescription(params: Telegram.Params.SetMyDescription): ITelegramResponse<true> {
    return this._call('setMyDescription', params);
  }

  setMyName(params: Telegram.Params.SetMyName): ITelegramResponse<true> {
    return this._call('setMyName', params);
  }

  setMyProfilePhoto(params: Telegram.Params.SetMyProfilePhoto): ITelegramResponse<true> {
    return this._call('setMyProfilePhoto', params);
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
    if (params.thumbnail != null && typeof params.thumbnail === 'object') {
      return this._sendForm('setStickerSetThumbnail', params, 'thumbnail');
    }
    return this._call('setStickerSetThumbnail', params);
  }

  setStickerSetTitle(params: Telegram.Params.SetStickerSetTitle): ITelegramResponse<true> {
    return this._call('setStickerSetTitle', params);
  }

  setUserEmojiStatus(params: Telegram.Params.SetUserEmojiStatus): ITelegramResponse<true> {
    return this._call('setUserEmojiStatus', params);
  }

  setWebhook(params: Telegram.Params.SetWebhook): ITelegramResponse<true> {
    if (params.certificate != null && typeof params.certificate === 'object') {
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

  transferBusinessAccountStars(params: Telegram.Params.TransferBusinessAccountStars): ITelegramResponse<true> {
    return this._call('transferBusinessAccountStars', params);
  }

  transferGift(params: Telegram.Params.TransferGift): ITelegramResponse<true> {
    return this._call('transferGift', params);
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

  unpinAllChatMessages(params: Telegram.Params.UnpinAllChatMessages): ITelegramResponse<true> {
    return this._call('unpinAllChatMessages', params);
  }

  unpinAllForumTopicMessages(params: Telegram.Params.UnpinAllForumTopicMessages): ITelegramResponse<true> {
    return this._call('unpinAllForumTopicMessages', params);
  }

  unpinAllGeneralForumTopicMessages(params: Telegram.Params.UnpinAllGeneralForumTopicMessages): ITelegramResponse<true> {
    return this._call('unpinAllGeneralForumTopicMessages', params);
  }

  unpinChatMessage(params: Telegram.Params.UnpinChatMessage): ITelegramResponse<true> {
    return this._call('unpinChatMessage', params);
  }

  upgradeGift(params: Telegram.Params.UpgradeGift): ITelegramResponse<true> {
    return this._call('upgradeGift', params);
  }

  uploadStickerFile(params: Telegram.Params.UploadStickerFile): ITelegramResponse<Telegram.File> {
    if (params.sticker != null && typeof params.sticker === 'object') {
      return this._sendForm('uploadStickerFile', params, 'sticker');
    }
    return this._call('uploadStickerFile', params);
  }

  verifyChat(params: Telegram.Params.VerifyChat): ITelegramResponse<true> {
    return this._call('verifyChat', params);
  }

  verifyUser(params: Telegram.Params.VerifyUser): ITelegramResponse<true> {
    return this._call('verifyUser', params);
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

  private async _sendForm<
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

    const form = new FormData();
    for (const [key, value] of Object.entries(params)) {
      if (value == null) continue;
      if (key === fileField) {
        const input = value as Telegram.InputFile;
        form.append(key, new Blob([new Uint8Array(input.file)]), input.name ?? 'victory');
      } else {
        form.append(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
      }
    }

    // Let Node serialize and escape multipart fields, including the boundary.
    const encoded = new Response(form);
    const body = Buffer.from(await encoded.arrayBuffer());
    return new Promise((resolve, reject) => {
      const req = https.request({
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${this.botId}/${endpoint}`,
        method: 'POST',
        headers: {
          'Content-Type': encoded.headers.get('content-type')!,
          'Content-Length': body.length,
        },
      }, (res) => {
        res.setEncoding('utf8');
        let data = '';
        res.on('data', (chunk: string) => { data += chunk; });
        res.on('error', reject);
        res.on('aborted', () => reject(new Error('Response aborted')));
        res.on('end', () => {
          try {
            const parsedBody = JSON.parse(data);
            // Preserve the existing multipart API error shape.
            if (!!parsedBody && !parsedBody.ok) {
              return reject({
                ok: parsedBody.ok,
                code: parsedBody.error_code,
                description: parsedBody.description,
              });
            }
            resolve(parsedBody);
          } catch (error) {
            reject(error);
          }
        });
      });
      req.on('error', reject);
      req.end(body);
    });
  }
}
