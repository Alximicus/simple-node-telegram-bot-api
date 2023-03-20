# Simple Node Telegram Bot API

## Overview

### Motivation

There are many good packages for creating Telegram bots in Node.js environment but some of them don't have typings (if we want to use TypeScript as a main syntax), some of them outdated and probably overloaded a bit.

I want to keep this package as small as possible - to have a possibility to use it as Telegram API, but not as framework for creating bots.

It will be useful for:

1. Creating some telegram notifiers, alerts, etc. where you don't need to listen updates, have some input state.
2. Creating your own framework - this package can be used as simple API layer.
3. You can use telegram API typings for all your purposes. 

## Usage

Simple usage:

```tsx
import { TelegramAPI } from '@alximicus/simple-node-telegram-bot-api';

const myTgAPI = new TelegramAPI('your_bot_token');

myTgAPI.getMe().then(({ result }) => {
  console.log(result); // Telegram.User object
});

myTgAPI.sendMessage({
  chat_id: 123456789,
  text: `Hello, it's me, your alert!`,
});
```

## Installation

NPM:

`npm i @alximicus/simple-node-telegram-bot-api`

Yarn:

`yarn add @alximicus/simple-node-telegram-bot-api`

## License

MIT License

Copyright (c) 2023 Alximicus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
