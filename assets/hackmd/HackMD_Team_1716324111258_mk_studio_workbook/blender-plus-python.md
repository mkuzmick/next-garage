---
title: blender-plus-python
tags: [' blender', tools, ' python']

---

---
tags: tools, blender, python
---

# blender-plus-python

notes on scripting in Blender, etc. Maybe even a little more than just Python.


## EVERYTHING SO FAR:

# Blender and Python Gists

# BLENDER PYTHON GISTS #

## functions ##
some functions that could be helpful when scripting things in Blender

* basic launch command structure: `blender $TEMPLATE --background --python $SCRIPT `


### clear_scene ###

```
def clear_scene():
	bpy.ops.object.select_all(action='SELECT')
	bpy.ops.object.delete(use_global=False)
```

### set_renderer ###

```
bpy.context.scene.render.engine = 'CYCLES'
# optionally set current viewport #
bpy.context.window.workspace = bpy.data.workspaces["Layout"]
for area in bpy.context.screen.areas: 
    if area.type == 'VIEW_3D':
        for space in area.spaces: 
            if space.type == 'VIEW_3D':
                space.shading.type = 'RENDERED'
```


### animation concept ###

```
# X, Y, and Z location to set
default_cube.location = 0.0, 0.0, 0.0
# Set the keyframe with that location, and which frame.
default_cube.keyframe_insert(data_path="location", frame=1)

# do it again!
default_cube.location = 3.0, 2.0, 1.0
# setting it for frame 10
default_cube.keyframe_insert(data_path="location", frame=10)
```


### LAUNCH SCRIPT TEMPLATE

```
#! /usr/bin/env zsh

BLENDER_WORK_FOLDER="$HOME/Desktop/project-blender-py/blender-work"
RENDER_FOLDER="$HOME/Desktop/project-blender-py/renders"
TEMPLATE_FOLDER="$HOME/Desktop/project-blender-py/blender-templates"
PYTHON_SCRIPT="$HOME/Desktop/project-blender-py/bpy-scripts/projects/bar-graphs/launch.py"

CURRENT_TIME=$(date "+%Y%m%d%H%M%S")
OUTPUT_PATH="$BLENDER_WORK_FOLDER/output-$CURRENT_TIME.blend"
RENDER_PATH="$RENDER_FOLDER/scripted/test-$CURRENT_TIME.png"
TEMPLATE="$TEMPLATE_FOLDER/just-a-cam.blend"
DATE_FOR_TEXT=$(date "+%Y%m%d")
TIME_FOR_TEXT=$(date "+%H:%M:%S")

echo "the date for text is being sent in as $DATE_FOR_TEXT"

# blender $TEMPLATE --background --python $PYTHON_SCRIPT  --SHOOT_DATE="$DATE_FOR_TEXT" --SHOOT_TIME="$TIME_FOR_TEXT" --OUTPUT_PATH="$OUTPUT_PATH" --RENDER_PATH="$RENDER_PATH"
# open "$OUTPUT_PATH" -a blender
# open $RENDER_PATH -a Preview
/Applications/Blender.app/Contents/MacOS/blender $TEMPLATE --python $PYTHON_SCRIPT --  --SHOOT_DATE="$DATE_FOR_TEXT" --SHOOT_TIME="$TIME_FOR_TEXT" --OUTPUT_PATH="$OUTPUT_PATH" --RENDER_PATH="$RENDER_PATH"

```



### MORE GISTS ###

* round to number
```
def round_to(n, decimals=3):
    multiplier = 10 ** decimals
    return round(n*multiplier) / multiplier
```
* get radius
```
def getRadius(pQuant):
    print(f'getting radius for value {pQuant}')
    radius = round_half_up((pQuant*3./(4.*3.14159))**(1./3))
    return radius
```
* append object
```
bpy.ops.wm.append(directory=f'{homeDirectory}/Desktop/_blender/prefabs/pumpkin-template.blend\\Object\\', filename="Pumpkin")
```
* append structure
```
bpy.ops.wm.append(directory={FILEPATH}, filename={OBJECT_NAME})
```
* change location and rotation of object with known name
```
bpy.data.objects["Plane"].location[0]=-120
bpy.data.objects["Plane"].rotation_euler[2]=-1.18
```
* open json file as data
```
with open(f'{homeDirectory}/Desktop/_blender/data/pumpkin-data.json') as data_file:
    data = json.load(data_file)
```
* grab template object and hide in render and viewport
```
pumpkinTemplate = bpy.data.objects["Pumpkin"]
pumpkinTemplate.hide_render = True
pumpkinTemplate.hide_viewport = True
```
* example of creating series of text objects with loop
```
for i, country in enumerate(data):
    xVal+=(country["radius"])
    print(f'working on {country["name"]}, which produced {country["pumpkins"]} pumpkins.')
    bpy.ops.object.text_add(enter_editmode=False, location=(0, 0, 0))
    bpy.context.active_object.name=(f'{country["name"]}-text')
    bpy.context.active_object.data.body=f'{country["name"]}\n{country["pumpkins"]}'
    bpy.context.active_object.data.size=15
    bpy.context.active_object.data.align_x='CENTER'
    bpy.context.active_object.data.extrude=3
    bpy.context.active_object.data.bevel_depth=.15
    bpy.context.active_object.location[0] = xVal
    bpy.context.active_object.location[1] = -34
    bpy.context.active_object.rotation_euler[0] = 1.5708
    bpy.ops.object.add_named(linked=False, name='Pumpkin')
    bpy.context.active_object.name = f'{country["name"]}-pumpkin'
    print(f'when we do the radius, it will be {getRadius(country["pumpkins"])}')
    bpy.context.active_object.location[0] = xVal
    bpy.context.active_object.location[1] = 0
    bpy.context.active_object.location[2] = country["radius"]
    bpy.context.active_object.scale = [country["radius"],country["radius"],country["radius"]]
    bpy.context.object.hide_render = False
    bpy.context.object.hide_viewport = False
    xVal+=(country["radius"]+10)

```
* save file as
```
bpy.ops.wm.save_as_mainfile(filepath=f'{homeDirectory}/Desktop/output.blend')
```
* parse command line arguments
	```
	import argparse
	
	def get_arguments():
	    argv = sys.argv
	    usage_text = (
	            "Run blender in background mode with this script:"
	            "  blender --background --python " + __file__ + " -- [options]"
	        )
	    if "--" not in argv:
	        argv = []  # as if no args are passed
	    else:
	        argv = argv[argv.index("--") + 1:]  # get all args after "--"
	    parser = argparse.ArgumentParser(description=usage_text)
	    parser.add_argument(
	        "-t", "--text", dest="text", type=str, required=False,
	        help="This text will be used to render an image",
	    )
	    parser.add_argument(
	        "-o", "--OUTPUT_PATH", dest="OUTPUT_PATH", type=str, required=True,
	        help="This text will be used to define the output path",
	    )
	    parser.add_argument(
	        "--RENDER_PATH", dest="RENDER_PATH", type=str, required=True,
	        help="This text will be used to define the render path",
	    )
	    parser.add_argument(
	        "--SHOOT_DATE", dest="SHOOT_DATE", type=str, required=True,
	        help="This text will be used to define the shoot date string",
	    )
	    parser.add_argument(
	        "--SHOOT_TIME", dest="SHOOT_TIME", type=str, required=True,
	        help="This text will be used to define the shoot time string",
	    )
	    args = parser.parse_args(argv)
	    return args

	theArgs = get_arguments()
	print(f'the shoot date is {theArgs.SHOOT_DATE}')
	```



