---
title: microproject-ll-bots-downloading-slack-files
tags: [microprojects, ' bot', ' slack', ' download', ' fetch']

---

---
tags: microprojects, bot, download, slack, fetch
---

# microproject-ll-bots-downloading-slack-files

Let's work at getting our slackbot to download files. For more context, here is the [major project doc](https://hackmd.io/-ACxwUVYQcKOh3NG-195dA) that this microproject emerged from.

We're not quite ready to go all in on ESM, so the new fetch isn't an option. Let's just go with axios.

```
const downloadFromSlack = async ({url, path, token}) => {
    const writer = fs.createWriteStream(path)
    const response = await axios({
        url,
        method: 'GET',
        headers: { Authorization: `Bearer ${token ? token : process.env.SLACK_BOT_TOKEN}` },
        responseType: 'stream'
    })
    response.data.pipe(writer)
    return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
    })
}
```