![](https://i.ytimg.com/vi/4Gwnx4StZQc/hqdefault.jpg)

# Installing and configuring OBS and NDI to use in Zoom

OBS or "Open Broadcaster Software" is a powerful program that allows you to accomplish many of the effects you see on the evening news, including adding videos, images, and text on top of your webcam video. When combined with Zoom it becomes a powerful tool for creating engaging presentations.

NDI® Tools is a free suite of applications that acts as a virtual cable, connecting OBS and Zoom, and permits the impressive functionalities that OBS has to offer.

To get started, the first thing we need to do is download and run some software packages!

### OBS:
  * https://obsproject.com/download
    * Make sure to click on operating system that is correct for you. (Note: this tutorial discusses how to do this on a Mac computer)
    * Copy the OBS.app into your Applications folder

### NDI Tools:
  * https://ndi.tv/tools/#download-tools
    * You will need to submit your name and an email address you control (including the check box that says "Opt-in Communications"), and NDI will email you a download link (Note: You do not need to set up an account for this!)
    * Click on the download link in and run the .dmg package installer
    * There are a number of packages contained in this download, but the two that you need to double-click on and run are the following, and it's best to do them in the order listed here:
      * NewTekNDIVideoMonitor.pkg
      * NewTekNDIVirtualInput.pkg

Once you run the NewTekNDIVirtualInput.pkg installer, you will be prompted to restart your computer. Go ahead and perform the restart

### OBS-NDI pagckages:
  * https://github.com/Palakis/obs-ndi/releases
    * Download the latest software package release that corresponds to your operating system (for this tutorial, we will be downloading obs-ndi-4.9.0-macOS.pkg)
  * https://ndi.palakis.fr/runtime/ndi-runtime-4.5.1-macOS.pkg
    * Download and run the installer

### Opening the applications and connecting the Sources
  * Open OBS application
  * Open NDI Virtual Input application
  * Click on the drop-down Sources tab of the NDI Virtual Input at the top of the screen
    * Select OBS as your Source
  * Pop back over to the OBS app, and close and re-open the application
  * Click on Tools drop-down menu at the top of the window inside the OBS app, and you should see NDI Output settings as an option
    * Select NDI Output settings
  * Make sure that OBS and OBS Preview are selected as the 'Main Output' and 'Preview Output', respectively, and click on the check box that says "Main Output"
    * Click "OK"

Open up Zoom and select NDI Video as your camera source by clicking the ^ next to the "Stop Video" button.

You should now be connected and ready to start building scenes in OBS!

Here is a good [tutorial](https://www.youtube.com/watch?v=hbjQIxyLBCE) to get you started on how to build scenes in OBS.

Good luck!!