* typical text object manipulation
	```
	bpy.ops.object.text_add(enter_editmode=False, location=(0, 0, 0))
	bpy.context.active_object.name=(f'shoot-time')
	bpy.context.active_object.data.body=f'{the_args.SHOOT_TIME}'
	bpy.context.active_object.data.size=.2
	bpy.context.active_object.data.align_x='CENTER'
	bpy.context.active_object.data.extrude=.04
	bpy.context.active_object.data.bevel_depth=.0007
	bpy.context.active_object.location[0] = 0
	bpy.context.active_object.location[1] = -1
	bpy.context.active_object.location[2] = -.29
	bpy.context.active_object.rotation_euler[0] = 1.5708
	```
* add a plane and a light
	```
	bpy.ops.mesh.primitive_plane_add(size=10, location=(0,0,-.3))
	bpy.ops.object.light_add(type='SPOT', radius=1, location=(0, -4, 15))
	bpy.context.active_object.data.energy=5000
	```
* render
	```
	print("rendering")
	sceneKey = bpy.data.scenes.keys()[0]
	print(f'sceneKey = {sceneKey}')
	for obj in bpy.data.objects:
	    if ( obj.type == 'CAMERA' ):
	        print(f'Rendering scene: {sceneKey}. Camera name: {obj.name}')
	        bpy.data.scenes[sceneKey].camera = obj
	        bpy.data.scenes[sceneKey].render.engine = 'BLENDER_EEVEE'
	        bpy.data.scenes[sceneKey].render.resolution_x = 1920
	        bpy.data.scenes[sceneKey].render.resolution_y = 1080
	        bpy.data.scenes[sceneKey].render.filepath = the_args.RENDER_PATH
	        bpy.ops.render.render(write_still=True, scene=sceneKey)
	```

* render all cams
```
sceneKey = bpy.data.scenes.keys()[0]
c=1
for obj in bpy.data.objects:
    if ( obj.type =='CAMERA'):
      print("Rendering scene["+sceneKey+"] with Camera["+obj.name+"]")
      bpy.data.scenes[sceneKey].camera = obj
      #bpy.data.scenes[sceneKey].render.file_format = 'JPEG'
      bpy.data.scenes[sceneKey].render.filepath = f'{RENDER_FOLDER}/camera_' + str(c) + '_'
      # Render Scene and store the scene
      bpy.ops.render.render( animation=True )
      c = c + 1
print('Done!') 

```

* create text object with font

```
def createTextObject(textContent, size, rotation, extrusion, alignment):
    print("creating text with textContent=" + textContent)
    bpy.ops.object.text_add(enter_editmode=False, align='WORLD', location=(0, 0, 0))
    textObject = bpy.context.active_object
    textObject.data.body = str(textContent)
    textObject.rotation_euler[0] = radians(rotation)
    textObject.data.extrude = extrusion
    textObject.data.size=size
    textObject.name=textContent
    textObject.data.align_x = alignment
    return textObject

def quickText(textContent):
    bpy.ops.object.text_add(enter_editmode=False, align='WORLD', location=(0, 0, 0))
    textObject = bpy.context.active_object
    textObject.data.body = str(textContent)
    textObject.rotation_euler[0] = radians(90)
    textObject.data.extrude = 0.1
    textObject.data.align_x = 'CENTER'
    return textObject

textObject = createTextObject(str(result), 3, 90, 0.2, 'CENTER')
textObject.location[0]=result

greeting = quickText("hello Conrad")
greeting.location[2]=4

# change the font

textObject.data.font=bpy.data.fonts.load("/System/Library/Fonts/Avenir Next.ttc")
greeting.data.font=bpy.data.fonts.load("/Users/mk/Library/Fonts/Forum-Regular.ttf")

# or

SFHeavy = bpy.data.fonts.load("/Library/Fonts/SF-Pro-Display-Heavy.otf")
bigLetter = createTextObject("Z", 20, 90, 1.0, 'CENTER')
bigLetter.location[1]=10
bigLetter.data.font=SFHeavy
```

