---
title: project-express-timelines

---

# project-express-timelines

from the past

in `app.js`

```
var timelinesRouter = require('./routes/timelines');


app.use('/timelines', timelinesRouter);
```

in the timelines router

```
router.get ('/all-emoji', s19.airtableReactionTimelineAll);

router.get('/:id', s19.airtableReactionTimelineIso);

```

then in those files

```
const s19 = require('../summer2019-tools');
var testTimelineJson = require('../../data/timeline-json-example.json');
var Airtable = require('airtable');

module.exports = async function (req, res, next){
  var base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_SUMMER2019_BASE);
  var draftEvents = await s19.airtableTools.findManyByValue({
    base: base,
    table: "ReactionLog",
    maxRecords: 50,
    field: "ReactionType",
    view: "byCreatedTime",
    value: req.params.id,
  });
  console.log(
    JSON.stringify(draftEvents, null, 4)
  );
  var events = draftEvents.map(event => {
    return s19.emojiToEvent(event)
  })
  var timelineJson = {
    "title": {
        "media": {
          "url": 'https://slackhq.com/admin-slacktips/wp-content/uploads/sites/2/2019/01/0_Custom-Slack-Emojis.png',
          "caption": "slack reactions.",
        },
        "text": {
          "headline": `Summer2019 :${req.params.id}: Timeline`,
          "text": `<p>Timeline of all instances of the :${req.params.id}: emoji</p>`
        }
    },
    events: events
  }
  s19.objToFile(timelineJson);
  res.render('timeline', {
    title: "timeline test",
    message: "",
    timeline_json: timelineJson
  })
}

```

and the ejs for the timeline:

```
<!DOCTYPE html>
<html>
  <head>
    <%- include partials/timeline-head.ejs %>
  </head>
  <body>
    <%- include partials/basic-title.ejs %>
    <%- include partials/timeline-div.ejs %>
    <%- include partials/timeline-script.ejs %>
  </body>
</html>

```

and those partials

```
<head>
  <title><%= title %></title>
  <link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
  <link rel='stylesheet' href='/stylesheets/tl-style.css' />
  <script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
</head>

<body>
    <h1><%= title %></h1>
    <div id='timeline-embed' style="width: 100%; height: 600px"></div>
    <script type="text/javascript">
      window.timeline = new TL.Timeline('timeline-embed', <%- JSON.stringify(timeline_json) %>);
    </script>
</body>
```

then some sort of converter:

```
// ready to receive draft events from summer2019 airtable
var moment = require('moment-timezone');

module.exports = function(draftEvent) {
  console.log("!!!!!!!!!!!!!!!!!!!!!\ncreating revised event");
  var revisedEvent = {
      "media": {
        "url": 'https://slackhq.com/admin-slacktips/wp-content/uploads/sites/2/2019/01/0_Custom-Slack-Emojis.png',
        "caption": "emojis (better images soon)",
        "credit": "slack"
      },
      "start_date": {
        "second": moment(draftEvent.fields.AirtableCreatedTime).tz('America/New_York').format('s'),
        "minute": moment(draftEvent.fields.AirtableCreatedTime).tz('America/New_York').format('m'),
        "hour": moment(draftEvent.fields.AirtableCreatedTime).tz('America/New_York').format('H'),
        "month": moment(draftEvent.fields.AirtableCreatedTime).tz('America/New_York').format('M'),
        "day": moment(draftEvent.fields.AirtableCreatedTime).tz('America/New_York').format('D'),
        "year": moment(draftEvent.fields.AirtableCreatedTime).tz('America/New_York').format('YYYY'),
      },
      "text": {
        "headline": draftEvent.fields.ReactionType,
        "text": `reference to a ${draftEvent.fields.ReactionType} at ${draftEvent.fields.AirtableCreatedTime} in channel ${draftEvent.fields.Channel}.  If it was made by a user, that user's name is ${draftEvent.fields.UserName}`
      }
  }
  console.log(JSON.stringify(revisedEvent));
  return revisedEvent
}
```
