# theTools

This is just the basic documentation for the repository of workflow tools found on Marlon’s GitHub [here][1].


### Viewing the Repository

In order to view the repository, you need to log in to GitHub using either the code@learninglab.xyz account or the fellows@learninglab.xyz account (note: we may remove the fellows account soon, so it makes sense to get in the habit of using the code@learninglab.xyz account). Then go to the following url: [https://github.com/mkuzmick/the-tools][2]. If you would like your own GitHub account to be added, just ask Marlon.


### Cloning the Repository

To clone the repository and open it up in Atom, enter the following code:

	cd Development
	git clone https://github.com/mkuzmick/the-tools.git
	cd the-tools
	npm install
	npm link
	atom .

If you then type  `tools --config`  you should see that the scripts are up and running. If you get an error, ask Marlon for help.  Before anything interesting will run, you will need to create a `.env` file with all the necessary environment variables---these are keys and passwords to the services we use that cannot be shared in public documents like this, so look to 1Password for what you need. You will need to manually add a “tests” folder in the .env that’s on your computer (rather than Marlon’s computer, which is what’s in the current .env file). You will be adding a line that looks something like this:


	`TESTS_FOLDER="/Users/ll/Development/the-tools/_tests"`


### Setting the Config

In order to set config variables (which are important and even essential for some of the scripts), enter


	tools --config --var "value of my string variable" --intVar 5


This will add `{var: "value of my string variable", intVar: 5}` to your config.[^1] Right now the list of possible config variables is as follows:


	--outputFolder
	--gifFolder
	--randomStills


More to come.


### Updating theTools

From time to time we will be adding more functions (see the list at the end of this document). In order to add these to the machine you are working on, you will need to update the repository.  To do this, enter the following command:


	git pull


You won’t hurt anything by running this command even if there aren’t any changes to pull down from GitHub, so go ahead and run it anytime you want.


### Renaming video or still files

This year we will be importing each card, rather than each shoot, as the main “unit” we’ll log in the ingest database.  The steps are as follows:



1. as before, copy the media files into a folder (if you need to go to FCPX first because you want to rewrap AVCHD or MXF files as .mov files, do so, then copy to the folder from wherever you are storing the Final Cut Pro Original Media files).
2. the folder’s name should be structured as follows:

		`20190901_001_Example_Shoot_C300a`


	In other words, the naming convention is **exactly** as before with one exception: since this is a folder not for the entire shoot but for just one camera from that shoot, we are adding an underscore and the camera name.

3. Once all of the files are in that folder, enter the following code

		`tools --ingest /path/to/your/folder `

4. This should rename the files and send records for the `Card` and all of the `VideoFiles` or `AudioFiles` or `RawStills` to the appropriate Airtable table. But go to the table itself to confirm (you may as well have it open next to your terminal window as you are performing these operations).


### Generating stills on ingest

To generate stills on ingest, add the --threeStills or --randomStills flags.


	tools --ingest /path/to/your/folder --randomStills


This should get you a folder of stills right in the card folder, and in most cases will also slack them to the **\#ll-photos** slack channel.

You can permanently set --randomStills to true by adding it to your config:


	tool --config --randomStills


Note: we may at some point soon change the type of randomStills from boolean to integer.


### Logging a Timecode Slate

In order to perform all time-of-day based media activities (editing, image-analysis, reporting, timeline-generation, etc. etc.) we need to know how the timecode embedded in our video files relates to clocktime. So each time a system’s timecode resets or changes (or drifts unacceptably) we need to have a way of logging the relationship between the system’s timecode and clock-time. So we want to have a file that contains



1. a unix timestamp (for file creation, say, although you could also perform this manually by shooting a video of your iPhone’s clock and entering that data into our database)
2. embedded timecode
3. information in the filename itself about which camera or system this comes from[^2]
If we have these three things in the same file, we can figure out how they’re related and then log that to the database [here][3].

First we create a folder for EACH timecode slate, structuring the names like so:


	/20190902_000_Timecode_Slate_UltraEx
	/20190902_000_Timecode_Slate_C300a


Once you have these folders, the script is simple:


	tools --timecodeSlate /path/to/20190902_000_Timecode_Slate_UltraEx
	tools --timecodeSlate /path/to/20190902_000_Timecode_Slate_C300a
	etc.


Still needed are the tools that will enable us to link individual video files shot on a given system on a given day to the relevant `timecodeSlate`.  But as soon as this code is written, it should be able to retroactively handle all the files for all the days that have `timecodeSlates`. So it’s important to keep up on them.[^3]


### Running m2s

To run **m2s**, you can still use the m2s npm package as before, and this is really the recommended workflow:


	npm i -g m2s
	m2s --config --outputDir /path/to/my/m2s/folder
	m2s /path/to/me/fcpxml


But if you want to use `theTools` as a one-stop shop, or if you want to tinker with the script to see how it works or build off of it, you can use the version of the `m2s` code included in `theTools`.  Just use the `--m2s` option and pass in the path to your `.fcpxml` file.


	tools --m2s /path/to/your/fcpxml


In either case, just make sure that you have `ffmpeg` and `ffprobe` installed, and that they are in your `$PATH` environment variable.

Right now the script breaks if you have spaces in your paths, but if you want to contribute a feature, handling this error more elegantly (or fixing it entirely) would be a good challenge.


### Making an animated .gif

To make an animated .gif file, you first (one time) need to set an output folder for your gifs by entering


	tools --config --gifFolder /path/to/my/gifs


Then, all you need is a short (SHORT) snippet of video (less than 10 seconds is recommended).  If it’s 16x9 you can type something as simple as


	tools --gif /path/to/my/video.mov


If you want to choose specific dimensions, either because the source video is NOT 16x9 or because you want a gif smaller or larger than the default, enter


	tools --gif /path/to/my/video.mov --width 180 --height 180


In this instance it would produce a 180x180 square gif (which would be great if the source video is square, but would stretch footage that wasn’t 1x1 in its aspect ratio).

If you would like to see a little html page that embeds your exported gif and gives you some data on it, set the --html option to true:


	tools --gif /path/to/my/video.mov --html


You’ll also get to see the palette that was contructed as a step in the process (to optimize the 256 colors we choose rather than going with a simplistic crayola-box palette).

Note: it is easier to just use the npm package:


	npm i -g gif-machine
	gif --config --outputFolder /path/to/gifs --html
	gif /path/to/my/video.mov


But, as with m2s, using it in this toolbox will let you tweak things more.


### Live-Logging

While the version of the repository that runs on your local machine can’t “hear” messages coming in from Slack, the version that we have running on a server at tools.learninglab.xyz can. And this is what we use for our live-logging Slack slash command (if you are interested in seeing the code that “listens” to Slack, you’ll find it in the `/tools/slack` folder, for instance, the code that listens to--and does stuff with--all of the Slack events we subscribe to is in `/tools/slack/slack-event-handler.js`).

To launch the command in Slack, type `/log` followed by a series of space-separated terms.  For instance, to mark good and bad takes of a live performance, you might type


	/log newTake endTake good bad


or something like that.  After which you should see an interface that looks something like this:



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/xyz-documentation0.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt\_text][image-1]


