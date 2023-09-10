/**
 Bot API 6.8
 August 18, 2023
 */

export namespace Telegram {

  /** Getting updates */

  /**
   * This object represents an incoming update.At most one of the optional parameters can be present in any given update.
   */
  export type Update = Readonly<{
    update_id: number; /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    message?: Message; /** Optional. New incoming message of any kind - text, photo, sticker, etc. */
    edited_message?: Message; /** Optional. New version of a message that is known to the bot and was edited */
    channel_post?: Message; /** Optional. New incoming channel post of any kind - text, photo, sticker, etc. */
    edited_channel_post?: Message; /** Optional. New version of a channel post that is known to the bot and was edited */
    inline_query?: InlineQuery; /** Optional. New incoming inline query */
    chosen_inline_result?: ChosenInlineResult; /** Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
    callback_query?: CallbackQuery; /** Optional. New incoming callback query */
    shipping_query?: ShippingQuery; /** Optional. New incoming shipping query. Only for invoices with flexible price */
    pre_checkout_query?: PreCheckoutQuery; /** Optional. New incoming pre-checkout query. Contains full information about checkout */
    poll?: Poll; /** Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
    poll_answer?: PollAnswer; /** Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
    my_chat_member?: ChatMemberUpdated; /** Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
    chat_member?: ChatMemberUpdated; /** Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates. */
    chat_join_request?: ChatJoinRequest; /** Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
  }>;

  /**
   * Describes the current status of a webhook.
   */
  export type WebhookInfo = Readonly<{
    url: string; /** Webhook URL, may be empty if webhook is not set up */
    has_custom_certificate: boolean; /** True, if a custom certificate was provided for webhook certificate checks */
    pending_update_count: number; /** Number of updates awaiting delivery */
    ip_address?: string; /** Optional. Currently used webhook IP address */
    last_error_date?: number; /** Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: string; /** Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_synchronization_error_date?: number; /** Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
    max_connections?: number; /** Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    allowed_updates?: ReadonlyArray<string>; /** Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
  }>;




  /** Available types */

  /**
   * This object represents a Telegram user or bot.
   */
  export type User = Readonly<{
    id: number; /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    is_bot: boolean; /** True, if this user is a bot */
    first_name: string; /** User's or bot's first name */
    last_name?: string; /** Optional. User's or bot's last name */
    username?: string; /** Optional. User's or bot's username */
    language_code?: string; /** Optional. IETF language tag of the user's language */
    is_premium?: true; /** Optional. True, if this user is a Telegram Premium user */
    added_to_attachment_menu?: true; /** Optional. True, if this user added the bot to the attachment menu */
    can_join_groups?: boolean; /** Optional. True, if the bot can be invited to groups. Returned only in getMe. */
    can_read_all_group_messages?: boolean; /** Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. */
    supports_inline_queries?: boolean; /** Optional. True, if the bot supports inline queries. Returned only in getMe. */
  }>;

  /**
   * This object represents a chat.
   */
  export type Chat = Readonly<{
    id: number; /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    type: string; /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    title?: string; /** Optional. Title, for supergroups, channels and group chats */
    username?: string; /** Optional. Username, for private chats, supergroups and channels if available */
    first_name?: string; /** Optional. First name of the other party in a private chat */
    last_name?: string; /** Optional. Last name of the other party in a private chat */
    is_forum?: true; /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
    photo?: ChatPhoto; /** Optional. Chat photo. Returned only in getChat. */
    active_usernames?: ReadonlyArray<string>; /** Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat. */
    emoji_status_custom_emoji_id?: string; /** Optional. Custom emoji identifier of emoji status of the other party in a private chat. Returned only in getChat. */
    emoji_status_expiration_date?: number; /** Optional. Expiration date of the emoji status of the other party in a private chat in Unix time, if any. Returned only in getChat. */
    bio?: string; /** Optional. Bio of the other party in a private chat. Returned only in getChat. */
    has_private_forwards?: true; /** Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat. */
    has_restricted_voice_and_video_messages?: true; /** Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat. */
    join_to_send_messages?: true; /** Optional. True, if users need to join the supergroup before they can send messages. Returned only in getChat. */
    join_by_request?: true; /** Optional. True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat. */
    description?: string; /** Optional. Description, for groups, supergroups and channel chats. Returned only in getChat. */
    invite_link?: string; /** Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat. */
    pinned_message?: Message; /** Optional. The most recent pinned message (by sending date). Returned only in getChat. */
    permissions?: ChatPermissions; /** Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat. */
    slow_mode_delay?: number; /** Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in seconds. Returned only in getChat. */
    message_auto_delete_time?: number; /** Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat. */
    has_aggressive_anti_spam_enabled?: true; /** Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat. */
    has_hidden_members?: true; /** Optional. True, if non-administrators can only get the list of bots and administrators in the chat. Returned only in getChat. */
    has_protected_content?: true; /** Optional. True, if messages from the chat can't be forwarded to other chats. Returned only in getChat. */
    sticker_set_name?: string; /** Optional. For supergroups, name of group sticker set. Returned only in getChat. */
    can_set_sticker_set?: true; /** Optional. True, if the bot can change the group sticker set. Returned only in getChat. */
    linked_chat_id?: number; /** Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat. */
    location?: ChatLocation; /** Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat. */
  }>;

  /**
   * This object represents a message.
   */
  export type Message = Readonly<{
    message_id: number; /** Unique message identifier inside this chat */
    message_thread_id?: number; /** Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
    from?: User; /** Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    sender_chat?: Chat; /** Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    date: number; /** Date the message was sent in Unix time */
    chat: Chat; /** Conversation the message belongs to */
    forward_from?: User; /** Optional. For forwarded messages, sender of the original message */
    forward_from_chat?: Chat; /** Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
    forward_from_message_id?: number; /** Optional. For messages forwarded from channels, identifier of the original message in the channel */
    forward_signature?: string; /** Optional. For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
    forward_sender_name?: string; /** Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
    forward_date?: number; /** Optional. For forwarded messages, date the original message was sent in Unix time */
    is_topic_message?: true; /** Optional. True, if the message is sent to a forum topic */
    is_automatic_forward?: true; /** Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
    reply_to_message?: Message; /** Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    via_bot?: User; /** Optional. Bot through which the message was sent */
    edit_date?: number; /** Optional. Date the message was last edited in Unix time */
    has_protected_content?: true; /** Optional. True, if the message can't be forwarded */
    media_group_id?: string; /** Optional. The unique identifier of a media message group this message belongs to */
    author_signature?: string; /** Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    text?: string; /** Optional. For text messages, the actual UTF-8 text of the message */
    entities?: ReadonlyArray<MessageEntity>; /** Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    animation?: Animation; /** Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    audio?: Audio; /** Optional. Message is an audio file, information about the file */
    document?: Document; /** Optional. Message is a general file, information about the file */
    photo?: ReadonlyArray<PhotoSize>; /** Optional. Message is a photo, available sizes of the photo */
    sticker?: Sticker; /** Optional. Message is a sticker, information about the sticker */
    story?: Story; /** Optional. Message is a forwarded story */
    video?: Video; /** Optional. Message is a video, information about the video */
    video_note?: VideoNote; /** Optional. Message is a video note, information about the video message */
    voice?: Voice; /** Optional. Message is a voice message, information about the file */
    caption?: string; /** Optional. Caption for the animation, audio, document, photo, video or voice */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    has_media_spoiler?: true; /** Optional. True, if the message media is covered by a spoiler animation */
    contact?: Contact; /** Optional. Message is a shared contact, information about the contact */
    dice?: Dice; /** Optional. Message is a dice with random value */
    game?: Game; /** Optional. Message is a game, information about the game. More about games » */
    poll?: Poll; /** Optional. Message is a native poll, information about the poll */
    venue?: Venue; /** Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    location?: Location; /** Optional. Message is a shared location, information about the location */
    new_chat_members?: ReadonlyArray<User>; /** Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    left_chat_member?: User; /** Optional. A member was removed from the group, information about them (this member may be the bot itself) */
    new_chat_title?: string; /** Optional. A chat title was changed to this value */
    new_chat_photo?: ReadonlyArray<PhotoSize>; /** Optional. A chat photo was change to this value */
    delete_chat_photo?: true; /** Optional. Service message: the chat photo was deleted */
    group_chat_created?: true; /** Optional. Service message: the group has been created */
    supergroup_chat_created?: true; /** Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    channel_chat_created?: true; /** Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged; /** Optional. Service message: auto-delete timer settings changed in the chat */
    migrate_to_chat_id?: number; /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: number; /** Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    pinned_message?: Message; /** Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
    invoice?: Invoice; /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
    successful_payment?: SuccessfulPayment; /** Optional. Message is a service message about a successful payment, information about the payment. More about payments » */
    user_shared?: UserShared; /** Optional. Service message: a user was shared with the bot */
    chat_shared?: ChatShared; /** Optional. Service message: a chat was shared with the bot */
    connected_website?: string; /** Optional. The domain name of the website on which the user has logged in. More about Telegram Login » */
    write_access_allowed?: WriteAccessAllowed; /** Optional. Service message: the user allowed the bot added to the attachment menu to write messages */
    passport_data?: PassportData; /** Optional. Telegram Passport data */
    proximity_alert_triggered?: ProximityAlertTriggered; /** Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    forum_topic_created?: ForumTopicCreated; /** Optional. Service message: forum topic created */
    forum_topic_edited?: ForumTopicEdited; /** Optional. Service message: forum topic edited */
    forum_topic_closed?: ForumTopicClosed; /** Optional. Service message: forum topic closed */
    forum_topic_reopened?: ForumTopicReopened; /** Optional. Service message: forum topic reopened */
    general_forum_topic_hidden?: GeneralForumTopicHidden; /** Optional. Service message: the 'General' forum topic hidden */
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden; /** Optional. Service message: the 'General' forum topic unhidden */
    video_chat_scheduled?: VideoChatScheduled; /** Optional. Service message: video chat scheduled */
    video_chat_started?: VideoChatStarted; /** Optional. Service message: video chat started */
    video_chat_ended?: VideoChatEnded; /** Optional. Service message: video chat ended */
    video_chat_participants_invited?: VideoChatParticipantsInvited; /** Optional. Service message: new participants invited to a video chat */
    web_app_data?: WebAppData; /** Optional. Service message: data sent by a Web App */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
  }>;

  /**
   * This object represents a unique message identifier.
   */
  export type MessageId = Readonly<{
    message_id: number; /** Unique message identifier */
  }>;

  /**
   * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
   */
  export type MessageEntity = Readonly<{
    type: string; /** Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers) */
    offset: number; /** Offset in UTF-16 code units to the start of the entity */
    length: number; /** Length of the entity in UTF-16 code units */
    url?: string; /** Optional. For “text_link” only, URL that will be opened after user taps on the text */
    user?: User; /** Optional. For “text_mention” only, the mentioned user */
    language?: string; /** Optional. For “pre” only, the programming language of the entity text */
    custom_emoji_id?: string; /** Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
  }>;

  /**
   * This object represents one size of a photo or a file / sticker thumbnail.
   */
  export type PhotoSize = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    width: number; /** Photo width */
    height: number; /** Photo height */
    file_size?: number; /** Optional. File size in bytes */
  }>;

  /**
   * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
   */
  export type Animation = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    width: number; /** Video width as defined by sender */
    height: number; /** Video height as defined by sender */
    duration: number; /** Duration of the video in seconds as defined by sender */
    thumbnail?: PhotoSize; /** Optional. Animation thumbnail as defined by sender */
    file_name?: string; /** Optional. Original animation filename as defined by sender */
    mime_type?: string; /** Optional. MIME type of the file as defined by sender */
    file_size?: number; /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  }>;

  /**
   * This object represents an audio file to be treated as music by the Telegram clients.
   */
  export type Audio = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    duration: number; /** Duration of the audio in seconds as defined by sender */
    performer?: string; /** Optional. Performer of the audio as defined by sender or by audio tags */
    title?: string; /** Optional. Title of the audio as defined by sender or by audio tags */
    file_name?: string; /** Optional. Original filename as defined by sender */
    mime_type?: string; /** Optional. MIME type of the file as defined by sender */
    file_size?: number; /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    thumbnail?: PhotoSize; /** Optional. Thumbnail of the album cover to which the music file belongs */
  }>;

