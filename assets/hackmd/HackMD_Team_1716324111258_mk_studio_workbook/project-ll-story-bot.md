---
title: project-ll-story-bot
tags: [projects]

---

---
tags: projects
---

# project-ll-story-bot

(aka report-bot)

## plan

* pull from individual channels as things are posted
* perhaps allow going back in time to capture everything
* search for all embedded links and handle them
* search for all attached files and handle them
* maybe
    * all emojis to determine how an attachment or post or link is handled?
    * work with [remote files?](https://api.slack.com/messaging/files/remote)
* 



## the steps

the steps (for now)

### start the slack project

* start the repo and connect to local project
* npm init
* add oauth scopes
* turn on socket mode
* copy tokens and paste into `.env` file
    * SLACK_BOT_TOKEN
    * SLACK_SIGNING_SECRET
    * SLACK_APP_TOKEN (you get this when you turn on socket mode)
    * WEBHOOK?
* subscribe to events
* add a slash command
* `npm install @slack/bolt`
* add basic content to `app.js` to test

```
const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    port: process.env.PORT || 3000
  });
  
  app.message('hello', async ({ message, say }) => {
    await say(`Hey there <@${message.user}>!`);
  });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
```

* now run, add to channel, and say "hello" to test
* 


next

[bolt docs](https://slack.dev/bolt-js/tutorial/getting-started)

