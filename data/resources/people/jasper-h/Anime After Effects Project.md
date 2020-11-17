# Anime Video

I was given several different media types from an Anime class project to edit together into a video that both exhibited the students' work and integrated the different clips in a way that felt coherent. 

The theme of the piece was "trapped in zoom". The main materials were the footage captured over zoom with the students using an 'Anime filter' to appear as cartoons and short animated clips that the students created with Procreate.

I used the Anime zoom footage to drive the story- essentially, 'we're trapped in zoom', 'we don't like being trapped in zoom', 'we gotta get out of here!'. These plot points would be punctuated by the Procreate animations, which would need to be modified, elongated, and composited together to be used as an antagonizing force in the story.

## After Effects and Premiere Workflow

### 1. Create your basic edit in Premiere.
    
- I find it's a lot easier, especially when working with a bunch of clips, to lay out all of your media before entering After Effects. It's a lot faster to move things around and get the timing right.
- I knew that the animated clips would, for the most part, be created in After Effects, so I just dropped in the clips I wanted to cut to at the points I would cut to them and left blank space on the timeline, aproximating how long the animated clips would last.

### 2. Open the Premiere project in After Effects.

- It's as easy as **File->Import->Import Adobe Premiere Pro Project**
- Make sure the 'All Sequences' option is selected and you're good to go.
- Your Premiere sequence will be a composition with all of your clips organized like they were in your timeline.

## Creating the CRT Monitor Look

To make the zoom-captured Anime footage look a bit more aesthetically pleasing, I decided to simulate a CRT monitor look with a few effects, some simple blending and the RED GIANT VHS simulator. 

RED GIANT has a lot of really great tools for compositing and stylizing footage. This is especially helpful when the footage is of a lower quality. Because older monitors had fewer pixels, lower resolution images can look better on old CRTs as opposed to modern screens.

To implement this idea (that fewer pixels would equal a smoother image) I did the following:

### 1. Add the VHS Simulation to the Footage

![Fixing Zoom Footage](https://files.slack.com/files-pri/T0HTW3H0V-F01D25UJAJV/fix-zoom-footage.gif)

- This just added some scan lines and warping as well as a saturated, low contrast look to the Anime Zoom footage.

### 2. Find an image of a blank CRT screen.

![Creating The CRT Screen Image](https://files.slack.com/files-pri/T0HTW3H0V-F01CGQLLNTY/add-a-crt-screen.gif)

- I had to make sure the image I used had a high enough resolution to show the individual pixels
- I also had to tile the screen image to get a pixel size that I thought looked best (not to big, not to small).
- I then made the blank screen its own precomp so I could treat the four different tiled images as one image in the composition.

### 3. Blend the Zoom Footage with the Screen Image.

![Blend the Zoom Footage With the Screen Image](https://files.slack.com/files-pri/T0HTW3H0V-F01CGQMECJ2/blend-screen-with-footage.gif)

- With the screen image comp layer placed above the footage comp layer I was able to blend the two together using the 'Classic Color Burn' blending mode applied to the screen image (I tried a few different ones and this gave me the look I was going for).
- I also lowered the opacity of the screen image layer to 68%

### 4. Using Optics Comphensation to Create a Monitor Curve

- With my screen image comp and my footage comp blended together in one composition I applied the Optics Comphensation Effect.
- I distorted the layer to achieve the 'rounded edges' of a CRT monitor. 
- In this composition I also placed an image of an old television production monitor from the 80s to frame the screen. 
- I added the RED GIANT edge glow effect to the footage layer to give the illusion that light from the 'screen' was effecting the image of the monitor.

### 5. Creating a Wall of CRT Monitors

![Creating the Monitor Wall](https://files.slack.com/files-pri/T0HTW3H0V-F01CPGQNDJN/duplicate-and-tile.gif)

- To create a wall of monitors I simply duplicated my monitor image plus screen image comp and tiled them accordingly.

### 6. Why I didn't use 3D

- Because every 'monitor' on the wall of monitors was symultaniously generating the VHS simulation for the zoom footage, distorting the image with Optics Comphensation and generating an edge glow, I thought that doing the lighting and camera moves in 3D space would be a lot for my computer and limit my playback abilities.
- I could have pre-rendered my wall of monitors comp, but I wanted to maintain control over the image and not have to render and replace any assets.
- Lighting is an easy workaround with adgjustment layers and masks. I made an adjustment layer that would darken the image, masked out the center and feathered it.
- For all the camera motion- zooming in to the individual monitors and what not- I only had to keyframe the scale tool. I also keyframed an Optics Comphensation Effect over the whole thing to mimik a wide angle lens. Essentially, when the camera dollies in (scale up), I also increased the distortion so that the closer the camera was to the subject the more fish-eye the result. It's a subtle effect, but it realy helped sell the illusion, especially when the camera was moving slowly.

### 7. Add Some Dust!

![Adding Dust](https://files.slack.com/files-pri/T0HTW3H0V-F01CPGPKEG2/add-dust.gif)

- I had some 6K dust footage lying around that I was able to stick over everything. I used three different dust layers, each zooming in and fading out at different rates depending on the camera motion.
- This is the one part of the composition that would have benefited from being in 3D space as it's hard to eye-ball this part. Though with some trial and error you can get passable results.

### 8. Apply Another Layer of VHS Simulation

![Final Composition](https://files.slack.com/files-pri/T0HTW3H0V-F01CVMGUT2Q/from-precomp-to-final.gif)

- After all was said and done, I added an adjustment layer with a subtle amount of grit from the VHS simulator. This just helped with over all coherence, helped smooth out the dust effect, and added some more flicker to the lighting adjustment layer.

## Integrating the Animation

Most of the animated clips from Procreate were anywhere from 2 to 6 frames long, so I had to loop them and then composit them together.

### 1. Looping Animations

- In a seperate composition, I took the clip and separated each frame onto its own layer. I then adjusted the scale and position of each frame if necessary. 
- Then in a new composition I took the composition of the few frame animation and duplicated it.
- I reversed the duplicated clip by **Right Click-> Time->Time Reverse Layer** or **Ctrl+Alt+R**.
- With the two clips back to back I was able to duplicate them exponentially until I had about a minute of looping footage in a composition.

### 2. Compositing the Animation Loops

- With all my animated clips in their own precompositions I was able to add a few at a time to the main composition where they were needed. 
- I used a few different effects to distort and enhance the loops just to make them a bit more interesting and get the point across.

    
