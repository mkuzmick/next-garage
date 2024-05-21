---
title: microproject-handle-reactions

---

# microproject-handle-reactions

handle reactions, adding post content to the reaction list (kind of a cache)

```
{
  "type": "reaction_added",
  "user": "U02LZ75DCHF",
  "item": {
      "type": "message",
      "channel": "C02SF72GWUB",
      "ts": "1642676172.003200"
  },
  "reaction": "rocket",
  "item_user": "U02LLKE3QDR",
  "event_ts": "1642683889.004700"
}
```

need to get message info, right? or just log ts and look up in Airtable?

```
let message;

// Fetch conversation history using the ID and a TS from the last example
async function fetchMessage(id, ts) {
  try {
    // Call the conversations.history method using the built-in WebClient
    const result = await app.client.conversations.history({
      // The token you used to initialize your app
      token: "xoxb-your-token",
      channel: id,
      // In a more realistic app, you may store ts data in a db
      latest: ts,
      // Limit results
      inclusive: true,
      limit: 1
    });

    // There should only be one result (stored in the zeroth index)
    message = result.messages[0];
    // Print message text
    console.log(message.text);
  }
  catch (error) {
    console.error(error);
  }
}

// Fetch message using a channel ID and message TS
fetchMessage("C12345", "15712345.001500");
```


check out [retrieving threads](https://api.slack.com/messaging/retrieving) ultimately. This may be the most appropriate thing for putting together a package related to a single media post in show-your-work.