* light area
```
def lightTheSpot(spotToLight):
    bpy.ops.object.light_add(type='AREA', radius=1, align='WORLD', location=(0, 0, 0))
    light = bpy.context.active_object
    light.location[2] = 3
    light.location[0] = result
    light.data.energy = 500

lightTheSpot(result)
```

### MINECRAFT BLOCK ATTEMPT 4 ###

```
import bpy
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

grassPathTop="/Users/mk/Desktop/ck-blender-minecraft-project/textures/Minecraft-textures/assets/minecraft/textures/block/grass_path_top.png"
grassPathSide="/Users/mk/Desktop/ck-blender-minecraft-project/textures/Minecraft-textures/assets/minecraft/textures/block/grass_block_side.png"


class Block:
    def __init__(self, name, side, top, bottom):
        bpy.ops.mesh.primitive_cube_add()
        self.object = bpy.context.active_object
        self.name = name
        self.side = side
        if top:
            self.top = top
        else: 
            self.top = self.side
        if bottom:
            self.bottom = bottom
        else: 
            self.bottom = self.side
        self.sideImage = bpy.data.images.load(self.side)
        self.sideTex = bpy.data.textures.new(self.side, 'IMAGE')
        self.sideTex.image = self.sideImage
        self.sideMaterial = bpy.data.materials.new(name=f"{name}-side-material")
        self.topMaterial = bpy.data.materials.new(name=f"{name}-top-material")
        self.bottomMaterial = bpy.data.materials.new(name=f"{name}-bottom-material")
        self.sideMaterial.use_nodes = True
        self.topMaterial.use_nodes = True
        self.bottomMaterial.use_nodes = True
        bsdf = self.sideMaterial.node_tree.nodes["Principled BSDF"]
        texImage = self.sideMaterial.node_tree.nodes.new('ShaderNodeTexImage')
        texImage.image = bpy.data.images.load(self.side)
        self.sideMaterial.node_tree.links.new(bsdf.inputs['Base Color'], texImage.outputs['Color'])
        self.sideMaterial.node_tree.nodes["Image Texture"].interpolation = 'Closest'

        
        if self.object.data.materials:
            self.object.data.materials[0] = self.sideMaterial
        else: 
            self.object.data.materials.append(self.sideMaterial)
        self.object.data.materials.append(self.topMaterial)
        self.object.data.materials.append(self.bottomMaterial)
        
        
        
#            
#            
#def set_UV_editor_texture(mesh):
#    """ set the image for the face.tex layer on all the faces
#    so we have a rough idea of what the mesh will look like
#    in the 3D view's Texture render mode"""
#    # load the mesh data into a bmesh object
#    bm = bmesh.new()
#    bm.from_mesh(mesh)
#    bm.faces.ensure_lookup_table()
#    # Get the "tex" layer for the first UV map
#    # If you don't already have a UV map, why are you even calling this function?
#    tex_layer = bm.faces.layers.tex[mesh.uv_layers[0].name]
#    for i in range(len(bm.faces)):
#        # figure out which material this face uses
#        mi = bm.faces[i].material_index
#        mat = mesh.materials[mi]
#        # Assume that we want to use the image from the first texture slot;
#        # and assume that the material has a texture in that first slot;
#        # and assume that the texture is an image texture instead of a procedural texture.
#        # if any of several assumptions are wrong, this will explode
#        img = mat.texture_slots[0].texture.image
#        bm.faces[i][tex_layer].image = img
#    # copy the modified data into the mesh
#    bm.to_mesh(mesh)
#fname = "/var/tmp/blender/mohawk-seal0001.png"
#obj = bpy.context.active_object
#mat = material_for_texture(fname)
#if len(obj.data.materials)<1:
#    obj.data.materials.append(mat)
#else:
#    obj.data.materials[0] = mat
#set_UV_editor_texture(obj.data)


blockOne = Block("grass", grassPathSide, grassPathTop, None)
#blockTwo = Block("iron", "C:/Users/ll/Desktop/_blender/block/iron_block.png", None, None)
blockOne.object.location[2] = 3
```

### NEW OBJECT FROM TEMPLATE ###

```

homeDirectory = os.getenv("HOME")
blocksFolder = "/Users/mk/Desktop/ck-blender-minecraft-project/blender/blocks"

class BlockTemplate(name):
    def __init__:
        # get rid of any conflicting objects in scene
        self.filepath = f"{blocksFolder}/{name}.blend\\Object\\"
        self.name = name
        if bpy.data.objects[self.name]:
            bpy.data.objects[self.name].select_set(True)
            bpy.ops.object.delete()
        bpy.ops.wm.append(directory=self.filePath, filename=self.name)
        #self.object=bpy.context.active_object
        self.object=bpy.data.objects[self.name]
        self.object.hide_render = True
        self.object.hide_viewport = True
    
class Block(template, index):
    def __init__:
        bpy.ops.object.add_named(linked=False, name=template)
        self.object = bpy.context.active_object
        .name = f'{country["name"]}-pumpkin'
    print(f'when we do the radius, it will be {getRadius(country["pumpkins"])}')
    bpy.context.active_object.location[0] = xVal
    bpy.context.active_object.location[1] = 0
    bpy.context.active_object.location[2] = country["radius"]
    bpy.context.active_object.scale = [country["radius"],country["radius"],country["radius"]]
    bpy.context.object.hide_render = False
    bpy.context.object.hide_viewport = False
    xVal+=(country["radius"]+10)


```

