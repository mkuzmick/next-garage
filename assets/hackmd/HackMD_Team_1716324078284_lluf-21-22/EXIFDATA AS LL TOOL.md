---
title: EXIFDATA AS LL TOOL

---

# EXIFDATA AS LL TOOL

![exif data screen capture](https://files.slack.com/files-pri/T0HTW3H0V-F02JS1YB9R9/img_6612.jpg?pub_secret=004d9c218a)

## THE BACKGROUND AND RATIONALE

[Exchangeable image file format data](https://en.wikipedia.org/wiki/Exif), or EXIF data for short, is typically used to refer to the metadata that accompanies an image file. This includes data about which camera captured the image, the lens used, the camera's settings for the time of capture, and these days even the geographical location data associated with the image.

We use this data for many many purposes in the Learning Lab, so it's a great thing to learn about no matter what.

But for this particular project, we're trying to experiment with using the geographical EXIF data to offer students a painless way of sharing their location with us (without us having to do anything too over-the-top, like requesting them to give us access to their phone's location data stream).

As you may know, we had one group of LLUFs walk across campus, taking photos the entire way. We now want to acquire the locations associated with these photos.

Why?

Well, there are many many projects that touch on geographical location (and media), and we want to produce a basic proof of concept that can help towards any of the following projects in flight:

* Folklore and Mythology is working on a "Harvard Lore" Airtable database, which will involve stories about Harvard that are passed down over the years. Many will be oral, some will include video and images too, and many (if not all) of the Airtable records will include the latitude and longitude of a location associated with the story.
* one History Prof is working on a remix of "The Harvard Tour" that will involve stories told about various locations on campus
* another History Prof teaches a course on Harvard and Slavery, and there's a chance one of our MDFs will help update the map on the course's website
* our internal datavisLab & mapLab cluster is working on an array of projects that will involve pulling records from Airtable that have lat/long and x/y coordinate data to visualize on the web and in VR/AR, and it would be nice to provide them with meaningful sample datasets
* finally, departing from the geo-data entirely, one can imagine performing interesting operations with all of the OTHER values we find in the EXIF data, from relatively boring (but insanely crucial) operations our Learning Lab team needs to perform when ingesting and backing up footage to more creative applications that you might dream up as you play around with the data.


## THE CHALLENGE

So. Here's what we need you to do.
* write a script that gets the geodata using `exiftool` or some library that wraps it like [exif-parser](https://www.npmjs.com/package/exif-parser) for Node or [exif](https://pypi.org/project/exif/) for Python
* convert the data from degrees/minutes/seconds to decimal-based lat and long values (if not already converted by your chosen tool)
* export that data to a file, or
* for bonus points, write that data to Airtable along with a link to your image (which, for bonus points, you will have uploaded somewhere or posted to our Slack)