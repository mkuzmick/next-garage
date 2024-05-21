# notes on scripting


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

## OTHER DOCS

* [Blender and Python Gists](/FW23UBH3RpOeDUX_qBrwdw)
* [Tutorial for Christie](/2Cp1OitOTOey3yQALxdNfw)

