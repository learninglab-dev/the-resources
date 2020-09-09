

## BLENDER INTRO (Mac)

These are the basics on using Blender 2.8 on a Mac.  Just the _very_ basics.  

This is for you to mark up---be sure to underline anything that feels counter-intuitive to you as you use the software, because this is the stuff you’ll come back to, and you’ll need your paper+pen markup to help you remember where it is.  The big thing you’ll want to do as you learn is to **practice each step** (each shortcut key, each mouse move, each sequence of operations).  It’s more like learning a new dance step than learning the capital of Ohio[^1]--it’s not enough to just hear and understand the information.  It’s about **knowing-how** rather than** knowing-that** . . . and know **how**, you actually need to train your body to make the right movement.


### TRACKPAD-NAVIGATION



*   Two finger scroll = orbit
*   Shift + two-finger-scroll = move the scene
*   Ctrl + two-finger-scroll = zoom in and out
    *   Pinch to zoom works too


### MOUSE-NAVIGATION

*   Middle-mouse-button + drag = orbit the scene
*   Shift + middle-mouse-button + drag = move the scene
*   Mouse wheel = zoom in and out
*   Left click = select object (or point/edge/face in edit mode)


### KEYBOARD-NAVIGATION

*   with object selected, `.` on number pad frames object selected
*   


### SHORTCUT KEYS

*   **S** = scale
*   **R** = rotate
*   **G** = grab (and move)
*   With **S, R or G** clicked, constrain axis with **X**, **Y** or **Z**
*   **Control + Option + Q** = toggle quad view
*   **Tab** = toggle between edit and object modes in 3D view
*   **A** (in edit mode) = select/deselect all
*   **B** then left-mouse-drag (in edit mode) = rectangular selection tool
*   **C** then left-mouse-click (in edit mode) = select face/edge/point (right click to disable)
*   **E** (especially in face mode) = extrude selected face
*   **Z** = toggle on/off wireframe mode
    *   In edit mode this will allow you to select faces/edges/points on the other side of the model too (like the “limit selection to visible” toggle on the toolbar).
*   **Shift + Z** = render in 3D view
*   **Control + left-click + drag** = lasso select
*   **Option + right-click an edge** = select a ring of edges


* **NumPad .** focus on object
* shift + A = Add object


### THE SELECT AND EXTRUDE DANCE

*   Drop a cube into the scene
*   Shift to edit mode by hitting **tab** (repeat this step a number of times to help internalize it).  Do you see how the options in the “Tools” tab change depending on whether you are in edit or object mode?
    *   If you don’t _see_ the Tools tab (or even if you do), hit **T**, again and again and again.
*   Hit Subdivide twice (so that you see 16 faces on each side of the cube)
*   Hit **A**, then hit **A** again, then again and again. Note how it toggles on and off “Select All” (when everything’s selected the whole object will have orange highlights on the edges).
*   With nothing selected (no orange highlights), hit **B** to activated your rectangular tool (all while your mouse is over the 3D view window). Drag a rectangular selection across a few of your points/lines/faces.


### EXTRAS TO KNOW ABOUT

*   To change the object’s **anchor point**, select **Transform => origin to cursor **after clicking on the right spot of the object (the orthographic views are good for this
*   To apply a material to only a group of polygons in an object, select them in edit mode, then create a new material, then click **assign**
*   Each window’s toolbar is at the BOTTOM rather than the top of the window.
*   You can add windows by clicking and dragging the little lines at the top right or bottom left of each window (drag down or inwards to the left from the top right; drag up inward to the right from the bottom left). But there is no immediately obvious way to get RID of the windows.  The way to do it is to invert what you’ve just done: hover over one of those same corners until you see crosshairs (a white “plus” shape), and then instead of dragging INWARDs, drag OUTWARDS into a neighboring window that you’d like to collapse (so you do this not in the window you want to get RID of, but in the window you want to “absorb” the space of the window you need to close). You will get used to this, but everyone has to admit that it’s a little weird.


###


### CREATING A SIMPLE SCREEN IN BLENDER FOR UNITY

The easiest way to create a “screen” in Blender is to create a simple plane.  On its own, it won’t do much that a quad generated in Unity can’t do, so if all you need is a flat surface, you may want to stick with Unity alone.  So we are going to create a slightly wavy plane to make it more interesting: starting by adding a simple plane, then deforming it just a bit, and then bringing it into Unity.



1. In your new Blender scene, right click on the cube and delete it (forward delete key, or fn + delete on macBook).
2. In the Create menu, click Plane.  And then, BEFORE you do anything else, look for the “add plane” menu and make sure that you select **“generate UVs”**--it’s _possible_ to fix things if you forget to do this; it just takes some extra steps that add complexity, and we’re trying to keep this simple.
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


### 2.8 NOTES



*   four icons and gizmos across the viewport
*   T for tools menu in any viewport
*   or shift space to call up tools at cursor position
*   “N” gives you more data too, transformation data, etc.
*   Z pie menu for shader in viewport?
*   shift + S = pie menu for snapping and 3D cursor
*   
*   shift + right-click = set 3d cursor
*   to reset 3d cursor
*   G
*   R
*   S
*   opt+G reposition object at origin
*   opt+R reset rotation
*   hold shift as  you drag to drag more slowly

EXTRAS

mesh separate

mesh join


### EXTRUDE

right click in the middle of extrusion to snap to original face

left click to confirm extrusion

extrude to cursor, especially from orthographic view = amazing

loop cut

	click and slide


### SHADERS


### HOTKEYS

opt + G = resest position of object

N = toggle on/off transform numers

T = toggle on/off tool palette



## LINKS

[modeling in the blender manual](https://docs.blender.org/manual/en/latest/modeling/index.html).







<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     And, to tell you the truth, learning the capital of Ohio may be more like learning a dance step than we think!
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTE0MzM1MDU4XX0=
-->