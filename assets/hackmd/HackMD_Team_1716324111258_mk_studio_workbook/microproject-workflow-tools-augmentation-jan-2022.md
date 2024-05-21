---
title: microproject-workflow-tools-augmentation-jan-2022

---

# microproject-workflow-tools-augmentation-jan-2022

* change array of sources
* we need to track the content of the source if possible
    * could this be done programmatically? where do we "hear" what is connected to the hyperdecks?


1. ingest Friday footage with current scripts, but also save a copy as-is on an SSD

* what goes in the tools and what goes in the bot?
* ingest
* deliverables
* m2s
* the-tools
    * reaction handling
    * gifs from videos
    * peakGifs
    * autoStills
    * shootData recorded
* ll-studio-bot
* equipment
    * stage
    * hyperdecks
    * synology in workflow


## Tests and Tasks
* ref out and ref in and cam sync
* can 16ch PCM go with h264 files in .mov wrapper?
* install hyperdeck software ever and test interface
* test ethernet through hubs
* change array of sources

## main elements

### initialize-shoot.js

* get any info from the airtable?
* create shoot-folders based on source-array?
    * potentially multiselect for sources in shoot-record . . . handle by bot?

### ingest.js

* create main `ingest.js` script
* check if shoot json already exists, if so, use it
* if no shoot json, probe all files, 
* create and write `shoot.json` in root of shootfolder, including overall shoot info and array of file json
    * for shoot include array of sources, number of sources, start date, end date, duration of all footage, size of all footage, clocktime and timecode, etc
* if new filenames !== old filenames, rename
* send shoot json to airtable as shoot record
* send files to airtable as file records? 
    * even for stills?
* then optionals
    * create peakGif for each file
        * add to the json?
        * add to shoot and file records?
    * create autoStills for each file
    * create MC_CC_Ex for each multicam shoot
        * potentially prompt for info on which cam goes where
    * create "contact sheet" of 10-still strip for each source?
        * could be helpful for some of the above operations
    * send all above to Airtable
    * send all above to Slack
        * with buttons that enable updates, transformations and curation



### Studio Bot
* public gif and markdown from uploaded video file
    * accept (and validate) name/id for the gif and make that available by `/bokgif` slash command (mechanics for this identical to alt-text)
* peakGif from 2-5 min video?
* stills from video
    * fcpxml listener on studio-bot converts xml to stills records
    * then we create the stills from those records

### Hyperdeck work
* netcat
    * https://www.npmjs.com/package/netcat
    * https://www.npmjs.com/package/nc
    * https://forum.blackmagicdesign.com/viewtopic.php?f=4&t=69254
* ftp
    * https://apple.stackexchange.com/questions/320781/missing-ftp-command-line-tool-on-macos


### FFMPEG tests
* https://www.npmjs.com/package/fluent-ffmpeg
* https://elements.heroku.com/buildpacks/jonathanong/heroku-buildpack-ffmpeg-latest
* https://www.npmjs.com/package/ffmpeg-static
* 

### Gear
* ref out and ref in of hyperdecks daisy-chained?
* teranex mini rack shelf
* more of the minis, really



