---
title: microproject-slack-image-to-airtable-and-markdown

---

# microproject-slack-image-to-airtable-and-markdown

in this microproject, we'll 
1. listen for `file_shared` events in a specific Slack channel
2. create public links for these events
3. send the code for embedding these images in markdown to the user as a DM from the bot
4. create a record for the image in Airtable (and upload it there too)

### handle file events

let's start with files that users upload to Slack.

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02RZL481BJ/3-way-007.jpg?pub_secret=a64d96a131)

Let's say someone sends a file like the one above to a Slack channel for sharing public photos. Why don't we create the external link for them and then slack them the markdown for embedding the image in a doc they're working on.

First let's create a function that creates the actual URL from the weird URLs Slack sends us. Something like this:

```
function makeSlackImageURL (permalink, permalink_public) {
    let secrets = (permalink_public.split("slack-files.com/")[1]).split("-")
    let suffix = permalink.split("/")[(permalink.split("/").length - 1)]
    let filePath = `https://files.slack.com/files-pri/${secrets[0]}-${secrets[1]}/${suffix}?pub_secret=${secrets[2]}`
    return filePath
  }
```

Future users of this tutorial are welcome to improve on this!!

Let's now create the function that checks the event type and `channel_id` and then creates and sends back the true external URL.

```
exports.file = async ({ event, client}) => {
    if (event.type == "file_shared" && event.channel_id == process.env.SLACK_EXTERNAL_LINKS_CHANNEL) {
      try {
        console.log(`\nhere's the event:\n\n${JSON.stringify(event, null, 4)}`)
        const result = await client.files.info({
          file: event.file_id,
        });
        console.log(`\nhere's the result:\n\n${JSON.stringify(result, null, 4)}`)
        if (result.file.public_url_shared !== true) {
          const publicResult = await client.files.sharedPublicURL({
            token: process.env.SLACK_USER_TOKEN,
            file: event.file_id,
          });
          console.log(`\nhere's the public result:\n\n${JSON.stringify(publicResult, null, 4)}`)  
          const mdPostResult = await client.chat.postMessage({
            channel: event.user_id,
            text: `posted a photo! but it was already public: ${makeSlackImageURL(result.file.permalink, result.file.permalink_public)}.\n\nhere's your markdown:\n\`\`\`![alt text](${makeSlackImageURL(result.file.permalink, result.file.permalink_public)})\`\`\``
          })
        } else {
          console.log(`file was already public: ${result.file.url_private} is what we'd handle`);
          const mdPostResult = await client.chat.postMessage({
            channel: event.user_id,
            text: `posted a photo! but it was already public: ${makeSlackImageURL(result.file.permalink, result.file.permalink_public)}.\n\nhere's your markdown:\n\`\`\`![alt text](${makeSlackImageURL(result.file.permalink, result.file.permalink_public)})\`\`\``
          })
        }
        
      }
      catch (error) {
        console.error(error);
      }
    }
  }
  
  
  function makeSlackImageURL (permalink, permalink_public) {
    let secrets = (permalink_public.split("slack-files.com/")[1]).split("-")
    let suffix = permalink.split("/")[(permalink.split("/").length - 1)]
    let filePath = `https://files.slack.com/files-pri/${secrets[0]}-${secrets[1]}/${suffix}?pub_secret=${secrets[2]}`
    return filePath
  }

```

Now we can do this again

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R6TX2X6Z/3-way-003.jpg?pub_secret=2ab60f3116)

and again

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R9U95SQ3/3-way-005.jpg?pub_secret=813898a500)

and again 

![alt text](https://files.slack.com/files-pri/T02MA9F7340-F02R9U9778B/3-way-007.jpg?pub_secret=5f9ed72bb3)

and now we'll go ahead and upload that image to Airtable too while we're at it...


### send to airtable

now let's bring airtable into the mix

`npm i airtable`

We'll create a simple function for adding a single record to Airtable

```
const Airtable = require(`airtable`)

module.exports.addRecord = async function(options){
  var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(options.baseId);
  var airtableResult = await base(options.table).create(options.record).then(result => {
    console.log("saved to airtable");
    return result;
  })
    .catch(err => {
      console.error(err);
      return;
    });
  return airtableResult;
}
```

and now the whole event-handling function looks like this:


```
exports.file = async ({ event, client}) => {
    if (event.type == "file_shared" && event.channel_id == process.env.SLACK_EXTERNAL_LINKS_CHANNEL) {
      try {
        console.log(`\nhere's the event:\n\n${JSON.stringify(event, null, 4)}`)
        const result = await client.files.info({
          file: event.file_id,
        });
        console.log(`\nhere's the result:\n\n${JSON.stringify(result, null, 4)}`)
        if (result.file.public_url_shared !== true) {
          const publicResult = await client.files.sharedPublicURL({
            token: process.env.SLACK_USER_TOKEN,
            file: event.file_id,
          });
          console.log(`\nhere's the public result:\n\n${JSON.stringify(publicResult, null, 4)}`)  
          const mdPostResult = await client.chat.postMessage({
            channel: event.user_id,
            text: `posted a photo! but it was already public: ${makeSlackImageURL(result.file.permalink, result.file.permalink_public)}.\n\nhere's your markdown:\n\`\`\`![alt text](${makeSlackImageURL(result.file.permalink, result.file.permalink_public)})\`\`\``
          })
          const airtableResult = await airtableTools.addRecord({
            baseId: process.env.AIRTABLE_STUDIO_BOT_BASE,
            table: "PublicImages",
            record: {
                  "Name": result.file.title,
                  "SlackEventJSON": JSON.stringify(event, null, 4),
                  "SlackFileInfoJSON": JSON.stringify(result, null, 4),
                  "ImageFiles": [
                    {
                      "url": makeSlackImageURL(result.file.permalink, result.file.permalink_public)
                    }
                  ],
                  "Status": "no-status"
                
            }
          })
        } else {
          console.log(`file was already public: ${result.file.url_private} is what we'd handle`);
          const mdPostResult = await client.chat.postMessage({
            channel: event.user_id,
            text: `posted a photo! but it was already public: ${makeSlackImageURL(result.file.permalink, result.file.permalink_public)}.\n\nhere's your markdown:\n\`\`\`![alt text](${makeSlackImageURL(result.file.permalink, result.file.permalink_public)})\`\`\``
          })
        }
        
      }
      catch (error) {
        console.error(error);
      }
    } else {
      try {
        yellow(`got some other random file event:`);
        magenta(event)
      }
      catch (error) {
        console.error(error);
      }
    }
  }
  
  
  function makeSlackImageURL (permalink, permalink_public) {
    let secrets = (permalink_public.split("slack-files.com/")[1]).split("-")
    let suffix = permalink.split("/")[(permalink.split("/").length - 1)]
    let filePath = `https://files.slack.com/files-pri/${secrets[0]}-${secrets[1]}/${suffix}?pub_secret=${secrets[2]}`
    return filePath
  }

```

## next

(pursued in other microprojects. head back to the [main project doc](https://hackmd.io/-ACxwUVYQcKOh3NG-195dA) to see links for these when they're available)
* handle extra data
    * who posted?
    * exifdata
* download files
    * [microproject-ll-bots-downloading-slack-files](/8XktiqXyRDG-HTd46F1Hkw)