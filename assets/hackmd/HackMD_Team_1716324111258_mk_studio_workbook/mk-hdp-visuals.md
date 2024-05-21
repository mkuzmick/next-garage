---
title: mk-hdp-visuals

---

# mk-hdp-visuals
* [hdp-movement-gif-collection-1](/wWCDlDmkSBS8CIzG9O6Qsw) 
* [HDP Workshop Images](/9u3eTsZ5Q5SrXXwZyMB-iQ) = all of them
* [Team Marlon](/WenT4Qf2TW2r6RqVhTQxIQ) = side by side of 6

<center><div style="width: 200px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Muybridge_horse_jumping_animated.gif"/>
</div></center>
<br />
<center><div style="width: 200px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Muybridge_Buffalo_galloping.gif"/>
</div></center>


## things
* buttons for all students
* lookbook/pitchdeck
* websites?
* gif-vocab
* 24 frames per second, 1 second per page
* scrollable seconds
* quotes from the m

## buttons

## lookbook

## sunday

### muybridge script


last time

```
ffmpeg -i "/Volumes/10_01/_exports/2022/02/ll-dance-competition.mov" -vf fps=1 "/Users/purple/Documents/_staff/mk/projects/mk-proto-studio-as-instrument/stills-from-jessi-film/1-sec-inedited/ll-dance-competition-%0003d.jpg"
```

`ffmpeg -i yosemiteA.mp4 -ss 00:00:18.123 -f image2 -vframes 1 yosemite.png`

```
ffmpeg -i "/Volumes/storage/project-expos-becker-report/footage/20211130.0.001_Expos20Becker.F21Project.Recording_amx.a.pgm.0002.mp4" -ss 00:02:14.000 -f 

ffmpeg -i video.mp4 thumb%04d.jpg -hide_banner

```


-frames option
Output a single frame from the video into an image file:

ffmpeg -i input.flv -ss 00:00:14.435 -frames:v 1 out.png
This example will seek to the position of 0h:0m:14sec:435msec and output one frame (-frames:v 1) from that position into a PNG file.

fps video filter
Output one image every second, named out1.png, out2.png, out3.png, etc.

ffmpeg -i input.flv -vf fps=1 out%d.png
Output one image every minute, named img001.jpg, img002.jpg, img003.jpg, etc. The %03d dictates that the ordinal number of each output image will be formatted using 3 digits.

ffmpeg -i myvideo.avi -vf fps=1/60 img%03d.jpg
Output one image every ten minutes:

ffmpeg -i test.flv -vf fps=1/600 thumb%04d.bmp
select video filter
Output one image for every I-frame:

ffmpeg -i input.flv -vf "select='eq(pict_type,PICT_TYPE_I)'" -vsync vfr thumb%04d.png



ffmpeg -i yosemiteA.mp4 -f image2 -vf fps=fps=1/10 ythumb%3d.png


ffmpeg -ss 00:01:00 -i video.mp4 -to 00:02:00 -c copy cut.mp4
ffmpeg -i video.mp4 -ss 00:01:00 -to 00:02:00 -c copy cut.mp4
ffmpeg -ss 00:01:00 -i video.mp4 -to 00:02:00 -c copy -copyts cut.mp4


### Python version
```
'''
iframe.py - ffmpeg i-frame extraction
'''

import sys, getopt, os
import subprocess

# ffmpeg -i inFile -f image2 -vf "select='eq(pict_type,PICT_TYPE_I)'" -vsync vfr oString%03d.png

def main(argv):
	inFile = ''
	oString = 'out'
	usage = 'usage: python iframe.py -i <inputfile> [-o <oString>]'
	try:
		opts, args = getopt.getopt(argv,"hi:o:",["ifile=","oString="])
	except getopt.GetoptError:
		print usage
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print usage
			sys.exit()
		elif opt in ("-i", "--ifile"):
			inFile = arg
		elif opt in ("-o", "--oString"):
			oString = arg
	print 'Input file is "', inFile
	print 'oString is "', oString

        # need input, otherwise exit
	if inFile == '':
		print usage
		sys.exit()

	# start extracting i-frames
	home = os.path.expanduser("~")
	ffmpeg = home + '/bin/ffmpeg'
	outFile = oString + '%03d.png'

	cmd = [ffmpeg,'-i', inFile,'-f', 'image2','-vf', 
               "select='eq(pict_type,PICT_TYPE_I)'",'-vsync','vfr',outFile]
	print cmd
	subprocess.call(cmd)

if __name__ == "__main__":
	main(sys.argv[1:])
```


