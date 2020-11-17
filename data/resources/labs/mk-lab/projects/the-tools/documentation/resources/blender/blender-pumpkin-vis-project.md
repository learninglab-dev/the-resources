# PUMPKIN VIS PROJECT


set as selected
`bpy.data.objects['ObjectName'].select_set(state=True)`

### to do
* remove rigid body
* add camera
	* add empty
	* add constraint
	* change focal length
	* change position
	* change max distance
* add plane
* get pumpkins to rest on floor
* [this reference](https://programtalk.com/python-examples/bpy.ops.object.text_add/) is good for inserting text with python
* 

### add pumpkins 201910201601

the counter for x val is split because you need half the distance of one and half the distance of the next

```
import bpy
import json
import math

print(f'starting makePumpkins')

scaleFactor = 2

def round_half_up(n, decimals=3):
    multiplier = 10 ** decimals
    return math.floor(n*multiplier + 0.5) / multiplier

def getRadius(pQuant):
    print(f'getting radius for value {pQuant}')
    radius = round_half_up((pQuant*3./(4.*3.14159))**(1./3))
    return radius

bpy.ops.wm.append(directory='/Users/mk/Desktop/_blender/prefabs/pumpkin-template.blend\\Object\\', filename="Pumpkin")
bpy.ops.wm.append(directory='/Users/mk/Desktop/_blender/prefabs/a380.blend\\Object\\', filename="Plane")


with open('/Users/mk/Desktop/_blender/data/pumpkin-data.json') as data_file:    
    data = json.load(data_file)

pumpkinTemplate = bpy.data.objects["Pumpkin"]
pumpkinTemplate.hide_render = True
pumpkinTemplate.hide_viewport = True



for i, country in enumerate(data):
    country["radius"] = getRadius(country["pumpkins"])/scaleFactor
    print(country)

xVal = -data[0]["radius"]

for i, country in enumerate(data):
    xVal+=(country["radius"]) 
    print(f'working on {country["name"]}, which produced {country["pumpkins"]} pumpkins.')
    # bpy.ops.object.text_add(enter_editmode=False, location=(0, 0, 0))
    bpy.ops.object.add_named(linked=False, name='Pumpkin')
    bpy.context.active_object.name = f'{country["name"]}-pumpkin'
    print(f'when we do the radius, it will be {getRadius(country["pumpkins"])}')
    bpy.context.active_object.location[0] = xVal
    bpy.context.active_object.location[1] = 0
    bpy.context.active_object.location[2] = country["radius"]
    bpy.context.active_object.scale = [country["radius"],country["radius"],country["radius"]]
    xVal+=(country["radius"]+10) 
```



#### LONG SCRIPT TO INVESTIGATE

from [this]([https://blender.stackexchange.com/questions/93284/how-to-set-textbody-value-with-python-script-adding-a-text-and-editing-the-body](https://blender.stackexchange.com/questions/93284/how-to-set-textbody-value-with-python-script-adding-a-text-and-editing-the-body)) discussion: 


```
import bpy
import bmesh

def create():
    scn = bpy.context.scene
    scn.render.engine = 'CYCLES'
    scn.world.use_nodes = True
    set_background()    
#context
    bpyscene = bpy.context.scene

# Create an empty mesh and the object.
    mesh = bpy.data.meshes.new('Basic_Sphere')
    basic_sphere = bpy.data.objects.new("Basic_Sphere", mesh)

# Add the object into the scene.
    bpyscene.objects.link(basic_sphere)
    bpyscene.objects.active = basic_sphere
    basic_sphere.select = True

# Construct the bmesh cube and assign it to the blender mesh.
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=32, v_segments=16, diameter=1)
    bm.to_mesh(mesh)
    bm.free()

# add subsurf mod and smooth
    bpy.ops.object.modifier_add(type='SUBSURF')
    bpy.ops.object.shade_smooth()
# add material to the UV Sphere
    ob = bpy.context.active_object
    ob.select = True
#scene.objects.active = ob

# Get material
    g_mat = bpy.data.materials.get("green_glow")
    if g_mat is None:
    # create material
        create_materials("green_glow")        
    g_mat = bpy.data.materials.get("green_glow")
# Assign it to object
    if ob.data.materials:
    # assign to 1st material slot
        ob.data.materials[0] = g_mat        
    else:
    # no slots
        ob.data.materials.append(g_mat)
    print ("Green Material assigned")

# move UV Sphere
    bpy.ops.object.move_to_layer(layers=(False, False, False, False, False, False, False, False, False, False, True, False, False, False, False, False, False, False, False, False))

# Text
bpy.ops.object.text_add(view_align=False, enter_editmode=False, location=(0, 0, 0), layers=(True, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False))
bpy.ops.transform.rotate(value=1.5708, axis=(1, 0, 0), constraint_axis=(True, False, False), constraint_orientation='GLOBAL', mirror=False, proportional='DISABLED', proportional_edit_falloff='SMOOTH', proportional_size=1)
bpy.context.object.data.extrude = 0.02
# Delete default "Text"
bpy.ops.object.editmode_toggle()
bpy.ops.font.delete(type='PREVIOUS_OR_SELECTION')
bpy.ops.font.delete(type='PREVIOUS_OR_SELECTION')
bpy.ops.font.delete(type='PREVIOUS_OR_SELECTION')
bpy.ops.font.delete(type='PREVIOUS_OR_SELECTION')
bpy.ops.font.delete(type='PREVIOUS_OR_SELECTION')
# Set new word
chars = "Digital"
for char in chars:
    bpy.ops.font.text_insert(text=char)
bpy.ops.object.editmode_toggle()
# add material to the Text
ob.select = True
ob = bpy.context.active_object
#scene.objects.active = ob

# Get material
mat = bpy.data.materials.get("white_glow")
if mat is None:
    # create material
    create_materials("white_glow")
mat = bpy.data.materials.get("white_glow")
# Assign it to object
if ob.data.materials:
    # assign to 1st material slot
    ob.data.materials[0] = mat
else:
    # no slots
    ob.data.materials.append(mat)
print ("Green Material assigned")
# text to mesh
bpy.ops.object.convert(target='MESH')
# Particle system
bpy.ops.object.particle_system_add()
bpy.data.particles["ParticleSettings"].effector_weights.gravity = 0
bpy.data.particles["ParticleSettings"].render_type = 'OBJECT'
bpy.data.particles["ParticleSettings"].dupli_object = 
bpy.data.objects["Basic_Sphere"]

def set_background():
# darken the background   
bpy.context.scene.world.node_tree.nodes['Background']
.inputs['Color'].default_value = (0, 0, 0, 1)

print("Set background color")

def create_materials(mat_name):
mat = bpy.data.materials.new(name=mat_name)
# get the material
mat = bpy.data.materials[mat_name]
mat.use_nodes = True
# get the nodes
nodes = mat.node_tree.nodes

# clear all nodes to start clean
for node in nodes:
    nodes.remove(node)

# create emission node
node_emission = nodes.new(type='ShaderNodeEmission')
if (mat_name == "white_glow"):
    node_emission.inputs[0].default_value = (1,1,1,1)  # white RGBA
else:
    node_emission.inputs[0].default_value = (0,1,0,1)  # white RGBA
node_emission.inputs[1].default_value = 2.0 # strength
node_emission.location = 0,0

# create output node
node_output = nodes.new(type='ShaderNodeOutputMaterial')   
node_output.location = 400,0

# link nodes
links = mat.node_tree.links
link = links.new(node_emission.outputs[0], node_output.inputs[0])

# remove links
#links.remove(link)


# Animate Particle System
#def animate():

# Move / Animate Sphere

if __name__ == "__main__":
create()
```



#### AND ANOTHER LENGTHY ONE


```
`def` `createDissolveText(title,extrude,bevel_depth,spacemode,textsize,width,font):`

`""" Create aned animate the exploding texte """`

`newText` `=` `title`

`#create text`

`bpy.ops.``object``.text_add(view_align``=``False``, enter_editmode``=``False``,location``=``(``0``,` `0``,` `0``), rotation``=``(``0``,` `0``,` `0``))`

`ActiveObjectText` `=` `bpy.context.scene.objects.active`

`newtext` `=` `bpy.context.scene.objects.active`

`#erasing previous objects`

`if` `bpy.context.scene.objects.active.name !``=` `'Text'``:`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting and erasing Text`

`bpy.context.scene.objects.active` `=` `bpy.data.objects[``'Text'``]`

`bpy.context.scene.objects.active.select` `=` `True`

`bpy.ops.``object``.delete(use_global``=``False``)`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#need to delete other objects`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting and erasing Turbulence field`

`bpy.context.scene.objects.active` `=` `bpy.data.objects[``'TurbulenceField'``]`

`bpy.context.scene.objects.active.select` `=` `True`

`bpy.ops.``object``.delete(use_global``=``False``)`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting and erasing Plane`

`bpy.context.scene.objects.active` `=` `bpy.data.objects[``'Plane'``]`

`bpy.context.scene.objects.active.select` `=` `True`

`bpy.ops.``object``.delete(use_global``=``False``)`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting and erasing WindField`

`bpy.context.scene.objects.active` `=` `bpy.data.objects[``'WindField'``]`

`bpy.context.scene.objects.active.select` `=` `True`

`bpy.ops.``object``.delete(use_global``=``False``)`

`#selecting newText`

`bpy.context.scene.objects.active` `=` `newtext`

`bpy.context.scene.objects.active.select` `=` `True`

`#naming/renaming the text`

`bpy.context.scene.objects.active.name` `=` `'Text'``;`

`bpy.context.scene.objects.active` `=` `bpy.data.objects[``'Text'``]`

`#placing text in position`

`ActiveObjectText.rotation_euler[``0``]``=``pi``/``2` `#xaxis`

`ActiveObjectText.rotation_euler[``1``]``=``0.0` `#yaxis`

`ActiveObjectText.rotation_euler[``2``]``=``0.0` `#zaxis`

`ActiveObjectText.location[``0``]``=``0`

`ActiveObjectText.location[``1``]``=``0`

`ActiveObjectText.location[``2``]``=``0`

`#changing text`

`ActiveObjectText.data.body` `=` `title`

`#text size`

`ActiveObjectText.data.size` `=` `textsize`

`ActiveObjectText.data.space_character` `=` `width`

`ActiveObjectText.data.font` `=` `font`

`#centering text`

`#ActiveObjectText.data.align='CENTER'`

`ActiveObjectText.data.align``=``spacemode`

`#extrude text`

`ActiveObjectText.data.extrude``=``extrude` `#0.04`

`#bevel text`

`ActiveObjectText.data.bevel_depth` `=` `bevel_depth` `#0.005`

`ActiveObjectText.data.bevel_resolution` `=` `5`

`#adjust text position`

`ActiveObjectText.location.z``=` `-``ActiveObjectText.dimensions[``1``]``/``3`

`#convert to mesh to apply effect`

`bpy.ops.``object``.convert(target``=``'MESH'``, keep_original``=``False``)`

`#affect dissolve material`

`ActiveObjectText.data.materials.append(bpy.data.materials[``'DissolveMaterial'``])`

`ActiveObjectText` `=` `bpy.context.scene.objects.active`

`#Don't forget to deselect before select!`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting Text`

`bpy.context.scene.objects.active` `=` `ActiveObjectText`

`bpy.context.scene.objects.active.select` `=` `True`

`#add remesh modifier to text`

`bpy.ops.``object``.modifier_add(``type``=``'REMESH'``)`

`#modifying parameters`

`ActiveObjectText.modifiers[``'Remesh'``].octree_depth` `=` `9` `#10 best quality but vertices number too high`

`ActiveObjectText.modifiers[``'Remesh'``].scale``=``0.99`

`ActiveObjectText.modifiers[``'Remesh'``].mode``=``'SMOOTH'`

`ActiveObjectText.modifiers[``'Remesh'``].use_remove_disconnected``=``False`

`#apply this mofifier`

`bpy.ops.``object``.modifier_apply(apply_as``=``'DATA'``, modifier``=``"Remesh"``)`

`#Nb quads for particle system be careful of API version`

`if` `bpy.app.version[``1``] <` `62` `:`

`NbQuads` `=` `len``(ActiveObjectText.data.faces)`

`if` `bpy.app.version[``1``]` `=``=` `62` `:`

`if` `bpy.app.version[``2``] >``=` `2` `:`

`NbQuads` `=` `len``(ActiveObjectText.data.polygons.values())` `#API 2.62.2 and up`

`else``:`

`NbQuads` `=` `len``(ActiveObjectText.data.faces)`

`if` `bpy.app.version[``1``] >` `62` `:`

`NbQuads` `=` `len``(ActiveObjectText.data.polygons.values())` `#API 2.63 and up`

`#Add Particle System`

`bpy.ops.``object``.particle_system_add()`

`#Particle parameters`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.count` `=` `NbQuads`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.frame_start` `=` `10`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.frame_end` `=` `60`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.lifetime` `=` `80`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].point_cache.frame_step` `=` `1`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.normal_factor` `=` `0.0`

`#not useful`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.use_dynamic_rotation` `=` `True`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.render_type``=``'NONE'`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.draw_method``=``'DOT'`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.effector_weights.gravity` `=` `0`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.use_adaptive_subframes` `=` `True`

`ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.courant_target` `=` `0.2`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#Adding Wind force field on center and rotate it -90 on Y`

`bpy.ops.``object``.effector_add(``type``=``'WIND'``, view_align``=``False``, enter_editmode``=``False``, location``=``(``0``,` `0``,` `0``), rotation``=``(``0``,` `-``pi``/``2``,` `0``), layers``=``(``True``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``))`

`ActiveObjectWindField` `=` `bpy.context.scene.objects.active`

`ActiveObjectWindField.name` `=` `'WindField'`

`#settings`

`ActiveObjectWindField.field.strength` `=` `1.0`

`ActiveObjectWindField.field.flow` `=` `1.0`

`ActiveObjectWindField.field.noise` `=` `0.0`

`ActiveObjectWindField.field.seed` `=` `27`

`ActiveObjectWindField.field.apply_to_location` `=` `True`

`ActiveObjectWindField.field.apply_to_rotation` `=` `True`

`ActiveObjectWindField.field.use_absorption` `=` `False`

`#Adding Turbulence Force Field`

`bpy.ops.``object``.effector_add(``type``=``'TURBULENCE'``, view_align``=``False``, enter_editmode``=``False``, location``=``(``0``,` `0``,` `0``), rotation``=``(``0``,` `0``,` `0``), layers``=``(``True``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``))`

`ActiveObjectTurbulenceField` `=` `bpy.context.scene.objects.active`

`ActiveObjectTurbulenceField.name` `=` `'TurbulenceField'`

`#settings`

`ActiveObjectTurbulenceField.field.strength` `=` `15`

`ActiveObjectTurbulenceField.field.size` `=` `0.75`

`ActiveObjectTurbulenceField.field.flow` `=` `0.5`

`ActiveObjectTurbulenceField.field.seed` `=` `23`

`ActiveObjectTurbulenceField.field.apply_to_location` `=` `True`

`ActiveObjectTurbulenceField.field.apply_to_rotation` `=` `True`

`ActiveObjectTurbulenceField.field.use_absorption` `=` `False`

`#Don't forget to deselect before select!`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting Text`

`bpy.context.scene.objects.active` `=` `ActiveObjectText`

`bpy.context.scene.objects.active.select` `=` `True`

`#adding wipe texture to text`

`sTex` `=` `bpy.data.textures.new(``'Wipe'``,` `type` `=` `'BLEND'``)`

`sTex.use_color_ramp` `=` `True`

`TexSlot``=``ActiveObjectText.particle_systems[``'ParticleSystem'``].settings.texture_slots.add()`

`TexSlot.texture` `=` `sTex`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#Create plane for controlling action of particle system (based on time)`

`#if text is created on the fly 'Wipe' texture does not work! don't know really why!`

`# so use of an existing plane, and resize it to the text x dimension`

`bpy.ops.mesh.primitive_plane_add(view_align``=``False``, enter_editmode``=``False``, location``=``(``0``,` `0``,` `0``), rotation``=``(pi``/``2``,` `0``,` `0``), layers``=``(``True``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``,` `False``))`

`ActiveObjectPlane` `=` `bpy.context.scene.objects.active`

`ActiveObjectPlane.name` `=` `'Plane'`

`#Change dimensions`

`ActiveObjectPlane.dimensions` `=` `((ActiveObjectText.dimensions[``0``]``*``1.2``),(ActiveObjectText.dimensions[``1``]``*``1.2``),``0``)`

`#hide plane for render`

`ActiveObjectPlane.hide_render` `=` `True`

`#show as wire in 3D`

`ActiveObjectPlane.draw_type` `=` `'WIRE'`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting Text`

`bpy.context.scene.objects.active` `=` `ActiveObjectText`

`bpy.context.scene.objects.active.select` `=` `True`

`TexSlot.texture_coords` `=` `'OBJECT'`

`TexSlot.``object` `=` `ActiveObjectPlane`

`TexSlot.use_map_time` `=` `True`

`ActiveObjectText.data.update()`

`bpy.ops.``object``.modifier_add(``type``=``'EXPLODE'``)`

`bpy.ops.mesh.uv_texture_add()` `#name UVMap by default`

`ActiveObjectText.data.materials[``'DissolveMaterial'``].texture_slots[``'Texture'``].texture_coords` `=` `'UV'`

`ActiveObjectText.data.materials[``'DissolveMaterial'``].texture_slots[``'Texture'``].uv_layer` `=` `'UVMap'`

`ActiveObjectText.data.materials[``'DissolveMaterial'``].texture_slots[``'Texture'``].use_map_alpha` `=` `True`

`ActiveObjectText.data.materials[``'DissolveMaterial'``].texture_slots[``'Texture'``].alpha_factor` `=` `1.0`

`ActiveObjectText.modifiers[``'Explode'``].particle_uv` `=` `'UVMap'`

`ActiveObjectText.data.update()`

`#Don't forget to deselect before select!`

`bpy.ops.``object``.select_all(action``=``'DESELECT'``)`

`#selecting Text`

`bpy.context.scene.objects.active` `=` `ActiveObjectText`

`bpy.context.scene.objects.active.select` `=` `True`

`TexSlot.texture_coords` `=` `'OBJECT'`

`TexSlot.``object` `=` `ActiveObjectPlane`

`TexSlot.use_map_time` `=` `False`

`TexSlot.use_map_time` `=` `True`

`ActiveObjectText.data.update()`
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU5OTAwOTUzMV19
-->