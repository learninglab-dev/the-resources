# OBS for Zoom
OBS or "Open Broadcaster Software" allows you to accomplish many of the effects you see on the evening news, including adding videos, images, and text on top of your webcamvideo. When combined with Zoom it becomes a powerful tool for creating engaging presentations.

To connect OBS and Zoom we'll be loosely following the [tutorial on this website](https://brandnewbox.com/notes/2020/04/obs-and-zoom-on-mac/).

## Step 1: Download OBS
[Download OBS](https://obsproject.com/download) and install it. You'll want to select the installer that matches the machine you'll be using. For me, that's Mac. Once it's downloaded, click the `.dmg` file that downloaded and when the installer window opens, drag the `OBS.app` icon into the `Applications` folder and drop it. 

## Step 2: Learn how to use OBS
I followed [this tutorial](https://www.youtube.com/watch?v=hbjQIxyLBCE) to make my scenes in OBS: 
[![Creating Scenes in OBS Studio](http://img.youtube.com/vi/hbjQIxyLBCE/0.jpg)](http://www.youtube.com/watch?v=hbjQIxyLBCE "Creating Scenes in OBS Studio")
They provide templates to work with on their website. Here are the ones we'll need:
- [Blue and Particles animated background](https://nerdordie.com/free-resources/obs-studio/NoD_GridBG_Blue.mp4)
- [Dark background with no particles](https://nerdordie.com/free-resources/obs-studio/NoD_GridBG_Dark.mp4)
- [Basic overlay .zip file](https://nerdordie.com/free-resources/obs-studio/overlay-images.zip)

More detail coming soon...



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
