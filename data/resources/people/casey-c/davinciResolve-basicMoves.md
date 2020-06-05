# A Brief Intro to Resolve

The majority of editing can be broken down into just a few moves that are repeated over and over. These few moves break down to choosing your clip and placing your clip. Almost everything else from there is a variation on those two things.

![](https://www.nicepng.com/png/full/234-2341148_09-023-da-vinci-resolve-logo.png)

Like most editing programs, Resolve is directed at professional editors and has designed it's workspace to reflect that. At the bottom of the screen, you'll see that it has been broken out to the 7 general stages of post-production workflow:

- Media Management(Media)
- Assembly(Cut)
- Editing(Edit)
- Motion Graphics(Fusion)
- Color Correction(Color)
- Audio(Fairlight)
- Delivery

The reality for someone just jumping into DaVinci is that you may not have a strong need for Assembly, Motion Graphics and Color Correction. So for the purpose of this walkthrough, I'd recommend bypassing them entirely. At the bottom of this page, I'll address what each tab is used for in greater depth.

## The Basic Editing Moves

With all of that out of the way, I'd recommend doing all your editing in the Edit tab and largely not paying attention to the Cut tab until you have a specific use for it.

In the Edit tab, you'll find yourself in a bit of a dance. You simply need to follow three basic steps:

- Find the clip you want
  - Select your footage and drag the playhead with your mouse.

![](https://files.slack.com/files-pri/T0HTW3H0V-F015JKPTMU0/mousescrubbingmp4.gif?pub_secret=e1b67ae649)

- Define the clip you want
  - 'I' for In Point and 'O' for Out Point

![](https://files.slack.com/files-pri/T0HTW3H0V-F014V17JW75/in_outpoints.gif?pub_secret=0967f7621c)

- Place the clip you want
  - Shift + F12, [although I highly recommend changing this to your own preference](http://resources.learninglab.xyz/simple/people/casey-c/davinciResolve-configureKeystrokes)


  ![](https://files.slack.com/files-pri/T0HTW3H0V-F014E2NEE23/appendtotimeline.gif?pub_secret=721dd381e8)

At this point, you're just going to have to watch through all of your footage and identify the best moments and placing them in the timeline!

Once you've gone through all your footage with a fine toothed comb, your next step will be to drag your clips around, placing them in the timeline and use the trim function to adjust their lengths to your liking.

![](https://files.slack.com/files-pri/T0HTW3H0V-F0157DETS5P/trimandmove.gif?pub_secret=b62f7aa666)

## Exporting and Final Steps

Once you've gone through all your footage, selected, placed and trimmed it, you're pretty much at the end. If you need to do any more advanced actions, you can find all kinds of guides below But assuming all you needed was a series of shots artfully arranged next to one another, which tends to be what editing is, then you're likely ready to export!

This is where it becomes easy to get lost in the complicated jargon of it all. But most people will really only need a single method in order to upload it to Vimeo or Youtube, in these cases, selecting the "Vimeo" or "Youtube" settings in the top left will automatically fill all your needed values. These are perfectly fine choices.

![](https://files.slack.com/files-pri/T0HTW3H0V-F014N2YAL1L/deliverysettings.png?pub_secret=09b742d4fe)

If you'd simply like to be the master of your own fate, feel free to use these settings as they will yield good results.

Custom:
- Format: Quicktime
- Codec: H.264
- Resolution: This will be automatically updated based on the footage you imported
- Frame rate: Also automatically generated
- Quality: Automatic
- Key Frames: Automatic

![](https://files.slack.com/files-pri/T0HTW3H0V-F014UQGUZM0/deliverycustom.png?pub_secret=a398eb2882)

These are the settings that will make the most impact on your end export, everything else are just fine-tuning options, feel free to leave them or change them as you see fit!

### Tabs and what they're used for


- [Media](https://www.premiumbeat.com/blog/davinci-resolve-15-media-page/)
  - This tab is entirely used for managing your media, checking it for any glaring mistakes in recording, and for configuring timelines and multiclips.
- Cut
  - This is designed for small screen users, specifically for when a user is on set and they're looking to put together an assembly of everything that is relevant for the crew to review in that moment.
  - It's fast and light with a minimalistic interface, but many of the more specific functions have been stripped out of it, [but with some interesting niche functions added to it.](https://www.redsharknews.com/tutorials/item/6840-how-to-use-resolve-s-cut-page-for-multi-angle-editing)
- [Edit](http://resources.learninglab.xyz/simple/people/casey-c/davinciResolve-Edit)
  - This is where the majority of the actual editing will take place. It houses all the tools you'd need for cutting your video and matching up audio.
- Fusion
  - Fusion was once an independent motion graphics/animation program, similar to Motion or After Effects. Eventually, they added a slightly truncated version to Resolve itself so you don't need to round trip footage between programs.
- [Color](http://resources.learninglab.xyz/simple/people/casey-c/davinciResolve-Color)
  - Resolve started off as a color and post-processing program, their color correction engine is one of its most powerful tools. If you're looking to recolor, correct, apply LUTs, or clean up your footage. This is where those tools will reside.
- [Fairlight](http://resources.learninglab.xyz/simple/people/casey-c/davinciResolve-Fairlight)
  - Fairlight is Resolve's audio driver, it has a fairly simple interface. If you're going to be doing any post-processing or mixing on your video, this is where it would happen. It can also happen, with slightly limited function, in the Edit tab.
- [Delivery](https://www.youtube.com/watch?v=aUiI4gIki-Q)
  - This is exactly what you probably suspect it is, exporting and encoding functions happen here.