Just go ahead and click those buttons as many times as you’d like, and we’ll suck up all that data into Airtable for you.[^4]






[^1]:
	 As of September 2, 2019, there are not many config variables you need to set, especially if you are running the m2s and gif packages you install from npm rather than the ones that come as part of theTools (in these cases you’ll set config there in the npm packages rather than here in theTools).

[^2]:

	 Right now we are mainly thinking about the C300 cluster and the Blackmagic system. It is more difficult to know what we’ll do with C100s and 5Ds.  More on this soon.

[^3]:
	 We do need to develop a strategy for automatically knowing which tc-system a given camera is connected to. It could be as simple as knowing that ALL Blackmagic gear is connected to the main hub and gets a slate from the Ultrastudio 4K Extreme and that all C300s are connected to each other, etc.  

[^4]:
	 we still need to DO more with this data, but that’s a later coding project . . .

[^5]:
	 You could call it anything at all, but you can’t include spaces, so a convention in javascript--and some other languages--involves shoving all the words together and capitalizing each new word (camelcase).

[^6]:
	 There are many many [built-in node modules](https://www.w3schools.com/nodejs/ref_modules.asp). You do NOT need to learn them all to get started. Ultimately you’ll find yourself using a bunch of them, but it usually makes more sense to learn them as they become necessary for some code you are writing rather than to systematically make your way down the list (especially because there are many that you will NOT use yourself, but, rather, mainly work “under the hood” of frameworks you might be using like [Express](https://expressjs.com)).

[^7]:
	 don’t worry: NO ONE has memorized all of these methods. To find them look at the documentation on the module [here](https://nodejs.org/api/path.html).


<!-- Docs to Markdown version 1.0β17 -->

[1]:	https://github.com/mkuzmick/the-tools
[2]:	https://github.com/mkuzmick/the-tools
[3]:	https://airtable.com/tblWp1KaH9Hbm0WrQ/viwtg2SKgJlYEJYJE?blocks=hide
[4]:	https://nodejs.org/docs/latest/api/process.html#process_process_argv
[5]:	https://nodejs.org/api/path.html
[6]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
[7]:	https://nodejs.org/api/fs.html
[8]:	https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
[9]:	https://en.wikipedia.org/wiki/.DS_Store
[10]:	https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath

[image-1]:	images/xyz-documentation0.png "image_tooltip"
