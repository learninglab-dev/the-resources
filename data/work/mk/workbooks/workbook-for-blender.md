

# BLENDER WORKBOOK



<iframe width="560" height="315" src="https://www.youtube.com/embed/RUPhlB_KkU8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



https://www.youtube.com/watch?v=fZSD7pVIUkY

<iframe width="560" height="315" src="https://www.youtube.com/embed/RUPhlB_KkU8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



shape keys for animation:

https://www.youtube.com/watch?v=YDu6y_2jFg0



must do substance/unity
https://www.youtube.com/watch?v=Dy177PrxRfs&list=PLB0wXHrWAmCw0ijNJs4rt9g1GhOS5va9i

think about this and other cgcookie courses: https://cgcookie.com/course/the-blender-substance-texturing-workflow/?utm_source=youtube&utm_medium=social&utm_campaign=teaser&utm_term=description&utm_content=substance-workflow


and then into unity and elsewhere
https://www.youtube.com/watch?v=YsXe11YA7AM&feature=youtu.be


## SHORTCUT KEYS AND OTHER MOVES

- ctr+shift+click in node wrangler views with the node clicked (color first, then fac)
- vector transform node to keep texture scale the same irrespective of object size
- shift right click drag across line in node editor lets you reroute
- shift+S switches node (or subs?)
- T and N to make side panels visible


## TUTORIALS TO CHECK OUT

	- bok snowy mountains: https://www.youtube.com/watch?v=qSafYNQrodk


### particle sims in blender.

start with [this simple one](https://www.youtube.com/watch?v=2bv973aqx-w).

then maybe go on to try for the bok snowglobe idea?



### BOKS TO MAKE

- ribbons of light
- cracked metal and stone of different coloras
- fill a bok with marbles: https://www.youtube.com/watch?v=cMpUXZhLLvE
- tower collapse:
	- https://www.youtube.com/watch?v=FkrB6g3Bbgs
	- https://www.youtube.com/watch?v=u20xF1MeqE8 and next 2
- snow
	- collected and piled on top: https://www.youtube.com/watch?v=dFWe63jaNuY
	- blender guru: https://www.youtube.com/watch?v=82zWmOqE0Nc
	- with actual flakes: https://www.youtube.com/watch?v=kecv5HMNnfw
	- 2.8 particles




### BUILD A RENDER FARM:

more involved
https://www.youtube.com/watch?v=FNhUnPWzVaw

simple way = moby from within Blender itself

cli
`blender -b /path/blender/Video.blend -o /path/video/filename-###### -F MOVIE -x 1 -t 0 -s 0 -e 79972 -a`


I use a command like this on slave 1:
```
blender -b /full/path/Project.blend -o /fully-mapped-network-path/imageName-##### -F PNG -x 1 -t 0 -s 0 -e 40000 -a
```
and slave 2:
```
blender -b /full/path/Project.blend -o /fully-mapped-network-path/imageName-##### -F PNG -x 1 -t 0 -s 40001 -e 80000 -a
```

### OTHER

3d vr in blender? https://www.youtube.com/watch?v=SEMeiveKje4

## NEXT

Ceci's tutorials:
https://docs.google.com/document/d/1qR0O4-3BV4Qe5XgPZDINIEYza-gD9NMpO00iCEUSUJo/edit



https://docs.google.com/document/d/1qR0O4-3BV4Qe5XgPZDINIEYza-gD9NMpO00iCEUSUJo/edit

https://docs.google.com/document/d/1gkEXTQlqVefKaYp3AZVicF1WdVXCLD_glNam80JsPZc/edit




### BLENDER

work on getting [node-wrangler](https://gregzaal.github.io/node-wrangler/) shortcut keys down.

add opt+g, s, r to zero out transformations in blender



need to build a render machine at home (this weekend?)

be sure to add stock LL image as environment image---maybe shoot something 360?

n to open properties panel

displacement modifier for low-poly work

nice walkthrough of vfx pipeline:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Z0gjmE3hJ2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[hardops](https://hardops-manual.readthedocs.io/en/latest/installation/)
also [here](https://hardops-manual.readthedocs.io/en/latest/)

shift-drag to parent

2.81 batch renamer


[decalmachine](https://blendermarket.com/products/DECALmachine)
https://machin3.io/DECALmachine/docs/

<iframe width="560" height="315" src="https://www.youtube.com/embed/dcaL9k2BW1k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


how ai will change the industry: https://www.youtube.com/watch?v=FlgLxSLsYWQ&t=361s



#### flipped normals

lightsaber 5: https://www.youtube.com/watch?v=8CGlOtCvGc0
lighsaber 4 (materials) https://www.youtube.com/watch?v=uFGLG9zhfYc
blender for advanced users: https://www.youtube.com/watch?v=4aAg6X0bDd0
lighting textures in blender: https://www.youtube.com/watch?v=Af-yLsRpF7I

trailer for flipped normals blender training: https://www.youtube.com/watch?v=abwK7CqsIdE

[training](https://flippednormals.com/downloads/introduction-to-blender-2-8/) for $49

supercharging blender 2.8 :https://www.youtube.com/watch?v=yWnp8he1oq4

improve sculpting: https://www.youtube.com/watch?v=5rtc6iYp6Qk

highres on low res mesh: https://www.youtube.com/watch?v=1CiQxc1QvRM

eevee vs cycles: https://www.youtube.com/watch?v=6NVYCwzEF9w

https://www.youtube.com/watch?v=EO-ikIsVdIo




mk's daily tasks (going with a [Show Your Work](https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X/ref=sr_1_1?keywords=show+your+work&qid=1569804976&s=gateway&sr=8-1) strategy). Everything that **can** be seen in public will go here.

## TASKS
small things, biggish things, but no complex clusters of things (those are in projects).

[sci-fi landscape with nodes](https://www.youtube.com/watch?v=NOsImPUo1Vk)

[creating nebulae and rendering with Eevee](https://www.youtube.com/watch?v=kYv3ZIlb_sU)

[colors in Blender](https://www.youtube.com/watch?v=-ldLJ3e8jQw&feature=youtu.be)

[blender materials](https://www.youtube.com/watch?v=LpDbJduDibE&feature=youtu.be)
