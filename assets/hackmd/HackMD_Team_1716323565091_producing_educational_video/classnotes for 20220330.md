# classnotes for 20220330

## blender

So Blender--especially as of Blender 3.0--is [cool](https://www.youtube.com/watch?v=QRqY_20ti9A). By why would you want to use it for educational video? 
* it's great for [better for scientific visualization](https://www.youtube.com/watch?v=6FuZasDij5k)
* it's a great way of harnessing the power of 3D models that museums and labs frequently publish

<div class="sketchfab-embed-wrapper"> <iframe title="Granite head of Amenemhat III" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/64d0b7662b59417986e9d693624de97a/embed?ui_watermark_link=0&ui_watermark=0"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/granite-head-of-amenemhat-iii-64d0b7662b59417986e9d693624de97a?utm_medium=embed&utm_campaign=share-popup&utm_content=64d0b7662b59417986e9d693624de97a" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Granite head of Amenemhat III </a> by <a href="https://sketchfab.com/britishmuseum?utm_medium=embed&utm_campaign=share-popup&utm_content=64d0b7662b59417986e9d693624de97a" target="_blank" style="font-weight: bold; color: #1CAAD9;"> The British Museum </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=64d0b7662b59417986e9d693624de97a" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F03A44HEMPA/orbiting-truss-with-statue_540.gif?pub_secret=f85b7ded21)

* you can use it to create game assets
* you can use it for infographics and data visualization
* and much more!

### blender vs ____

<iframe width="560" height="315" src="https://www.youtube.com/embed/wmnx4-ip0qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/aV1crGZU10I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iXDCiNiULNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


There are for sure alternatives to blender, and [loads of videos](https://www.youtube.com/watch?v=wmnx4-ip0qw) and [websites](https://medium.com/codex/maya-vs-3ds-max-vs-houdini-vs-cinema-4d-vs-blender-76d173696f2a) comparing them. But if you are looking for a quick answer to why we'd use Blender rather than Cinema 4D or Maya or 3DS Max or Houdini, well, it's free!

Ultimately, if you get really excited about 3D work you'll learn LOTS of these apps, and you'll frequently use them in combination with each other. For instance, you might
* draw out a character concept on your iPad on Procreate
* then model that character in Blender
* then create some materials for the character in Adobe Substance Designer
* then lay out a scene back in Blender, maybe bringing in a particle sim explosion you made in [Houdini](https://www.youtube.com/watch?v=z1-T_vLa7_w)
* you might even bring everything back to After Effects at the end to composite a human into your scene with some greenscreen footage.

You call this sort of workflow a ["pipeline."](https://dreamfarmstudios.com/blog/3d-animation-pipeline/) 

![](https://www.getqubicle.com/qubicle/assets/images/gravity_knight/01/pipeline.png)

![](https://www.reallusion.com/character-creator/includes/images/game/3d-character-pipeline.jpg)

### quick intro tutorial


We are going to 

* add a few primitive objects to a scene 
* understand the outliner hierarchy and how to make objects visible and invisible
* model our own simple object
* add a camera and a light
* understand modifiers
* make the objects and the camera move
* talk a bit about rendering
* and maybe more, time permitting!


### CHEATSHEET

#### TRACKPAD-NAVIGATION

* Two finger scroll = orbit
* Shift + two-finger-scroll = move the scene
* Ctrl + two-finger-scroll = zoom in and out
    * Pinch to zoom works too

#### MOUSE-NAVIGATION

* Middle-mouse-button + drag = orbit the scene
* Shift + middle-mouse-button + drag = move the scene 
* Mouse wheel = zoom in and out
* Left click = select object (or point/edge/face in edit mode)


#### KEYBOARD-NAVIGATION



* with object selected, `.` on number pad frames object selected
* if you have a numeric keyboard, hit all the numbers to see what happens


#### SHORTCUT KEYS


* **X** (and return to confirm) to delete an object
* **S** = scale
* **R** = rotate
* **G** = grab (and move)
* With **S**, **R** or **G** clicked, constrain axis with **X**, **Y** or **Z**
* **shift + Space** and then **S, R, **or **G **will activate the scale, rotate or grab tools
* **Control + Option + Q** = toggle quad view
* **Tab** = toggle between edit and object modes in 3D view
* **A** (in edit mode) = select/deselect all
* **B** then left-mouse-drag (in edit mode) = rectangular selection tool
* **C** then left-mouse-click (in edit mode) = select face/edge/point (right click to disable)
* **E** (especially in face mode) = extrude selected face
* **Z** = toggle on/off wireframe mode
    * In edit mode this will allow you to select faces/edges/points on the other side of the model too (like the “limit selection to visible” toggle on the toolbar).
* **Shift + Z** = render in 3D view
* **Control + left-click + drag** = lasso select
* **Option + right-click an edge** = select a ring of edges


### STEPS TO PRACTICE

these are some moves you might find yourself making frequently in Blender

#### THE SELECT AND EXTRUDE DANCE

* Drop a cube into the scene with **Add => Mesh => Cube**
* practice moving it around in two ways:
    * use the move tool (**Shift + Spacebar => G** or find it in the left sidebar) to move it along one axis at a time. Just grab one of the three axis arrows and pull along the X, Y or Z
    * you can also hit the letter **G** with the object selected in the viewport and drag it around . . . but if you hit G and then X, Y or Z, you can constrain movement to that axis
    * if you hit G, then X or Y or Z and then type in a number (start with 1 or 2), you'll move the object exactly that number of spatial units along that axis
* Shift to edit mode by hitting **tab** (repeat this step a number of times to help internalize it).  Do you see how the options in the “Tools” tab change depending on whether you are in edit or object mode?
    * If you don’t _see_ the Tools tab (or even if you do), hit **T**, again and again and again.
* Right click and select **Subdivide,** then do it again (so that you see 16 faces on each side of the cube)
* Hit **A**, then hit **option + A,** then do it again, then again and again. Note how you move from selecting all of the faces to selecting none?
* Now click a single face to select it. (If you seem to be secting points or lines instead of faces, hit the number **2** on your keyboard to switch from points or lines to faces--you can also find this in the top left of the GUI)
* Now hold down **shift** and click another face elsewhere on the object--you should see both of those faces now selected. 
* With faces selected you can select the move or rotate or scale tools and change them, just as you could change the whole object when in object mode.
* But we are going to do something else. So command Z to undo any changes and get back to your default cube.
* Then select a single face
* Then select the **Extrude Region** tool on the lefthand side of the interface (again, you need to be in edit mode to make this happen). You can also hit **shift + space** and then **E** to make this happen.
* grab the little yellow handle and pull it away from the face. You will seem to be moving the face, but you are actually adding MORE geometry.

### modifiers
* subdivision surface
* add a simple color material
* plane for the floor, add an image texture to material
* render view: Eevee vs Cycles


## references

* [notes on scripting](/rJTPtpH4Qaeh7EeNmUK3eg)