# Ken Burns, modernized

The Ken Burns effect, if you're not familiar, is the process of zooming in on a still image as a way to bring a dynamism to a still image and emphasize a detail you might otherwise have missed. Years later, media has sped up a bit and what we expect out of our videos are much shorter runtimes, larger amounts of content, and to be significantly better at holding our attentions.

![KenBurns Zoom In](https://files.slack.com/files-pri/T0HTW3H0V-F01M2H1B2MT/kenburns_trimmed.gif?pub_secret=a47ca8b3ab)

[Here you can find a Drive folder](https://drive.google.com/drive/folders/1kAClyy5dHOGoKb0--ibcmwrNci5ZWl04?usp=sharing) with a number of After Effects Animation presets for each of the sections below.

<details>
  <summary>All you'll need to do is download them and place them into your User Presets Folder. Once it's in your User Presets folder, these will show up in the Effects panel.</summary>

- Mac: `~/Documents/Adobe/After Effects 2020/User Presets/`
- Win10: `My Documents\Adobe\After Effects 2020\User Presets\`
</details>

![Folder Structure](https://files.slack.com/files-pri/T0HTW3H0V-F01MVEXQJAC/filepath.png?pub_secret=332a76b425)

The one important note is that when you import an image into AE, your scale and possibly rotation may be off. You can change this under the **Transform** values in your layer, but make sure to do this *before* you apply any effects, otherwise you may end up with stray keyframes.

And finally, these guides presume a basic knowledge of keyframing in After Effects(this isn't difficult at all, but it is important). If you're not familiar yet, I highly recommend [taking a look into this tutorial.](https://blog.pond5.com/18663-basic-keyframing-adobe-after-effects/)

### The Drift

One of the simplest ways to make a still image dynamic is to simply apply a small amount of motion to each image -- really to never let your footage stop moving. Whether it's in, out, left, or right, all you need is a calculation that tells AE to move `pixels` over `time`. This can be "scale -1% every second" or "move -10 pixels on the x axis every frame".

![Drift Animation](https://files.slack.com/files-pri/T0HTW3H0V-F01LQS6N1HV/drift.gif?pub_secret=5ac920bff4)

For all the following animation presets, Drift can easily be stacked on top. It's a bit of a catchall way to keep your images moving -- but it isn't something that can maintain on screen for an extended amount of time. More than a few moments, and it will begin to feel unmotivated.

<details>
  <summary>You can use this code snippet to play around with applying it.</summary>

  To apply this, all you need to do is `Opt + Click` on the value you'd like, paste the code into the text editor that reveals itself.

  ```
  m = 1; // change to scale your speed up or down
  value + [1,1]*(time-inPoint)*m;
  ```

  If you'd like to apply this to your `Position` or `Anchor Point` value, to track horizontal/vertical motion, you'll need to adjust `[1,1]` to be something larger. For example, `[-10,1]`, will move to the left or `[1,10]` moves up.
</details>

### Ken Burns - Updated

The only real reason the traditional style feels out of date is because of the linear motion applied to it.

![Ken Burns with less robotic motion](https://files.slack.com/files-pri/T0HTW3H0V-F01LQS7ADT9/kenburnsupdated.gif?pub_secret=fcd3dcd812)

After Effects offers an extremely easy to use function called the Graph Editor, this allows you to graph your changes over time. In this case, easing into the motion, and then back out of it -- giving it a more natural, organic motion.  

![After Effects Graph Editor](https://files.slack.com/files-pri/T0HTW3H0V-F01M5RKHR1R/interpolatedmotion.png?pub_secret=08d8300503)

<details>
  <summary>When you go to use this preset, there are just a few things to be aware of.</summary>

  This preset is built with a constant drift in, and two keyframes that land next to one another. The first is the wide shot and the second is the punch in. Obviously, this is customized for this particular image that has the focal point in the top quadrant.

  To fix this, place your playhead over the first set of keyframes(shortcut **U** to reveal a layer's keyframes), and use the Pan Behind tool(**Y**) to set your anchor point to wherever you'd like to zoom into.

  Finally, if it zooms in too far, or not enough, set your playhead over the second set of keyframes and change the Scale to reframe it into your final shot.

</details>

### Drifting Tryptic

This is obviously just a play on the Drift, but with several images. This is a great method for stylishly comparing aspects of a single image, repeating motifs, or, you know, a tryptic.

![Drifting Tryptic](https://files.slack.com/files-pri/T0HTW3H0V-F01M2H08961/driftingtryptic.gif?pub_secret=698f51ea5a)

<details>
  <summary>This preset is a layer of it's own, so all you need to do is double click it, and customize with a few short steps.</summary>

 It'll place a layer with three open windows under which you can arrange your three images and create a parent/child link to the Tryptic frame(do this under your **Parent & Link** drop down for each image, selecting "Tryptic").
</details>

### Cutting Across Images

Cutting into and across images is a great method for images with multiple subjects or a series of details you'd like to highlight. In this case, the action is more about creating the dynamic you might find when cutting between subjects in a scene. Alternately, it can play the role of direct comparisons between aspects of a single image.

![Cutting Across an Image Animation](https://files.slack.com/files-pri/T0HTW3H0V-F01MJ8L55FB/cutacrossimages.gif?pub_secret=0a6715bded)

<details>
  <summary>This preset has more keyframes than any of the others so far, but they all do very similar things. This is also an easily scaleable preset, if you just add more keyframes that follow the pattern.</summary>

  Here are the keyframes, in order:

  - Starter keyframe, this is your wide shot.
  - Next to that is the first close up you'll cut to
  - the third establishes that nothing has changed since the second keyframe.
  - the fourth is your second close up
  - again, your fifth establishes that nothing has changed since the 4th
  - and finally, the sixth cuts back to your wide short

  To customize this as it is, all you need to do is lay your playhead over each position and arrange your **Position** and **Scale** to frame up your wide shot and two close ups. I don't recommend using the Pan Behind tool for this because then your drift will jump jarringly in direction, instead of having a single, large image that you're jumping within.

  *After* you've arranged your keyframes and composition, I recommend applying a Drift effect, just to give it that touch of motion. If you do this beforehand, you may have a hard time calculating the drift between 2nd/3rd and 4th/5th keyframes.


</details>
