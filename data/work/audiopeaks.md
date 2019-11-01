# Notes!

## AudioPeak Project Launch Doc

### ft. Jad & Sophie & more!

Here, we'll keep track of all of our **progress** and *notes*.

> Our plan is to find a way to scrub LL video files for audio peaks, and turn those moments into GIFs, through a command line function. Those GIFs could then automatically be uploaded to an Express App for everyone to enjoy!

Steps:
- [ ] Research relevant command line plug-ins.
- [ ] Create the function!
- [ ] Create an Express app to upload resulting GIFs on.
- [ ] And, take notes the whole time!

---

Helpful command line links:
- [stack overflow](https://stackoverflow.com/questions/4420208/finding-audio-peaks-in-video-files)
- [ffmpeg commands for converting btwn audio/video/images](https://www.tecmint.com/ffmpeg-commands-for-video-audio-and-image-conversion-in-linux/)
- [Sound eXchange features ](http://sox.sourceforge.net/Docs/Features)
- [creating custom command line functions](https://codeburst.io/learn-how-to-create-custom-bash-commands-in-less-than-4-minutes-6d4ceadd9590medium.com/devnetwork/how-to-create-your-own-custom-terminal-commands-c5008782a78e)

`print("great job researching!")`

Useful functions:
- `$ sox old.wav new.wav trim [SECOND TO START] [SECONDS DURATION]`
	- extract parts of an audio file
- `$ sox foo.wav -e stat`
	- get info for an audio file (including amplitude)
- `$ ffmpeg -i input-video.avi -vn -acodec copy output-audio.aac`
	- extract audio from a video file
- ` $ ffmpeg -i input.mp4 -ss 01:10:27 -to 02:18:51 -c:v copy -c:a copy output.mp4`
	- example of trimming a video file

Potential process:
1. extract the audio file from the video file
2. get the stats for the audio file (with timestamps)
	- [https://stackoverflow.com/questions/38056970/ffmpeg-txt-from-audio-levels](https://stackoverflow.com/questions/38056970/ffmpeg-txt-from-audio-levels)
	- ffprobe -f lavfi -i amovie=laugh.mp3,astats=metadata=1:reset=1 -show_entries frame=pkt_pts_time:frame_tags=lavfi.astats.Overall.RMS_level -of csv=p=0 1> log1.txt
3. isolate the moments with maximum amplitude (or close to it?)
	- we'll need to write a new command line program for this
4. store those seconds & trim the video file using those seconds
5. make that trimmed video file into a GIF
6. upload that GIF to the Express app

<img src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_yay_burst_mike_lowery_00_1024x1024@2x.png?v=1566225019"  alt="yay"  style="width:250px;height:200px;">

**Contributors**
1. Jad
2. Sophie
3. ~~jad's imaginary friend~~

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY2ODc2MDUzOCwtOTIwNjg5NDI2LC0xNz
c0NjA4MDQwLDIwMzA4MzI1NzEsMTE4MDM1MjQxOSwyOTMwNjM0
OTYsOTY1OTcwMDgxLC0xMTU4NDA5MTMxLDIwOTY4Njk4NDYsMz
Y3NjM3NjY4LDg4MzMzNTk5MiwxMTk2OTcyODY5LDY3MzkxMDIy
NCw5MTY4MjIxOSw0NzgwMTU5MjEsLTE5NTk2NTgzNTIsMjY0MD
E2ODI4LC0xNTg5ODQ4MTE3LDIyMDQ1NTE1MiwtMjY1MDE1Mjgw
XX0=
-->