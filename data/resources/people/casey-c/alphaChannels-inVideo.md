# Alpha Channels in Videos
#### or more specifically, how to get a video with a transparent background

It's pretty simple to get an image with a transparent background, anything from Google Slides to Photoshop, to Powerpoint can process and export a .png file with a transparent background -- or a background set to the alpha channel.

![RGB vs Alpha side by side](https://pbblogassets.s3.amazonaws.com/uploads/2020/08/05105206/RGBvsALpha-1.jpg)

Getting this to happen in video is a slightly more difficult process. You'll need either a video editing program(Final Cut X, Premiere, After Effects, or Davinci Resolve), or Keynote. Unfortunately, this makes it slightly less accessible to those working in Windows.

#### The What

In video, there are only a few codecs that carry an alpha channel -- these are mostly used for relatively high end processes, so they tend to yield pretty large files. There are roughly 11 options, but the most accessible one is called **Apple ProRes 4444**.

This is part of a larger Apple ProRes family, the most popular is called Apple ProRes 422. Other export options are "Apple Animation," "Cineon," "Avid Meridien" and a number of options for image sequences(but these don't ship in a single file, nor with audio attached)

#### The How

Now that we know the what, the How should be relatively simple. If you're exporting in:

- [Final Cut X](https://larryjordan.com/articles/how-to-get-the-best-image-quality-exporting-prores-master-files/), you can select Master File and choose ProRes 4444 in the dropdown
- [Premiere Pro](https://www.youtube.com/watch?v=ePjVb2d2HY4) will offer it as an option in your export settings.
- [After Effects](https://postproduction.emerson.edu/hc/en-us/articles/360002749754-Exporting-from-After-Effects) will behave very similarly to Premiere, with an identical export menu
- [Davinci Resolve](https://motionarray.com/learn/davinci-resolve/export-alpha-channel-davinci-resolve/) gives you the option in their Export tab as well.

If you're not actively editing in a professional video editing software, however, Keynote(Apple's response to PowerPoint), [surprisingly has an option to export ProRes 4444 hidden down in it's export menu as well!](https://support.ecamm.com/en/articles/3972849-exporting-a-movie-with-transparency-in-apple-keynote)

This makes it easily the most simple and accessible option to anyone using a Mac computer. Just drop your images into a slide show and export from there!
