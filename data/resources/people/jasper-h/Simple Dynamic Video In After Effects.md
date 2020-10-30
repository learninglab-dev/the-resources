# Simple Dynamic Videos in After Effects

This document outlines how someone without any expirience in After Effects can add the snappy transitions and dynamic text to their projects. It's a lot easier than you think to turn a few simple tools into a professional looking video.

## Steps

1. Organize Your Project Media and Set Up Folders
2. Build Out the Basic Edit in Premiere
3. Importing a Premiere Project into After Effects
4. Starting in After Effects
    - Layout
    - Compositions, Precomps and Layers
    - Blending Modes and Motion Blur
    - Keyframes and Essential Effects
    - Key Command Index 
5. Creating a Dynamic Video within After Effects
6. Organize Media and Create a Main Composition
7. Basic Geometric Borders in After Effects
8. Basic Geometric Backgrounds in After Effects
9. Basic Transitions in After Effects Using Transform
10. Dynamic Text in After Effects
11. Exporting in After Effects and Media Encoder

### Organize Your Project Media and Set Up Folders
---

It's important to keep all of your files organized on your editing hard drive, whether it be external or internal. Here's an example of what your folder chain should look like:

*(each indent marks a sub-folder)*

- **Project Folder** (Contains everything that has to do with this project)
    - **Premiere Folder** (All your premiere project data)
    - **After Effects Folder** (All your AE project data)
    - **Assets** (All the media you'll be working with)
        - ***Images***
        - ***Videos***
        - ***Music***

*NOTE: This might seem exessive or trivial, but it can solve a lot of problems before they happen, plus it makes things really easy to find. Also the folders contained within an 'Assets' folder depend on the type of project you're working on. Basically have folders and sub folders for each distinct type of content. For example, instead of a 'videos' folder you could have something like 'interviews' and 'b-roll'.* 

### Build Out the Basic Edit in Premiere
---

Once you've injested and organized your initial media, you can start up Premiere.

- Name your project
- Under your project name will be an option for location (where your project will be saved)
    - Click the 'Browse' button and find the folder in your project folder you've named 'Premiere'
    - Save your project in the 'Premiere' folder
- Click the 'Scratch Disk' option and look to make sure everything says 'Same as Project'

For this specific case, we're taking two different town hall events and combining them with the intention of presenting something that feels like a debate. As well as including an extra source that will help reinforce the point we're trying to make.

To begin, set up your project appropriately:

![Four Timeline Set Up](https://files.slack.com/files-pri/T0HTW3H0V-F01CYC9JU1L/four_timeline_set_up.png)

- Create three seperate sequences with the same settings.
- Place each debate in their own sequence.
- Leave one sequence empty.

I find this setup to be the easiest in terms of finding the content you need and organizing it.

- Go through each debate and cut out anything you don't want to keep.
- In the beginning it's all about taking away content so you're just left with the bits that you can use.
- It might be helpful along the way to take note of similar questions or answers that pair nicely together. 
- Once you have two seperate timelines with the desired content, just drag and drop the clips you want into that third sequence.
- Keep refining that third sequence until you have something you're happy with.
- At this point bring in the other media.
    - If it's another video to prove a point, then insert it where necessary.
    - If you have some after effects only stuff, like animated graphics, know where you want to insert it ahead of time and leave blank space in the timeline where you'd want it to happen.
- Once the edit is complete, just save your project and quit Premiere.

*NOTE: The point of beginning the project in Premiere is to save you time and give you the flexibility to change the order of things quickly. You can technically do all of this in After Effects, but I just find it takes a lot longer and it's a lot easier to make mistakes. Also After Effects's rendering engine is built differently than Premiere's. Without getting into too much detail, Premiere is built to playback longer clips in real time, where After Effects is built to play short segments and sort of 'renders-as-you-go', which, depending on your system, can mean varying framerates and limited playback.*

### Importing a Premiere Project into After Effects
___

- Create a new After Effects Project and, like Premiere, we'll use the 'After Effects' folder in the project folder as your 'Location'
    - After Effects doesn't automatically create a project file like Premiere does, so as soon as you create a new After Effects project, just 'Save As' and save it in the After Effects folder.
- Once you've created your project go to ****File -> Import -> Import Adobe Premiere Project****
    - Make sure you have 'All Sequences' seleceted and hit okay.
- If you were diligent in saving your media in lots of folders everything should import correctly. Your 'Sequences' in Premiere are now 'Compositions' in After Effects.
    - After Effects will also automatically import all your media. If you don't have your files organized sometimes After Effects can freak out and you'll have to go back into Premiere and relink your media.
- Open the composition with the same name as your main sequence in Premiere.
- You should see that every cut you've made is now its own layer in the composition

![Correct Import Example](https://files.slack.com/files-pri/T0HTW3H0V-F01CYC9E014/your_import_in_after_effects.png)

### Starting in After Effects
---

I'll be going over how to do dynamic text, some easy geometric graphics and some basic compositing within After Effects. All of this is to give you the fundamentals of making this type of video, so that once you understand the basic tools, you can get a bit fancier with your execution.

This innitial section should be treated as an index to reference as I explain how to do things. If you have no expirience working in After Effects, it might be worth it to give it a quick read.

### Layout
---

**Composition (Timeline)**: This is where you rearrange the top-down order of your layers, add keyframes and make adjustments to the edit.

**Project Panel**: This is where you keep all of your media, similar to Premiere.

**Program Monitor**: Also like Premiere, you have a Program Monitor. From this panel you can view your whole composition or individual layers by double clicking on them.

**Effect Controls**: In most layouts, the Effect Controls share a window with the Project Panel. Here, you can tweak the effects on any given layer.

### Compositions, Precomps and Layers
---

**Compositions**: Compositions are like layers in Premiere. If you're familiar with creating Nested Sequences in Premiere, you'll understand how Compositions work inside After Effects. 

While there is typically one master composition, there are usually more than a dozen pre-compositions (precomps) that make it up.

**Precomps**: A precomp is just a way of organizing your media and making larger projects more streamlined. A precomp moves your origonal layer, or in most cases a group of layers, within their own composition. This composition can then be used in multiple compositions throughout your project.

To create a precomp, select a group of clips and with all the layers selected, hit **Right-click -> Make Pre-comp**

You'll see everything collapse into one layer. If you double click on the layer in the timeline, it will bring you to the composition that has all the origonal layers in it. 

**Layers**: Anything that appears in your Composition is given its own layer. Where Premiere is built to organize media from left to right, After Effects is designed to place, blend and composit media from top to bottom.

Certain effects can be achieved depending on the order of your layers (for example, a background image could be placed on a layer below a layer of someone in front of a green screen. That way, it would appear as though the person was standing in front of the background).

Expanding a layer by clicking the arrow next to the layer name, gives you access to the effects you have applied to that layer.

###  Motion Blur and Blending Modes
---

**Motion Blur**: Motion blur is why you use After Effects for any kind of motion graphics work. Personally, everytime I create new layer, I turn motion blur on. 

To explain: If you were to film someone running very fast and then examined the footage frame by frame, you would notice that for most frames, the legs would be blurred. The faster something moves, the blurrier it becomes. It's the same in After Effects. If something is moving in your composition, you'll want its movement to blur relative to its speed. 

**Blending Modes**: By default, a layer's blending mode is set to 'Normal'. To change the blending mode of a layer just **Right-click -> Blending Mode** then choose the option that suites your needs.

Essendially a blending mode determines how your layer behaves in the composition. They are helpful for compositing multiple layers together. I won't go through all of the modes here, and for the most part, they won't come up again until we start doing more advanced stuff.

### Keyframes and Essential Effects
---

#### Keyframes
Keyframes are how you change an effect over time. Set a keyframe by clicking the keyframe button, move your cursor along the timeline and either change the value of the effect your keyframing or click the keyframe button again.

You'll notice that almost every effect has multiple attributes, each with their own starting value (usually 0%, 50%, 100%). By changing the values over time using keyframes, you can do things like move, scale or roatate your image, as well as achieve different looks with different effects.

#### Essential Effects

Here are just a few effects that I'll reference or that come up a lot when working in After Effects.

- Transform
    - Transform is the general control for your layer's placement in the Program Monitor. It's elements can also be keyframed. Here's what all the controls are called and what they do:
        - **Anchor Point**: This is the designated center of the layer.
        - **Position**: The positon of your layerbased on the Anchor Point.
        - **Scale**: The size of your layer (The point at which scaling takes place is the Anchor Point).
        - **Rotation**: The rotation of your layer (The point of rotation is the Anchor Point).
    - Anchor Point and Position both begin with two values (x,y). If you were to jump into 3D space, there would be three values (x,y,z)
- Color Balance (HSL)
    - **Effect -> Color Correction -> Color Balance (HSL)**
    - Changes the Hue (H), Lightness (L), and saturation (S) of the layer
- Optics Comphensation
    - **Effect -> Distort -> Optics Comphensation**
    - This effect is used primarily to remove the 'fish-eye' effect from media types like Go-Pro footage. However, it can also be used to add a fish-eye effect, or mimic an old curved television screen.
- Camera Lens Blur
    - **Effects -> Blur & Sharpen -> Camera Lens Blur**
    - This effect mimics the blur of different types of lenses and focal lengths. Its a very organic blur that tends to look better than the other types of blur. Unfortunately, this effect is very taxing on your computer and some systems will have a hard time with it.
- Fast Box Blur
    - **Effects -> Blur & Sharpen -> Fast Box Blur**
    - Fast Box Blur is the less taxing blur option you should consider if your computer is having a hard time with the Camera Lens Blur. It gets the job done, but you don't have as much contol over the effect.
- Glow
    - **Effects -> Stylize -> Glow**
    - Pretty self explainatory. You use this if you want the highlights on your layer to appear as if they are glowing. 

### Key Command Index
---

Anytime I reference a key command, I'll also add it here as a reference.

### Creating a Dynamic Video within After Effects
---

It's always good to have a rough idea of what you're trying to accomplish going into After Effects. In this case I have a few goals that I've outlined for myself:
1. Create a dynamic boarder template I can use for the two politians in my video
2. Create a dynamic background for the video
3. Create dynamic text to outline a key point made by the secondary source video.

### Organize Media and Create a Main Composition
---

To start my project, I'll begin by organizing all the clips of the first politician so that they stack on top of one another and do the same for my other politican. This will only change the order on the layer stack, and not on the timeline.

![Media Organization In Main Composition](https://files.slack.com/files-pri/T0HTW3H0V-F01D21RH6QM/rearrange_ae_timeline.png)

I'll then go through my clips and make sure everything is the same scale and is centered
 
- Click the drop arrow on the layer and click **Transform**
- Use the scale option to ensure that all your clips of the same type are the same size.
- For every clip hit ****Ctrl + Alt + Home**** to snap the anchor point to the center of your layer.
- In most cases, the anchor point will be at the center of your layer, but that shortcut is good to know.

I'll then make precomps of everything I can, where it makes sense to do so. Usually if there's only one clip, I won't give it its own precomp. The purpose of this is just to organize my footage.

![Precomps In Main Composition](https://files.slack.com/files-pri/T0HTW3H0V-F01CQBZREGP/innitial_ae_precomps.png)

With my main composition set up, I'll begin creating my 'Assets'. In this case, my assets will be, like I mentioned previously, a border for the clips that I can reuse for both politians, a background and some dynamic text.  In theory, you could create different assets in Photoshop or Illustrator and import them into your project, but, to keep things simple, I'll be creating all of my asets within After Effects using a layer type called a 'Solid'.

#### Creating Assets within After Effects

An asset in After Effects is a general term which typically refers to anything you use in your composition that isn't a video source. Having that said, 'assets' can also refer all of your media including your video source. In this case, when I say to assets think of it to mean anything (mostly graphics) that isn't from Premiere.

### Basic Geometric Borders in After Effects

The first thing I want to do is to create a border around my two politicians and my other video source.

Solids are layers set to a specific solid color which you determine when you create one. Solids are simple to use and very lightweight in terms of computing power required to work with them.

- Create a new solid with either **Crtl + Y** or click on **Layer -> New -> Solid** 
- Pick a color for your solid, in my case I went for a saturated red. Once you've hit 'okay' you can always go back and change the color of the solid by clicking on solid layer and typing **Ctrl + Shift + Y**
    - It's worth noting that once you create a new solid, After Effects will create a folder in your Project Panel named 'Solids'. Anytime you want that solid to use again, you can drag it from that folder onto a new layer.
- Move the solid layer to the bottom of the layer stack.

![The First Solid](https://files.slack.com/files-pri/T0HTW3H0V-F01D52H3DKL/create_a_solid_and_move_it.png)

- If the video clips fill the entire screen, then select the precomps of your clips and hit **s** to bring up the scale option. Drag down the scale until the solid creates a nice border around the videos.

![Duplicated and Scaled](https://files.slack.com/files-pri/T0HTW3H0V-F01D1VACHB7/duplicate__change_color_and_scale_solid.png)

- I'll duplicate the solid **Ctrl + d** and adjust the shape of the layer by grabbing one of the red points around the edges of the layer and dragging it out.

![Drag To Scale](https://files.slack.com/files-pri/T0HTW3H0V-F01DUT9GJ1E/adjust_white_solid_in_program_monitor.png)

- Once I'm happy with the general spacing of all the layers, I'll move the Red and White layers into their own precomp, which I'll name 'Boarder 1'.

![Two Layers in the Same Precomp](https://files.slack.com/files-pri/T0HTW3H0V-F01CYADU9RC/precomp_red_and_white_solid.png)

- Within Boarder 1, I'll create a new solid. This time I'll choose a muted blue.
- I'll use the red points around the edge of the solid to form it into a thin band.

![Transforming the Solid into a Band](https://files.slack.com/files-pri/T0HTW3H0V-F01DUT9AS9W/create_blue_solid_and_scale.png)

- Once I'm happy with the thickness of the shape, I'll jump into my Transform option on the solid and adjust the rotation to get an angle I like.

![Blue Solid with Rotation](https://files.slack.com/files-pri/T0HTW3H0V-F01DB78E06Q/adjust_blue_solid_rotation.png)

- With the Transform option still open, I'll create a new keyframe for Position and drag the value on the left hand side (the one that starts at 540(y) not the one that starts at 960(x)) until the shape is out of frame. 

![Creating the Keyframe 1](https://files.slack.com/files-pri/T0HTW3H0V-F01DB786Y8L/adjust_position_on_key_frame_one.png)

![Creating the Keyframe 2](https://files.slack.com/files-pri/T0HTW3H0V-F01CYADBUNA/adjust_scale_after_key_frame_1.png)

- I'll also readjust the shape of the solid so that the band will stretch completely across the screen

![Readjusting the Solid](https://files.slack.com/files-pri/T0HTW3H0V-F01D52G1S8J/adjust_scale_after_key_frame_2.png)

- I'll go about ten seconds into the timeline by dragging the playhead and change the value of the Position so that the shape is now on the other side of the screen and also out of frame. This will automatically create a new keyframe.

![Finishing the Solid Animation](https://files.slack.com/files-pri/T0HTW3H0V-F01DB7BEQFN/set_second_key_frame.png)

- If I move my playhead to the beginning of the timeline and hit **spacebar** to play, I'll see that it takes ten seconds for the shape to travel across the screen. (Make sure you have Motion Blur turned on!)
- I'll then duplicate this layer with **Ctrl + d** and offset the stopping point keyframe so that the second solid will move a little slower.

![Refining Solid Animation](https://files.slack.com/files-pri/T0HTW3H0V-F01DHM51QQZ/duplicate_solid_and_adjust_key_frame.png)

- Then I hit **Ctrl + Shift + Y** to change the color. I kept it blue, but a little less saturated.
- I then made a precomp of the two solids, which I named Lines, to use in my Boarder 1 composition.

![Duplicated Solid Color Change](https://files.slack.com/files-pri/T0HTW3H0V-F01D200M7T7/change_color_of_duplicated_solid.png)

- I now need to make two masks that will only show the part of the animation I want. Essentially I want to make it look like blue lines are travelling around the white boarder.
- To make my masks I have a few options. I can either select each point individually or I can mask an entire shape. 
    - The pen tool (the shape of a fountain pen in the left-hand corner) can be accessed by hitting **g** on your keyboard and allows you to create a mask by selecting each point and then ending the shape by clicking again on the fist point.
    - The shape mask tool (The icon immediately to the left of the pen tool) can be accessed by hitting **q** on the keyboard and allows you to create a mask in the shape you've selected. You can select a shape either by clicking the icon and hold for the drop down menu, or hit **q** until you have the shape you want. As you tap **q** you'll notice the icon will change depending on the shape you've chosen.
- Using the square shape mask tool, I'll create two masks on my Lines layer, one on the outside of the white solid, and one on the inside.

![Masking the Lines Layer](https://files.slack.com/files-tmb/T0HTW3H0V-F01DB7E5YSG-7441660d05/create_mask_720.png)

- To clean up my masks, I'll zoom in on the composition, and hit **h** on my keyboard to select the hand tool.
    - The hand tool allows you to click and drag to move around your program monitor when zoomed in.
-  I'll move to each corner, and, with the pen tool, adjust the individual corners of my mask.

![Refining the Mask](https://files.slack.com/files-pri/T0HTW3H0V-F01D52QFJUA/adjusting_mask_corners.png)

- I'll open up the Lines layer and click the drop down arrow next to 'Masks' to show both of my masks
- Make sure that the mask on the outside of the white line sits above the mask on the inside (just click and drag the masks to change their order).
- I then click the drop down menu next to the mask name and set the outside mask to 'Add' and do the same for the interior mask, but set it to 'Subtract'
- Now the blue lines only appear within the white boarder.
- I'll select all three of my Boarder 1 layers and hit **Ctrl + d** to duplicate them.
- With all three layers duplicated and selected, I'll drag them to the bottom of the layer stack.

![Duplicate and Re-Order](https://files.slack.com/files-tmb/T0HTW3H0V-F01CYAPJX6J-ade9d9f90f/duplicate_boarder_720.png)

- With all of the layers still selected, I'll hit **r** on the keyboard to open up the Rotation. I'll double click on the value and type in 180. When I hit enter, everything will be upside down.

![Rotating the Duplicated Layers](https://files.slack.com/files-pri/T0HTW3H0V-F01CQAEQL6T/r_for_rotation.png)

- Keeping everything selected, I'll adjust the scale so that the duplicated layers sit just above the origonals. I then zoom in and make refining adjustments by clicking and dragging the layers.

![Scaling and Refining the Duplicated Layers](https://files.slack.com/files-pri/T0HTW3H0V-F01D52THHAN/scale_with_all_selected.png)

- With my Boarder 1 composition complete, I'll go into my project panel and select the Boarder 1 composition. I'll hit **Ctrl + d** to duplicate it and rename it Boarder 2.
- Double clicking on Boarder 2 will open up the composition. Here, I'll change the red solids to a softer blue.

![Recolor Boarder 2](https://files.slack.com/files-pri/T0HTW3H0V-F01DUTN4C6L/change_boarder_color.png)

- Back in my Main composition, I'll add in my Boarder compositions as layers from the project panel. I'll give both politians their own boarder.

![Placing the Boarders into the Main Composition](https://files.slack.com/files-pri/T0HTW3H0V-F01D208MZRB/place_boarders_in_main_comp_2.png)

- Using **Ctrl + Shift + d** I can split the clips and organize futher.
    - I make sure there is a new Boarder layer each time a politician clip begins.
    - I drag the playhead to the endpoint of the video clip.
    - I'll split both the video and the boarder layer.
    - The split will create a new layer with the rest of the clip. I'll delete the bit of the Boarder clip that overlaps the video's endpoint and I'll save the new layer of the politician for the next shot.
    - Once I'm finished, I should have two layers for each shot, the video layer and the Boarder layer.
- You're done! All the videos now have a unique Boarder. The next step will be to create a simple background that can play behind everything

### Basic Geometric Backgrounds in After Effects

The background will be a super simple looping animation. In a new composition create a solid, I chose a less saturated red, and Keyframe the Scale so that it slowly decreases over time. A few frames into the clip, create an Opacity Keyframe that starts at 100% and decreases to 0% when the Scale has also reached a value of 0. Then at the start of the clip create a Keyframe for the Opacity at a value of 0%. This way, the solid will smoothly fad in and out and we can loop it.

Simply duplicate, offset the duplicated layer's starting point and repeat. By duplicating all clips every step, you'll find that you can have the animation continue for a while without duplicating too many times. 

Your final composition should look like this:

![Final Background Composition](https://files.slack.com/files-tmb/T0HTW3H0V-F01DBLXHVA8-811864a1c8/like_this_720.png)

You can then use this inside your Main Composition as its own layer. In my case, I wanted the color to change from blue to red depending on who was speaking. To achieve this, I applied a Color Balance (HSL) effect to the layer and set Keyframes one frame apart from on another to change the hue from blue to red during the cut.

### Basic Transitions in After Effects Using Transform

With all of our assets in place, we can begin to animate them. The method I'll show will have to do with Scale, but you can apply the same principles to the Position. Instead of zooming in and out, the layer can slide in or slide up.

Before we begin, it's a good idea to go back through your compositions and add motion blur to everything. Even if it doesn't move, I always just like to have it turned on for every layer at every level.

![Motion Blur Everything](https://files.slack.com/files-pri/T0HTW3H0V-F01DHMF5ZED/add_motion_blur_to_everything.png)

- I'll begin by animating the first video clip. Essentially, I want to have the video zoom in quickly, and almost bounce as if it has momentum. Adding this 'bounce' is really simple and it adds a ton to your transitions.
- First, set a Scale Keyframe at the point on the timeline when you want your video to be at the correct size.
- Then go to the start of the clip and drag down the scale until it's about three times smaller than the previous Keyframe.

![Setting the First Keyframe](https://files.slack.com/files-pri/T0HTW3H0V-F01D20ABLR3/scale_up_video.png)

- Insert two more Keyframes in between the first and last. Keyframe 2 should be set to a value slightly higher than the final Scale. Keyframe 3 should be set to a value slightly lower than the final Scale. Keyframe 4 is your final Scale value.

- It's not a hard and fast rule, but typically, Keyframe 1 is as far away from Keyframe 2 as Keyframe 3 is to Keyframe 4 and the distance between Keyframe 1 and Keyframe 2 is twice the distance as the space between Keyframe 2 and Keyframe 3.

- I will also add an Opacity Keyframe. One at the beginning of the clip and one halfway between the first Scale Keyframe and the second. Now the clip will fade in as it zooms in. This method looks a lot better than setting your first Scale Keyframe to a value of 0.

![Keyframe for bounce animation](https://files.slack.com/files-pri/T0HTW3H0V-F01D52Y4UP4/scale_up_video_2.png)

- The same principles can be applied for an outtro animation, just do the steps in reverse.
- Copy the keyframes, go through the timeline, and for each video layer, paste this animation at the start. This requires very little tweaking.
- I'll then paste the Keyframes onto the first Boarder layer, adjust the Keyframes so that the Boarder bounces in at a slightly different rate than the video, then copy and paste those Keyframes where I need them along my timeline.

![Pasting Keyframes and Adjusting for Timing](https://files.slack.com/files-pri/T0HTW3H0V-F01DHMHPY01/outro_boarder.png)

- Now all the cuts in my video have a transition applied to them. At this point I'll combine each of the layer pairs (the Boarders and the videos) into their own precomps.
- Now that I have one layer for each shot, I'll animate the Scale with some Keyframes for each clip so that it slowly increases in Scale over the course of the shot. This will add another layer of movement to the entire video.

### Dynamic Text in After Effects

For my external source video, I want to add some text. I want a specific phrase to appear one word at a time as he says each word. 

- First, us **Ctrl + t** and drag out where you want the text box to be on the Program Monitor. This will create a new Text layer in your composition.
- Type in your phrase and use the Character and Paragraph windows to adjust the text to fit your style. 

![Setting Up Text Box](https://files.slack.com/files-tmb/T0HTW3H0V-F01CQPD73RV-f20b044902/text_before_separation_720.png)

- Playback the clip and use **Ctrl + Shift +d** to split the text layer for every word. Now you should have a new layer every time the word changes.
- Then, either with the pen tool or the shape mask tool, go through each layer and mask around the word the layer belong to.
- To make the words stay on screen, just drag out the layers until they all end in the same place.

![The Text Layers in the Timeline](https://files.slack.com/files-pri/T0HTW3H0V-F01DJ8YJSJV/the_text_layers.png)

- With all the clips selected, reset the anchor point to the center of each word by hitting **Crtl + Alt + Home**

![Text Layers with Proper Anchor Points](https://files.slack.com/files-pri/T0HTW3H0V-F01CYPNPC86/writing_text_and_anchor_points.png)

- For the outro animation, simply use the Scale bounce method we used previously and offset the Keyframes to make it less uniform. DOn't forget to add Motion Blur!

*NOTE: If your using this effect a bunch in your video, I'd suggest you experiment with different intro and outro animations for the text using the Opacity and Position.*

### Exporting in After Effects and Media Encoder

If you've done all of your audio work in Premiere, you're able to export a completed video from After Effects. Exporting from After Effects is different than Premiere. It's designed for exporting things that Premiere can work with as opposed to final projects, and as a result, the options for formats are limited to very large uncompressed files. The default render option in After Effects is called Lossless and it outputs a .avi file.

Once it's finished rendering, the .avi file can be brought into Media Encoder where you can choose a more compressed output codec like H.264. 

To render your composition in After Effects just open the Main composition and click **Composition -> Add to Render Queue**. This will open up the Render Queue. Double click on the name next to 'Output to' to decide on your file name and location. Once you're good to go, just click 'Render'.










