# WRITING A SHELL SCRIPT TO CREATE MD TEMPLATES

If you are contributing regularly to this repository of resources, you might find yourself wanting to speed of the process. There are many many repetitive tasks that can be simplified with a simple shell script (and maybe even MORE you can do with a not-so-simple script). Here are some things we might want to tackle as this tutorial develops.

* creating a file in specific folder (in your copy of the resources repo)
* naming that file using either the command line input or other text that we can programmatically generate
* inserting the date
* inserting the title as an `h1`
* inserting placeholder `h2`-level elements that give the document some specific templated structure
* receiving a url passed in with the command and scraping it for
	* a title
	* a description
	* a hero image
	* if it's a youtube link, inserting the embed code and grabbing the thumbnail image
* adding the script as an Automator "Quick Action"
* launching this quick action with shortcut keys or the touchbar
* launching this quick action with selections (URLs, files, etc.)
* if the action is launched with image files selected, compressing them for the web, uploading them all to s3, and adding all the markdown required to embed these images to `.md` doc we create


 shell-markdown-template 

```
  <meta property="og:title" content="Blender Beginner Tutorial - Part 1">
    <meta property="og:image" content="https://i.ytimg.com/vi/TPrnSACiTJ4/maxresdefault.jpg">

```

1. look for title and image
2. add image and title both 
3. if youtube, add embed code
4. 