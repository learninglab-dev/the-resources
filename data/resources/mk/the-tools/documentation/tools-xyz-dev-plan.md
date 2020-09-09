# DEVELOPMENT PLAN


## Features

All the things we might want this suite of tools to do.  These can be pretty low-level and granular . . . like anything that would involve a single function even.  We’ll keep everything modular and maybe we can even send code projects out to **codeLab** members if we do.


### done

*   rename card folder
*   send `Card` to Airtable
*   send `Stills` to Airtable
*   send `RawStills` to Airtable
*   grab 10-20 stills from card, not set number per clip
*   send `SlackTs` to Airtable record for still
*   make a `gif` from a video file
*   run the `m2s` script from within theTools
*   handle Slack events
*   handle Slack reactions and send to Airtable
*   handle Slack `/log` slash command
*   grab beginning, middle, and end still from a clip
*   process `timecodeSlate`
*   send `timecodeSlate` to Airtable
*   listening for `StillReactions` in ll-photos
    *   query for `still` with relevant ts
    *   then update that still with emoji
*   documentation
    *   how to install
    *   how to set up env variables
    *   how to update
    *   basic js tutorial
*   make sure that `config` is getting added to yargs on the way to `--ingest`
*


### next



*   Timecode
    *   Can C300 receive TC from anything that’s a child of the ATEM system
    *   Otherwise try to keep one C300 clock good . . . or develop protocol for tracking drift
*   update indexMessage with stillsRank
*   find 1 and 5 stills with most votes and add to shoot?


### by 20190902



*   rename card folders
*
*   send Card records to Airtable
*   send VideoFile records to Airtable
*   send RawStill records to Airtable
*   (option) generate three stills (beginning, middle, and end) from each VideoFile and slack to #ll-photos with starter emoji
*   (option) generate a user-specified number of random stills from the Card and slack to #ll-photos with starter emoji
*   log timecode slate
*   log moments from slack
*   if extra stills requested, do so according to a value that's entered
*   models locked down
    *   Cards
    *   VideoFiles
    *   RawStills
    *   Stills
    *   AudioFiles
*   emoji log for stillsRank
*


### by 20190930



*   documentation
    *   recipe
*   if still’s average rating is greater than X, update shoot record to add that as a usable shot
*   reference autoStills from Cards?
*   For a given file, find tcSlate and compute clocktime
*   Get cardId from script or human?
*   Camera operator---where do we add this?
*   update Slack photo-vote index message as reactions get added
*   sync from timecode and prep MC
*   get still from arbitrary timestamp
*   log card renames to Slack
*   guide to creating m2s stills
*   update indexMessage with stillsRank
*   proxy
*   check extensions on import and throw error if not consistent
*   check extensions and determine records to create (and ingest/rename workflow) depending on file type
*   google drive then blocks
*   s3 then blocks
    *   remove file once slacked?
*   confirm that folder name is properly structured
    *   no spaces
    *   right number of underscore-separated items
    *   elements follow templates
        *   ID capitalized
        *   date properly structured
        *   counter right and not taken
        *   SubId capitalized
*   make Airtable visible
    *   print tasks
    *   print calendars
    *   calendar on screen in ll
    *   print people
*   initial mc sync
*   handle photos of cards and 11x17
    *   sort, tag, log
    *   push to s3
    *   image processing?
*   ffmpeg grab segment from in and out
*   cli for google upload
*   slackinvideo
*   `m2s` from selects rather than from full length clips
*


### by 20200106



*   flickr then blocks
*   google photos then blocks
*   get “my” results for stillsRank as shooter/editor with slash command
*   
*   m2s
    *   make sure it’s not referencing anything with spaces
    *   handle spaces?
    *   slack to ll-photos on creation
*   generate length of project from length of clips for fcpxmlGen
*   handlers for different data formats for fcpxml generation
*   collection of standard formats for each camera (use either camera name or ffprobeData to determine) for fcpxml generation
*   draw text with ffmpeg on still production
    *   or imagemagick if better?
*   get zerotime
*   from relevant slate, compute TC for arbitrary clocktime
    *   but how do we figure out relevant slate? do we just count on doing it everyday (once) and choose that day’s slate?
    *   on card import do we tag the right slate?
    *   manually in AT?
*
*   ffmpeg grab segment from unix time
*   audio peaks to segments
*   query AT for tc slate
*   track which cameras are pointed at which rooms (so that time of day plus room gets you to camera)
*   pull stills at set increments
    *   then assemble into elegant contact sheet with faux filmstrip that contains real information . . . maybe design echoes filmstrip but isn’t really filmstrip
    *   pull actual data to add decorative fine print . . . like slack stream? video data? waveforms?
*   get a snapshot of bok or the ll for a given
    *   one minute (60)
    *   Welcome To New York Period (240)
    *   1 hour period (3 600)
    *   1 day period (86 400)
    *   1 week period (604 800)
    *   1 month period (2 592 000)
    *   1 year period (31 536 000)
*   deliverables AT automation
*   generate fcpxml
    *   number of projects
    *   names of students
    *   title
    *   date
    *   brand
    *   tc and time of day
    *   ll branding
    *   w resources
    *   plus AT deliverable records
*   field guide to the LL
    *   in AT
    *   script inDesign
    *   pull to web view
    *   print
*   store fcpxml data in AT/S3
*   fcpxml data from selects to AT
*   dropbox to g drive
*   stills from audio peaks
*   synology to AT?
*   flickr URL to real URL for all sizes
*   on ingest query shoot each time to determine first and last frames (Unix timestamps for in and out points for shoot as a whole)
*   YT markup to AT
*   d3 vis of events, shots, edits, stills
*   react dashboard
*   find video by ts
*   ts to AT, find clips that overlap it
*   /slash what happened in the LL
    *   YYYYMMDD.hh.mm.ss
    *   send back gif?
*   spotify API
*   natural language proof of C
*   google auth proof of C
*   lyrics from ….
*   genius API
*   audio analysis
*   run ffmpeg on s3
*   m2s on server
*   moment log
    *   from alexa
    *   from slack
    *   from m2s
    *   from audio peak
*   still2task
*   get gif
*   get sequence
*   slack reaction timelines and vis
*   hourly: sync airtable to X
*   resource dropdown slack action
*   generated music slack shapes
*   when someone RTPs
    *   id shape and improvise
    *   remix song
*   [workflow.learninglab.xyz](http://workflow.learninglab.xyz) or[ tools.learninglab.xyz](http://tools.learninglab.xyz)
    *   handle stuff coming back from slack
    *   most summer2019 routes, actually
