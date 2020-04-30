# Reapplying a Material to an Object file

Often times when you pull an object file into your scene, it will arrive with "no" material(more often than not, this is actually a plain white or middle grey matte material). And occasionally it will show an error on the bottom left. The error is regarding the complexity of the polygons in the object, you can largely ignore this. From this point, just apply a fresh material and the texture should show up.

#### Just run through these steps to apply a "new" texture

Right click anywhere in the project pane and navigate to "Create" and select "Material"

![](https://files.slack.com/files-pri/T0HTW3H0V-F011YULAXTR/screen_shot_2020-04-23_at_9.51.25_am.png?pub_secret=667dba599e)

This will give you that round, grey material ball, select that.

![](https://files.slack.com/files-pri/T0HTW3H0V-F0130Q3P07J/step5.png?pub_secret=fed7c109ea)

Over in the Inspector pane, select the little circle next to "Albedo" and choose your image!

![](https://files.slack.com/files-pri/T0HTW3H0V-F0130Q40XK2/step6.png?pub_secret=578897f933)

![](https://files.slack.com/files-pri/T0HTW3H0V-F012PHSQK09/step7.png?pub_secret=a89b1728c8)

You may be finished here. All you have to do is drag the material onto your object in the scene.

If you have more image files that might just look the same, but different colors, then what you have are texture maps or depth maps. If you apply the first image and it doesn't quite look right, you can always test the other images until it matches accurately. They aren't necessary for rendering, they just create a greater depth of realism. If you'd like to add them in, you can follow the last two steps(on the same new Material you made). Only this time, selecting ["Depth map",](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterHeightMap.html) ["Normal map",](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterNormalMap.html) or ["Detail mask"](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterDetail.html)
