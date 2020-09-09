# PYTHON AND BLENDER SCRIPTING #

a work in progress

## GISTS

* the real basics: run if main
	```
	if __name__ == "__main__":
	    main()
	```
* declare filepath for render: `bpy.data.scenes[0].render.filepath`
* basic launch command structure: `blender $TEMPLATE --background --python $SCRIPT `
* don't forget to setup blender alias in .zshrc or .bash_profile. `alias blender='/Applications/Blender.app/Contents/MacOS/Blender'`
* get home directory
	```
	import os

	homeDirectory = os.getenv("HOME")
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

* add text from arguments
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
