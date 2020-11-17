# BLENDER SCRIPTING
how to get stuff done with python in blender. step by step.

## GETTING STARTED
One easy way to get started is to
1. click the "scripting" tab at the top to enter the view that Blender defaults to for scripting purposes. You'll see that you now have a python console, and info window, and a text editing area.
	2. your console allows you to type in python commands and see actual results immediately and interactively, so it's a great tool to learn with
	3. your info window lets you see what's happening "under the hood" when you do your regular work with the Blender GUI. Go ahead and do some stuff (add a cube, resize it, etc.) to see what happens.
	4. your text editor is where you'll write and run your scripts (though you COULD write them elsewhere and simply open them here)
5. everything (or most everything) you do is going to involve the `bpy` module, a module you'll import at the top of your `.py` script file, but which is already available to you in the python shell. Try typing in the following into the python console: `bpy.ops.mesh.primitive_cube_add()`. You should see a cube appear. Now change the x or y value of the cube in the "object" tab of the properties inspector. When you change the value you should see some output in the info tab, something like `bpy.context.object.scale[0] = 7.09693
`. This is what's happening "under the hood" when you change properties in blender. What's cool is that you can simply copy this command, paste it into the python console, and use it as a template to manipulate your cube. Try changing the numerical value after the `=` sign.  You should be able to change your cube's size with code. Try changing the `[0]` to `[1]` or `[2]` to try to figure out what that's doing too.
6. To accomplish more complex tasks, you won't type everything into the console. Instead, you'll write scripts in Blender's text editor (or, ultimately, in another text editor of your choice). So navigate to the text editor (which will be visible in the "scripting" tab), click the "New" button, and enter the following code:

```
import bpy

print("starting up my script")

bpy.ops.mesh.primitive_cube_add(size=1)
bpy.context.object.scale[0] = 5
bpy.context.object.location[2] = .5
bpy.ops.mesh.primitive_plane_add(size=10)

print("you should now have a 5x1x1 cube resting on a 10x10 plane")
```
If you now hit run, you should see just what that print statement suggests you'll see.
7. But where does the print statement itself show up? And where does error log happening if (as is inevitable) I accidentally mistype something? Right now, nowhere. To see the output, I actually need to run blender from a shell. So **close** Blender and open up Terminal, and enter the path to your Blender executable, which is probably `/Applications/Blender.app/Contents/MacOS/blender`. Hit enter, and you should open up Blender. If you now enter and run the script above, you **should** see the print statements (and, ultimately, any error messages) in your terminal.
