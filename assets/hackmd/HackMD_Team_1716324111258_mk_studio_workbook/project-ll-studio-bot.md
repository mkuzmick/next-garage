---
title: project-ll-studio-bot
tags: [projects, ' slack', ' bot', ' studio']

---

---
tags: projects, slack, bot, studio
---

# project-ll-studio-bot

github [repo](https://github.com/learninglab-studio/ll-studio-bot) | [slack api page](https://api.slack.com/apps/A02MHDNAPA9/general?) | [airtable base](https://airtable.com/appa9gloKBb8PdFAE/tbllDvzw0FHblrScL/viw04uTTEW28FCBDl?blocks=hide) | [mk work](/ZAPalPndRjuhuZfALVsGRg)

Some bullets:
* This project will involve building a slack app that will run relatively constantly in socket mode on a machine in the LL Studio. 
* We will install it on the LL Studio Slack so that it can't access the full Bok Slack. 
* The fact that it will be running on a local LL machine will enable it to perform relatively complex operations in the Studio, like
    * switching cameras on the ATEMs
    * getting video and photo metadata with ffprobe
    * converting videos to gifs with FFmpeg
    * catching poorly-sized images and videos and compressing with FFmpeg
    * getting media from Slack to the studio machines for dynamic activities
    * connecting the world of Slack to command-line tools more broadly (ultimately making the studio Slack a more reliable interface for certain scripts than the actual command line, given that many of our users don't always have all the standard dependencies installed already)

We will pursue this project in the days leading up to January 24, 2022, hoping to launch a stable version that week and train all staff and fellows on the functions we're able to get running by that date.

MVP functions:
* by **January 24, 2022**, listen for image uploads and dm markdown for public image link to the user who uploaded it (may split this off into an ll-image-bot for the main Slack?)

Additional goals:
* serve as a key stage in the development process, once no longer a private project, but not yet ready for integration in the Bok Slack.
* creat gifs
* optimize images and videos
* create galleries
* peakGifs
* integrate with workflow scripts 
* take key elements and port to main Bok apps:
    * [project-ll-image-bot](/nRHoq0AmQRK4De0xWUd8Eg)
    * [project-ll-project-bot](/utoPx6IdQnuVimXrZ8xBgQ)
    * [project-ll-story-bot](/Kw0e8HK9Rn2iJPqhN_-UjQ) 
    * [project-ll-resource-bot](/sY8icXJFSvmRKPY3TxWMBA) 


## completed microprojects
* [microproject-launch-slack-app](/wB3V_9ZuTZyeJW7PskHp2w): just get the repo started and get a basic slack app running with [@slack/bolt](https://www.npmjs.com/package/@slack/bolt)
* [microproject-ll-bots-downloading-slack-files](/8XktiqXyRDG-HTd46F1Hkw): there's no built-in method for downloading private files, so we need to do that with axios
* [microproject-slack-image-to-airtable-and-markdown](/U7FUHelXSGKc8hp-Uwm76A): here we listen for images hitting a `#create-external-links` Slack channel, send these images to airtable, then DM the user the markdown for these images. This is the MVP for the [ll-image-bot](/nRHoq0AmQRK4De0xWUd8Eg) project.

## workflow integration plans

Many options here, but let's log some of the basic moves:
* on ingest
    * new record for each media file
    * old names and new names and ffprobe data logged to airtable
    * for stills, exif data to Airtable and Slack
    * peakGif to Airtable and Slack
    * peakStill to Airtable and Slack
    * randomStills to Slack for interactions
    * buttons for requesting surrounding or adjacent media
    * buttons for simple still augmentation by filter
    * varying exposure thumbnails for selection
    * autocreate MC_CC_Ex
    * autocreate selects
    * autocreate projects for students on list or sub-appointments within shoot
    * autocreate projects by way of Slack live logs
    * slack in video mechanic
    * 

## active microprojects

* [microproject-ll-studio-bot-app-home](/yroV_UenSy-mWjT9BzKcPg)
* [microproject-ll-studio-bot-slash-how-to](/isnINNvqSUC2lUinghZfDw)
* [microproject-markdown-in-interactive-comment-threads](/TMu2wMLrRsKK1TAy2-54yA)

## up next

* [microproject-ll-studio-bot-send-to-inbox](/1sO0JhI9Sh2d-yqD1cH25w)
* [microproject-ll-studio-bot-photo-tags-and-data](/L1axpkvLSt6OpqO30R4UZQ)
* [microproject-ll-studio-bot-events](/lDDQK7lAR-KOy9fuxnPD5g)
* [microproject-ll-studio-bot-actions](/2QWlWbzgQg6GJav-qw-zmQ)
* [microproject-ll-studio-bot-views](/J2bpEvLyQW69JVly-NpXnQ)
* [microproject-ll-studio-bot-reactions](/VeUQHqmwTuCEqj7CMACmBA)
* [microproject-ll-studio-bot-slash-commands](/tcx62w70QWGWqUiNFrQxfw)
* [microproject-ll-studio-bot-tasks-and-projects](/qNad3WdlRH6Ul6zGPqgGIQ)
* [microproject-ll-studio-bot-resource-handler](/vOpIxqOLTwarYbotNw38eQ)
* [microproject-ll-studio-bot-dynamic-menus](/oFIHoqqBQZqCtEuNrccOyg)
* take key elements and port to main Bok apps:
    * [project-ll-image-bot](/nRHoq0AmQRK4De0xWUd8Eg)
    * [project-ll-project-bot](/utoPx6IdQnuVimXrZ8xBgQ)
    * [project-ll-story-bot](/Kw0e8HK9Rn2iJPqhN_-UjQ)
    * [project-ll-resource-bot](/sY8icXJFSvmRKPY3TxWMBA) 
    * [project-ll-logger-bot](/w-Cqd6FPQ4-0JB0_aeNGHg)
    * [project-ll-how-to-bot](/N3baV5O5QZWq5eHdX7rwag)

    