![dance buttons](https://i.etsystatic.com/6217395/r/il/3180a4/969403420/il_1588xN.969403420_8a9l.jpg)


### Team Marlon

<center><div style="width: 600px; margin-bottom: 20px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F034Z0VQBN2/3-horizontal-together_540.gif?pub_secret=6a8aab0da6"/>
</div></center>
<center><div style="width: 300px; margin: 10px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F0355KXRN4B/three-vertical-split-square_300.gif?pub_secret=21f0ab98c9"/>
</div></center>

<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UK66QBU/gif-01.09_540.gif?pub_secret=bbcf9c8814"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035N099P2S/gif-01.10_540.gif?pub_secret=023762daf6"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UK02C59/gif-01.08_540.gif?pub_secret=2623fffe31"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035N0EB3DL/gif-01.11_540.gif?pub_secret=f7526635bb"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UJ09BRR/gif-01.04_540.gif?pub_secret=a4a428c9be"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UHWNQ9H/gif-01.03_540.gif?pub_secret=ff40cb4089"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035MUAT5AA/gif-01.02_540.gif?pub_secret=f1a55c8957"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035E1MUCLX/gif-01.05_540.gif?pub_secret=9572d31ba0"/>
</div></center>
<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035E1NDXV5/gif-01.07_540.gif?pub_secret=3bdda3ae84"/>
</div></center>

<center><div style="width: 200px;">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035MVAKDPY/gif-01.06_540.gif?pub_secret=e7021074d8"/>
</div></center>

<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UPFM86N/cam-1-stills-019.jpg?pub_secret=4baae212ba" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F035X49KD4L/gif-01.13_540.gif?pub_secret=b7cef89c74" style="display: inline; width: 200px; margin: 5px" />
</center>
<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035N4VC49L/brick-room-stills-02.jpg?pub_secret=e92db9cbf9" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UPVL78B/gif-01.15_540.gif?pub_secret=3660b44fac" style="display: inline; width: 200px; margin: 5px" />
</center>
<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F0367CQDWG1/brick-room-stills-3bw.jpg?pub_secret=17752f14d8" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F035X4K6Y2G/gif-01.16_540.gif?pub_secret=579c97e7da" style="display: inline; width: 200px; margin: 5px" />
</center>
<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035N5L8RK8/brick-room-stills-4-bw.jpg?pub_secret=39f9d29271" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F036JHJC8JU/gif-01.17_540.gif?pub_secret=450e04b925" style="display: inline; width: 200px; margin: 5px" />
</center>
<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F0367DFA18R/brick-room-stills-5-bw.jpg?pub_secret=7a88409a07" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UQWJBQS/gif-01.18_540.gif?pub_secret=e0ac71512d" style="display: inline; width: 200px; margin: 5px" />
</center>
<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035UR2C8PM/brick-room-stills-6-bw.jpg?pub_secret=445decaff3" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F035RU55MUM/gif-01.19_540.gif?pub_secret=99770782f4" style="display: inline; width: 200px; margin: 5px" />
</center>
<center style="margin-bottom: 5px">
    <img src="https://files.slack.com/files-pri/T0HTW3H0V-F035RU69H9B/brick-room-stills-7-bw.jpg?pub_secret=866bfa550c" style="display: inline; width: 200px; margin: 5px" />
<img src="https://files.slack.com/files-pri/T0HTW3H0V-F035E7WQHQX/gif-01.20_540.gif?pub_secret=7d8de8e00b" style="display: inline; width: 200px; margin: 5px" />
</center>

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F035S0NFDQD/brick-room-stills-3-gm-large.jpg?pub_secret=f67faf2d97)

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F035S0FN737/cam-1-still-031-pre-logo.jpg?pub_secret=d3e21b0746)

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F035UTTFUF4/image_from_ios.jpg?pub_secret=723cbbf5d7)

