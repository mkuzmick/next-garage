# command line tools for video producers

## why?

let's think of repetitive tasks you need to do many many times in the video production process:
* change file type or extension
* transcoding
* generating proxy files
* logging
    * summary of what it is
    * what the good bits are
    * what clip it's on
* logging or capturing metadata
* renaming files according to a naming convention
    * for instance our convention is:
        * `YYYYMMDD.001.Project.Subproject.Camera.001.mov`
* automating the production of thumbnails or other automatically generated media content
* interacting with APIs for other tools like Google Docs, Airtable, etc.
* interacting with "XML" files, which can be video timelines of various sorts


## the steps tonight

* open up Terminal
* install a package manager
* 



## package management tools

* homebrew (`brew`) for mac
* chocolatey (`choco`) for pc
* npm for nodejs
* pip for python 

homebrew install code
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

`brew install ffmpeg`
`choco install ffmpeg`
`choco install youtube-dl`




## video and photo manipulation tools

* [ffmpeg](https://www.ffmpeg.org/)
* [youtube-dl](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme)
* [imagemagick](https://imagemagick.org/index.php)
* and more!

## basic command structures

`ffprobe -v quiet -print_format json -show_format -show_streams "my-movie.mp4" > "my-movie.mp4.json"`


ffprobe -v quiet -print_format json -show_format -show_streams "/Users/mk/Development/dgmd-40-20220215/demo/hyperdeck2-test.mp4" > "/Users/mk/Development/dgmd-40-20220215/demo/hyperdeck2-test.mp4.json"


## a basic shell script

```
#!/bin/bash

for file in $1/*
do
  echo $file
  ffmpeg -i $file -ss 00:00:01.000 -vframes 1 "$1/$(basename $file)_thumbnail.png"
done
```

## sample xml

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>

<fcpxml version="1.10">
    <resources>
        <format id="r1" name="FFVideoFormat1080p24" frameDuration="100/2400s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r2" name="Lanier_Illustrations_1" uid="C70F07B64019C86A4F76B448FF8B923C" start="0s" duration="242/30s" hasVideo="1" format="r3" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="48000">
            <media-rep kind="original-media" sig="C70F07B64019C86A4F76B448FF8B923C" src="file:///Volumes/sdx.500.x/Lanier_Illustrations_1.mov"/>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>AAC</string>
                        <string>HEVC</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:35:52 -0500"/>
            </metadata>
        </asset>
        <format id="r3" name="FFVideoFormat1080p30" frameDuration="100/3000s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r4" name="Screen Shot 2021-05-22 at 11.30.54 AM" uid="F7D0048F672DB6603CA1F9CA9785DDE3" start="0s" duration="0s" hasVideo="1" format="r5" videoSources="1">
            <media-rep kind="original-media" sig="F7D0048F672DB6603CA1F9CA9785DDE3" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/Screen%20Shot%202021-05-22%20at%2011.30.54%20AM.png">
                <bookmark>Ym9va4gDAAAAAAQQMAAAALmBjoFTqdCfLatcls9YkSQYAfZLi1+L//b/dinnmQxseAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgApAAAAAQEAAFNjcmVlbiBTaG90IDIwMjEtMDUtMjIgYXQgMTEuMzAuNTQgQU0ucG5nAAAAHAAAAAEGAAAQAAAAIAAAACwAAAA8AAAAVAAAAGQAAAB0AAAACAAAAAQDAAAwXQAAAAAAAAgAAAAEAwAAOoQAAAAAAAAIAAAABAMAAOpYBgAAAAAACAAAAAQDAABdawYAAAAAAAgAAAAEAwAAXUsvAQAAAAAIAAAABAMAADGAKAEAAAAACAAAAAQDAAAciSgBAAAAABwAAAABBgAAzAAAANwAAADsAAAA/AAAAAwBAAAcAQAALAEAAAgAAAAABAAAQcPSMOtlsEAYAAAAAQIAAAEAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAgAAAAEAwAABQAAAAAAAAAEAAAAAwMAAPUBAAAIAAAAAQkAAGZpbGU6Ly8vBAAAAAEBAABta18wCAAAAAQDAAAAkIKW5wAAAAgAAAAABAAAQcOwFBeAAAAkAAAAAQEAAEM1NjdERTA4LTYwRTctNDg5NS1BQjIxLTg5OTA3NjBEMDVDQRgAAAABAgAAgQAAAAEAAADvEwAAAQAAAAAAAAAAAAAAAQAAAAEBAAAvAAAAAAAAAAEFAAAaAAAAAQEAAE5TVVJMRG9jdW1lbnRJZGVudGlmaWVyS2V5AAAEAAAAAwMAAAPAAADYAAAA/v///wEAAAAAAAAAEQAAAAQQAACoAAAAAAAAAAUQAAA8AQAAAAAAABAQAABwAQAAAAAAAEAQAABgAQAAAAAAAAIgAAA0AgAAAAAAAAUgAACsAQAAAAAAABAgAAC8AQAAAAAAABEgAADoAQAAAAAAABIgAADIAQAAAAAAABMgAADYAQAAAAAAACAgAAAUAgAAAAAAADAgAABAAgAAAAAAAAHAAACQAQAAAAAAABHAAAAgAAAAAAAAABLAAACgAQAAAAAAABDQAAAEAAAAAAAAAEgCAIBsAgAAAAAAAA==</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="Color LCD"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:44:07 -0500"/>
                <md key="com.apple.proapps.spotlight.kMDItemOrientation" value="0"/>
            </metadata>
        </asset>
        <format id="r5" name="FFVideoFormatRateUndefined" width="1658" height="930"/>
        <asset id="r6" name="Infographic" uid="287F944F253965EC93E689DFC569A53E" start="0s" duration="178178/30000s" hasVideo="1" format="r7" videoSources="1">
            <media-rep kind="original-media" sig="287F944F253965EC93E689DFC569A53E" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/Infographic.mov">
                <bookmark>Ym9va2wDAAAAAAQQMAAAAMqqwKCVK7ArnkmO6E7XVUHXVnXqMmiB4x/CkYviF6NGXAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgAPAAAAAQEAAEluZm9ncmFwaGljLm1vdgAcAAAAAQYAABAAAAAgAAAALAAAADwAAABUAAAAZAAAAHQAAAAIAAAABAMAADBdAAAAAAAACAAAAAQDAAA6hAAAAAAAAAgAAAAEAwAA6lgGAAAAAAAIAAAABAMAAF1rBgAAAAAACAAAAAQDAABdSy8BAAAAAAgAAAAEAwAAMYAoAQAAAAAIAAAABAMAAEuAKAEAAAAAHAAAAAEGAACwAAAAwAAAANAAAADgAAAA8AAAAAABAAAQAQAACAAAAAAEAABBw9Ivc8OM7RgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAACAAAAAQDAAAFAAAAAAAAAAQAAAADAwAA9QEAAAgAAAABCQAAZmlsZTovLy8EAAAAAQEAAG1rXzAIAAAABAMAAACQgpbnAAAACAAAAAAEAABBw7AUF4AAACQAAAABAQAAQzU2N0RFMDgtNjBFNy00ODk1LUFCMjEtODk5MDc2MEQwNUNBGAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAABAAAAAQEAAC8AAAAAAAAAAQUAABoAAAABAQAATlNVUkxEb2N1bWVudElkZW50aWZpZXJLZXkAAAQAAAADAwAAAMAAANgAAAD+////AQAAAAAAAAARAAAABBAAAIwAAAAAAAAABRAAACABAAAAAAAAEBAAAFQBAAAAAAAAQBAAAEQBAAAAAAAAAiAAABgCAAAAAAAABSAAAJABAAAAAAAAECAAAKABAAAAAAAAESAAAMwBAAAAAAAAEiAAAKwBAAAAAAAAEyAAALwBAAAAAAAAICAAAPgBAAAAAAAAMCAAACQCAAAAAAAAAcAAAHQBAAAAAAAAEcAAACAAAAAAAAAAEsAAAIQBAAAAAAAAENAAAAQAAAAAAAAALAIAgFACAAAAAAAA</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>Apple ProRes 422</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:35:52 -0500"/>
            </metadata>
        </asset>
        <format id="r7" name="FFVideoFormat1080p2997" frameDuration="1001/30000s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r8" name="Main Comp_1" uid="72F01702B02308C6770CAE65621E4893" start="0s" duration="121121/30000s" hasVideo="1" format="r9" videoSources="1">
            <media-rep kind="original-media" sig="72F01702B02308C6770CAE65621E4893" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/Main%20Comp_1.mov">
                <bookmark>Ym9va2wDAAAAAAQQMAAAAEzoGjYeKzGpX7/fpR4aEB4ENo7dzouSDRtIGyFCNOaUXAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgAPAAAAAQEAAE1haW4gQ29tcF8xLm1vdgAcAAAAAQYAABAAAAAgAAAALAAAADwAAABUAAAAZAAAAHQAAAAIAAAABAMAADBdAAAAAAAACAAAAAQDAAA6hAAAAAAAAAgAAAAEAwAA6lgGAAAAAAAIAAAABAMAAF1rBgAAAAAACAAAAAQDAABdSy8BAAAAAAgAAAAEAwAAMYAoAQAAAAAIAAAABAMAAHqAKAEAAAAAHAAAAAEGAACwAAAAwAAAANAAAADgAAAA8AAAAAABAAAQAQAACAAAAAAEAABBw9IvdjXVdxgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAACAAAAAQDAAAFAAAAAAAAAAQAAAADAwAA9QEAAAgAAAABCQAAZmlsZTovLy8EAAAAAQEAAG1rXzAIAAAABAMAAACQgpbnAAAACAAAAAAEAABBw7AUF4AAACQAAAABAQAAQzU2N0RFMDgtNjBFNy00ODk1LUFCMjEtODk5MDc2MEQwNUNBGAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAABAAAAAQEAAC8AAAAAAAAAAQUAABoAAAABAQAATlNVUkxEb2N1bWVudElkZW50aWZpZXJLZXkAAAQAAAADAwAAAcAAANgAAAD+////AQAAAAAAAAARAAAABBAAAIwAAAAAAAAABRAAACABAAAAAAAAEBAAAFQBAAAAAAAAQBAAAEQBAAAAAAAAAiAAABgCAAAAAAAABSAAAJABAAAAAAAAECAAAKABAAAAAAAAESAAAMwBAAAAAAAAEiAAAKwBAAAAAAAAEyAAALwBAAAAAAAAICAAAPgBAAAAAAAAMCAAACQCAAAAAAAAAcAAAHQBAAAAAAAAEcAAACAAAAAAAAAAEsAAAIQBAAAAAAAAENAAAAQAAAAAAAAALAIAgFACAAAAAAAA</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>Apple ProRes 422</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:35:52 -0500"/>
            </metadata>
        </asset>
        <format id="r9" name="FFVideoFormat3840x2160p2997" frameDuration="1001/30000s" width="3840" height="2160" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r10" name="Duo_animatedGraph" uid="BFFCBA37532B242C11A327F80F9691FB" start="0s" duration="5722/600s" hasVideo="1" format="r7" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="48000">
            <media-rep kind="original-media" sig="BFFCBA37532B242C11A327F80F9691FB" src="file:///Volumes/sdx.500.x/Duo_animatedGraph.mp4"/>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>AAC</string>
                        <string>AVC Coding</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:36:00 -0500"/>
            </metadata>
        </asset>
        <asset id="r11" name="slide_3a_203" uid="DE1F2234F6FD3A418B976F281AE97414" start="0s" duration="2100/600s" hasVideo="1" format="r3" videoSources="1">
            <media-rep kind="original-media" sig="DE1F2234F6FD3A418B976F281AE97414" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/slide_3a_203.mov">
                <bookmark>Ym9va2wDAAAAAAQQMAAAAJpDlkAvY8TjfGb9hHj4f4uIEghWDx+2q51METlWkD5xXAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgAQAAAAAQEAAHNsaWRlXzNhXzIwMy5tb3YcAAAAAQYAABAAAAAgAAAALAAAADwAAABUAAAAZAAAAHQAAAAIAAAABAMAADBdAAAAAAAACAAAAAQDAAA6hAAAAAAAAAgAAAAEAwAA6lgGAAAAAAAIAAAABAMAAF1rBgAAAAAACAAAAAQDAABdSy8BAAAAAAgAAAAEAwAAMYAoAQAAAAAIAAAABAMAAByKKAEAAAAAHAAAAAEGAACwAAAAwAAAANAAAADgAAAA8AAAAAABAAAQAQAACAAAAAAEAABBw9IxJYn4mBgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAACAAAAAQDAAAFAAAAAAAAAAQAAAADAwAA9QEAAAgAAAABCQAAZmlsZTovLy8EAAAAAQEAAG1rXzAIAAAABAMAAACQgpbnAAAACAAAAAAEAABBw7AUF4AAACQAAAABAQAAQzU2N0RFMDgtNjBFNy00ODk1LUFCMjEtODk5MDc2MEQwNUNBGAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAABAAAAAQEAAC8AAAAAAAAAAQUAABoAAAABAQAATlNVUkxEb2N1bWVudElkZW50aWZpZXJLZXkAAAQAAAADAwAABcAAANgAAAD+////AQAAAAAAAAARAAAABBAAAIwAAAAAAAAABRAAACABAAAAAAAAEBAAAFQBAAAAAAAAQBAAAEQBAAAAAAAAAiAAABgCAAAAAAAABSAAAJABAAAAAAAAECAAAKABAAAAAAAAESAAAMwBAAAAAAAAEiAAAKwBAAAAAAAAEyAAALwBAAAAAAAAICAAAPgBAAAAAAAAMCAAACQCAAAAAAAAAcAAAHQBAAAAAAAAEcAAACAAAAAAAAAAEsAAAIQBAAAAAAAAENAAAAQAAAAAAAAALAIAgFACAAAAAAAA</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>H.264</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:44:07 -0500"/>
            </metadata>
        </asset>
        <asset id="r12" name="slide_5a_201" uid="8AEA8BAFADFE63296099D08EEA09EFE8" start="0s" duration="3500/1000s" hasVideo="1" format="r3" videoSources="1">
            <media-rep kind="original-media" sig="8AEA8BAFADFE63296099D08EEA09EFE8" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/slide_5a_201.mov">
                <bookmark>Ym9va2wDAAAAAAQQMAAAAJcswVY1qbne9gNjqb2D3sTlXJK4Rc2E4YnVIG9PoLndXAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgAQAAAAAQEAAHNsaWRlXzVhXzIwMS5tb3YcAAAAAQYAABAAAAAgAAAALAAAADwAAABUAAAAZAAAAHQAAAAIAAAABAMAADBdAAAAAAAACAAAAAQDAAA6hAAAAAAAAAgAAAAEAwAA6lgGAAAAAAAIAAAABAMAAF1rBgAAAAAACAAAAAQDAABdSy8BAAAAAAgAAAAEAwAAMYAoAQAAAAAIAAAABAMAAOSJKAEAAAAAHAAAAAEGAACwAAAAwAAAANAAAADgAAAA8AAAAAABAAAQAQAACAAAAAAEAABBw9IxHKhZpRgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAACAAAAAQDAAAFAAAAAAAAAAQAAAADAwAA9QEAAAgAAAABCQAAZmlsZTovLy8EAAAAAQEAAG1rXzAIAAAABAMAAACQgpbnAAAACAAAAAAEAABBw7AUF4AAACQAAAABAQAAQzU2N0RFMDgtNjBFNy00ODk1LUFCMjEtODk5MDc2MEQwNUNBGAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAABAAAAAQEAAC8AAAAAAAAAAQUAABoAAAABAQAATlNVUkxEb2N1bWVudElkZW50aWZpZXJLZXkAAAQAAAADAwAABMAAANgAAAD+////AQAAAAAAAAARAAAABBAAAIwAAAAAAAAABRAAACABAAAAAAAAEBAAAFQBAAAAAAAAQBAAAEQBAAAAAAAAAiAAABgCAAAAAAAABSAAAJABAAAAAAAAECAAAKABAAAAAAAAESAAAMwBAAAAAAAAEiAAAKwBAAAAAAAAEyAAALwBAAAAAAAAICAAAPgBAAAAAAAAMCAAACQCAAAAAAAAAcAAAHQBAAAAAAAAEcAAACAAAAAAAAAAEsAAAIQBAAAAAAAAENAAAAQAAAAAAAAALAIAgFACAAAAAAAA</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>Lavc57.107.100 libx264</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:44:07 -0500"/>
            </metadata>
        </asset>
        <asset id="r13" name="slide_5b_202" uid="2ADBABF3517C218260BB5DEF5219CF9F" start="0s" duration="9820/600s" hasVideo="1" format="r3" videoSources="1">
            <media-rep kind="original-media" sig="2ADBABF3517C218260BB5DEF5219CF9F" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/slide_5b_202.mov">
                <bookmark>Ym9va2wDAAAAAAQQMAAAAEKmMr25UmSBIAmVco+GU72hwksh+mim7oZrwaiXeM/HXAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgAQAAAAAQEAAHNsaWRlXzViXzIwMi5tb3YcAAAAAQYAABAAAAAgAAAALAAAADwAAABUAAAAZAAAAHQAAAAIAAAABAMAADBdAAAAAAAACAAAAAQDAAA6hAAAAAAAAAgAAAAEAwAA6lgGAAAAAAAIAAAABAMAAF1rBgAAAAAACAAAAAQDAABdSy8BAAAAAAgAAAAEAwAAMYAoAQAAAAAIAAAABAMAAF6KKAEAAAAAHAAAAAEGAACwAAAAwAAAANAAAADgAAAA8AAAAAABAAAQAQAACAAAAAAEAABBw9IxLhXgFRgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAACAAAAAQDAAAFAAAAAAAAAAQAAAADAwAA9QEAAAgAAAABCQAAZmlsZTovLy8EAAAAAQEAAG1rXzAIAAAABAMAAACQgpbnAAAACAAAAAAEAABBw7AUF4AAACQAAAABAQAAQzU2N0RFMDgtNjBFNy00ODk1LUFCMjEtODk5MDc2MEQwNUNBGAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAABAAAAAQEAAC8AAAAAAAAAAQUAABoAAAABAQAATlNVUkxEb2N1bWVudElkZW50aWZpZXJLZXkAAAQAAAADAwAABsAAANgAAAD+////AQAAAAAAAAARAAAABBAAAIwAAAAAAAAABRAAACABAAAAAAAAEBAAAFQBAAAAAAAAQBAAAEQBAAAAAAAAAiAAABgCAAAAAAAABSAAAJABAAAAAAAAECAAAKABAAAAAAAAESAAAMwBAAAAAAAAEiAAAKwBAAAAAAAAEyAAALwBAAAAAAAAICAAAPgBAAAAAAAAMCAAACQCAAAAAAAAAcAAAHQBAAAAAAAAEcAAACAAAAAAAAAAEsAAAIQBAAAAAAAAENAAAAQAAAAAAAAALAIAgFACAAAAAAAA</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>H.264</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:44:07 -0500"/>
            </metadata>
        </asset>
        <asset id="r14" name="Phoebe DeVries _ Harvard Horizons Symposium-8yByo05biAE" uid="8657EE707B89BC207B84A2530C43D0A7" start="0s" duration="365282/1000s" hasVideo="1" format="r15" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="44100">
            <media-rep kind="original-media" sig="8657EE707B89BC207B84A2530C43D0A7" src="file:///Users/mk/Desktop/_rtp/Phoebe%20DeVries%20_%20Harvard%20Horizons%20Symposium-8yByo05biAE.mp4">
                <bookmark>Ym9vazwDAAAAAAQQMAAAAHqNPnXkUB+vDMezbf9KM/egq/IyY7Lc40dVabSEuzhXLAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AABAAAAAEBAABfcnRwOwAAAAEBAABQaG9lYmUgRGVWcmllcyBfIEhhcnZhcmQgSG9yaXpvbnMgU3ltcG9zaXVtLTh5QnlvMDViaUFFLm1wNAAUAAAAAQYAABAAAAAgAAAALAAAADwAAABIAAAACAAAAAQDAAAwXQAAAAAAAAgAAAAEAwAAOoQAAAAAAAAIAAAABAMAAOpYBgAAAAAACAAAAAQDAAAaYgYAAAAAAAgAAAAEAwAAepcoAQAAAAAUAAAAAQYAAKgAAAC4AAAAyAAAANgAAADoAAAACAAAAAAEAABBvOwaWgAAABgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAACAAAAAQDAAADAAAAAAAAAAQAAAADAwAA9QEAAAgAAAABCQAAZmlsZTovLy8EAAAAAQEAAG1rXzAIAAAABAMAAACQgpbnAAAACAAAAAAEAABBw7AUF4AAACQAAAABAQAAQzU2N0RFMDgtNjBFNy00ODk1LUFCMjEtODk5MDc2MEQwNUNBGAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAABAAAAAQEAAC8AAAAAAAAAAQUAABoAAAABAQAATlNVUkxEb2N1bWVudElkZW50aWZpZXJLZXkAAAQAAAADAwAADMAAANgAAAD+////AQAAAAAAAAARAAAABBAAAIwAAAAAAAAABRAAAPgAAAAAAAAAEBAAACQBAAAAAAAAQBAAABQBAAAAAAAAAiAAAOgBAAAAAAAABSAAAGABAAAAAAAAECAAAHABAAAAAAAAESAAAJwBAAAAAAAAEiAAAHwBAAAAAAAAEyAAAIwBAAAAAAAAICAAAMgBAAAAAAAAMCAAAPQBAAAAAAAAAcAAAEQBAAAAAAAAEcAAACAAAAAAAAAAEsAAAFQBAAAAAAAAENAAAAQAAAAAAAAA/AEAgCACAAAAAAAA</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>'avc1'</string>
                        <string>AAC</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 13:00:30 -0500"/>
            </metadata>
        </asset>
        <format id="r15" name="FFVideoFormat1080p2398" frameDuration="1001/24000s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r16" name="20180405_Liuchuan_Molecules_Ex" uid="67CBAFB87B1599AC0443F374697ADE84" start="0s" duration="55352297/2400000s" hasVideo="1" format="r17" videoSources="1">
            <media-rep kind="original-media" sig="67CBAFB87B1599AC0443F374697ADE84" src="file:///Users/mk/Desktop/_desktop_archive/20220131/hh-2022/20180405_Liuchuan_Molecules_Ex.mov">
                <bookmark>Ym9va4ADAAAAAAQQMAAAACqGwvVmlacTU/OhgZFchlN1lZCuMIp/b0DvYwTZc2UUcAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AAEAAAAAEBAABfZGVza3RvcF9hcmNoaXZlCAAAAAEBAAAyMDIyMDEzMQcAAAABAQAAaGgtMjAyMgAiAAAAAQEAADIwMTgwNDA1X0xpdWNodWFuX01vbGVjdWxlc19FeC5tb3YAABwAAAABBgAAEAAAACAAAAAsAAAAPAAAAFQAAABkAAAAdAAAAAgAAAAEAwAAMF0AAAAAAAAIAAAABAMAADqEAAAAAAAACAAAAAQDAADqWAYAAAAAAAgAAAAEAwAAXWsGAAAAAAAIAAAABAMAAF1LLwEAAAAACAAAAAQDAAAxgCgBAAAAAAgAAAAEAwAAKowoAQAAAAAcAAAAAQYAAMQAAADUAAAA5AAAAPQAAAAEAQAAFAEAACQBAAAIAAAAAAQAAEHD0jFdXxCvGAAAAAECAAABAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAIAAAABAMAAAUAAAAAAAAABAAAAAMDAAD1AQAACAAAAAEJAABmaWxlOi8vLwQAAAABAQAAbWtfMAgAAAAEAwAAAJCClucAAAAIAAAAAAQAAEHDsBQXgAAAJAAAAAEBAABDNTY3REUwOC02MEU3LTQ4OTUtQUIyMS04OTkwNzYwRDA1Q0EYAAAAAQIAAIEAAAABAAAA7xMAAAEAAAAAAAAAAAAAAAEAAAABAQAALwAAAAAAAAABBQAAGgAAAAEBAABOU1VSTERvY3VtZW50SWRlbnRpZmllcktleQAABAAAAAMDAAAIwAAA2AAAAP7///8BAAAAAAAAABEAAAAEEAAAoAAAAAAAAAAFEAAANAEAAAAAAAAQEAAAaAEAAAAAAABAEAAAWAEAAAAAAAACIAAALAIAAAAAAAAFIAAApAEAAAAAAAAQIAAAtAEAAAAAAAARIAAA4AEAAAAAAAASIAAAwAEAAAAAAAATIAAA0AEAAAAAAAAgIAAADAIAAAAAAAAwIAAAOAIAAAAAAAABwAAAiAEAAAAAAAARwAAAIAAAAAAAAAASwAAAmAEAAAAAAAAQ0AAABAAAAAAAAABAAgCAZAIAAAAAAAA=</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>H.264</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:44:07 -0500"/>
            </metadata>
        </asset>
        <format id="r17" name="FFVideoFormat720p2398" frameDuration="1001/24000s" width="1280" height="720" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r18" name="Bailey_WidenerEdit_v2" uid="973223070D252F4B105B7D7BBB330857" start="0s" duration="869869/24000s" hasVideo="1" format="r15" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="48000">
            <media-rep kind="original-media" sig="973223070D252F4B105B7D7BBB330857" src="file:///Volumes/sdx.500.x/Bailey_WidenerEdit_v2.mov"/>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>Apple ProRes 422</string>
                        <string>Linear PCM</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:36:00 -0500"/>
            </metadata>
        </asset>
        <asset id="r19" name="Victoria Hwang _ Harvard Horizons 2019-CufZCPkEDGQ" uid="0CA9965FC0518BFAC1FDD60378B4B8E9" start="0s" duration="486236/1000s" hasVideo="1" format="r15" hasAudio="1" videoSources="1" audioSources="1" audioChannels="1" audioRate="44100">
            <media-rep kind="original-media" sig="0CA9965FC0518BFAC1FDD60378B4B8E9" src="file:///Users/mk/Desktop/_rtp/Victoria%20Hwang%20_%20Harvard%20Horizons%202019-CufZCPkEDGQ.mp4">
                <bookmark>Ym9vazgDAAAAAAQQMAAAADvdWeSkQP3MEYfB8e66K6VVdLfSCtBWAMat/Wp5P1/IKAIAAAQAAAADAwAAABgAKAUAAAABAQAAVXNlcnMAAAACAAAAAQEAAG1rAAAHAAAAAQEAAERlc2t0b3AABAAAAAEBAABfcnRwNgAAAAEBAABWaWN0b3JpYSBId2FuZyBfIEhhcnZhcmQgSG9yaXpvbnMgMjAxOS1DdWZaQ1BrRURHUS5tcDQAABQAAAABBgAAEAAAACAAAAAsAAAAPAAAAEgAAAAIAAAABAMAADBdAAAAAAAACAAAAAQDAAA6hAAAAAAAAAgAAAAEAwAA6lgGAAAAAAAIAAAABAMAABpiBgAAAAAACAAAAAQDAADidSgBAAAAABQAAAABBgAApAAAALQAAADEAAAA1AAAAOQAAAAIAAAAAAQAAEHBPGizAAAAGAAAAAECAAABAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAIAAAABAMAAAMAAAAAAAAABAAAAAMDAAD1AQAACAAAAAEJAABmaWxlOi8vLwQAAAABAQAAbWtfMAgAAAAEAwAAAJCClucAAAAIAAAAAAQAAEHDsBQXgAAAJAAAAAEBAABDNTY3REUwOC02MEU3LTQ4OTUtQUIyMS04OTkwNzYwRDA1Q0EYAAAAAQIAAIEAAAABAAAA7xMAAAEAAAAAAAAAAAAAAAEAAAABAQAALwAAAAAAAAABBQAAGgAAAAEBAABOU1VSTERvY3VtZW50SWRlbnRpZmllcktleQAABAAAAAMDAAD9vwAA2AAAAP7///8BAAAAAAAAABEAAAAEEAAAiAAAAAAAAAAFEAAA9AAAAAAAAAAQEAAAIAEAAAAAAABAEAAAEAEAAAAAAAACIAAA5AEAAAAAAAAFIAAAXAEAAAAAAAAQIAAAbAEAAAAAAAARIAAAmAEAAAAAAAASIAAAeAEAAAAAAAATIAAAiAEAAAAAAAAgIAAAxAEAAAAAAAAwIAAA8AEAAAAAAAABwAAAQAEAAAAAAAARwAAAIAAAAAAAAAASwAAAUAEAAAAAAAAQ0AAABAAAAAAAAAD4AQCAHAIAAAAAAAA=</bookmark>
            </media-rep>
            <metadata>
                <md key="com.apple.proapps.studio.rawToLogConversion" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemProfileName" value="HD (1-1-1)"/>
                <md key="com.apple.proapps.studio.cameraISO" value="0"/>
                <md key="com.apple.proapps.studio.cameraColorTemperature" value="0"/>
                <md key="com.apple.proapps.spotlight.kMDItemCodecs">
                    <array>
                        <string>'avc1'</string>
                        <string>AAC</string>
                    </array>
                </md>
                <md key="com.apple.proapps.mio.ingestDate" value="2022-01-28 12:17:12 -0500"/>
            </metadata>
        </asset>
    </resources>
    <library location="file:///Users/mk/Movies/hh-2022-day-1.fcpbundle/">
        <event name="1-28-22" uid="6A0DEE13-30DC-4DCF-841B-FCBBF03AC42C">
            <project name="day-1-montage" uid="DADFE3C4-A6F7-4390-B0E0-BF31B401DF3B" modDate="2022-01-28 13:36:07 -0500">
                <sequence format="r1" duration="12262000/48000s" tcStart="3600s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
                    <spine>
                        <asset-clip ref="r2" offset="3600s" name="Lanier_Illustrations_1" duration="46000/9600s" format="r3" tcFormat="NDF" audioRole="dialogue">
                            <conform-rate scaleEnabled="0" srcFrameRate="30"/>
                            <adjust-blend>
                                <param name="amount">
                                    <fadeIn type="linear" duration="1632784/720000s"/>
                                </param>
                            </adjust-blend>
                            <adjust-volume amount="-96dB"/>
                        </asset-clip>
                        <video ref="r4" offset="173030000/48000s" name="Screen Shot 2021-05-22 at 11.30.54 AM" start="3600s" duration="1s"/>
                        <asset-clip ref="r6" offset="173078000/48000s" name="Infographic" duration="11700/2400s" format="r7" tcFormat="DF">
                            <conform-rate scaleEnabled="0" srcFrameRate="29.97"/>
                        </asset-clip>
                        <asset-clip ref="r8" offset="173312000/48000s" name="Main Comp_1" duration="4s" format="r9" tcFormat="DF">
                            <conform-rate scaleEnabled="0" srcFrameRate="29.97"/>
                        </asset-clip>
                        <asset-clip ref="r10" offset="173504000/48000s" name="Duo_animatedGraph" start="2500/2400s" duration="20300/2400s" format="r7" tcFormat="NDF" audioRole="dialogue">
                            <conform-rate scaleEnabled="0" srcFrameRate="29.97"/>
                            <adjust-blend>
                                <param name="amount">
                                    <fadeOut type="linear" duration="1180320/720000s"/>
                                </param>
                            </adjust-blend>
                            <adjust-volume amount="-96dB"/>
                        </asset-clip>
                        <gap name="Gap" offset="173910000/48000s" start="3600s" duration="2800/2400s"/>
                        <asset-clip ref="r11" offset="173966000/48000s" name="slide_3a_203" duration="1800/2400s" format="r3" tcFormat="NDF">
                            <conform-rate scaleEnabled="0" srcFrameRate="30"/>
                            <timeMap>
                                <timept time="0s" value="0s" interp="smooth2"/>
                                <timept time="36834/3000s" value="10500/3000s" interp="smooth2"/>
                            </timeMap>
                            <adjust-blend>
                                <param name="amount">
                                    <fadeIn type="linear" duration="414080/720000s"/>
                                </param>
                            </adjust-blend>
                        </asset-clip>
                        <asset-clip ref="r11" offset="174002000/48000s" name="slide_3a_203" start="10000/48000s" duration="158000/48000s" format="r3" tcFormat="NDF">
                            <conform-rate scaleEnabled="0" srcFrameRate="30"/>
                        </asset-clip>
                        <asset-clip ref="r12" offset="174160000/48000s" name="slide_5a_201" start="10081/2400s" duration="6600/2400s" format="r3" tcFormat="NDF">
                            <conform-rate scaleEnabled="0" srcFrameRate="30"/>
                            <timeMap>
                                <timept time="0s" value="0s" interp="smooth2"/>
                                <timept time="7s" value="53760/15360s" interp="smooth2"/>
                            </timeMap>
                        </asset-clip>
                        <asset-clip ref="r13" offset="174292000/48000s" name="slide_5b_202" duration="39200/2400s" format="r3" tcFormat="NDF">
                            <conform-rate scaleEnabled="0" srcFrameRate="30"/>
                        </asset-clip>
                        <asset-clip ref="r14" offset="175076000/48000s" name="Phoebe DeVries _ Harvard Horizons Symposium-8yByo05biAE" start="843843/4000s" duration="706000/48000s" format="r15" tcFormat="NDF" audioRole="dialogue">
                            <conform-rate srcFrameRate="23.98"/>
                            <adjust-volume amount="-96dB"/>
                        </asset-clip>
                        <asset-clip ref="r14" offset="175782000/48000s" name="Phoebe DeVries _ Harvard Horizons Symposium-8yByo05biAE" start="1010009/4000s" duration="440000/48000s" format="r15" tcFormat="NDF" audioRole="dialogue">
                            <conform-rate srcFrameRate="23.98"/>
                            <adjust-volume amount="-96dB"/>
                        </asset-clip>
                        <asset-clip ref="r16" offset="176222000/48000s" name="20180405_Liuchuan_Molecules_Ex" duration="87/4s" format="r17" tcFormat="NDF">
                            <conform-rate srcFrameRate="23.98"/>
                            <adjust-blend>
                                <param name="amount">
                                    <fadeOut type="linear" duration="1216600/720000s"/>
                                </param>
                            </adjust-blend>
                        </asset-clip>
                        <gap name="Gap" offset="177266000/48000s" start="3600s" duration="4100/2400s"/>
                        <asset-clip ref="r18" offset="177348000/48000s" name="Bailey_WidenerEdit_v2" duration="869/24s" format="r15" tcFormat="NDF" audioRole="dialogue">
                            <conform-rate srcFrameRate="23.98"/>
                            <adjust-blend>
                                <param name="amount">
                                    <fadeIn type="linear" duration="996105/720000s"/>
                                    <fadeOut type="linear" duration="877903/720000s"/>
                                </param>
                            </adjust-blend>
                            <adjust-volume amount="-96dB"/>
                        </asset-clip>
                        <gap name="Gap" offset="179086000/48000s" start="3600s" duration="3000/2400s"/>
                        <asset-clip ref="r19" offset="179146000/48000s" name="Victoria Hwang _ Harvard Horizons 2019-CufZCPkEDGQ" start="2901899/12000s" duration="5916000/48000s" format="r15" tcFormat="NDF" audioRole="dialogue">
                            <conform-rate srcFrameRate="23.98"/>
                            <adjust-blend>
                                <param name="amount">
                                    <fadeIn type="linear" duration="877343/720000s"/>
                                    <fadeOut type="linear" duration="1792045/720000s"/>
                                </param>
                            </adjust-blend>
                        </asset-clip>
                    </spine>
                </sequence>
            </project>
        </event>
        <smart-collection name="Projects" match="all">
            <match-clip rule="is" type="project"/>
        </smart-collection>
        <smart-collection name="All Video" match="any">
            <match-media rule="is" type="videoOnly"/>
            <match-media rule="is" type="videoWithAudio"/>
        </smart-collection>
        <smart-collection name="Audio Only" match="all">
            <match-media rule="is" type="audioOnly"/>
        </smart-collection>
        <smart-collection name="Stills" match="all">
            <match-media rule="is" type="stills"/>
        </smart-collection>
        <smart-collection name="Favorites" match="all">
            <match-ratings value="favorites"/>
        </smart-collection>
    </library>
</fcpxml>
```

## challenge

[link](https://superuser.com/questions/538112/meaningful-thumbnails-for-a-video-using-ffmpeg)
