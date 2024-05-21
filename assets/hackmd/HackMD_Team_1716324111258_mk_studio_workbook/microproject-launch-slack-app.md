---
title: microproject-launch-slack-app

---

# microproject-launch-slack-app

## starting up a slack app

### npm and github

* start the repo and connect to local project
* npm init

### create the app in the slack api interface

* on the [slack api page](https://api.slack.com/)
    * create the app and connect it to your development workspace
    * add bot oauth scopes
        * channels:history
        * channels:read
        * chat:write
        * emoji:read
        * files:read
        * files:write
        * im:history
        * im:read
        * im:write
        * pins:read
        * pins:write
        * reactions:read
        * reactions:write
        * reminders:read
        * reminders:write
    * add user scopes (for this project at least)
        * files:read
        * files:write
    * turn on socket mode (you'll get your `SLACK_APP_TOKEN` as you do this)
    * copy tokens and paste into `.env` file
        * `SLACK_BOT_TOKEN`
        * `SLACK_SIGNING_SECRET`
        * `SLACK_APP_TOKEN` (you get this when you turn on socket mode)
        * `SLACK_USER_TOKEN`
        * `SLACK_CLIENT_ID`
        * `SLACK_CLIENT_SECRET`
* subscribe to events
    * `message.im`
    * `file_created`
    * `file_shared`
    * `file_unshared`
    * `file_public`
    * `file_change`
    * `file_deleted`
    * `pin_added`
    * `pin_removed`
    * `reaction_added`
    * `reaction_removed`
    * `message.channels`
    * `app_home_opened`
* add a slash command
    * `/switch` as the first

### create a basic bolt app

* `npm install @slack/bolt dotenv`
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

### log the json for events of all sorts

Let's start subscribing to events. On the Slack API page add
* `file_change`
* `file_created`
* `file_deleted`
* `file_public`
* `file_shared`
* `file_unshared`
* `app_home_opened`
* `message.channels`
* `message.im`
* `pin_added`
* `pin_removed`
* `reaction_added`
* `reaction_removed`

Then lets just start listening for all of these and log the JSON out to the console. We'll work on handling all these things in different ways later.

So for events of all sorts we can do this

```
app.event(/.*/, ({ event })=>{
    console.log(JSON.stringify(event, null, 4))
});
```

And for commands and messages we can do something similar: 

```
app.message(/.*/, async ({ message })=> {
    console.log(JSON.stringify(message, null, 4))
});

app.command(/.*/, async ({ ack, command }) => {
    ack()
    console.log(JSON.stringify(command, null, 4))
});

```

This will let us observe everything Slack is sending our way. Once we get a sense of its structure and content we can start figuring out how to handle it all.

But this is something we'll be doing in all of the microprojects below.