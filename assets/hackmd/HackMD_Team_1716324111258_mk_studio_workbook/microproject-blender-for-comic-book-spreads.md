---
title: microproject-blender-for-comic-book-spreads
tags: [microprojects, ' tools', ' blender']

---

---
tags: microprojects, tools, blender
slug: blender-for-comic-book-spreads
---

# microproject-blender-for-comic-book-spreads

some notes on using Blender for cartoonish effects. This is a microproject in support of the [project-comic-book-spread-prototypes](/d-zzPmGYQrCrZkZiQec_Lw).

## PLANS

* try different tools for the textures
    * fcpx
    * resolve
    * photoshop (with actions?) for stills and still sequences
* try different layouts within blender
* try toon and manga shaders from within blender
* compare and contrast with C4D sketch and toon shader

## MICROPROJECTS

this one needs others.

* here's a [microproject on using fcpx comic book look with blender](/b5YK8-CcSEK3yt8wOhaTWw). We'll want to automate this a bit--perhaps with some part of an m2s-like script.
* here's a [microproject on making paper (as cloth) in blender](/nkQFa-_0Rue2N-sY2Knhrw)
* there are probably a bunch of shader microprojects needed, but lets start with [one on creating a manga, toon and hatching shaders in Blender](/ZK9kXy59QqGXyIzWVWmaZw) 
* then the cluster on studio Ghibli
* [microproject-blender-grease-pencil-for-comic-look](/wLLnpk8SRO2ZO8Kn27IDXg)


## TUTORIALS

### Manga shaders.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2ZR5XIjBmho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Anime water-splash

<iframe width="560" height="315" src="https://www.youtube.com/embed/zZsfr5f273c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Also [Ghibli-style rocks](https://www.youtube.com/watch?v=FHeBI5tAGP0).


[Easy outlines in Blender](https://www.youtube.com/watch?v=-6eo703C1A8)

<iframe width="560" height="315" src="https://www.youtube.com/embed/-6eo703C1A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

and follow-up on [blueprints here](https://lesterbanks.com/2021/06/how-to-create-a-blueprint-effect-with-blenders-line-art-modifier/)

https://lesterbanks.com/2020/08/how-to-make-a-toon-water-shader-in-blender/

[Ghibli-style trees in Blender](https://lesterbanks.com/2020/08/how-to-create-ghibli-style-trees-in-blender/)
<iframe width="560" height="315" src="https://www.youtube.com/embed/DEgzuMmJtu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zD8hX-KSq4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/508pwYME-w4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-1w4pYdUNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### GREAT 5 PART SERIES HERE

plus additional stuff on his channel

<iframe width="560" height="315" src="https://www.youtube.com/embed/TpWI2rU8iF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/hp4V-9oFmnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/YdoBJ2lnkks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/RgRPUlFBHH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


try running this through the process?

https://lesterbanks.com/2021/02/how-to-cut-blender-objects-using-a-particle-simulation/

or steam?

https://lesterbanks.com/2021/02/how-to-create-steam-with-mantaflow-in-blender/



https://www.youtube.com/watch?v=_reT6PwJRkg

log of a guy figuring it out: https://www.youtube.com/watch?v=_reT6PwJRkg





## WORK IN PROGRESS

### fcpx-comic-book-filter to materials

first generate the images in fcpx using a combo of filters (comic book look, hatching, sketching, textures)

![comic-book-style still from fcpx](https://files.slack.com/files-pri/T0HTW3H0V-F02NM2SR88N/frame-000014.png?pub_secret=37a6606952)

then apply to stylized paper card in blender

![applied as material in blender](https://files.slack.com/files-pri/T0HTW3H0V-F02P6CFS4D7/0016.png?pub_secret=7cceb2555d)

or pull a sequence as a video (one frame each) then render out of blender as an image sequence. Handle timing of image to image transitions in FCPX. *Note: we'll have to do it the slow way if we want smooth 24fps camera moves in blender as the shots change slowly. Better yet, let's come up with a mechanic for moving shots in and out of frame by moving them.*
![gif of the matrix](https://files.slack.com/files-pri/T0HTW3H0V-F02NQR1D3CM/comic-book-concept-test-20211128-3_540.gif?pub_secret=fc286dce25)

One can also imagine using the emission channel to create a "comics on the screen" effect, with global illumination or reflections selling the sense that they're existing in some environment (whether abstract or real).

![comic book still in the emission channel](https://files.slack.com/files-pri/T0HTW3H0V-F02NTQ5LGJX/matrix-comic-test-2.jpg?pub_secret=03ebb1950c)

### procedural cross-hatching shader tests

Still not sure this is worth the trouble, give the fact that the sketch and toon shader in C4D is so great. But here are some experiments.

some random objects:
![random shaded objects](https://files.slack.com/files-pri/T0HTW3H0V-F02NQR04BGV/cross-hatch-test-1.png?pub_secret=d35a944785)

a so-so model of michelangelo's moses
![sample cross-hatched 3d figure](https://files.slack.com/files-pri/T0HTW3H0V-F02NQS6TA6R/cross-hatch-test-5.png?pub_secret=a5f727deee)

the ll-logo cross-hatched in pink
![LL cross-hatched](https://files.slack.com/files-pri/T0HTW3H0V-F02NQRH32QM/cross-hatch-test-2.png?pub_secret=e02e0972b9)

