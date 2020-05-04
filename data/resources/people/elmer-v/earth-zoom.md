# Vox Unbox
## How to Make the Earth Zoom Effect with Adobe Apps

We're going to recreate the Earth zoom out and in effect, seen in the first few seconds of Vox's video "How the US outsourced border security to Mexico."

[![Source Video](http://img.youtube.com/vi/1xbt0ACMbiA/0.jpg)](http://www.youtube.com/watch?v=https://www.youtube.com/watch?v=1xbt0ACMbiA)

***
![After Effects logo](https://files.slack.com/files-pri/T0HTW3H0V-F012S4PVCRX/aftereffects.png?pub_secret=06ef8bbbfa)

We will use After Effects to create the zoom out effect and to add additional elements like clouds and stars.

![Premiere logo](https://files.slack.com/files-pri/T0HTW3H0V-F012KLND0Q4/premiere.png?pub_secret=ed6a3d1506)

We will use Premiere to create a reverse (or zooming in) effect and to export our video.

## The Final Product

[![Remake Video](http://img.youtube.com/vi/aGaVH5eY1sw/0.jpg)](https://youtu.be/aGaVH5eY1sw)

## How to Make the Effect

**Step 1**. Collect 8-10 areal images of where you want to zoom out from, as seen below. Sort them with the closest one first, and the Earth shot last.  

**Step 2**. Open a new project in After Effects and import your areal images into a new Composition (maintaining the order).  

**Step 3**. Link the layers (i.e. images) by aligning each layer over the subsequent one. To do this, shut off all the layers except the two layers you are working with. Turn down the opacity of Layer #2 to 50% so it shows through. Then, scale down Layer #1 to align with Layer #2. Then, parent Layer #1 to Layer #2, so that when Layer #2 is scaled down, Layer #1 will scale down with it as well.  

![Ae Title/Action Safe Tool](https://files.slack.com/files-pri/T0HTW3H0V-F012DNFL2LB/28c8cd67-89dc-4ad5-b63a-3c1a8df89d16.png?pub_secret=af19d0035a)  
*Where to find the "Title/Action Safe" tool*

![Ae Pan Behind Tool](https://files.slack.com/files-pri/T0HTW3H0V-F012DG9KSD8/d2e59beb-1142-4f6f-856a-cbc855851680.png?pub_secret=a213a99eda)  
*Where to find the "Pan Behind (Anchor Point) tool*

**Step 4**. Repeat Step 3 for all the images, making sure that you parent each layer to the subsequent layer (Note: the last layer is not parented to any layer).  

**Step 5**. Select all images and turn the opacity back to 100% and change the Parent to "None." Then, select all layers, except Layer #1, and parent them to Layer #1.  

**Step 6**. Change the Scale of Layer #1 to 100,100% (Note: all the other layers have scaled up).  

**Step 7**. With Layer #1 selected, use the "Title/Action Safe" option to position where you want to zoom from. Then, with Layer #1 still selected, use the "Pan Behind (Anchor Point) Tool" to move the anchor point of the layer over desired zoom point.  

**Step 8**. Set the scale at 100% at minute 0:00 and add a key frame by selecting the stopwatch next to Scale indicator, as seen below. Then, drag the time indicator over to around 6 seconds, and adjust the scale to ~0.002 and add another key frame. Now, when you drag the time slider from 0:00 to 0:06, you should the layers scale down, or "zooming out."  

![Ae Scale](https://files.slack.com/files-pri/T0HTW3H0V-F012S5HR9C1/160a4494-fcb5-4db8-9077-af9a8fcf46f5.png?pub_secret=f747862eb5)  

**Step 9**. Adjust the speed at with the zoom out occurs by selecting the two Scale key frames added in Step 8, right click, and in the pop-out menu navigate to "Keyframe Assistant" and select "Exponential Scale," as seen below.  

![Ae Keyframe Asst](https://files.slack.com/files-pri/T0HTW3H0V-F012S5Z3Q9F/9748abec-3489-433d-84b2-6ec95d160934.png?pub_secret=ea1c90a534)  

**Step 10**. It is time to blend the layers together. With Layer #2 selected, navigate to the "Ellipse Tool" and add an elliptical mask. Then, double-click the letter "M" so that the new Mask menu appears below Layer #2. Change the Mask Feather to 250.00,250.00 pixels and the Mask Expansion to -250.0 pixels, as seen below.  

![Ae Ellipse Tool](https://files.slack.com/files-pri/T0HTW3H0V-F012DGYTG4S/6541aaa4-3aa7-422d-b538-80334214719b.png?pub_secret=fe74ba9525)  
*Where to find the "Ellipse Tool"* 

**Step 11**. Repeat Step 10 for each layer. Adjust each elliptical mask as needed.  

**Step 12**. Create the rotation effect by navigating to "Layer>New>Null Object." Parent Layer #1 to the new Null Object (which can be renamed to "Rotation"). Adjust the rotation to 0x+180.0˚ and add a key frame. Move forward to the end, adjust the rotation to 0x+0.0˚, and set another key frame (Note: this way, the image will rotate right side up, instead of upside down). Lastly, select both Rotation key frames and click the "F9" key to make the rotation more smooth.  

**Step 13**. Add some stars to the Earth shot by navigate to "Layer>New>Solid." Then Navigate to "Effect>Noise&Grain>Fractal Noise." Bring the Transform scale down, increase contrast, and lower the brightness (Note: Adjust to personal preference). Move the new solid layer below the last layer and parent it to Layer #1, so that everything is connected.  

**Step 14**. Add a camera shake by taking the Composition you are working on from the "Project" left-hand side menu and duplicate it by dragging it to the "Create a new Composition button, as seen below. While on the new Composition timeline, navigate to "Effect>Expression Controls>Slider Control." Click the letter "P" to bring up the Position. Then, while holding the "Alt/Option" key, click the stopwatch next to Position to bring up the expression view and write wiggle(10,effect("Slider Control")("Slider")), as seen below (Note: the 10 indicates that it will wiggle 10x/second per pixel). Then, click the letter "U" to bring up the Slider Control and set the key frames: 1) set to 0; 2) set to 10; 3) set to 10; 4) set to 0 (Note: Between key frames 1 and 2 the wiggle begins, between frames 2-3 the wiggle will be set to 10, and between frames 3-4 the wiggle will come to a stop).  

![Ae Duplicate Comp](https://files.slack.com/files-pri/T0HTW3H0V-F011YR4HA4F/a13ee2b1-4ad3-4886-a406-7cf30cd00c1b.png?pub_secret=0e5cbf5049)  
*Drag your working Comp to the indicated icon to create a new Comp* 

![](https://files.slack.com/files-pri/T0HTW3H0V-F012KN8CL4C/4e25b52f-6187-4433-8ef2-a6db8dcfd4a8.png?pub_secret=bcde5ac71b)  
*Writing the expression to create the wiggle effect*  

**Step 15**. Adjust the camera fringe occurring from the wiggle by navigating to the "Effect & Presets" right-hand menu and searching for "Motion Tile" (Note: this allows you to extend the edges). Drag "Motion Tile" onto the timeline and in the menu that appears on the left-hand side select "Mirror Edges" and adjust the "Output Width" and "Output Height" to 120.0.  

**Step 16**. Adjust the abrupt start and ending by right-clicking on the layer and navigate to "Time>Enable Time Remapping." Set two keyframes, one where it starts and one where it ends. Select the two keyframes and click "F9".  

**Step 17**. Add any desires sound effects.  

**Step 18**. Export the Comp, open the file in Premiere, and drag the clip onto the timeline.  

**Step 19**. To create the reverse effect, duplicate the clip and add it to the timeline. Then, right-click the duplicated clip and select "Speed/Duration." In the menu that opens, check the box next to "Reverse Speed" and the "OK." Adjust the length of the two clips as desired.  

**Step 20**. Export and share your video!  

The instructions above follow this tutorial (Note: the guide includes screenshots of the updated Ae interface, not the one shown in the video):

[![Guide Video](http://img.youtube.com/vi/5aWwoPxF1zg/0.jpg)](https://youtu.be/5aWwoPxF1zg)
