# THE PROCESS
We'll be loosely following the [tutorial on this website](https://brandnewbox.com/notes/2020/04/obs-and-zoom-on-mac/).

1. [Download OBS](https://obsproject.com/download) and install it.

2. Learn how to use OBS. I followed [this tutorial](https://www.youtube.com/watch?v=hbjQIxyLBCE) to make my scenes in OBS. They provide templates you can [download here](https://nerdordie.com/resources/free-resources/free-downloads-obs-studio-guide/).

3. Go back to that original tutorial and [download CamTwist](http://camtwiststudio.com/). CamTwist will create a "virtual camera" that will allow you to stream to Zoom from OBS.

4. Because Zoom is *muy dumb*, you need to break it to make it accept your virtual camera. In fancy parlance, you'll have to use sudo to give it permission to allow DAL plugins. More on that [here](https://github.com/johnboiles/obs-mac-virtualcam/wiki/Compatibility#apps-dont-allow-dal-plugins).
You'll have to open Terminal and paste this: `sudo codesign -f -s - /Applications/zoom.us.app`

5. Use CamTwist to configure your virtual camera [like the tutorial says](https://brandnewbox.com/notes/2020/04/obs-and-zoom-on-mac/).

6. Open up Zoom and select CamTwist as your camera.

7. Bingo, you're in action.
