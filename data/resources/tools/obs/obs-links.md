# OBS LINKS #
In the LL we use OBS for assembling and delivering complex live streams: combining webcam video and pre-recorded footage, using the chromakey filter to live-key a subject in front of a 3D background, launching gifs and soundbites in realtime to add to workshops and lectures. These links will get you started with this tool.

## BASICS ##

Here are some links to get you started with OBS.
* [link to the installers](https://obsproject.com/download) for mac, pc and linux
* the extremely simple [OBS Studio Quickstart Guide](https://obsproject.com/wiki/OBS-Studio-Quickstart)
* the more complete [OBS Studio Overview](https://obsproject.com/wiki/OBS-Studio-Overview)
* [filters guide](https://obsproject.com/wiki/Filters-Guide)
* [sources guide](https://obsproject.com/wiki/Sources-Guide)
* [keyboard shortcuts guide](https://obsproject.com/wiki/Keyboard-Shortcuts)

## USING NDI VIRTUAL CAMERA ##

If you want to use OBS with Zoom, you will need to use a virtual camera app. The most complete solution (and the only one we've found so far that does a good job routing audio too) involves the suite of tools built by [NDI](https://ndi.tv/tools/).
* download the NDI tools [here](https://ndi.tv/tools/#download-tools). To get started you'll need the
	* NDI Virtual Input
	* NDI/HX Driver
	* NDI Video Monitor
* if you install these and try to open OBS you'll hit an error that asks you to head over to Github for a macOS-compatible NDI runtime, so do that in advance [here](https://github.com/Palakis/obs-ndi/releases).

## SCRIPTING AND DEVELOPING
links of interest related to scripting for OBS (and developing, since you actually need to use the developer references given the fact that there isn't really a great scripting guide):
- the basic [developer-facing docs for the OBS Project](https://obsproject.com/docs/) are dense, but unavoidable and essential
- tips on [getting started with OBS development](https://obsproject.com/wiki/Getting-Started-with-OBS-Studio-Development) for those interested
