# Video Compression: Shrinking File Sizes

Codecs can be a huge black box when you're starting out with video, but ultimately they boil down fairly simply into a few somewhat interchangeable parts.

The main balance you're looking to strike is **Quality** vs **Size**. Often times higher quality means bigger size and vice versa, but with the right selection, there are some tools with which you can balance high quality with small file size.

Some programs like FCPX will just give you set of options: "Master File" or "Apple 1080p" and these are perfectly fine, they tend to be just simplified terms for what's actually happening. The flip side of this is that there is a dizzying list of different file types, codecs, audio types, and it seems to be that each one of them has multiple different names. For example: *H.264* is the current popular choice for codec, it's also known as "AVC", "AV1", "VC-1", "MPEG-4", "MPEG4 Part 10", and "MPEG4 AVC".

This isn't meant to complicate things, but rather as a way to explain why exporting a file type and codec out of Final Cut Pro X is going to look so drastically different than exporting one out of Adobe Premiere.

Here are some of the tools you might use to transcode footage:
- [FFmpeg](http://resources.learninglab.xyz/simple/people/casey-c/videoCompression-FFMPEG)
    - A command line tool that requires very little coding experience
- Final Cut Pro X / Compressor
    - Apple's editing and media management programs
- Adobe Premiere / Media Encoder / After Effects
    - Adobe's video editing, media management and motion graphics programs
- Davinci Resolve
    - Blackmagic's video and motion graphics program
- There are quite a few others that I won't list here, but if you'd like to try one, reach out and we'd be happy to help!

#### What to pay attention to

The root of a video codec comes down to 3 main choices: **File Type**, **Codec**, and **Audio Format**. This is made even more simple because 95% of the time you can ignore what the Audio format is because it has relatively small impact on your file size.

**Codecs** tend to come in a series of variations, a few of these will be listed below, but the most popular version will be what I refer to them as.

Here's a quick guide to a few of the more popular file types and codecs:

#### File Type
  - `.mov`
      - Native to macOS, requires 3rd party player in Windows
      - Will work flawlessly with most editing programs.
  - `.mp4`
      - Works natively in Windows, has little problem with Macs
      - Will work with most editing programs, although possibly in jumps and starts.

#### Codecs
  - `Apple Prores 422`
      - Native to macOS, high quality, large size
      - Variations:
        - `Proxy`
          - Small, highly compressed
        - `LT`
          - Moderate, moderately compressed
        - `4444`
          - Huge, mostly uncompressed. *Carries alpha channel*
  - `H.264`
      - Native transcode for Vimeo and Youtube, moderately high quality for a small Compression
      - Variations:
        - `MPEG2`
          - Mediocre quality, moderate compression. For older operating systems
        - `MPEG3`
          - Moderate quality, heavy compression.
        - `H.265`
          - High quality, heavily compressed. Only available on new operating systems.

This list is **massively** simplified list. If you're using an Adobe or Black Magic program, you'll be faced with a dizzying array of options. Just keep in mind the few above and you should be in good shape.
