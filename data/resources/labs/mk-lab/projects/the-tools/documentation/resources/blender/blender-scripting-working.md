
### LINKS

[Blender Python API Documentation](https://docs.blender.org/api/blender2.8/index.html)

[making an add-on](https://www.youtube.com/watch?v=Fr1HN0XgB58)


[samples](https://github.com/njanakiev/blender-scripting) from njanakiev on github

[create voxels](https://www.youtube.com/watch?v=Fr1HN0XgB58)


[link](https://www.youtube.com/watch?v=KI0tjZUkb5A)


[documentation on running scripts from command line](https://docs.blender.org/manual/en/latest/advanced/command_line/arguments.html)

[nice article on structuring commands, etc](https://janakiev.com/blog/blender-command-line/)



### GISTS

set as selected
`bpy.data.objects['ObjectName'].select_set(state=True)`


from [here](https://blenderartists.org/t/help-adding-new-scene-collection-objects-in-2-8/1114425/4)

```
# get an active object
obj = bpy.context.object

# create new collection
newCol = bpy.data.collections.new('Yammy')
#.... or find the existing collection
newCol = bpy.data.collections['Yammy']

# link the newCol to the scene
bpy.context.scene.collection.children.link(newCol)

# link the object to collection
newCol.objects.link(obj)
# ... or link through bpy.data
bpy.data.collections['Yammy'].objects.link(obj)
```

#### render

```
import bpy

bpy.context.scene.render.filepath = 'pathToOutputImage'
bpy.context.scene.render.resolution_x = w #perhaps set resolution in code
bpy.context.scene.render.resolution_y = h
bpy.ops.render.render(write_still=True)
```

```
bpy.data.scenes['Scene'].render.filepath = '/home/user/Documents/image.jpg'
bpy.ops.render.render( write_still=True )
```


#### stack of cubes

[physics sims](https://www.youtube.com/watch?v=KI0tjZUkb5A) tutorial to finish


```
import bpy

number = 3
counter1 = 0
for a in range(0,number):
    counter1+=2
    counter2=0
    for b in range(0,number):
        counter2+=2
        counter3=0
        for c in range(0,number):
            counter3+=2
            bpy.ops.mesh.primitive_cube_add(size=2, location=(counter3+2,counter2-2,counter1-2))
```


#### delete all objects in the scene


#### make pumpkins
as of 20191019
```
import bpy

print(f'starting')

countries = [
    {
        "name":"China",
        "pumpkins":7838809
    },
    {
        "name":"India",
        "pumpkins":5073678
    },
    {
        "name":"Russia",
        "pumpkins":1224711
    },
    {
        "name":"Ukraine",
        "pumpkins":1209810
    }
]

for i, country in enumerate(countries):
    print(f'{i}. Creating pumpkin for {country["name"]}, volume = {country["pumpkins"]}')
    bpy.ops.object.add_named(linked=False, name='Pumpkin')
    bpy.context.active_object.name = f'{country["name"]}-pumpkin'
    bpy.ops.transform.translate(value=(i*2, 0, 0))
```

[pumpkin data](https://www.atlasbig.com/en-us/countries-pumpkin-production)


### NOTES

try this:

While developing your own scripts Blenders interface can get in the way, manually reloading, running the scripts, opening file import etc. adds overhead.

For scripts that are not interactive it can end up being more efficient not to use Blenders interface at all and instead execute the script on the command line.

`blender --background --python myscript.py`
You might want to run this with a blend file so the script has some data to operate on.

`blender myscene.blend --background --python myscript.py`

Note Depending on your setup you might have to enter the full path to the Blender executable.

Once the script is running properly in background mode, you’ll want to check the output of the script, this depends completely on the task at hand however here are some suggestions.

* render the output to an image, use an image viewer and keep writing over the same image each time.
* save a new blend file, or export the file using one of Blenders exporters.
if the results can be displayed as text - print them or write them to a file.
* While this can take a little time to setup, it can be well worth the effort to reduce the time it takes to test changes - you can even have Blender running the script every few seconds with a viewer updating the results, so no need to leave your text editor to see changes.

## TIPS AND TRICKS

this link for [blender scripting tips and tricks](https://docs.blender.org/api/current/info_tips_and_tricks.html)



### ON RENDER TO PARSE

33

Yes, you can use

blender -b file_name.blend -x 1 -o //file -F AVI_JPEG -s 001 -e 250 -S scene_name -a

-b: tells blender to run in background

-x: is used to add an extension to the movie

-o: sets the directory + Target image file

-F: sets the output image type

-s: 001 -e 250 -a set the start frame to 001 and end frame to 250. Important: You can use -s or -e, but if they're not in order, they'll not work!

-S: sets the scene name to render (spaces in the name are not supported)

-a: renders the animation

The above command should render whatever scene name you specify to -S. To avoid certain problems where similar files can get overwritten, its best to use a script to render each scene on a different line. For example:

batch_render.sh / .bat

blender -b file_name.blend -x 1 -S scene_name001 -o //file -F AVI_JPEG -s 1 -e 250 -a
blender -b file_name.blend -x 1 -S scene_name002 -o //file -F AVI_JPEG -s 1 -e 250 -a
You could also do this in one command - as follows:

blender -b file_name.blend -x 1 \
    -S scene_name001 -o //file -F AVI_JPEG -s 1 -e 250 -a \
    -S scene_name002 -o //file -F AVI_JPEG -s 1 -e 250 -a
However launching blender isn't typically a bottleneck, so it may end up being less trouble to run a new blender instance for each scene.

To get a better understanding of the parameters, you can see the wiki.



### Blender command line arguments

https://easyblend.org/html/advanced/command_line/arguments.html

and for args

https://developer.blender.org/F7855265
and
https://stackoverflow.com/questions/4033723/how-do-i-access-command-line-arguments-in-python

background job example

https://developer.blender.org/F7855265
