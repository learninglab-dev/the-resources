# OBS for Zoom
OBS or "Open Broadcaster Software" allows you to accomplish many of the effects you see on the evening news, including adding videos, images, and text on top of your webcamvideo. When combined with Zoom it becomes a powerful tool for creating engaging presentations.

To connect OBS and Zoom we'll be loosely following the [tutorial on this website](https://brandnewbox.com/notes/2020/04/obs-and-zoom-on-mac/).

## Step 1: Download OBS
[Download OBS](https://obsproject.com/download) and install it. You'll want to select the installer that matches the machine you'll be using. For me, that's Mac. Once it's downloaded, click the `.dmg` file that downloaded and when the installer window opens, drag the `OBS.app` icon into the `Applications` folder and drop it.

## Step 2: Learn how to use OBS
Scenes in OBS are essentially preset collections of settings that you can design before you start a stream/call/recording to quickly jump between. They can also easily be adjusted live.

I followed [this tutorial](https://www.youtube.com/watch?v=hbjQIxyLBCE) to make my scenes in OBS:

[![Creating Scenes in OBS Studio](http://img.youtube.com/vi/hbjQIxyLBCE/0.jpg)](http://www.youtube.com/watch?v=hbjQIxyLBCE "Creating Scenes in OBS Studio")

They provide templates to work with on their website. Here are the ones we'll need:
- [Blue and Particles animated background](https://nerdordie.com/free-resources/obs-studio/NoD_GridBG_Blue.mp4)
- [Dark background with no particles](https://nerdordie.com/free-resources/obs-studio/NoD_GridBG_Dark.mp4)
- [Basic overlay .zip file](https://nerdordie.com/free-resources/obs-studio/overlay-images.zip)

##### But there are some more specific objectives we'd also like to explore

Namely, how you might project content like slides or video behind you, or cut back and forth seamlessly between yourself and your content. The beauty of OBS is that you have an incredible number of options on how you might do this.

The one that is perhaps the most straight forward would be to panel your own webcam over top of your presentation, you can find a very quick and easy walkthrough on the steps to do this [here](http://resources.learninglab.xyz/simple/people/casey-c/OBS-paneledPresentation)

![](https://files.slack.com/files-pri/T0HTW3H0V-F017YR9T267/screen_shot_2020-07-29_at_3.36.21_pm.png?pub_secret=250c3224fa)

The second more closely represents the virtual background of Zoom, but does require a consistently colored backdrop behind you, preferably a green screen, but a colored wall would also work, so long as it is significantly dissimilar to your skin's tone. You can find the steps for this [here](http://resources.learninglab.xyz/simple/people/casey-c)

![](https://files.slack.com/files-pri/T0HTW3H0V-F017RSE4P3Q/screen_shot_2020-07-29_at_2.43.06_pm.png?pub_secret=9a1e716524)

It's important to note that if you are using slides, OBS may be easier to use if you're using Google Slides rather than Powerpoint, as Google Slides has an easy to locate option to show your fullscreen within the browser window(rather than taking up your entire screen). -- this is called the Presenter View -- If Powerpoint is your tool of choice, you can find how to locate the windowed fullscreen option [here](https://office-watch.com/2020/powerpoint-presentations-in-a-window-not-full-screen/).

## Step 3: Install a Virtual Camera
We want Zoom to show off the fancy new scene we've created in OBS, but Zoom is configured to only look for webcam inputs. To overcome this, we'll have to install a "virtual camera" that will display our OBS scene.

We'll be using a virtual camera developed by [John Boiles](https://github.com/johnboiles) on Github.
1. Download the latest .pkg installer on the [Releases page](https://github.com/johnboiles/obs-mac-virtualcam/releases).   The current script as I'm writing this is called `obs-mac-virtualcam-3ca8f62-v1.2.0.pkg`.
2. Run the .pkg installer (entering your password when required).
3. If you're already running OBS, make sure to restart it.
4. To start the virtual camera in OBS, in OBS go to Tools→Start Virtual Camera.

5. Now that you've got your virtual camera running, you'll need to make Zoom accept it as a video feed. In fancy technical terms, you'll have to use sudo to give it permission to allow DAL plugins. More on that [here](https://github.com/johnboiles/obs-mac-virtualcam/wiki/Compatibility#apps-dont-allow-dal-plugins).

    To do this, you'll have to open Terminal (press `command+space` to open spotlight search, then type "terminal" and hit return) and paste this: `sudo codesign -f -s - /Applications/zoom.us.app` and hit enter.


## Step 4: Present in Zoom
Open up Zoom and select OBS Virtual Camera as your camera source by clicking the `^` next to the "Start Video" button.

You'll need to change your slides in whatever program you're using to display them.