### try looping through scenes to set viewport to rendered ###
not functional right now
```
import bpy

for area in bpy.context.screen.areas: 
    if area.type == 'VIEW_3D':
        for space in area.spaces: 
            if space.type == 'VIEW_3D':
                space.shading.type = 'MATERIAL'
```




#### add text from arguments ####

	```
	bpy.ops.object.text_add(enter_editmode=False, location=(0, 0, 0))
	    if the_args.text:
	        bpy.context.active_object.name=(f'text test')
	        print(the_args.text)
	        bpy.context.active_object.data.body=f'{the_args.text}'
	    elif the_args.SHOOT_DATE:
	        bpy.context.active_object.name=(f'shoot-date')
	        bpy.context.active_object.data.body=f'{the_args.SHOOT_DATE}'
	    else:
	        print("there is no text value to add")
	```


renaming selected objects:
```
for obj in bpy.context.selected_objects:
    obj.name = "newName"

for obj in bpy.context.scene.objects:
    if obj.type == 'MESH' and obj.name.lower().startswith("c")
        obj.name = "newName"
```




# Tutorial for Christie

# TUTORIALS FOR CHRISTIE #

we need to create a number of things at the intersection of blender and python. one interesting development => given the fact that students learning python in the sciences and social sciences are going to be using `matplotlib`, it could make sense to have the learning trajectory we create match what they encounter with `matplotlib`.

so if the very first thing is simply 


## ELEMENTS ##
things to do/create:
* basic scatterplot
* axes
* line plot
* histogram
* population pyramids?
* streamplot (weather?)
* monochromatic and multichromatic color-scales
* bar charts
* pie charts
* 



## REFERENCE ##

