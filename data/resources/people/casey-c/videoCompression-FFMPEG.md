# Video Compression: FFMPEG

[There are a number of ways you can compress a video file.](http://resources.learninglab.xyz/simple/people/casey-c/videoCompression-codecs) Adobe, Apple, Black Magic, and pretty much every other media development company out there has a tool that enables you to deal with your footage. In truth, many of them are interfaces wrapped around a core set of coding tools called FFmpeg. This is largely specific to Mac, although it would be very similar for Linux systems, but not really worth it for Windows.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01DLE633PH/ffmpeg_gif.gif?pub_secret=14cba0557c)

This is a very simple guide on how to install FFmpeg command line tools, and what commands might come in handy. If you're looking to do more complicated things like making custom gifs, processing audio from video, or programmatically processing data from video, [you can find the documentation on those moves here](https://ffmpeg.org/ffmpeg.html)

#### Installing FFmpeg

To start you off, you'll want to install these tools.

- First, you'll need [Homebrew](brew.sh). This is a set of assets that assist with coding. Open Terminal and paste this into the command line.

  - ` $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" `

  - This may prompt you for a password, it's good to note that will be your computer's login password, and when you type into the field, it will not show that you've typed anything.

- Once Homebrew has finished installing, paste this into your command line

  - `brew install ffmpeg`

  - This will install FFmpeg for you, it may prompt you for a password again.

At this point, you have a fully functioning compression program installed on your computer. Below, you'll find a number of commands that will assist in processing video files into smaller, more mobile codecs.

#### Transcoding Large Files

If you're new to command line tools, it is good to note that `path/to/input.ext` will always mean the directory path to the video file you're looking to process. You can manually type this, if you know it, or you can drag the file into your Terminal window and it'll autofill.

It is also important to note that with FFmpeg commands, the `path/to/input.ext` is the path to the existing file, but `path/to/output.ext` is a path to the file you'll be creating and doesn't yet exist.

`ffmpeg -i path/to/input.ext -crf 23 -pix_fmt yuv420p -c:v libx264 path/to/output.mov`

The command above should work right off the bat, all you need to do is replace your `path/to/in-and-outputs` and you should end up with a file that plays nicely with Quicktime and is small enough to send over Slack or Google Drive easily.

#### Turning this into a readily accessible tool

It's a little bit cumbersome to constantly be typing out the `path/to/your/file`. This is coding, after all, we should be able to make this quite a bit easier. Below, you'll find just a little bit more code that will make it so you can simply write `makeitsmall` and drag your file over, and it'll work for you!

Start off by opening Terminal and enter:

`cd ~/Development`

This will move you into your Development directory, if you don't have one, you can just write `cd ~`

Next enter:
`mkdir makeItSmall`

`cd makeItSmall`

`nano makeitsmall`
This is going to move you into your new *makeItSmall* directory and open a new shell script named *makeitsmall*
Next up, paste this:
```
#!/bin/bash

VIDEOFILE=$1
NEW_PATH="$(dirname $1)/$(basename $1 | cut -d. -f1)-proxy.mov"

ffmpeg -i $VIDEOFILE -crf 23 -pix_fmt yuv420p -c:v libx264 $NEW_PATH
```
Exit using Control + X and save your file. Next we need to make this file executable

`chmod 755 makeitsmall`

And finally, we need to add this to the $PATH, which is essentially the directory of files that the command line looks for when given a new command. Type:

`export PATH=$PATH:./makeitsmall`

Now, I know this was a lot of steps! But it's a small investment on a relatively powerful return!

Whenever you have a large video file now, all you need to do is type `makeitsmall ` and drag your video file into Terminal, what it will spit out is a light, moveable file!

#### Breaking down the options(100% optional, what you need is likely above)

If you're looking to understand the code, it breaks down pretty simply into a number of tags.

 - `ffmpeg -i`
    - This is just the call, it declares that `ffmpeg` is the set of tools you'll be using
 - `path/to/input.ext`
    - This is basically covered above.
 - `-crf 23`
    - This is declaring how much or little you'd like to compress your file. 0 is uncompressed and 51 is as compressed as you can get, so 23 is a good middle ground.
 - `pix_fmt yuv420p`
    - This handles the color spaces that play nicely with Quicktime and other players. Without it, your video would play fine in VLC, but just look like a green field in Quicktime.
 - `-c:v libx264`
    - This determines that you'll be encoding in H.264, which is simply a reliable, popular codec for hosting videos online.
 - `path/to/output.ext`
    - This you largely know, it's just also good to note that above we have our output set to `.mov`, but this can be just changed as well. `.mp4` and `.mkv` also work, although aren't as friendly with macOS as `.mov`.
