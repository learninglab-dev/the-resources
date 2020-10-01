# QUICK LUTS FOR OBS IN PHOTOSHOP

The color correction filter in OBS leaves much to be desired. There are no curves, no RGB specific settings . . . just the basics you'd have had on your TV in 1978.

So you may find yourself wanting to use the **Apply LUT** filter to gain a little more control over the image. Here are some steps to get you started!

1. add a video source to your scene
2. take a screenshot of it!
![ Image before the filter](https://files.slack.com/files-pri/T0HTW3H0V-F019YGB0ZPU/screen_shot_2020-09-02_at_8.53.39_am.png?pub_secret=c51e279c9b)

3. bring that screenshot in to Photoshop and save as a `.psd` doc
4. select **Layer** => **New Background From Layer**
5. apply a load of filters (here for instance, I'll get rid of the excess yellow and green with a color balance, up the contrast with a curves adjustment, and get a sort of diffuse glow that reduces skin imperfections by adding a black and white set to luminosity as its blend mode)
![image after the filters](https://files.slack.com/files-pri/T0HTW3H0V-F01AB5B1YSV/mk-for-lut.jpg?pub_secret=9c792fa312)
6. select **File** => **Export** => **Color Lookup Tables...** and save it in the **CUBE** format somewhere you'll remember
7. over in OBS, right-click on your source, select **Filters**, then hit the **plus** sign, then select **Apply LUT**	and select your file. You should get something CLOSE to a match to your `.psd`
![screen shot after LUT filter applied](https://files.slack.com/files-pri/T0HTW3H0V-F019YGB397U/screen_shot_2020-09-02_at_9.01.52_am.png?pub_secret=6659d2be29)