* API for stock data: https://finnhub.io
* great [github repo full of blender scripts](https://github.com/njanakiev/blender-scripting)
* [article on an astronomer's script to map a data set to a sphere's texture](https://bertvandenbroucke.netlify.app/2019/10/13/making-rotating-sphere-plots-with-blender/) and here is [his script](https://bertvandenbroucke.netlify.app/assets/code/rotating_sphere.py)
* matplotlib window interactively in blender: https://blender.stackexchange.com/questions/141121/how-to-use-matplotlib-interactively-with-blender
* [cool example of terrain with noise in python](https://blender.stackexchange.com/questions/34351/how-to-get-a-seed-and-perlin-noise-randomnumber-in-python-in-bge) proof of concept
* [real cool medium post on creative coding with blender](https://medium.com/@behreajj/creative-coding-in-blender-a-primer-53e79ff71e)
* [this guy's medium channel is essential for blender python scripting](https://medium.com/@behreajj)
	* [creating a capsule in 5 environments](https://medium.com/@behreajj/making-a-capsule-mesh-via-script-in-five-3d-environments-c2214abf02db)
	* [tutorial on bmesh = complicated!](https://medium.com/@behreajj/shaping-models-with-bmesh-in-blender-2-9-2f4fcc889bf0)
	* [creative coding in blender: a primer](https://medium.com/@behreajj/creative-coding-in-blender-a-primer-53e79ff71e) is pre 2.8 though
	* [visualizing complex numbers in blender](https://medium.com/@behreajj/visualizing-complex-numbers-in-blender-d60bd32f20b9)
	* [scripting curves with Blender](https://medium.com/@behreajj/scripting-curves-in-blender-with-python-c487097efd13)
	* [coding materials with nodes and python](https://medium.com/@behreajj/coding-blender-materials-with-nodes-python-66d950c0bc02)
	* 
* scripting for artists
	* [15 = Modal Operators](https://www.youtube.com/watch?v=A8S-s7tuTdY)
	* [14 = the roast of nature clicker](https://www.youtube.com/watch?v=uBDc0Eq70kM)
	* [13 = roast my add-on](https://www.youtube.com/watch?v=_8KsNVE6KJs)
	* [12 = asset linking](https://www.youtube.com/watch?v=tIg-KOeFxkg)
	* [11 = custom properties](https://www.youtube.com/watch?v=9fuFDHR-UkE)
	* [10 = user interfaces](https://www.youtube.com/watch?v=bZUTiAJ1Tuc)
	* [9 = from script to add-on](https://www.youtube.com/watch?v=nKt6CtMH0no)
	* [8 = your own operator](https://www.youtube.com/watch?v=xscQ9tcN4GI)
	* [7 = for vs while](https://www.youtube.com/watch?v=7M8FIXDMKkg)
	* [6 = blender collections](https://www.youtube.com/watch?v=opZy2OJp8co&t=38s)
* [stylized character workflow](https://www.youtube.com/watch?v=f-mx-Jfx9lA&t=132s)
* [archeology for 3d modelling](https://www.youtube.com/watch?v=bwMTTJogurE)
* [simple bar chart with python and blender](https://medium.com/@octaviogl69/making-a-simple-bar-plot-with-blender-and-python-2894bf98534e)
* [scripting for artists video 6](https://www.youtube.com/watch?v=opZy2OJp8co)
* [scan the world resouces](https://www.myminifactory.com/scantheworld/)
* [intro to three.js](https://medium.com/javascript-in-plain-english/javascript-in-3d-an-introduction-to-three-js-780f1e4a2e6d) that includes a quick note on how to use it with React
* [creating a blender 2.8 voxelize script](https://www.youtube.com/watch?v=l9wSDtqThmQ&list=PL7Xqu2JziZPfzdAop8I9J5OticI4EbzZ8&index=187)
* [talk on using python to create terrain from noise in blender](https://www.youtube.com/watch?v=O33YV4ooHSo)
* [grass in blender](https://www.youtube.com/watch?v=Hf8s1Ckycdo)
* [the bezier game](https://bezier.method.ac/)
* [great article on bezier curve, adobe, art history](https://blog.prototypr.io/an-ode-to-the-bezier-curve-3eb9eca038ff)	
* [quick video on making meshes in blender with python](https://www.youtube.com/watch?v=gVUvnSJ-t3M)






# BLENDER TUTORIAL

for augmenting space lab on 20211109

Below are some notes for previous Blender tutorials we've done over the years in case they're helpful! If you ever fall behind or get bored, feel free to work through these at your own pace!

Why Blender? checkout our [pinterest](https://www.pinterest.com/learninglabpins/toolblender/) for examples of what you can do with it. But in this cluster I guess we're excited about two things:
1. if you end up getting excited about building interactive 3D worlds in Unity, Blender is where you'd build the objects that would populate these worlds (in Unity you can create some primitive objects like cubes and spheres, but Blender is where you'd create more complex shapes)
2. if you'd like to make a beautiful 3D data visualization or map, Blender could be a good place to go.

### BLENDER INTRO (Mac)

These are the basics on using Blender 2.8 on a Mac.  Just the _very_ basics.  

This is for you to mark up---be sure to underline anything that feels counter-intuitive to you as you use the software, because this is the stuff you’ll come back to, and you’ll need your paper+pen markup to help you remember where it is.  The big thing you’ll want to do as you learn is to **practice each step** (each shortcut key, each mouse move, each sequence of operations).  It’s more like learning a new dance step than learning the capital of Ohio[^1]--it’s not enough to just hear and understand the information.  It’s about **knowing-how** rather than **knowing-that** . . . and to know **how**, you actually need to train your body to make the right movement. 


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
* subdivision surface
* add a simple color material
* plane for the floor, add an image texture to material
* render view: Eevee vs Cycles
* 


### CAN WE VISUALIZE DATA IN HERE?

scripting

* save your last doc and create a new one
* navigate to the scripting tag


Let's start by importing everything we need and clearing the scene.

```
import bpy
import requests
import time
import math

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    
clear_scene()
    
```

now let's add a simple `Bar` class

```
import bpy
import requests
import time
import math

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)


class Cube():
    def __init__(self):
        bpy.ops.mesh.primitive_cube_add()
        self.obj = bpy.context.active_object

class Bar:
    def __init__(self, index, value):
        bpy.ops.mesh.primitive_cube_add(size=1)
        self.obj = bpy.context.active_object
        bpy.ops.object.modifier_add(type='BEVEL')
        self.height = value
        self.obj.scale = (1, 1,  self.height)
        self.obj.modifiers["Bevel"].width = 0.03
        self.obj.location[0] = index*1.1
        self.obj.location[2] = self.height/2

clear_scene()

data = [1, 3, 5, 7, 9]
  
# Using for loop
for i, val in enumerate(data):
    Bar(i, val)
```


### QUICKTEXT

```

def quickText(textContent):
    bpy.ops.object.text_add(enter_editmode=False, align='WORLD', location=(0, 0, 0))
    textObject = bpy.context.active_object
    textObject.data.body = str(textContent)
    textObject.rotation_euler[0] = math.radians(90)
    textObject.data.extrude = 0.1
    textObject.data.align_x = 'CENTER'
    return textObject


quickText("Marlon")
bpy.ops.mesh.primitive_plane_add(size=50, location=(0,.7,0), rotation=(1.5708, 0, 0))

```
#### BAR FROM API DATA CONCEPT

```
import requests
import time
import bpy
import math

​
default_data = {}
​
class Candle:
    def __init__(self, close, high, low, open, ts, volume, item_number):
        bpy.ops.mesh.primitive_cube_add(size=1)
        self.candle_object = bpy.context.active_object
        bpy.ops.object.modifier_add(type='BEVEL')
        self.wick_height = high-low
        if (open-close) < 0:
            self.color = "red"
            self.candle_height = close-open
        elif (open-close) > 0:
            self.color = "green"
            self.candle_height = open-close
        else:
            self.color = "gray"
            self.candle_height = 0
        if self.candle_height < 0.01:
            self.candle_height = 0.01
        self.candle_object.scale = (0.1, 0.1,  self.candle_height)
        # create wick
        bpy.ops.mesh.primitive_cube_add()
        self.wick_object = bpy.context.active_object
        self.candle_object.modifiers["Bevel"].width = 0.02
        self.wick_object.scale = (0.01, 0.01, self.wick_height)
        self.candle_object.location[0] = item_number*.1
        self.wick_object.location[0] = item_number*.1
        self.candle_object.location[2] = open + self.candle_height/2
        self.wick_object.location[2] = low + self.wick_height/2
​
class Scene:
    def __init__(self):
        bpy.ops.mesh.primitive_plane_add(size=50, location=(0,.7,0), rotation=(1.5708, 0, 0))
        self.background_plane = bpy.context.active_object
        # bpy.ops.rigidbody.object_add()
        # bpy.context.object.rigid_body.type = 'PASSIVE'
​
​
def get_stock_data(symbol, apikey):
    now=round(time.time())
    print(now)
    r = requests.get(f'https://finnhub.io/api/v1/stock/candle?symbol={symbol}&resolution=15&from={now-86400*7}&to={now}&token={apikey}')
    if r.status_code != 200:
        print(f'failed with code: {r.status_code}')
        data = default_data
    else:
        print(r.json())
        data = r.json()
    z_offset = data["o"][0]
    for i, close in enumerate(data["c"]):
        print(f'opened at {data["o"][i]} and closed at {close}')
        candle = Candle(close, data["h"][i], data["l"][i], data["o"][i], data["t"][i], data["v"][i], i)
        candle.candle_object.location[2] -= z_offset
        candle.wick_object.location[2] -= z_offset
    scene = Scene()
```

#### SIMPLE GROUND

```
class SimpleGround:
    def __init__(self):
        bpy.ops.mesh.primitive_plane_add(size=50, location=(0,0,0))
        self.object = bpy.context.active_object
        bpy.ops.rigidbody.object_add()
        bpy.context.object.rigid_body.type = 'PASSIVE'
```

#### MAKING A NAME CONCEPT

```
import bpy
import sys
import argparse
sys.path.append('/Users/mk/Desktop/project-blender-py/scripts/projects/name_drop')
import mk_blender_utilities as mk

def parse_arguments(argv):
    usage_text = (
            "Run blender in background mode with this script:"
            "  blender --background --python " + __file__ + " -- [options]"
        )
    if "--" not in argv:
        argv = []  # as if no args are passed
    else:
        argv = argv[argv.index("--") + 1:]  # get all args after "--"
    parser = argparse.ArgumentParser(description=usage_text)
    parser.add_argument(
        "-n", "--NAME_TO_DROP", dest="NAME_TO_DROP", type=str, default="name", required=False,
        help="This name will be the one we use for the name drop",
    )
    parser.add_argument(
        "-o", "--OUTPUT_PATH", dest="OUTPUT_PATH", type=str, required=True,
        help="This text will be used to define the output path for the blender file",
    )
    parser.add_argument(
        "--RENDER_PATH", dest="RENDER_PATH", type=str, required=True,
        help="This text will be used to define the render path",
    )
    args = parser.parse_args(argv)
    return args

class Letter:
    def __init__(self, letter):
        self.letter = letter
        bpy.ops.object.text_add(enter_editmode=False, location=(0, 0, 0))
        self.object = bpy.context.active_object
        self.object.name=(f'{letter}-text')
        self.object.data.body=f'{letter}'
        self.object.data.size=4
        self.object.data.align_x='LEFT'
        self.object.data.extrude=.2
        self.object.data.bevel_depth=.02
        self.object.location[0] = 0
        self.object.location[1] = 0
        self.object.location[2] = 4.2
        self.object.rotation_euler[0] = 1.5708
        self.object.hide_render = False
        self.object.hide_viewport = False
        self.object.data.font=bpy.data.fonts.load("/System/Library/Fonts/Avenir Next.ttc")
        bpy.ops.object.convert(target="MESH")
        bpy.ops.object.transform_apply(location=False, rotation=True, scale=False)
        bpy.ops.object.origin_set(type='ORIGIN_CENTER_OF_VOLUME', center='MEDIAN')
        bpy.ops.rigidbody.object_add()
        self.width = self.object.dimensions.x
        self.height = self.object.dimensions.y
        self.depth = self.object.dimensions.z

class Name:
    def __init__(self, name):
        self.letters = []
        self.offset = 0
        self.spacing = .05
        for num, letter in enumerate(name):
            thisLetter = Letter(letter)
            if letter=="r":
                print('changing offset for r')
                self.offset-=.15
            self.offset+=(thisLetter.width/2+self.spacing)
            thisLetter.object.location[0] = self.offset
            self.letters.append(thisLetter)
            print(f'created {thisLetter.letter} in position {num} and added to array. Width is {thisLetter.width} and we set location[0] to {self.offset}')
            self.offset+=(thisLetter.width/2+self.spacing)
            if letter=="r":
                print('changing offset for r')
                self.offset+=.1
        self.center=(self.offset/2, 0, 1.5)

```


## OTHER DOCS

* [Blender and Python Gists](/FW23UBH3RpOeDUX_qBrwdw)
* [Tutorial for Christie](/2Cp1OitOTOey3yQALxdNfw)



#### EXTRAS TO KNOW ABOUT



* To change the object’s **anchor point**, select **Transform => origin to cursor **after clicking on the right spot of the object (the orthographic views are good for this
* To apply a material to only a group of polygons in an object, select them in edit mode, then create a new material, then click **assign**
* Each window’s toolbar is at the BOTTOM rather than the top of the window.
* You can add windows by clicking and dragging the little lines at the top right or bottom left of each window (drag down or inwards to the left from the top right; drag up inward to the right from the bottom left). But there is no immediately obvious way to get RID of the windows.  The way to do it is to invert what you’ve just done: hover over one of those same corners until you see crosshairs (a white “plus” shape), and then instead of dragging INWARDs, drag OUTWARDS into a neighboring window that you’d like to collapse (so you do this not in the window you want to get RID of, but in the window you want to “absorb” the space of the window you need to close). You will get used to this, but everyone has to admit that it’s a little weird.


#### 


#### CREATING A SIMPLE SCREEN IN BLENDER FOR UNITY

The easiest way to create a “screen” in Blender is to create a simple plane.  On its own, it won’t do much that a quad generated in Unity can’t do, so if all you need is a flat surface, you may want to stick with Unity alone.  So we are going to create a slightly wavy plane to make it more interesting: starting by adding a simple plane, then deforming it just a bit, and then bringing it into Unity.



1. In your new Blender scene, right click on the cube and delete it (forward delete key, or fn + delete on macBook).
2. In the Create menu, click Plane.  And then, BEFORE you do anything else, look for the “add plane” menu and make sure that you select** “generate UVs”**--it’s _possible_ to fix things if you forget to do this; it just takes some extra steps that add complexity, and we’re trying to keep this simple.
3. Find your “transform” tab (if you can’t see it, hit the letter “N” while your mouse is hovering over your 3d view [i.e. your main editing window]).  With your screen selected (right click on it), rotate it 90 degrees around the X axis in one of these three ways
    1. Click in the X Rotation field and type in 90
    2. With the screen selected and your cursor hovering over the 3D view, type “R” for rotate, then type “X” to constrain your rotation to the x-axis
    3. Click the little arc in the toolbar at the bottom of your 3D view and rotate the object
4. Export the object as an .fbx file (if you don’t want to export the whole scene, including the cameras, lights, etc., then select the object and check “export selected objects” when in the export .fbx view)
5. In Unity, import the .fbx file.  When you click on it in the assets folder, you will see a materials tab in the inspector.  Click on this and select your Video Material. If you don’t have a Video Material, create a new material, call it VideoMat or some such, and follow these steps:
    4. Drag your .fbx object (the one that you just applied VideoMat to) from the assets folder into the hierarchy to add it to the scene. 
    5. Then select the object in the hierarchy to reveal its properties in the inspector
    6. Click “Add Component” => Video Player.
    7. Choose your video in the “Video Clip” box
    8. Change “Render Mode” from “Material Override” to Render Texture
    9. Change


#### HOTKEYS

opt + G = resest position of object

N = toggle on/off transform numers

T = toggle on/off tool palette

	 


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     And, to tell you the truth, learning the capital of Ohio may be more like learning a dance step than we think!





## more notes

we need to create a number of things at the intersection of blender and python. one interesting development => given the fact that students learning python in the sciences and social sciences are going to be using `matplotlib`, it could make sense to have the learning trajectory we create match what they encounter with `matplotlib`.

so if the very first thing is simply 


### elements
things to do/create:
* basic scatterplot
* axes
* line plot
* histogram
* population pyramids?
* streamplot (weather?)
* monochromatic and multichromatic color-scales
* bar charts
* pie charts
* 



## REFERENCE

* API for stock data: https://finnhub.io
* great [github repo full of blender scripts](https://github.com/njanakiev/blender-scripting)
* [article on an astronomer's script to map a data set to a sphere's texture](https://bertvandenbroucke.netlify.app/2019/10/13/making-rotating-sphere-plots-with-blender/) and here is [his script](https://bertvandenbroucke.netlify.app/assets/code/rotating_sphere.py)
* matplotlib window interactively in blender: https://blender.stackexchange.com/questions/141121/how-to-use-matplotlib-interactively-with-blender
* [cool example of terrain with noise in python](https://blender.stackexchange.com/questions/34351/how-to-get-a-seed-and-perlin-noise-randomnumber-in-python-in-bge) proof of concept
* [real cool medium post on creative coding with blender](https://medium.com/@behreajj/creative-coding-in-blender-a-primer-53e79ff71e)
* [this guy's medium channel is essential for blender python scripting](https://medium.com/@behreajj)
	* [creating a capsule in 5 environments](https://medium.com/@behreajj/making-a-capsule-mesh-via-script-in-five-3d-environments-c2214abf02db)
	* [tutorial on bmesh = complicated!](https://medium.com/@behreajj/shaping-models-with-bmesh-in-blender-2-9-2f4fcc889bf0)
	* [creative coding in blender: a primer](https://medium.com/@behreajj/creative-coding-in-blender-a-primer-53e79ff71e) is pre 2.8 though
	* [visualizing complex numbers in blender](https://medium.com/@behreajj/visualizing-complex-numbers-in-blender-d60bd32f20b9)
	* [scripting curves with Blender](https://medium.com/@behreajj/scripting-curves-in-blender-with-python-c487097efd13)
	* [coding materials with nodes and python](https://medium.com/@behreajj/coding-blender-materials-with-nodes-python-66d950c0bc02)
	* 
* scripting for artists
	* [15 = Modal Operators](https://www.youtube.com/watch?v=A8S-s7tuTdY)
	* [14 = the roast of nature clicker](https://www.youtube.com/watch?v=uBDc0Eq70kM)
	* [13 = roast my add-on](https://www.youtube.com/watch?v=_8KsNVE6KJs)
	* [12 = asset linking](https://www.youtube.com/watch?v=tIg-KOeFxkg)
	* [11 = custom properties](https://www.youtube.com/watch?v=9fuFDHR-UkE)
	* [10 = user interfaces](https://www.youtube.com/watch?v=bZUTiAJ1Tuc)
	* [9 = from script to add-on](https://www.youtube.com/watch?v=nKt6CtMH0no)
	* [8 = your own operator](https://www.youtube.com/watch?v=xscQ9tcN4GI)
	* [7 = for vs while](https://www.youtube.com/watch?v=7M8FIXDMKkg)
	* [6 = blender collections](https://www.youtube.com/watch?v=opZy2OJp8co&t=38s)
* [stylized character workflow](https://www.youtube.com/watch?v=f-mx-Jfx9lA&t=132s)
* [archeology for 3d modelling](https://www.youtube.com/watch?v=bwMTTJogurE)
* [simple bar chart with python and blender](https://medium.com/@octaviogl69/making-a-simple-bar-plot-with-blender-and-python-2894bf98534e)
* [scripting for artists video 6](https://www.youtube.com/watch?v=opZy2OJp8co)
* [scan the world resouces](https://www.myminifactory.com/scantheworld/)
* [intro to three.js](https://medium.com/javascript-in-plain-english/javascript-in-3d-an-introduction-to-three-js-780f1e4a2e6d) that includes a quick note on how to use it with React
* [creating a blender 2.8 voxelize script](https://www.youtube.com/watch?v=l9wSDtqThmQ&list=PL7Xqu2JziZPfzdAop8I9J5OticI4EbzZ8&index=187)
* [talk on using python to create terrain from noise in blender](https://www.youtube.com/watch?v=O33YV4ooHSo)
* [grass in blender](https://www.youtube.com/watch?v=Hf8s1Ckycdo)
* [the bezier game](https://bezier.method.ac/)
* [great article on bezier curve, adobe, art history](https://blog.prototypr.io/an-ode-to-the-bezier-curve-3eb9eca038ff)	
* [quick video on making meshes in blender with python](https://www.youtube.com/watch?v=gVUvnSJ-t3M)




# BLENDER NOTES #


* blender materials
	* create rounded rectangles with images on them
	* apply images to faces
	* https://www.youtube.com/watch?v=htV_BhUZwcI
	* https://www.youtube.com/watch?v=rng7AYfJk4Q
	* smoke explosion cartoon: https://www.youtube.com/watch?v=eQPcso-Lcbc
	* anime explosion in AE: https://www.youtube.com/watch?v=XBYd7XUR4o8
	* referenve plugin: https://www.youtube.com/watch?v=qcBLwoPH9Kg
	* random hand-drawn animations: https://www.youtube.com/watch?v=hurAsW41GM4
	* ae glitchy circuits: https://www.youtube.com/watch?v=VeA9OyVEH4A
	* best anime explosion: https://www.youtube.com/watch?v=YdSHSf9c9FU
	* shattering stuff in AE: https://www.youtube.com/watch?v=rsqgL3K84bg
	* anime energy flash effects
	* cartoon world: https://www.youtube.com/watch?v=gqujN20Q_PU
	* cracked glass displacement: https://www.youtube.com/watch?v=c9dQYJ4nZ9w
	* cracked lens effect in AE: https://www.youtube.com/watch?v=mzGkSABCkx8
	* broken glass effect: https://www.youtube.com/watch?v=L4-AMTewrK8

## BLENDER SCRIPTING


scripting links:
* [3D programming for Beginners](https://www.youtube.com/watch?v=rHzf3Dku_cE)
* [Blender scripting for lazy 3d artists](https://www.youtube.com/watch?v=hj3FtJsQFbA)
* [scripting quickstart](https://docs.blender.org/api/current/info_quickstart.html)
* [cgCookie's intro to scripting in Blender 2.8](https://cgcookie.com/articles/blender-2-8-python-scripting-superpowers-for-non-programmers)
* [Blender 2.91 Alpha API Docs](https://docs.blender.org/api/blender2.8/)
* [DataVis for Python and Blender](https://www.youtube.com/watch?v=Xrixs_XuDQo)
* [Python Crash Course for Blender](https://www.youtube.com/watch?v=XqX5wh4YeRw)
* [Blender Python Tutorial](https://www.youtube.com/watch?v=cyt0O7saU4Q&t=19s)
* [Python Scripting: 5 Tips](https://www.youtube.com/watch?v=pfhht_67x3k)
* [Python scripting for Physics Sims](https://www.youtube.com/watch?v=KI0tjZUkb5A&t=405s)
* [Python Scripting: How to Create an Addon](https://www.youtube.com/watch?v=8mSSCQ7LGVo) like a shader library
* [Scripting for Artists](https://www.youtube.com/watch?v=hfYgCwC_4iE)
* [Blender Python Scripting: add a keyframe and modifier with Blender Python](https://www.youtube.com/watch?v=zYi5JPmMG3w)
* [intro to python scripting](https://www.youtube.com/watch?v=KNa5kJd2Epo) but from bad angle
* 

### BLENDER
duck on arrays: [here](https://www.youtube.com/watch?v=skDqIwTnOfs)

scripting links:
* [3D programming for Beginners](https://www.youtube.com/watch?v=rHzf3Dku_cE)
* [Blender scripting for lazy 3d artists](https://www.youtube.com/watch?v=hj3FtJsQFbA)
* [scripting quickstart](https://docs.blender.org/api/current/info_quickstart.html)
* [cgCookie's intro to scripting in Blender 2.8](https://cgcookie.com/articles/blender-2-8-python-scripting-superpowers-for-non-programmers)
* [Blender 2.91 Alpha API Docs](https://docs.blender.org/api/blender2.8/)
* [DataVis for Python and Blender](https://www.youtube.com/watch?v=Xrixs_XuDQo)
* [Python Crash Course for Blender](https://www.youtube.com/watch?v=XqX5wh4YeRw)
* [Blender Python Tutorial](https://www.youtube.com/watch?v=cyt0O7saU4Q&t=19s)
* [Python Scripting: 5 Tips](https://www.youtube.com/watch?v=pfhht_67x3k)
* [Python scripting for Physics Sims](https://www.youtube.com/watch?v=KI0tjZUkb5A&t=405s)
* [Python Scripting: How to Create an Addon](https://www.youtube.com/watch?v=8mSSCQ7LGVo) like a shader library
* [Scripting for Artists](https://www.youtube.com/watch?v=hfYgCwC_4iE)
* [Blender Python Scripting: add a keyframe and modifier with Blender Python](https://www.youtube.com/watch?v=zYi5JPmMG3w)
* [intro to python scripting](https://www.youtube.com/watch?v=KNa5kJd2Epo) but from bad angle
* 


gist = 
`blender --background --python myscript.py`



## BLENDER RANDOM
duck on arrays: [here](https://www.youtube.com/watch?v=skDqIwTnOfs)

adding texture to an area light: https://odederell3d.blog/2020/05/06/blender-adding-a-texture-to-an-area-light/
[osl shaders in blender and cycles](https://odederell3d.blog/2020/05/28/using-osl-shaders-in-blender-cycles/)]


fire in blender
https://www.youtube.com/watch?v=_RKAL5zST84
https://www.youtube.com/watch?v=vSYMjhFXcr8&t=333s
https://www.youtube.com/watch?v=z7hHFYaQ2nA
https://www.youtube.com/watch?v=29yfS-icS3M
https://www.youtube.com/watch?v=UwccGl85qdc
https://www.youtube.com/watch?v=vSYMjhFXcr8&t=333s
https://www.youtube.com/watch?v=ghhjiSmXwM4

clouds: 
https://www.youtube.com/watch?v=GhMQN4vVMIU&t=21s