  /**
   * This object represents a general file (as opposed to photos, voice messages and audio files).
   */
  export type Document = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    thumbnail?: PhotoSize; /** Optional. Document thumbnail as defined by sender */
    file_name?: string; /** Optional. Original filename as defined by sender */
    mime_type?: string; /** Optional. MIME type of the file as defined by sender */
    file_size?: number; /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  }>;

  /**
   * This object represents a video file.
   */
  export type Video = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    width: number; /** Video width as defined by sender */
    height: number; /** Video height as defined by sender */
    duration: number; /** Duration of the video in seconds as defined by sender */
    thumbnail?: PhotoSize; /** Optional. Video thumbnail */
    file_name?: string; /** Optional. Original filename as defined by sender */
    mime_type?: string; /** Optional. MIME type of the file as defined by sender */
    file_size?: number; /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  }>;

  /**
   * This object represents a video message (available in Telegram apps as of v.4.0).
   */
  export type VideoNote = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    length: number; /** Video width and height (diameter of the video message) as defined by sender */
    duration: number; /** Duration of the video in seconds as defined by sender */
    thumbnail?: PhotoSize; /** Optional. Video thumbnail */
    file_size?: number; /** Optional. File size in bytes */
  }>;

  /**
   * This object represents a voice note.
   */
  export type Voice = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    duration: number; /** Duration of the audio in seconds as defined by sender */
    mime_type?: string; /** Optional. MIME type of the file as defined by sender */
    file_size?: number; /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  }>;

  /**
   * This object represents a phone contact.
   */
  export type Contact = Readonly<{
    phone_number: string; /** Contact's phone number */
    first_name: string; /** Contact's first name */
    last_name?: string; /** Optional. Contact's last name */
    user_id?: number; /** Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    vcard?: string; /** Optional. Additional data about the contact in the form of a vCard */
  }>;

  /**
   * This object represents an animated emoji that displays a random value.
   */
  export type Dice = Readonly<{
    emoji: string; /** Emoji on which the dice throw animation is based */
    value: number; /** Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji */
  }>;

  /**
   * This object contains information about one answer option in a poll.
   */
  export type PollOption = Readonly<{
    text: string; /** Option text, 1-100 characters */
    voter_count: number; /** Number of users that voted for this option */
  }>;

  /**
   * This object represents an answer of a user in a non-anonymous poll.
   */
  export type PollAnswer = Readonly<{
    poll_id: string; /** Unique poll identifier */
    voter_chat?: Chat; /** Optional. The chat that changed the answer to the poll, if the voter is anonymous */
    user?: User; /** Optional. The user that changed the answer to the poll, if the voter isn't anonymous */
    option_ids: ReadonlyArray<number>; /** 0-based identifiers of chosen answer options. May be empty if the vote was retracted. */
  }>;

  /**
   * This object contains information about a poll.
   */
  export type Poll = Readonly<{
    id: string; /** Unique poll identifier */
    question: string; /** Poll question, 1-300 characters */
    options: ReadonlyArray<PollOption>; /** List of poll options */
    total_voter_count: number; /** Total number of users that voted in the poll */
    is_closed: boolean; /** True, if the poll is closed */
    is_anonymous: boolean; /** True, if the poll is anonymous */
    type: string; /** Poll type, currently can be “regular” or “quiz” */
    allows_multiple_answers: boolean; /** True, if the poll allows multiple answers */
    correct_option_id?: number; /** Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    explanation?: string; /** Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation_entities?: ReadonlyArray<MessageEntity>; /** Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    open_period?: number; /** Optional. Amount of time in seconds the poll will be active after creation */
    close_date?: number; /** Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
  }>;

  /**
   * This object represents a point on the map.
   */
  export type Location = Readonly<{
    longitude: number; /** Longitude as defined by sender */
    latitude: number; /** Latitude as defined by sender */
    horizontal_accuracy?: number; /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    live_period?: number; /** Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
    heading?: number; /** Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    proximity_alert_radius?: number; /** Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
  }>;

  /**
   * This object represents a venue.
   */
  export type Venue = Readonly<{
    location: Location; /** Venue location. Can't be a live location */
    title: string; /** Name of the venue */
    address: string; /** Address of the venue */
    foursquare_id?: string; /** Optional. Foursquare identifier of the venue */
    foursquare_type?: string; /** Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    google_place_id?: string; /** Optional. Google Places identifier of the venue */
    google_place_type?: string; /** Optional. Google Places type of the venue. (See supported types.) */
  }>;

  /**
   * Describes data sent from a Web App to the bot.
   */
  export type WebAppData = Readonly<{
    data: string; /** The data. Be aware that a bad client can send arbitrary data in this field. */
    button_text: string; /** Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
  }>;

  /**
   * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
   */
  export type ProximityAlertTriggered = Readonly<{
    traveler: User; /** User that triggered the alert */
    watcher: User; /** User that set the alert */
    distance: number; /** The distance between the users */
  }>;

  /**
   * This object represents a service message about a change in auto-delete timer settings.
   */
  export type MessageAutoDeleteTimerChanged = Readonly<{
    message_auto_delete_time: number; /** New auto-delete time for messages in the chat; in seconds */
  }>;

  /**
   * This object represents a service message about a new forum topic created in the chat.
   */
  export type ForumTopicCreated = Readonly<{
    name: string; /** Name of the topic */
    icon_color: number; /** Color of the topic icon in RGB format */
    icon_custom_emoji_id?: string; /** Optional. Unique identifier of the custom emoji shown as the topic icon */
  }>;

  /**
   * This object represents a service message about an edited forum topic.
   */
  export type ForumTopicEdited = Readonly<{
    name?: string; /** Optional. New name of the topic, if it was edited */
    icon_custom_emoji_id?: string; /** Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
  }>;

  /**
   * This object contains information about the user whose identifier was shared with the bot using a KeyboardButtonRequestUser button.
   */
  export type UserShared = Readonly<{
    request_id: number; /** Identifier of the request */
    user_id: number; /** Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
  }>;

  /**
   * This object contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button.
   */
  export type ChatShared = Readonly<{
    request_id: number; /** Identifier of the request */
    chat_id: number; /** Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
  }>;

  /**
   * This object represents a service message about a user allowing a bot to write messages after adding the bot to the attachment menu or launching a Web App from a link.
   */
  export type WriteAccessAllowed = Readonly<{
    web_app_name?: string; /** Optional. Name of the Web App which was launched from a link */
  }>;

  /**
   * This object represents a service message about a video chat scheduled in the chat.
   */
  export type VideoChatScheduled = Readonly<{
    start_date: number; /** Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
  }>;

  /**
   * This object represents a service message about a video chat ended in the chat.
   */
  export type VideoChatEnded = Readonly<{
    duration: number; /** Video chat duration in seconds */
  }>;

  /**
   * This object represents a service message about new members invited to a video chat.
   */
  export type VideoChatParticipantsInvited = Readonly<{
    users: ReadonlyArray<User>; /** New members that were invited to the video chat */
  }>;

  /**
   * This object represent a user's profile pictures.
   */
  export type UserProfilePhotos = Readonly<{
    total_count: number; /** Total number of profile pictures the target user has */
    photos: ReadonlyArray<ReadonlyArray<PhotoSize>>; /** Requested profile pictures (in up to 4 sizes each) */
  }>;

  /**
   * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
   */
  export type File = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_size?: number; /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_path?: string; /** Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
  }>;

  /**
   * Describes a Web App.
   */
  export type WebAppInfo = Readonly<{
    url: string; /** An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
  }>;

  /**
   * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
   */
  export type ReplyKeyboardMarkup = Readonly<{
    keyboard: ReadonlyArray<ReadonlyArray<KeyboardButton>>; /** Array of button rows, each represented by an Array of KeyboardButton objects */
    is_persistent?: boolean; /** Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
    resize_keyboard?: boolean; /** Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    one_time_keyboard?: boolean; /** Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    input_field_placeholder?: string; /** Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    selective?: boolean; /** Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
  }>;

  /**
   * This object represents one button of the reply keyboard. For simple text buttons, String can be used instead of this object to specify the button text. The optional fields web_app, request_user, request_chat, request_contact, request_location, and request_poll are mutually exclusive.
   */
  export type KeyboardButton = Readonly<{
    text: string; /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    request_user?: KeyboardButtonRequestUser; /** Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a “user_shared” service message. Available in private chats only. */
    request_chat?: KeyboardButtonRequestChat; /** Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only. */
    request_contact?: boolean; /** Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    request_location?: boolean; /** Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    request_poll?: KeyboardButtonPollType; /** Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    web_app?: WebAppInfo; /** Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
  }>;

  /**
   * This object defines the criteria used to request a suitable user. The identifier of the selected user will be shared with the bot when the corresponding button is pressed. More about requesting users »
   */
  export type KeyboardButtonRequestUser = Readonly<{
    request_id: number; /** Signed 32-bit identifier of the request, which will be received back in the UserShared object. Must be unique within the message */
    user_is_bot?: boolean; /** Optional. Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied. */
    user_is_premium?: boolean; /** Optional. Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied. */
  }>;

  /**
   * This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed. More about requesting chats »
   */
  export type KeyboardButtonRequestChat = Readonly<{
    request_id: number; /** Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
    chat_is_channel: boolean; /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
    chat_is_forum?: boolean; /** Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
    chat_has_username?: boolean; /** Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
    chat_is_created?: boolean; /** Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
    user_administrator_rights?: ChatAdministratorRights; /** Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
    bot_administrator_rights?: ChatAdministratorRights; /** Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
    bot_is_member?: boolean; /** Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
  }>;

  /**
   * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
   */
  export type KeyboardButtonPollType = Readonly<{
    type?: string; /** Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
  }>;

  /**
   * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).
   */
  export type ReplyKeyboardRemove = Readonly<{
    remove_keyboard: true; /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    selective?: boolean; /** Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
  }>;

  /**
   * This object represents an inline keyboard that appears right next to the message it belongs to.
   */
  export type InlineKeyboardMarkup = Readonly<{
    inline_keyboard: ReadonlyArray<ReadonlyArray<InlineKeyboardButton>>; /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
  }>;

  /**
   * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
   */
  export type InlineKeyboardButton = Readonly<{
    text: string; /** Label text on the button */
    url?: string; /** Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings. */
    callback_data?: string; /** Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
    web_app?: WebAppInfo; /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. */
    login_url?: LoginUrl; /** Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    switch_inline_query?: string; /** Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. */
    switch_inline_query_current_chat?: string; /** Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. */
    switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat; /** Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field */
    callback_game?: CallbackGame; /** Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row. */
    pay?: boolean; /** Optional. Specify True, to send a Pay button.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
  }>;

  /**
   * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
   */
  export type LoginUrl = Readonly<{
    url: string; /** An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization. */
    forward_text?: string; /** Optional. New text of the button in forwarded messages. */
    bot_username?: string; /** Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    request_write_access?: boolean; /** Optional. Pass True to request the permission for your bot to send messages to the user. */
  }>;

  /**
   * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
   */
  export type SwitchInlineQueryChosenChat = Readonly<{
    query?: string; /** Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted */
    allow_user_chats?: boolean; /** Optional. True, if private chats with users can be chosen */
    allow_bot_chats?: boolean; /** Optional. True, if private chats with bots can be chosen */
    allow_group_chats?: boolean; /** Optional. True, if group and supergroup chats can be chosen */
    allow_channel_chats?: boolean; /** Optional. True, if channel chats can be chosen */
  }>;

  /**
   * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
   */
  export type CallbackQuery = Readonly<{
    id: string; /** Unique identifier for this query */
    from: User; /** Sender */
    message?: Message; /** Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    inline_message_id?: string; /** Optional. Identifier of the message sent via the bot in inline mode, that originated the query. */
    chat_instance: string; /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    data?: string; /** Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
    game_short_name?: string; /** Optional. Short name of a Game to be returned, serves as the unique identifier for the game */
  }>;

  /**
   * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
   */
  export type ForceReply = Readonly<{
    force_reply: true; /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    input_field_placeholder?: string; /** Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    selective?: boolean; /** Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. */
  }>;

  /**
   * This object represents a chat photo.
   */
  export type ChatPhoto = Readonly<{
    small_file_id: string; /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_unique_id: string; /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_id: string; /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_unique_id: string; /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  }>;

  /**
   * Represents an invite link for a chat.
   */
  export type ChatInviteLink = Readonly<{
    invite_link: string; /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
    creator: User; /** Creator of the link */
    creates_join_request: boolean; /** True, if users joining the chat via the link need to be approved by chat administrators */
    is_primary: boolean; /** True, if the link is primary */
    is_revoked: boolean; /** True, if the link is revoked */
    name?: string; /** Optional. Invite link name */
    expire_date?: number; /** Optional. Point in time (Unix timestamp) when the link will expire or has been expired */
    member_limit?: number; /** Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    pending_join_request_count?: number; /** Optional. Number of pending join requests created using this link */
  }>;

  /**
   * Represents the rights of an administrator in a chat.
   */
  export type ChatAdministratorRights = Readonly<{
    is_anonymous: boolean; /** True, if the user's presence in the chat is hidden */
    can_manage_chat: boolean; /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_delete_messages: boolean; /** True, if the administrator can delete messages of other users */
    can_manage_video_chats: boolean; /** True, if the administrator can manage video chats */
    can_restrict_members: boolean; /** True, if the administrator can restrict, ban or unban chat members */
    can_promote_members: boolean; /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_change_info: boolean; /** True, if the user is allowed to change the chat title, photo and other settings */
    can_invite_users: boolean; /** True, if the user is allowed to invite new users to the chat */
    can_post_messages?: boolean; /** Optional. True, if the administrator can post in the channel; channels only */
    can_edit_messages?: boolean; /** Optional. True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_pin_messages?: boolean; /** Optional. True, if the user is allowed to pin messages; groups and supergroups only */
    can_manage_topics?: boolean; /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
  }>;

  /**
   * Represents a chat member that owns the chat and has all administrator privileges.
   */
  export type ChatMemberOwner = Readonly<{
    status: string; /** The member's status in the chat, always “creator” */
    user: User; /** Information about the user */
    is_anonymous: boolean; /** True, if the user's presence in the chat is hidden */
    custom_title?: string; /** Optional. Custom title for this user */
  }>;

  /**
   * Represents a chat member that has some additional privileges.
   */
  export type ChatMemberAdministrator = Readonly<{
    status: string; /** The member's status in the chat, always “administrator” */
    user: User; /** Information about the user */
    can_be_edited: boolean; /** True, if the bot is allowed to edit administrator privileges of that user */
    is_anonymous: boolean; /** True, if the user's presence in the chat is hidden */
    can_manage_chat: boolean; /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_delete_messages: boolean; /** True, if the administrator can delete messages of other users */
    can_manage_video_chats: boolean; /** True, if the administrator can manage video chats */
    can_restrict_members: boolean; /** True, if the administrator can restrict, ban or unban chat members */
    can_promote_members: boolean; /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_change_info: boolean; /** True, if the user is allowed to change the chat title, photo and other settings */
    can_invite_users: boolean; /** True, if the user is allowed to invite new users to the chat */
    can_post_messages?: boolean; /** Optional. True, if the administrator can post in the channel; channels only */
    can_edit_messages?: boolean; /** Optional. True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_pin_messages?: boolean; /** Optional. True, if the user is allowed to pin messages; groups and supergroups only */
    can_manage_topics?: boolean; /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
    custom_title?: string; /** Optional. Custom title for this user */
  }>;

  /**
   * Represents a chat member that has no additional privileges or restrictions.
   */
  export type ChatMemberMember = Readonly<{
    status: string; /** The member's status in the chat, always “member” */
    user: User; /** Information about the user */
  }>;

  /**
   * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
   */
  export type ChatMemberRestricted = Readonly<{
    status: string; /** The member's status in the chat, always “restricted” */
    user: User; /** Information about the user */
    is_member: boolean; /** True, if the user is a member of the chat at the moment of the request */
    can_send_messages: boolean; /** True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
    can_send_audios: boolean; /** True, if the user is allowed to send audios */
    can_send_documents: boolean; /** True, if the user is allowed to send documents */
    can_send_photos: boolean; /** True, if the user is allowed to send photos */
    can_send_videos: boolean; /** True, if the user is allowed to send videos */
    can_send_video_notes: boolean; /** True, if the user is allowed to send video notes */
    can_send_voice_notes: boolean; /** True, if the user is allowed to send voice notes */
    can_send_polls: boolean; /** True, if the user is allowed to send polls */
    can_send_other_messages: boolean; /** True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_add_web_page_previews: boolean; /** True, if the user is allowed to add web page previews to their messages */
    can_change_info: boolean; /** True, if the user is allowed to change the chat title, photo and other settings */
    can_invite_users: boolean; /** True, if the user is allowed to invite new users to the chat */
    can_pin_messages: boolean; /** True, if the user is allowed to pin messages */
    can_manage_topics: boolean; /** True, if the user is allowed to create forum topics */
    until_date: number; /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever */
  }>;

  /**
   * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
   */
  export type ChatMemberLeft = Readonly<{
    status: string; /** The member's status in the chat, always “left” */
    user: User; /** Information about the user */
  }>;

  /**
   * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
   */
  export type ChatMemberBanned = Readonly<{
    status: string; /** The member's status in the chat, always “kicked” */
    user: User; /** Information about the user */
    until_date: number; /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever */
  }>;

  /**
   * This object represents changes in the status of a chat member.
   */
  export type ChatMemberUpdated = Readonly<{
    chat: Chat; /** Chat the user belongs to */
    from: User; /** Performer of the action, which resulted in the change */
    date: number; /** Date the change was done in Unix time */
    old_chat_member: ChatMember; /** Previous information about the chat member */
    new_chat_member: ChatMember; /** New information about the chat member */
    invite_link?: ChatInviteLink; /** Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    via_chat_folder_invite_link?: boolean; /** Optional. True, if the user joined the chat via a chat folder invite link */
  }>;

  /**
   * Represents a join request sent to a chat.
   */
  export type ChatJoinRequest = Readonly<{
    chat: Chat; /** Chat to which the request was sent */
    from: User; /** User that sent the join request */
    user_chat_id: number; /** Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 24 hours to send messages until the join request is processed, assuming no other administrator contacted the user. */
    date: number; /** Date the request was sent in Unix time */
    bio?: string; /** Optional. Bio of the user. */
    invite_link?: ChatInviteLink; /** Optional. Chat invite link that was used by the user to send the join request */
  }>;

  /**
   * Describes actions that a non-administrator user is allowed to take in a chat.
   */
  export type ChatPermissions = Readonly<{
    can_send_messages?: boolean; /** Optional. True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
    can_send_audios?: boolean; /** Optional. True, if the user is allowed to send audios */
    can_send_documents?: boolean; /** Optional. True, if the user is allowed to send documents */
    can_send_photos?: boolean; /** Optional. True, if the user is allowed to send photos */
    can_send_videos?: boolean; /** Optional. True, if the user is allowed to send videos */
    can_send_video_notes?: boolean; /** Optional. True, if the user is allowed to send video notes */
    can_send_voice_notes?: boolean; /** Optional. True, if the user is allowed to send voice notes */
    can_send_polls?: boolean; /** Optional. True, if the user is allowed to send polls */
    can_send_other_messages?: boolean; /** Optional. True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_add_web_page_previews?: boolean; /** Optional. True, if the user is allowed to add web page previews to their messages */
    can_change_info?: boolean; /** Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_invite_users?: boolean; /** Optional. True, if the user is allowed to invite new users to the chat */
    can_pin_messages?: boolean; /** Optional. True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_manage_topics?: boolean; /** Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
  }>;

  /**
   * Represents a location to which a chat is connected.
   */
  export type ChatLocation = Readonly<{
    location: Location; /** The location to which the supergroup is connected. Can't be a live location. */
    address: string; /** Location address; 1-64 characters, as defined by the chat owner */
  }>;

  /**
   * This object represents a forum topic.
   */
  export type ForumTopic = Readonly<{
    message_thread_id: number; /** Unique identifier of the forum topic */
    name: string; /** Name of the topic */
    icon_color: number; /** Color of the topic icon in RGB format */
    icon_custom_emoji_id?: string; /** Optional. Unique identifier of the custom emoji shown as the topic icon */
  }>;

  /**
   * This object represents a bot command.
   */
  export type BotCommand = Readonly<{
    command: string; /** Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    description: string; /** Description of the command; 1-256 characters. */
  }>;

  /**
   * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
   */
  export type BotCommandScopeDefault = Readonly<{
    type: string; /** Scope type, must be default */
  }>;

  /**
   * Represents the scope of bot commands, covering all private chats.
   */
  export type BotCommandScopeAllPrivateChats = Readonly<{
    type: string; /** Scope type, must be all_private_chats */
  }>;

  /**
   * Represents the scope of bot commands, covering all group and supergroup chats.
   */
  export type BotCommandScopeAllGroupChats = Readonly<{
    type: string; /** Scope type, must be all_group_chats */
  }>;

  /**
   * Represents the scope of bot commands, covering all group and supergroup chat administrators.
   */
  export type BotCommandScopeAllChatAdministrators = Readonly<{
    type: string; /** Scope type, must be all_chat_administrators */
  }>;

  /**
   * Represents the scope of bot commands, covering a specific chat.
   */
  export type BotCommandScopeChat = Readonly<{
    type: string; /** Scope type, must be chat */
    chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
  }>;

  /**
   * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
   */
  export type BotCommandScopeChatAdministrators = Readonly<{
    type: string; /** Scope type, must be chat_administrators */
    chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
  }>;

  /**
   * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
   */
  export type BotCommandScopeChatMember = Readonly<{
    type: string; /** Scope type, must be chat_member */
    chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    user_id: number; /** Unique identifier of the target user */
  }>;

  /**
   * This object represents the bot's name.
   */
  export type BotName = Readonly<{
    name: string; /** The bot's name */
  }>;

  /**
   * This object represents the bot's description.
   */
  export type BotDescription = Readonly<{
    description: string; /** The bot's description */
  }>;

  /**
   * This object represents the bot's short description.
   */
  export type BotShortDescription = Readonly<{
    short_description: string; /** The bot's short description */
  }>;

  /**
   * Represents a menu button, which opens the bot's list of commands.
   */
  export type MenuButtonCommands = Readonly<{
    type: string; /** Type of the button, must be commands */
  }>;

  /**
   * Represents a menu button, which launches a Web App.
   */
  export type MenuButtonWebApp = Readonly<{
    type: string; /** Type of the button, must be web_app */
    text: string; /** Text on the button */
    web_app: WebAppInfo; /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. */
  }>;

  /**
   * Describes that no specific value for the menu button was set.
   */
  export type MenuButtonDefault = Readonly<{
    type: string; /** Type of the button, must be default */
  }>;

  /**
   * Describes why a request was unsuccessful.
   */
  export type ResponseParameters = Readonly<{
    migrate_to_chat_id?: number; /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    retry_after?: number; /** Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
  }>;

  /**
   * Represents a photo to be sent.
   */
  export type InputMediaPhoto = Readonly<{
    type: string; /** Type of the result, must be photo */
    media: string; /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    caption?: string; /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    has_spoiler?: boolean; /** Optional. Pass True if the photo needs to be covered with a spoiler animation */
  }>;

  /**
   * Represents a video to be sent.
   */
  export type InputMediaVideo = Readonly<{
    type: string; /** Type of the result, must be video */
    media: string; /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    thumbnail?: InputFile | string; /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    caption?: string; /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    width?: number; /** Optional. Video width */
    height?: number; /** Optional. Video height */
    duration?: number; /** Optional. Video duration in seconds */
    supports_streaming?: boolean; /** Optional. Pass True if the uploaded video is suitable for streaming */
    has_spoiler?: boolean; /** Optional. Pass True if the video needs to be covered with a spoiler animation */
  }>;

  /**
   * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
   */
  export type InputMediaAnimation = Readonly<{
    type: string; /** Type of the result, must be animation */
    media: string; /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    thumbnail?: InputFile | string; /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    caption?: string; /** Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the animation caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    width?: number; /** Optional. Animation width */
    height?: number; /** Optional. Animation height */
    duration?: number; /** Optional. Animation duration in seconds */
    has_spoiler?: boolean; /** Optional. Pass True if the animation needs to be covered with a spoiler animation */
  }>;

  /**
   * Represents an audio file to be treated as music to be sent.
   */
  export type InputMediaAudio = Readonly<{
    type: string; /** Type of the result, must be audio */
    media: string; /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    thumbnail?: InputFile | string; /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    caption?: string; /** Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    duration?: number; /** Optional. Duration of the audio in seconds */
    performer?: string; /** Optional. Performer of the audio */
    title?: string; /** Optional. Title of the audio */
  }>;

  /**
   * Represents a general file to be sent.
   */
  export type InputMediaDocument = Readonly<{
    type: string; /** Type of the result, must be document */
    media: string; /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    thumbnail?: InputFile | string; /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    caption?: string; /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    disable_content_type_detection?: boolean; /** Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
  }>;


  export type Story = unknown; /** Currently holds no information. */

  export type ForumTopicClosed = unknown; /** Currently holds no information. */

  export type ForumTopicReopened = unknown; /** Currently holds no information. */

  export type GeneralForumTopicHidden = unknown; /** Currently holds no information. */

  export type GeneralForumTopicUnhidden = unknown; /** Currently holds no information. */

  export type VideoChatStarted = unknown; /** Currently holds no information. */

  export type ChatMember =
    | ChatMemberOwner
    | ChatMemberAdministrator
    | ChatMemberMember
    | ChatMemberRestricted
    | ChatMemberLeft
    | ChatMemberBanned;

  export type BotCommandScope =
    | BotCommandScopeDefault
    | BotCommandScopeAllPrivateChats
    | BotCommandScopeAllGroupChats
    | BotCommandScopeAllChatAdministrators
    | BotCommandScopeChat
    | BotCommandScopeChatAdministrators
    | BotCommandScopeChatMember;

  export type MenuButton =
    | MenuButtonCommands
    | MenuButtonWebApp
    | MenuButtonDefault;

  export type InputMedia =
    | InputMediaAnimation
    | InputMediaDocument
    | InputMediaAudio
    | InputMediaPhoto
    | InputMediaVideo;

  /** Available methods */




  /** Updating messages */




  /** Stickers */

  /**
   * This object represents a sticker.
   */
  export type Sticker = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    type: string; /** Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
    width: number; /** Sticker width */
    height: number; /** Sticker height */
    is_animated: boolean; /** True, if the sticker is animated */
    is_video: boolean; /** True, if the sticker is a video sticker */
    thumbnail?: PhotoSize; /** Optional. Sticker thumbnail in the .WEBP or .JPG format */
    emoji?: string; /** Optional. Emoji associated with the sticker */
    set_name?: string; /** Optional. Name of the sticker set to which the sticker belongs */
    premium_animation?: File; /** Optional. For premium regular stickers, premium animation for the sticker */
    mask_position?: MaskPosition; /** Optional. For mask stickers, the position where the mask should be placed */
    custom_emoji_id?: string; /** Optional. For custom emoji stickers, unique identifier of the custom emoji */
    needs_repainting?: true; /** Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
    file_size?: number; /** Optional. File size in bytes */
  }>;

  /**
   * This object represents a sticker set.
   */
  export type StickerSet = Readonly<{
    name: string; /** Sticker set name */
    title: string; /** Sticker set title */
    sticker_type: string; /** Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji” */
    is_animated: boolean; /** True, if the sticker set contains animated stickers */
    is_video: boolean; /** True, if the sticker set contains video stickers */
    stickers: ReadonlyArray<Sticker>; /** List of all set stickers */
    thumbnail?: PhotoSize; /** Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
  }>;

  /**
   * This object describes the position on faces where a mask should be placed by default.
   */
  export type MaskPosition = Readonly<{
    point: string; /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    x_shift: number; /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    y_shift: number; /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    scale: number; /** Mask scaling coefficient. For example, 2.0 means double size. */
  }>;

  /**
   * This object describes a sticker to be added to a sticker set.
   */
  export type InputSticker = Readonly<{
    sticker: InputFile | string; /** The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files » */
    emoji_list: ReadonlyArray<string>; /** List of 1-20 emoji associated with the sticker */
    mask_position?: MaskPosition; /** Optional. Position where the mask should be placed on faces. For “mask” stickers only. */
    keywords?: ReadonlyArray<string>; /** Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only. */
  }>;




  /** Inline mode */

  /**
   * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
   */
  export type InlineQuery = Readonly<{
    id: string; /** Unique identifier for this query */
    from: User; /** Sender */
    query: string; /** Text of the query (up to 256 characters) */
    offset: string; /** Offset of the results to be returned, can be controlled by the bot */
    chat_type?: string; /** Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    location?: Location; /** Optional. Sender location, only for bots that request user location */
  }>;

  /**
   * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
   */
  export type InlineQueryResultsButton = Readonly<{
    text: string; /** Label text on the button */
    web_app?: WebAppInfo; /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. */
    start_parameter?: string; /** Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. */
  }>;

  /**
   * Represents a link to an article or web page.
   */
  export type InlineQueryResultArticle = Readonly<{
    type: string; /** Type of the result, must be article */
    id: string; /** Unique identifier for this result, 1-64 Bytes */
    title: string; /** Title of the result */
    input_message_content: InputMessageContent; /** Content of the message to be sent */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    url?: string; /** Optional. URL of the result */
    hide_url?: boolean; /** Optional. Pass True if you don't want the URL to be shown in the message */
    description?: string; /** Optional. Short description of the result */
    thumbnail_url?: string; /** Optional. Url of the thumbnail for the result */
    thumbnail_width?: number; /** Optional. Thumbnail width */
    thumbnail_height?: number; /** Optional. Thumbnail height */
  }>;

  /**
   * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
   */
  export type InlineQueryResultPhoto = Readonly<{
    type: string; /** Type of the result, must be photo */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    photo_url: string; /** A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
    thumbnail_url: string; /** URL of the thumbnail for the photo */
    photo_width?: number; /** Optional. Width of the photo */
    photo_height?: number; /** Optional. Height of the photo */
    title?: string; /** Optional. Title for the result */
    description?: string; /** Optional. Short description of the result */
    caption?: string; /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the photo */
  }>;

  /**
   * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
   */
  export type InlineQueryResultGif = Readonly<{
    type: string; /** Type of the result, must be gif */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    gif_url: string; /** A valid URL for the GIF file. File size must not exceed 1MB */
    gif_width?: number; /** Optional. Width of the GIF */
    gif_height?: number; /** Optional. Height of the GIF */
    gif_duration?: number; /** Optional. Duration of the GIF in seconds */
    thumbnail_url: string; /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_mime_type?: string; /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    title?: string; /** Optional. Title for the result */
    caption?: string; /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the GIF animation */
  }>;

  /**
   * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
   */
  export type InlineQueryResultMpeg4Gif = Readonly<{
    type: string; /** Type of the result, must be mpeg4_gif */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    mpeg4_url: string; /** A valid URL for the MPEG4 file. File size must not exceed 1MB */
    mpeg4_width?: number; /** Optional. Video width */
    mpeg4_height?: number; /** Optional. Video height */
    mpeg4_duration?: number; /** Optional. Video duration in seconds */
    thumbnail_url: string; /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_mime_type?: string; /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    title?: string; /** Optional. Title for the result */
    caption?: string; /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the video animation */
  }>;

  /**
   * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
   */
  export type InlineQueryResultVideo = Readonly<{
    type: string; /** Type of the result, must be video */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    video_url: string; /** A valid URL for the embedded video player or video file */
    mime_type: string; /** MIME type of the content of the video URL, “text/html” or “video/mp4” */
    thumbnail_url: string; /** URL of the thumbnail (JPEG only) for the video */
    title: string; /** Title for the result */
    caption?: string; /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    video_width?: number; /** Optional. Video width */
    video_height?: number; /** Optional. Video height */
    video_duration?: number; /** Optional. Video duration in seconds */
    description?: string; /** Optional. Short description of the result */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
  }>;

  /**
   * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
   */
  export type InlineQueryResultAudio = Readonly<{
    type: string; /** Type of the result, must be audio */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    audio_url: string; /** A valid URL for the audio file */
    title: string; /** Title */
    caption?: string; /** Optional. Caption, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    performer?: string; /** Optional. Performer */
    audio_duration?: number; /** Optional. Audio duration in seconds */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the audio */
  }>;

  /**
   * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
   */
  export type InlineQueryResultVoice = Readonly<{
    type: string; /** Type of the result, must be voice */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    voice_url: string; /** A valid URL for the voice recording */
    title: string; /** Recording title */
    caption?: string; /** Optional. Caption, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    voice_duration?: number; /** Optional. Recording duration in seconds */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the voice recording */
  }>;

  /**
   * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
   */
  export type InlineQueryResultDocument = Readonly<{
    type: string; /** Type of the result, must be document */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    title: string; /** Title for the result */
    caption?: string; /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    document_url: string; /** A valid URL for the file */
    mime_type: string; /** MIME type of the content of the file, either “application/pdf” or “application/zip” */
    description?: string; /** Optional. Short description of the result */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the file */
    thumbnail_url?: string; /** Optional. URL of the thumbnail (JPEG only) for the file */
    thumbnail_width?: number; /** Optional. Thumbnail width */
    thumbnail_height?: number; /** Optional. Thumbnail height */
  }>;

  /**
   * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
   */
  export type InlineQueryResultLocation = Readonly<{
    type: string; /** Type of the result, must be location */
    id: string; /** Unique identifier for this result, 1-64 Bytes */
    latitude: number; /** Location latitude in degrees */
    longitude: number; /** Location longitude in degrees */
    title: string; /** Location title */
    horizontal_accuracy?: number; /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    live_period?: number; /** Optional. Period in seconds for which the location can be updated, should be between 60 and 86400. */
    heading?: number; /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    proximity_alert_radius?: number; /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the location */
    thumbnail_url?: string; /** Optional. Url of the thumbnail for the result */
    thumbnail_width?: number; /** Optional. Thumbnail width */
    thumbnail_height?: number; /** Optional. Thumbnail height */
  }>;

  /**
   * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
   */
  export type InlineQueryResultVenue = Readonly<{
    type: string; /** Type of the result, must be venue */
    id: string; /** Unique identifier for this result, 1-64 Bytes */
    latitude: number; /** Latitude of the venue location in degrees */
    longitude: number; /** Longitude of the venue location in degrees */
    title: string; /** Title of the venue */
    address: string; /** Address of the venue */
    foursquare_id?: string; /** Optional. Foursquare identifier of the venue if known */
    foursquare_type?: string; /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    google_place_id?: string; /** Optional. Google Places identifier of the venue */
    google_place_type?: string; /** Optional. Google Places type of the venue. (See supported types.) */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the venue */
    thumbnail_url?: string; /** Optional. Url of the thumbnail for the result */
    thumbnail_width?: number; /** Optional. Thumbnail width */
    thumbnail_height?: number; /** Optional. Thumbnail height */
  }>;

  /**
   * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
   */
  export type InlineQueryResultContact = Readonly<{
    type: string; /** Type of the result, must be contact */
    id: string; /** Unique identifier for this result, 1-64 Bytes */
    phone_number: string; /** Contact's phone number */
    first_name: string; /** Contact's first name */
    last_name?: string; /** Optional. Contact's last name */
    vcard?: string; /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the contact */
    thumbnail_url?: string; /** Optional. Url of the thumbnail for the result */
    thumbnail_width?: number; /** Optional. Thumbnail width */
    thumbnail_height?: number; /** Optional. Thumbnail height */
  }>;

  /**
   * Represents a Game.
   */
  export type InlineQueryResultGame = Readonly<{
    type: string; /** Type of the result, must be game */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    game_short_name: string; /** Short name of the game */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
  }>;

  /**
   * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
   */
  export type InlineQueryResultCachedPhoto = Readonly<{
    type: string; /** Type of the result, must be photo */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    photo_file_id: string; /** A valid file identifier of the photo */
    title?: string; /** Optional. Title for the result */
    description?: string; /** Optional. Short description of the result */
    caption?: string; /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the photo */
  }>;

  /**
   * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
   */
  export type InlineQueryResultCachedGif = Readonly<{
    type: string; /** Type of the result, must be gif */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    gif_file_id: string; /** A valid file identifier for the GIF file */
    title?: string; /** Optional. Title for the result */
    caption?: string; /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the GIF animation */
  }>;

  /**
   * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
   */
  export type InlineQueryResultCachedMpeg4Gif = Readonly<{
    type: string; /** Type of the result, must be mpeg4_gif */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    mpeg4_file_id: string; /** A valid file identifier for the MPEG4 file */
    title?: string; /** Optional. Title for the result */
    caption?: string; /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the video animation */
  }>;

  /**
   * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
   */
  export type InlineQueryResultCachedSticker = Readonly<{
    type: string; /** Type of the result, must be sticker */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    sticker_file_id: string; /** A valid file identifier of the sticker */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the sticker */
  }>;

  /**
   * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
   */
  export type InlineQueryResultCachedDocument = Readonly<{
    type: string; /** Type of the result, must be document */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    title: string; /** Title for the result */
    document_file_id: string; /** A valid file identifier for the file */
    description?: string; /** Optional. Short description of the result */
    caption?: string; /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the file */
  }>;

  /**
   * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
   */
  export type InlineQueryResultCachedVideo = Readonly<{
    type: string; /** Type of the result, must be video */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    video_file_id: string; /** A valid file identifier for the video file */
    title: string; /** Title for the result */
    description?: string; /** Optional. Short description of the result */
    caption?: string; /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the video */
  }>;

  /**
   * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
   */
  export type InlineQueryResultCachedVoice = Readonly<{
    type: string; /** Type of the result, must be voice */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    voice_file_id: string; /** A valid file identifier for the voice message */
    title: string; /** Voice message title */
    caption?: string; /** Optional. Caption, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the voice message */
  }>;

  /**
   * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
   */
  export type InlineQueryResultCachedAudio = Readonly<{
    type: string; /** Type of the result, must be audio */
    id: string; /** Unique identifier for this result, 1-64 bytes */
    audio_file_id: string; /** A valid file identifier for the audio file */
    caption?: string; /** Optional. Caption, 0-1024 characters after entities parsing */
    parse_mode?: string; /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    caption_entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    reply_markup?: InlineKeyboardMarkup; /** Optional. Inline keyboard attached to the message */
    input_message_content?: InputMessageContent; /** Optional. Content of the message to be sent instead of the audio */
  }>;

  /**
   * Represents the content of a text message to be sent as the result of an inline query.
   */
  export type InputTextMessageContent = Readonly<{
    message_text: string; /** Text of the message to be sent, 1-4096 characters */
    parse_mode?: string; /** Optional. Mode for parsing entities in the message text. See formatting options for more details. */
    entities?: ReadonlyArray<MessageEntity>; /** Optional. List of special entities that appear in message text, which can be specified instead of parse_mode */
    disable_web_page_preview?: boolean; /** Optional. Disables link previews for links in the sent message */
  }>;

  /**
   * Represents the content of a location message to be sent as the result of an inline query.
   */
  export type InputLocationMessageContent = Readonly<{
    latitude: number; /** Latitude of the location in degrees */
    longitude: number; /** Longitude of the location in degrees */
    horizontal_accuracy?: number; /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    live_period?: number; /** Optional. Period in seconds for which the location can be updated, should be between 60 and 86400. */
    heading?: number; /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    proximity_alert_radius?: number; /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
  }>;

  /**
   * Represents the content of a venue message to be sent as the result of an inline query.
   */
  export type InputVenueMessageContent = Readonly<{
    latitude: number; /** Latitude of the venue in degrees */
    longitude: number; /** Longitude of the venue in degrees */
    title: string; /** Name of the venue */
    address: string; /** Address of the venue */
    foursquare_id?: string; /** Optional. Foursquare identifier of the venue, if known */
    foursquare_type?: string; /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    google_place_id?: string; /** Optional. Google Places identifier of the venue */
    google_place_type?: string; /** Optional. Google Places type of the venue. (See supported types.) */
  }>;

  /**
   * Represents the content of a contact message to be sent as the result of an inline query.
   */
  export type InputContactMessageContent = Readonly<{
    phone_number: string; /** Contact's phone number */
    first_name: string; /** Contact's first name */
    last_name?: string; /** Optional. Contact's last name */
    vcard?: string; /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
  }>;

  /**
   * Represents the content of an invoice message to be sent as the result of an inline query.
   */
  export type InputInvoiceMessageContent = Readonly<{
    title: string; /** Product name, 1-32 characters */
    description: string; /** Product description, 1-255 characters */
    payload: string; /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    provider_token: string; /** Payment provider token, obtained via @BotFather */
    currency: string; /** Three-letter ISO 4217 currency code, see more on currencies */
    prices: ReadonlyArray<LabeledPrice>; /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
    max_tip_amount?: number; /** Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
    suggested_tip_amounts?: ReadonlyArray<number>; /** Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    provider_data?: string; /** Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    photo_url?: string; /** Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_size?: number; /** Optional. Photo size in bytes */
    photo_width?: number; /** Optional. Photo width */
    photo_height?: number; /** Optional. Photo height */
    need_name?: boolean; /** Optional. Pass True if you require the user's full name to complete the order */
    need_phone_number?: boolean; /** Optional. Pass True if you require the user's phone number to complete the order */
    need_email?: boolean; /** Optional. Pass True if you require the user's email address to complete the order */
    need_shipping_address?: boolean; /** Optional. Pass True if you require the user's shipping address to complete the order */
    send_phone_number_to_provider?: boolean; /** Optional. Pass True if the user's phone number should be sent to provider */
    send_email_to_provider?: boolean; /** Optional. Pass True if the user's email address should be sent to provider */
    is_flexible?: boolean; /** Optional. Pass True if the final price depends on the shipping method */
  }>;

  /**
   * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
   */
  export type ChosenInlineResult = Readonly<{
    result_id: string; /** The unique identifier for the result that was chosen */
    from: User; /** The user that chose the result */
    location?: Location; /** Optional. Sender location, only for bots that require user location */
    inline_message_id?: string; /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    query: string; /** The query that was used to obtain the result */
  }>;

  /**
   * Describes an inline message sent by a Web App on behalf of a user.
   */
  export type SentWebAppMessage = Readonly<{
    inline_message_id?: string; /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
  }>;


  export type InlineQueryResult =
    | InlineQueryResultCachedAudio
    | InlineQueryResultCachedDocument
    | InlineQueryResultCachedGif
    | InlineQueryResultCachedMpeg4Gif
    | InlineQueryResultCachedPhoto
    | InlineQueryResultCachedSticker
    | InlineQueryResultCachedVideo
    | InlineQueryResultCachedVoice
    | InlineQueryResultArticle
    | InlineQueryResultAudio
    | InlineQueryResultContact
    | InlineQueryResultGame
    | InlineQueryResultDocument
    | InlineQueryResultGif
    | InlineQueryResultLocation
    | InlineQueryResultMpeg4Gif
    | InlineQueryResultPhoto
    | InlineQueryResultVenue
    | InlineQueryResultVideo
    | InlineQueryResultVoice;

  export type InputMessageContent =
    | InputTextMessageContent
    | InputLocationMessageContent
    | InputVenueMessageContent
    | InputContactMessageContent
    | InputInvoiceMessageContent;

  /** Payments */

  /**
   * This object represents a portion of the price for goods or services.
   */
  export type LabeledPrice = Readonly<{
    label: string; /** Portion label */
    amount: number; /** Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  }>;

  /**
   * This object contains basic information about an invoice.
   */
  export type Invoice = Readonly<{
    title: string; /** Product name */
    description: string; /** Product description */
    start_parameter: string; /** Unique bot deep-linking parameter that can be used to generate this invoice */
    currency: string; /** Three-letter ISO 4217 currency code */
    total_amount: number; /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  }>;

  /**
   * This object represents a shipping address.
   */
  export type ShippingAddress = Readonly<{
    country_code: string; /** Two-letter ISO 3166-1 alpha-2 country code */
    state: string; /** State, if applicable */
    city: string; /** City */
    street_line1: string; /** First line for the address */
    street_line2: string; /** Second line for the address */
    post_code: string; /** Address post code */
  }>;

  /**
   * This object represents information about an order.
   */
  export type OrderInfo = Readonly<{
    name?: string; /** Optional. User name */
    phone_number?: string; /** Optional. User's phone number */
    email?: string; /** Optional. User email */
    shipping_address?: ShippingAddress; /** Optional. User shipping address */
  }>;

  /**
   * This object represents one shipping option.
   */
  export type ShippingOption = Readonly<{
    id: string; /** Shipping option identifier */
    title: string; /** Option title */
    prices: ReadonlyArray<LabeledPrice>; /** List of price portions */
  }>;

  /**
   * This object contains basic information about a successful payment.
   */
  export type SuccessfulPayment = Readonly<{
    currency: string; /** Three-letter ISO 4217 currency code */
    total_amount: number; /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    invoice_payload: string; /** Bot specified invoice payload */
    shipping_option_id?: string; /** Optional. Identifier of the shipping option chosen by the user */
    order_info?: OrderInfo; /** Optional. Order information provided by the user */
    telegram_payment_charge_id: string; /** Telegram payment identifier */
    provider_payment_charge_id: string; /** Provider payment identifier */
  }>;

  /**
   * This object contains information about an incoming shipping query.
   */
  export type ShippingQuery = Readonly<{
    id: string; /** Unique query identifier */
    from: User; /** User who sent the query */
    invoice_payload: string; /** Bot specified invoice payload */
    shipping_address: ShippingAddress; /** User specified shipping address */
  }>;

  /**
   * This object contains information about an incoming pre-checkout query.
   */
  export type PreCheckoutQuery = Readonly<{
    id: string; /** Unique query identifier */
    from: User; /** User who sent the query */
    currency: string; /** Three-letter ISO 4217 currency code */
    total_amount: number; /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    invoice_payload: string; /** Bot specified invoice payload */
    shipping_option_id?: string; /** Optional. Identifier of the shipping option chosen by the user */
    order_info?: OrderInfo; /** Optional. Order information provided by the user */
  }>;




  /** Telegram Passport */

  /**
   * Describes Telegram Passport data shared with the bot by the user.
   */
  export type PassportData = Readonly<{
    data: ReadonlyArray<EncryptedPassportElement>; /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    credentials: EncryptedCredentials; /** Encrypted credentials required to decrypt the data */
  }>;

  /**
   * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
   */
  export type PassportFile = Readonly<{
    file_id: string; /** Identifier for this file, which can be used to download or reuse the file */
    file_unique_id: string; /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_size: number; /** File size in bytes */
    file_date: number; /** Unix time when the file was uploaded */
  }>;

  /**
   * Describes documents or other Telegram Passport elements shared with the bot by the user.
   */
  export type EncryptedPassportElement = Readonly<{
    type: string; /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    data?: string; /** Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    phone_number?: string; /** Optional. User's verified phone number, available only for “phone_number” type */
    email?: string; /** Optional. User's verified email address, available only for “email” type */
    files?: ReadonlyArray<PassportFile>; /** Optional. Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side?: PassportFile; /** Optional. Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side?: PassportFile; /** Optional. Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie?: PassportFile; /** Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation?: ReadonlyArray<PassportFile>; /** Optional. Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    hash: string; /** Base64-encoded element hash for using in PassportElementErrorUnspecified */
  }>;

  /**
   * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
   */
  export type EncryptedCredentials = Readonly<{
    data: string; /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    hash: string; /** Base64-encoded data hash for data authentication */
    secret: string; /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
  }>;

  /**
   * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
   */
  export type PassportElementErrorDataField = Readonly<{
    source: string; /** Error source, must be data */
    type: string; /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
    field_name: string; /** Name of the data field which has the error */
    data_hash: string; /** Base64-encoded data hash */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
   */
  export type PassportElementErrorFrontSide = Readonly<{
    source: string; /** Error source, must be front_side */
    type: string; /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    file_hash: string; /** Base64-encoded hash of the file with the front side of the document */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
   */
  export type PassportElementErrorReverseSide = Readonly<{
    source: string; /** Error source, must be reverse_side */
    type: string; /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    file_hash: string; /** Base64-encoded hash of the file with the reverse side of the document */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
   */
  export type PassportElementErrorSelfie = Readonly<{
    source: string; /** Error source, must be selfie */
    type: string; /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    file_hash: string; /** Base64-encoded hash of the file with the selfie */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
   */
  export type PassportElementErrorFile = Readonly<{
    source: string; /** Error source, must be file */
    type: string; /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    file_hash: string; /** Base64-encoded file hash */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
   */
  export type PassportElementErrorFiles = Readonly<{
    source: string; /** Error source, must be files */
    type: string; /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    file_hashes: ReadonlyArray<string>; /** List of base64-encoded file hashes */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
   */
  export type PassportElementErrorTranslationFile = Readonly<{
    source: string; /** Error source, must be translation_file */
    type: string; /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    file_hash: string; /** Base64-encoded file hash */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
   */
  export type PassportElementErrorTranslationFiles = Readonly<{
    source: string; /** Error source, must be translation_files */
    type: string; /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    file_hashes: ReadonlyArray<string>; /** List of base64-encoded file hashes */
    message: string; /** Error message */
  }>;

  /**
   * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
   */
  export type PassportElementErrorUnspecified = Readonly<{
    source: string; /** Error source, must be unspecified */
    type: string; /** Type of element of the user's Telegram Passport which has the issue */
    element_hash: string; /** Base64-encoded element hash */
    message: string; /** Error message */
  }>;


  export type PassportElementError =
    | PassportElementErrorDataField
    | PassportElementErrorFrontSide
    | PassportElementErrorReverseSide
    | PassportElementErrorSelfie
    | PassportElementErrorFile
    | PassportElementErrorFiles
    | PassportElementErrorTranslationFile
    | PassportElementErrorTranslationFiles
    | PassportElementErrorUnspecified;

  /** Games */

  /**
   * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
   */
  export type Game = Readonly<{
    title: string; /** Title of the game */
    description: string; /** Description of the game */
    photo: ReadonlyArray<PhotoSize>; /** Photo that will be displayed in the game message in chats. */
    text?: string; /** Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text_entities?: ReadonlyArray<MessageEntity>; /** Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    animation?: Animation; /** Optional. Animation that will be displayed in the game message in chats. Upload via BotFather */
  }>;

  /**
   * This object represents one row of the high scores table for a game.
   */
  export type GameHighScore = Readonly<{
    position: number; /** Position in high score table for the game */
    user: User; /** User */
    score: number; /** Score */
  }>;






  export type CallbackGame = Readonly<{}>;

  /** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. */
  export type InputFile = Readonly<{
    file: Buffer;
    name: string;
  }>;


  export namespace Params {
    export type GetUpdates = Readonly<{
      offset?: number; /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. */
      limit?: number; /** Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
      timeout?: number; /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
      allowed_updates?: ReadonlyArray<string>; /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. */
    }>;

    export type SetWebhook = Readonly<{
      url: string; /** HTTPS URL to send updates to. Use an empty string to remove webhook integration */
      certificate?: InputFile; /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
      ip_address?: string; /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
      max_connections?: number; /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. */
      allowed_updates?: ReadonlyArray<string>; /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. */
      drop_pending_updates?: boolean; /** Pass True to drop all pending updates */
      secret_token?: string; /** A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. */
    }>;

    export type DeleteWebhook = Readonly<{
      drop_pending_updates?: boolean; /** Pass True to drop all pending updates */
    }>;

    export type SendMessage = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      text: string; /** Text of the message to be sent, 1-4096 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the message text. See formatting options for more details. */
      entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
      disable_web_page_preview?: boolean; /** Disables link previews for links in this message */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type ForwardMessage = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      from_chat_id: number | string; /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the forwarded message from forwarding and saving */
      message_id: number; /** Message identifier in the chat specified in from_chat_id */
    }>;

    export type CopyMessage = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      from_chat_id: number | string; /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
      message_id: number; /** Message identifier in the chat specified in from_chat_id */
      caption?: string; /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
      parse_mode?: string; /** Mode for parsing entities in the new caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendPhoto = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      photo: InputFile | string; /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » */
      caption?: string; /** Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the photo caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      has_spoiler?: boolean; /** Pass True if the photo needs to be covered with a spoiler animation */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendAudio = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      audio: InputFile | string; /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
      caption?: string; /** Audio caption, 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the audio caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      duration?: number; /** Duration of the audio in seconds */
      performer?: string; /** Performer */
      title?: string; /** Track name */
      thumbnail?: InputFile | string; /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendDocument = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      document: InputFile | string; /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
      thumbnail?: InputFile | string; /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
      caption?: string; /** Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the document caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      disable_content_type_detection?: boolean; /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendVideo = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      video: InputFile | string; /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » */
      duration?: number; /** Duration of sent video in seconds */
      width?: number; /** Video width */
      height?: number; /** Video height */
      thumbnail?: InputFile | string; /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
      caption?: string; /** Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the video caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      has_spoiler?: boolean; /** Pass True if the video needs to be covered with a spoiler animation */
      supports_streaming?: boolean; /** Pass True if the uploaded video is suitable for streaming */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendAnimation = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      animation: InputFile | string; /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » */
      duration?: number; /** Duration of sent animation in seconds */
      width?: number; /** Animation width */
      height?: number; /** Animation height */
      thumbnail?: InputFile | string; /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
      caption?: string; /** Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the animation caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      has_spoiler?: boolean; /** Pass True if the animation needs to be covered with a spoiler animation */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendVoice = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      voice: InputFile | string; /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
      caption?: string; /** Voice message caption, 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      duration?: number; /** Duration of the voice message in seconds */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendVideoNote = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      video_note: InputFile | string; /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported */
      duration?: number; /** Duration of sent video in seconds */
      length?: number; /** Video width and height, i.e. diameter of the video message */
      thumbnail?: InputFile | string; /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendMediaGroup = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      media: ReadonlyArray<InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo>; /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
      disable_notification?: boolean; /** Sends messages silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent messages from forwarding and saving */
      reply_to_message_id?: number; /** If the messages are a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
    }>;

    export type SendLocation = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      latitude: number; /** Latitude of the location */
      longitude: number; /** Longitude of the location */
      horizontal_accuracy?: number; /** The radius of uncertainty for the location, measured in meters; 0-1500 */
      live_period?: number; /** Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400. */
      heading?: number; /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
      proximity_alert_radius?: number; /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendVenue = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      latitude: number; /** Latitude of the venue */
      longitude: number; /** Longitude of the venue */
      title: string; /** Name of the venue */
      address: string; /** Address of the venue */
      foursquare_id?: string; /** Foursquare identifier of the venue */
      foursquare_type?: string; /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
      google_place_id?: string; /** Google Places identifier of the venue */
      google_place_type?: string; /** Google Places type of the venue. (See supported types.) */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendContact = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      phone_number: string; /** Contact's phone number */
      first_name: string; /** Contact's first name */
      last_name?: string; /** Contact's last name */
      vcard?: string; /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendPoll = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      question: string; /** Poll question, 1-300 characters */
      options: ReadonlyArray<string>; /** A JSON-serialized list of answer options, 2-10 strings 1-100 characters each */
      is_anonymous?: boolean; /** True, if the poll needs to be anonymous, defaults to True */
      type?: string; /** Poll type, “quiz” or “regular”, defaults to “regular” */
      allows_multiple_answers?: boolean; /** True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False */
      correct_option_id?: number; /** 0-based identifier of the correct answer option, required for polls in quiz mode */
      explanation?: string; /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
      explanation_parse_mode?: string; /** Mode for parsing entities in the explanation. See formatting options for more details. */
      explanation_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the poll explanation, which can be specified instead of parse_mode */
      open_period?: number; /** Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. */
      close_date?: number; /** Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period. */
      is_closed?: boolean; /** Pass True if the poll needs to be immediately closed. This can be useful for poll preview. */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendDice = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      emoji?: string; /** Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type SendChatAction = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread; supergroups only */
      action: string; /** Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. */
    }>;

    export type GetUserProfilePhotos = Readonly<{
      user_id: number; /** Unique identifier of the target user */
      offset?: number; /** Sequential number of the first photo to be returned. By default, all photos are returned. */
      limit?: number; /** Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    }>;

    export type GetFile = Readonly<{
      file_id: string; /** File identifier to get information about */
    }>;

    export type BanChatMember = Readonly<{
      chat_id: number | string; /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
      user_id: number; /** Unique identifier of the target user */
      until_date?: number; /** Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. */
      revoke_messages?: boolean; /** Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. */
    }>;

    export type UnbanChatMember = Readonly<{
      chat_id: number | string; /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
      user_id: number; /** Unique identifier of the target user */
      only_if_banned?: boolean; /** Do nothing if the user is not banned */
    }>;

    export type RestrictChatMember = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      user_id: number; /** Unique identifier of the target user */
      permissions: ChatPermissions; /** A JSON-serialized object for new user permissions */
      use_independent_chat_permissions?: boolean; /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
      until_date?: number; /** Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
    }>;

    export type PromoteChatMember = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      user_id: number; /** Unique identifier of the target user */
      is_anonymous?: boolean; /** Pass True if the administrator's presence in the chat is hidden */
      can_manage_chat?: boolean; /** Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
      can_post_messages?: boolean; /** Pass True if the administrator can create channel posts, channels only */
      can_edit_messages?: boolean; /** Pass True if the administrator can edit messages of other users and can pin messages, channels only */
      can_delete_messages?: boolean; /** Pass True if the administrator can delete messages of other users */
      can_manage_video_chats?: boolean; /** Pass True if the administrator can manage video chats */
      can_restrict_members?: boolean; /** Pass True if the administrator can restrict, ban or unban chat members */
      can_promote_members?: boolean; /** Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) */
      can_change_info?: boolean; /** Pass True if the administrator can change chat title, photo and other settings */
      can_invite_users?: boolean; /** Pass True if the administrator can invite new users to the chat */
      can_pin_messages?: boolean; /** Pass True if the administrator can pin messages, supergroups only */
      can_manage_topics?: boolean; /** Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only */
    }>;

    export type SetChatAdministratorCustomTitle = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      user_id: number; /** Unique identifier of the target user */
      custom_title: string; /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
    }>;

    export type BanChatSenderChat = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      sender_chat_id: number; /** Unique identifier of the target sender chat */
    }>;

    export type UnbanChatSenderChat = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      sender_chat_id: number; /** Unique identifier of the target sender chat */
    }>;

    export type SetChatPermissions = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      permissions: ChatPermissions; /** A JSON-serialized object for new default chat permissions */
      use_independent_chat_permissions?: boolean; /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
    }>;

    export type ExportChatInviteLink = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    }>;

    export type CreateChatInviteLink = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      name?: string; /** Invite link name; 0-32 characters */
      expire_date?: number; /** Point in time (Unix timestamp) when the link will expire */
      member_limit?: number; /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
      creates_join_request?: boolean; /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
    }>;

    export type EditChatInviteLink = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      invite_link: string; /** The invite link to edit */
      name?: string; /** Invite link name; 0-32 characters */
      expire_date?: number; /** Point in time (Unix timestamp) when the link will expire */
      member_limit?: number; /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
      creates_join_request?: boolean; /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
    }>;

    export type RevokeChatInviteLink = Readonly<{
      chat_id: number | string; /** Unique identifier of the target chat or username of the target channel (in the format @channelusername) */
      invite_link: string; /** The invite link to revoke */
    }>;

    export type ApproveChatJoinRequest = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      user_id: number; /** Unique identifier of the target user */
    }>;

    export type DeclineChatJoinRequest = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      user_id: number; /** Unique identifier of the target user */
    }>;

    export type SetChatPhoto = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      photo: InputFile; /** New chat photo, uploaded using multipart/form-data */
    }>;

    export type DeleteChatPhoto = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    }>;

    export type SetChatTitle = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      title: string; /** New chat title, 1-128 characters */
    }>;

    export type SetChatDescription = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      description?: string; /** New chat description, 0-255 characters */
    }>;

    export type PinChatMessage = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id: number; /** Identifier of a message to pin */
      disable_notification?: boolean; /** Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
    }>;

    export type UnpinChatMessage = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned. */
    }>;

    export type UnpinAllChatMessages = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    }>;

    export type LeaveChat = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    }>;

    export type GetChat = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    }>;

    export type GetChatAdministrators = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    }>;

    export type GetChatMemberCount = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    }>;

    export type GetChatMember = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
      user_id: number; /** Unique identifier of the target user */
    }>;

    export type SetChatStickerSet = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      sticker_set_name: string; /** Name of the sticker set to be set as the group sticker set */
    }>;

    export type DeleteChatStickerSet = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    }>;

    export type CreateForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      name: string; /** Topic name, 1-128 characters */
      icon_color?: number; /** Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F) */
      icon_custom_emoji_id?: string; /** Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. */
    }>;

    export type EditForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      message_thread_id: number; /** Unique identifier for the target message thread of the forum topic */
      name?: string; /** New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept */
      icon_custom_emoji_id?: string; /** New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept */
    }>;

    export type CloseForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      message_thread_id: number; /** Unique identifier for the target message thread of the forum topic */
    }>;

    export type ReopenForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      message_thread_id: number; /** Unique identifier for the target message thread of the forum topic */
    }>;

    export type DeleteForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      message_thread_id: number; /** Unique identifier for the target message thread of the forum topic */
    }>;

    export type UnpinAllForumTopicMessages = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      message_thread_id: number; /** Unique identifier for the target message thread of the forum topic */
    }>;

    export type EditGeneralForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
      name: string; /** New topic name, 1-128 characters */
    }>;

    export type CloseGeneralForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    }>;

    export type ReopenGeneralForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    }>;

    export type HideGeneralForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    }>;

    export type UnhideGeneralForumTopic = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    }>;

    export type UnpinAllGeneralForumTopicMessages = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    }>;

    export type AnswerCallbackQuery = Readonly<{
      callback_query_id: string; /** Unique identifier for the query to be answered */
      text?: string; /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
      show_alert?: boolean; /** If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. */
      url?: string; /** URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter. */
      cache_time?: number; /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
    }>;

    export type SetMyCommands = Readonly<{
      commands: ReadonlyArray<BotCommand>; /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
      scope?: BotCommandScope; /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
      language_code?: string; /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
    }>;

    export type DeleteMyCommands = Readonly<{
      scope?: BotCommandScope; /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
      language_code?: string; /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
    }>;

    export type GetMyCommands = Readonly<{
      scope?: BotCommandScope; /** A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. */
      language_code?: string; /** A two-letter ISO 639-1 language code or an empty string */
    }>;

    export type SetMyName = Readonly<{
      name?: string; /** New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language. */
      language_code?: string; /** A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name. */
    }>;

    export type GetMyName = Readonly<{
      language_code?: string; /** A two-letter ISO 639-1 language code or an empty string */
    }>;

    export type SetMyDescription = Readonly<{
      description?: string; /** New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language. */
      language_code?: string; /** A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description. */
    }>;

    export type GetMyDescription = Readonly<{
      language_code?: string; /** A two-letter ISO 639-1 language code or an empty string */
    }>;

    export type SetMyShortDescription = Readonly<{
      short_description?: string; /** New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language. */
      language_code?: string; /** A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description. */
    }>;

    export type GetMyShortDescription = Readonly<{
      language_code?: string; /** A two-letter ISO 639-1 language code or an empty string */
    }>;

    export type SetChatMenuButton = Readonly<{
      chat_id?: number; /** Unique identifier for the target private chat. If not specified, default bot's menu button will be changed */
      menu_button?: MenuButton; /** A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault */
    }>;

    export type GetChatMenuButton = Readonly<{
      chat_id?: number; /** Unique identifier for the target private chat. If not specified, default bot's menu button will be returned */
    }>;

    export type SetMyDefaultAdministratorRights = Readonly<{
      rights?: ChatAdministratorRights; /** A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared. */
      for_channels?: boolean; /** Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed. */
    }>;

    export type GetMyDefaultAdministratorRights = Readonly<{
      for_channels?: boolean; /** Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. */
    }>;

    export type EditMessageText = Readonly<{
      chat_id?: number | string; /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the message to edit */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      text: string; /** New text of the message, 1-4096 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the message text. See formatting options for more details. */
      entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
      disable_web_page_preview?: boolean; /** Disables link previews for links in this message */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for an inline keyboard. */
    }>;

    export type EditMessageCaption = Readonly<{
      chat_id?: number | string; /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the message to edit */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      caption?: string; /** New caption of the message, 0-1024 characters after entities parsing */
      parse_mode?: string; /** Mode for parsing entities in the message caption. See formatting options for more details. */
      caption_entities?: ReadonlyArray<MessageEntity>; /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for an inline keyboard. */
    }>;

    export type EditMessageMedia = Readonly<{
      chat_id?: number | string; /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the message to edit */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      media: InputMedia; /** A JSON-serialized object for a new media content of the message */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for a new inline keyboard. */
    }>;

    export type EditMessageLiveLocation = Readonly<{
      chat_id?: number | string; /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the message to edit */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      latitude: number; /** Latitude of new location */
      longitude: number; /** Longitude of new location */
      horizontal_accuracy?: number; /** The radius of uncertainty for the location, measured in meters; 0-1500 */
      heading?: number; /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
      proximity_alert_radius?: number; /** The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for a new inline keyboard. */
    }>;

    export type StopMessageLiveLocation = Readonly<{
      chat_id?: number | string; /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the message with live location to stop */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for a new inline keyboard. */
    }>;

    export type EditMessageReplyMarkup = Readonly<{
      chat_id?: number | string; /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the message to edit */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for an inline keyboard. */
    }>;

    export type StopPoll = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id: number; /** Identifier of the original message with the poll */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for a new message inline keyboard. */
    }>;

    export type DeleteMessage = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_id: number; /** Identifier of the message to delete */
    }>;

    export type SendSticker = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      sticker: InputFile | string; /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP or .TGS sticker using multipart/form-data. More information on Sending Files ». Video stickers can only be sent by a file_id. Animated stickers can't be sent via an HTTP URL. */
      emoji?: string; /** Emoji associated with the sticker; only for just uploaded stickers */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
    }>;

    export type GetStickerSet = Readonly<{
      name: string; /** Name of the sticker set */
    }>;

    export type GetCustomEmojiStickers = Readonly<{
      custom_emoji_ids: ReadonlyArray<string>; /** List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. */
    }>;

    export type UploadStickerFile = Readonly<{
      user_id: number; /** User identifier of sticker file owner */
      sticker: InputFile; /** A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » */
      sticker_format: string; /** Format of the sticker, must be one of “static”, “animated”, “video” */
    }>;

    export type CreateNewStickerSet = Readonly<{
      user_id: number; /** User identifier of created sticker set owner */
      name: string; /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. */
      title: string; /** Sticker set title, 1-64 characters */
      stickers: ReadonlyArray<InputSticker>; /** A JSON-serialized list of 1-50 initial stickers to be added to the sticker set */
      sticker_format: string; /** Format of stickers in the set, must be one of “static”, “animated”, “video” */
      sticker_type?: string; /** Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created. */
      needs_repainting?: boolean; /** Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only */
    }>;

    export type AddStickerToSet = Readonly<{
      user_id: number; /** User identifier of sticker set owner */
      name: string; /** Sticker set name */
      sticker: InputSticker; /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. */
    }>;

    export type SetStickerPositionInSet = Readonly<{
      sticker: string; /** File identifier of the sticker */
      position: number; /** New sticker position in the set, zero-based */
    }>;

    export type DeleteStickerFromSet = Readonly<{
      sticker: string; /** File identifier of the sticker */
    }>;

    export type SetStickerEmojiList = Readonly<{
      sticker: string; /** File identifier of the sticker */
      emoji_list: ReadonlyArray<string>; /** A JSON-serialized list of 1-20 emoji associated with the sticker */
    }>;

    export type SetStickerKeywords = Readonly<{
      sticker: string; /** File identifier of the sticker */
      keywords?: ReadonlyArray<string>; /** A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters */
    }>;

    export type SetStickerMaskPosition = Readonly<{
      sticker: string; /** File identifier of the sticker */
      mask_position?: MaskPosition; /** A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. */
    }>;

    export type SetStickerSetTitle = Readonly<{
      name: string; /** Sticker set name */
      title: string; /** Sticker set title, 1-64 characters */
    }>;

    export type SetStickerSetThumbnail = Readonly<{
      name: string; /** Sticker set name */
      user_id: number; /** User identifier of the sticker set owner */
      thumbnail?: InputFile | string; /** A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. */
    }>;

    export type SetCustomEmojiStickerSetThumbnail = Readonly<{
      name: string; /** Sticker set name */
      custom_emoji_id?: string; /** Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. */
    }>;

    export type DeleteStickerSet = Readonly<{
      name: string; /** Sticker set name */
    }>;

    export type AnswerInlineQuery = Readonly<{
      inline_query_id: string; /** Unique identifier for the answered query */
      results: ReadonlyArray<InlineQueryResult>; /** A JSON-serialized array of results for the inline query */
      cache_time?: number; /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
      is_personal?: boolean; /** Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. */
      next_offset?: string; /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
      button?: InlineQueryResultsButton; /** A JSON-serialized object describing a button to be shown above inline query results */
    }>;

    export type AnswerWebAppQuery = Readonly<{
      web_app_query_id: string; /** Unique identifier for the query to be answered */
      result: InlineQueryResult; /** A JSON-serialized object describing the message to be sent */
    }>;

    export type SendInvoice = Readonly<{
      chat_id: number | string; /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      title: string; /** Product name, 1-32 characters */
      description: string; /** Product description, 1-255 characters */
      payload: string; /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
      provider_token: string; /** Payment provider token, obtained via @BotFather */
      currency: string; /** Three-letter ISO 4217 currency code, see more on currencies */
      prices: ReadonlyArray<LabeledPrice>; /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
      max_tip_amount?: number; /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
      suggested_tip_amounts?: ReadonlyArray<number>; /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
      start_parameter?: string; /** Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter */
      provider_data?: string; /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
      photo_url?: string; /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
      photo_size?: number; /** Photo size in bytes */
      photo_width?: number; /** Photo width */
      photo_height?: number; /** Photo height */
      need_name?: boolean; /** Pass True if you require the user's full name to complete the order */
      need_phone_number?: boolean; /** Pass True if you require the user's phone number to complete the order */
      need_email?: boolean; /** Pass True if you require the user's email address to complete the order */
      need_shipping_address?: boolean; /** Pass True if you require the user's shipping address to complete the order */
      send_phone_number_to_provider?: boolean; /** Pass True if the user's phone number should be sent to provider */
      send_email_to_provider?: boolean; /** Pass True if the user's email address should be sent to provider */
      is_flexible?: boolean; /** Pass True if the final price depends on the shipping method */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. */
    }>;

    export type CreateInvoiceLink = Readonly<{
      title: string; /** Product name, 1-32 characters */
      description: string; /** Product description, 1-255 characters */
      payload: string; /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
      provider_token: string; /** Payment provider token, obtained via BotFather */
      currency: string; /** Three-letter ISO 4217 currency code, see more on currencies */
      prices: ReadonlyArray<LabeledPrice>; /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
      max_tip_amount?: number; /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
      suggested_tip_amounts?: ReadonlyArray<number>; /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
      provider_data?: string; /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
      photo_url?: string; /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
      photo_size?: number; /** Photo size in bytes */
      photo_width?: number; /** Photo width */
      photo_height?: number; /** Photo height */
      need_name?: boolean; /** Pass True if you require the user's full name to complete the order */
      need_phone_number?: boolean; /** Pass True if you require the user's phone number to complete the order */
      need_email?: boolean; /** Pass True if you require the user's email address to complete the order */
      need_shipping_address?: boolean; /** Pass True if you require the user's shipping address to complete the order */
      send_phone_number_to_provider?: boolean; /** Pass True if the user's phone number should be sent to the provider */
      send_email_to_provider?: boolean; /** Pass True if the user's email address should be sent to the provider */
      is_flexible?: boolean; /** Pass True if the final price depends on the shipping method */
    }>;

    export type AnswerShippingQuery = Readonly<{
      shipping_query_id: string; /** Unique identifier for the query to be answered */
      ok: boolean; /** Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
      shipping_options?: ReadonlyArray<ShippingOption>; /** Required if ok is True. A JSON-serialized array of available shipping options. */
      error_message?: string; /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
    }>;

    export type AnswerPreCheckoutQuery = Readonly<{
      pre_checkout_query_id: string; /** Unique identifier for the query to be answered */
      ok: boolean; /** Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
      error_message?: string; /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
    }>;

    export type SetPassportDataErrors = Readonly<{
      user_id: number; /** User identifier */
      errors: ReadonlyArray<PassportElementError>; /** A JSON-serialized array describing the errors */
    }>;

    export type SendGame = Readonly<{
      chat_id: number; /** Unique identifier for the target chat */
      message_thread_id?: number; /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
      game_short_name: string; /** Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. */
      disable_notification?: boolean; /** Sends the message silently. Users will receive a notification with no sound. */
      protect_content?: boolean; /** Protects the contents of the sent message from forwarding and saving */
      reply_to_message_id?: number; /** If the message is a reply, ID of the original message */
      allow_sending_without_reply?: boolean; /** Pass True if the message should be sent even if the specified replied-to message is not found */
      reply_markup?: InlineKeyboardMarkup; /** A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game. */
    }>;

    export type SetGameScore = Readonly<{
      user_id: number; /** User identifier */
      score: number; /** New score, must be non-negative */
      force?: boolean; /** Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
      disable_edit_message?: boolean; /** Pass True if the game message should not be automatically edited to include the current scoreboard */
      chat_id?: number; /** Required if inline_message_id is not specified. Unique identifier for the target chat */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the sent message */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    }>;

    export type GetGameHighScores = Readonly<{
      user_id: number; /** Target user id */
      chat_id?: number; /** Required if inline_message_id is not specified. Unique identifier for the target chat */
      message_id?: number; /** Required if inline_message_id is not specified. Identifier of the sent message */
      inline_message_id?: string; /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    }>;


  }

  export interface Bot {
    /**
     * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
     */
    getWebhookInfo(): ITelegramResponse;

    /**
     * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
     */
    getMe(): ITelegramResponse;

    /**
     * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
     */
    logOut(): ITelegramResponse;

    /**
     * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
     */
    close(): ITelegramResponse;

    /**
     * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
     */
    getForumTopicIconStickers(): ITelegramResponse;
    /**
     * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
     */
    getUpdates(params: Telegram.Params.GetUpdates): ITelegramResponse;

    /**
     * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
     */
    setWebhook(params: Telegram.Params.SetWebhook): ITelegramResponse<true>;

    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
     */
    deleteWebhook(params: Telegram.Params.DeleteWebhook): ITelegramResponse<true>;

    /**
     * Use this method to send text messages. On success, the sent Message is returned.
     */
    sendMessage(params: Telegram.Params.SendMessage): ITelegramResponse;

    /**
     * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
     */
    forwardMessage(params: Telegram.Params.ForwardMessage): ITelegramResponse;

    /**
     * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
     */
    copyMessage(params: Telegram.Params.CopyMessage): ITelegramResponse;

    /**
     * Use this method to send photos. On success, the sent Message is returned.
     */
    sendPhoto(params: Telegram.Params.SendPhoto): ITelegramResponse;

    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
     */
    sendAudio(params: Telegram.Params.SendAudio): ITelegramResponse;

    /**
     * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
     */
    sendDocument(params: Telegram.Params.SendDocument): ITelegramResponse;

    /**
     * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
     */
    sendVideo(params: Telegram.Params.SendVideo): ITelegramResponse;

    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
     */
    sendAnimation(params: Telegram.Params.SendAnimation): ITelegramResponse;

    /**
     * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
     */
    sendVoice(params: Telegram.Params.SendVoice): ITelegramResponse;

    /**
     * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
     */
    sendVideoNote(params: Telegram.Params.SendVideoNote): ITelegramResponse;

    /**
     * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
     */
    sendMediaGroup(params: Telegram.Params.SendMediaGroup): ITelegramResponse;

    /**
     * Use this method to send point on the map. On success, the sent Message is returned.
     */
    sendLocation(params: Telegram.Params.SendLocation): ITelegramResponse;

    /**
     * Use this method to send information about a venue. On success, the sent Message is returned.
     */
    sendVenue(params: Telegram.Params.SendVenue): ITelegramResponse;

    /**
     * Use this method to send phone contacts. On success, the sent Message is returned.
     */
    sendContact(params: Telegram.Params.SendContact): ITelegramResponse;

    /**
     * Use this method to send a native poll. On success, the sent Message is returned.
     */
    sendPoll(params: Telegram.Params.SendPoll): ITelegramResponse;

    /**
     * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
     */
    sendDice(params: Telegram.Params.SendDice): ITelegramResponse;

    /**
     * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
     */
    sendChatAction(params: Telegram.Params.SendChatAction): ITelegramResponse<true>;

    /**
     * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
     */
    getUserProfilePhotos(params: Telegram.Params.GetUserProfilePhotos): ITelegramResponse;

    /**
     * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
     */
    getFile(params: Telegram.Params.GetFile): ITelegramResponse;

    /**
     * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    banChatMember(params: Telegram.Params.BanChatMember): ITelegramResponse<true>;

    /**
     * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
     */
    unbanChatMember(params: Telegram.Params.UnbanChatMember): ITelegramResponse<true>;

    /**
     * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
     */
    restrictChatMember(params: Telegram.Params.RestrictChatMember): ITelegramResponse<true>;

    /**
     * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
     */
    promoteChatMember(params: Telegram.Params.PromoteChatMember): ITelegramResponse<true>;

    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
     */
    setChatAdministratorCustomTitle(params: Telegram.Params.SetChatAdministratorCustomTitle): ITelegramResponse<true>;

    /**
     * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    banChatSenderChat(params: Telegram.Params.BanChatSenderChat): ITelegramResponse<true>;

    /**
     * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    unbanChatSenderChat(params: Telegram.Params.UnbanChatSenderChat): ITelegramResponse<true>;

    /**
     * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
     */
    setChatPermissions(params: Telegram.Params.SetChatPermissions): ITelegramResponse<true>;

    /**
     * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
     */
    exportChatInviteLink(params: Telegram.Params.ExportChatInviteLink): ITelegramResponse;

    /**
     * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
     */
    createChatInviteLink(params: Telegram.Params.CreateChatInviteLink): ITelegramResponse;

    /**
     * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
     */
    editChatInviteLink(params: Telegram.Params.EditChatInviteLink): ITelegramResponse;

    /**
     * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
     */
    revokeChatInviteLink(params: Telegram.Params.RevokeChatInviteLink): ITelegramResponse;

    /**
     * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
     */
    approveChatJoinRequest(params: Telegram.Params.ApproveChatJoinRequest): ITelegramResponse<true>;

    /**
     * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
     */
    declineChatJoinRequest(params: Telegram.Params.DeclineChatJoinRequest): ITelegramResponse<true>;

    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    setChatPhoto(params: Telegram.Params.SetChatPhoto): ITelegramResponse<true>;

    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    deleteChatPhoto(params: Telegram.Params.DeleteChatPhoto): ITelegramResponse<true>;

    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    setChatTitle(params: Telegram.Params.SetChatTitle): ITelegramResponse<true>;

    /**
     * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     */
    setChatDescription(params: Telegram.Params.SetChatDescription): ITelegramResponse<true>;

    /**
     * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
     */
    pinChatMessage(params: Telegram.Params.PinChatMessage): ITelegramResponse<true>;

    /**
     * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
     */
    unpinChatMessage(params: Telegram.Params.UnpinChatMessage): ITelegramResponse<true>;

    /**
     * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
     */
    unpinAllChatMessages(params: Telegram.Params.UnpinAllChatMessages): ITelegramResponse<true>;

    /**
     * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
     */
    leaveChat(params: Telegram.Params.LeaveChat): ITelegramResponse<true>;

    /**
     * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
     */
    getChat(params: Telegram.Params.GetChat): ITelegramResponse;

    /**
     * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
     */
    getChatAdministrators(params: Telegram.Params.GetChatAdministrators): ITelegramResponse;

    /**
     * Use this method to get the number of members in a chat. Returns Int on success.
     */
    getChatMemberCount(params: Telegram.Params.GetChatMemberCount): ITelegramResponse;

    /**
     * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
     */
    getChatMember(params: Telegram.Params.GetChatMember): ITelegramResponse;

    /**
     * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     */
    setChatStickerSet(params: Telegram.Params.SetChatStickerSet): ITelegramResponse<true>;

    /**
     * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     */
    deleteChatStickerSet(params: Telegram.Params.DeleteChatStickerSet): ITelegramResponse<true>;

    /**
     * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
     */
    createForumTopic(params: Telegram.Params.CreateForumTopic): ITelegramResponse;

    /**
     * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
     */
    editForumTopic(params: Telegram.Params.EditForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
     */
    closeForumTopic(params: Telegram.Params.CloseForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
     */
    reopenForumTopic(params: Telegram.Params.ReopenForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
     */
    deleteForumTopic(params: Telegram.Params.DeleteForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
     */
    unpinAllForumTopicMessages(params: Telegram.Params.UnpinAllForumTopicMessages): ITelegramResponse<true>;

    /**
     * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
     */
    editGeneralForumTopic(params: Telegram.Params.EditGeneralForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
     */
    closeGeneralForumTopic(params: Telegram.Params.CloseGeneralForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
     */
    reopenGeneralForumTopic(params: Telegram.Params.ReopenGeneralForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
     */
    hideGeneralForumTopic(params: Telegram.Params.HideGeneralForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
     */
    unhideGeneralForumTopic(params: Telegram.Params.UnhideGeneralForumTopic): ITelegramResponse<true>;

    /**
     * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
     */
    unpinAllGeneralForumTopicMessages(params: Telegram.Params.UnpinAllGeneralForumTopicMessages): ITelegramResponse<true>;

    /**
     * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
     */
    answerCallbackQuery(params: Telegram.Params.AnswerCallbackQuery): ITelegramResponse;

    /**
     * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
     */
    setMyCommands(params: Telegram.Params.SetMyCommands): ITelegramResponse<true>;

    /**
     * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
     */
    deleteMyCommands(params: Telegram.Params.DeleteMyCommands): ITelegramResponse<true>;

    /**
     * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
     */
    getMyCommands(params: Telegram.Params.GetMyCommands): ITelegramResponse;

    /**
     * Use this method to change the bot's name. Returns True on success.
     */
    setMyName(params: Telegram.Params.SetMyName): ITelegramResponse<true>;

    /**
     * Use this method to get the current bot name for the given user language. Returns BotName on success.
     */
    getMyName(params: Telegram.Params.GetMyName): ITelegramResponse;

    /**
     * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
     */
    setMyDescription(params: Telegram.Params.SetMyDescription): ITelegramResponse<true>;

    /**
     * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
     */
    getMyDescription(params: Telegram.Params.GetMyDescription): ITelegramResponse;

    /**
     * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
     */
    setMyShortDescription(params: Telegram.Params.SetMyShortDescription): ITelegramResponse<true>;

    /**
     * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
     */
    getMyShortDescription(params: Telegram.Params.GetMyShortDescription): ITelegramResponse;

    /**
     * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
     */
    setChatMenuButton(params: Telegram.Params.SetChatMenuButton): ITelegramResponse<true>;

    /**
     * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
     */
    getChatMenuButton(params: Telegram.Params.GetChatMenuButton): ITelegramResponse;

    /**
     * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
     */
    setMyDefaultAdministratorRights(params: Telegram.Params.SetMyDefaultAdministratorRights): ITelegramResponse<true>;

    /**
     * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
     */
    getMyDefaultAdministratorRights(params: Telegram.Params.GetMyDefaultAdministratorRights): ITelegramResponse;

    /**
     * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     */
    editMessageText(params: Telegram.Params.EditMessageText): ITelegramResponse;

    /**
     * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     */
    editMessageCaption(params: Telegram.Params.EditMessageCaption): ITelegramResponse;

    /**
     * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     */
    editMessageMedia(params: Telegram.Params.EditMessageMedia): ITelegramResponse;

    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     */
    editMessageLiveLocation(params: Telegram.Params.EditMessageLiveLocation): ITelegramResponse;

    /**
     * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
     */
    stopMessageLiveLocation(params: Telegram.Params.StopMessageLiveLocation): ITelegramResponse;

    /**
     * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     */
    editMessageReplyMarkup(params: Telegram.Params.EditMessageReplyMarkup): ITelegramResponse;

    /**
     * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
     */
    stopPoll(params: Telegram.Params.StopPoll): ITelegramResponse;

    /**
     * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.
     */
    deleteMessage(params: Telegram.Params.DeleteMessage): ITelegramResponse<true>;

    /**
     * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
     */
    sendSticker(params: Telegram.Params.SendSticker): ITelegramResponse;

    /**
     * Use this method to get a sticker set. On success, a StickerSet object is returned.
     */
    getStickerSet(params: Telegram.Params.GetStickerSet): ITelegramResponse;

    /**
     * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
     */
    getCustomEmojiStickers(params: Telegram.Params.GetCustomEmojiStickers): ITelegramResponse;

    /**
     * Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.
     */
    uploadStickerFile(params: Telegram.Params.UploadStickerFile): ITelegramResponse;

    /**
     * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
     */
    createNewStickerSet(params: Telegram.Params.CreateNewStickerSet): ITelegramResponse<true>;

    /**
     * Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
     */
    addStickerToSet(params: Telegram.Params.AddStickerToSet): ITelegramResponse<true>;

    /**
     * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
     */
    setStickerPositionInSet(params: Telegram.Params.SetStickerPositionInSet): ITelegramResponse<true>;

    /**
     * Use this method to delete a sticker from a set created by the bot. Returns True on success.
     */
    deleteStickerFromSet(params: Telegram.Params.DeleteStickerFromSet): ITelegramResponse<true>;

    /**
     * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
     */
    setStickerEmojiList(params: Telegram.Params.SetStickerEmojiList): ITelegramResponse<true>;

    /**
     * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
     */
    setStickerKeywords(params: Telegram.Params.SetStickerKeywords): ITelegramResponse<true>;

    /**
     * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
     */
    setStickerMaskPosition(params: Telegram.Params.SetStickerMaskPosition): ITelegramResponse<true>;

    /**
     * Use this method to set the title of a created sticker set. Returns True on success.
     */
    setStickerSetTitle(params: Telegram.Params.SetStickerSetTitle): ITelegramResponse<true>;

    /**
     * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
     */
    setStickerSetThumbnail(params: Telegram.Params.SetStickerSetThumbnail): ITelegramResponse<true>;

    /**
     * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
     */
    setCustomEmojiStickerSetThumbnail(params: Telegram.Params.SetCustomEmojiStickerSetThumbnail): ITelegramResponse<true>;

    /**
     * Use this method to delete a sticker set that was created by the bot. Returns True on success.
     */
    deleteStickerSet(params: Telegram.Params.DeleteStickerSet): ITelegramResponse<true>;

    /**
     * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.
     */
    answerInlineQuery(params: Telegram.Params.AnswerInlineQuery): ITelegramResponse;

    /**
     * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
     */
    answerWebAppQuery(params: Telegram.Params.AnswerWebAppQuery): ITelegramResponse;

    /**
     * Use this method to send invoices. On success, the sent Message is returned.
     */
    sendInvoice(params: Telegram.Params.SendInvoice): ITelegramResponse;

    /**
     * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
     */
    createInvoiceLink(params: Telegram.Params.CreateInvoiceLink): ITelegramResponse;

    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
     */
    answerShippingQuery(params: Telegram.Params.AnswerShippingQuery): ITelegramResponse;

    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     */
    answerPreCheckoutQuery(params: Telegram.Params.AnswerPreCheckoutQuery): ITelegramResponse;

    /**
     * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
     */
    setPassportDataErrors(params: Telegram.Params.SetPassportDataErrors): ITelegramResponse<true>;

    /**
     * Use this method to send a game. On success, the sent Message is returned.
     */
    sendGame(params: Telegram.Params.SendGame): ITelegramResponse;

    /**
     * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
     */
    setGameScore(params: Telegram.Params.SetGameScore): ITelegramResponse;

    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
     */
    getGameHighScores(params: Telegram.Params.GetGameHighScores): ITelegramResponse;
  }
}

export type ITelegramResponse<T = unknown> = Promise<ITelegramResponseData<T>>;

export type ITelegramResponseData<T> = {
  ok: boolean;
  result: T;
}
