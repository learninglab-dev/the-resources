# Using Camtwist with Zoom

CamTwist is a very straightforward virtual camera program that acts as an input in programs like Zoom, that you can customize. With this, you can do things like Picture in Picture, side by side applications, green screening, and loads of different live-streaming uses.

### To start off, you'll want to [download CamTwist here](http://camtwiststudio.com/download/).

Once you have it downloaded and installed, it should show up as a webcam option in Zoom. You can access this by selecting the arrow next to the Stop Video button in Zoom.

![](https://files.slack.com/files-pri/T0HTW3H0V-F018WQHL39S/screen_shot_2020-08-12_at_9.48.23_am.png?pub_secret=2b88c050a1)

From here, there is one final process to get it ready to work for you: configuring the stream settings. CamTwist comes installed with settings automatically configured to a very small, low frame rate option.

Navigate to the `CamTwist` Dropdown menu in the top left corner, and select `Preferences`.

![](https://files.slack.com/files-pri/T0HTW3H0V-F018QR3JNJF/screen_shot_2020-08-12_at_9.53.45_am.png?pub_secret=62bfaff264)

In the Preferences window, you'll want to change the `Frame rate` to `30`, and the the `Video Size` to `1920`x`1080`. This will likely be a clear, visible stream size. *If your video starts to stutter or slow down*, you might want to adjust the size to `1280`x`720`

### From this point, you're ready to start building your stream.

The menu system in CamTwist is long, but fairly basic. The goal is to
- Select a video source
- Select an effect(optional)
- Implement the stream
- From here you go live or repeat to add more.

At this point, you should either `Select` or `PiP`. Select will just send the feed through in full screen, and Picture in Picture will give you size and position options to customize.

The three that are seemingly most useful are `Webcam`, `Desktop`, and `Desktop+`, but here is a quick rundown of what each option does.

![](https://files.slack.com/files-pri/T0HTW3H0V-F0193818CGZ/screen_shot_2020-08-12_at_9.58.14_am.png?pub_secret=e9a6126489)

- Webcam - Simply pipes whatever webcam you choose into the stream.
- Desktop - Inputs a feed of your desktop, with the option to select only an area of your desktop.
- Desktop+ - Does most of what Desktop does, but allows you to select only a single Application, and additionally allows you to isolate how much of that app you can see.
- Slide Show - Allows you to drop image files into CamTwist and play them back on a loop.
- Movie - Allows you to drop video files in, with customized playback options.
- Syphon - Allows you to input the media sharing app, Syphon.
- VNC - Allows you to share computing processes across networks.

### As an example, here's how you might build a PiP stream of you, along with a series of PowerPoint slides

First, I'd want to add inputs for `Webcam` and `Desktop+` as `PiP` elements. They'll end up on top of one another, so you may only see one to start off with.

![](https://files.slack.com/files-pri/T0HTW3H0V-F018QK1HWGJ/screen_shot_2020-08-12_at_10.19.44_am.png?pub_secret=b00254c532)

Next, you'll want to adjust `Position` and `Scale` options for each stream. At this point, you can also play around with `Crop`, `Chroma Keying`, and any graphical elements you might want to include!

![](https://files.slack.com/files-pri/T0HTW3H0V-F018QK1JS8J/screen_shot_2020-08-12_at_10.23.18_am.png?pub_secret=7c482be18c)

Finally, to confine my screen to be only Powerpoint, I'll check off `Confine to Application Window` and select my Google Slides option. And in this case, I can still see my top URL bar in my browser window, so I'll use the `Select Capture Area` to remove it.

![](https://files.slack.com/files-pri/T0HTW3H0V-F018HT3B6Q6/screen_shot_2020-08-12_at_10.27.50_am.png?pub_secret=656243dc5b)

At this point, I can present as I normally would!
