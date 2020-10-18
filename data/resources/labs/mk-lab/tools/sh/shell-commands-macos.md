# CREATING SHELL COMMANDS FOR YOUR DOCK

We've already made a few tutorials on creating custom shell commands (like a `start` command that opens all your favorite apps, grabs your tasks from Airtable, then uses that data to create a markdown notebook for the day). To make these scripts even easier to launch, you might want to be able to run them directly from your Dock or using Spotlight. If this sounds interesting to you, check out the following steps, which will help you create a little cammand that gets you ready to perform your daily work in Blender:

1. create a file with a `.command` extension, like `open-custom-workspace.command` (it might make sense to do this in a new custom utilities folder in your Applications folder, but it could go anywhere on your system that Spotlight indexes)
2. modify the permissions of this file in Terminal with `chmod 744 /full/path/to/open-custom-workspace.command` (i.e. `chmod 744 /Applications/my-custom-utilities/open-custom-workspace.command`)
3. write a little shell script (remembering to add the shell shebang of your choice), for instance:

   ```bash
   #!/bin/bash

   THE_DATE=$(date '+%Y%m%d')
   THE_TIME=$(date '+%H%M%S')
   BLENDER_NOTES_FOLDER="/Users/me/Development/the-resources/data/resources/labs/blender-lab"
   NOTES_FOR_TODAY="$BLENDER_NOTES_FOLDER/notes-for-$THE_DATE.md"
   BLENDER_ORBITING_CAMERA_TEMPLATE="/Users/me/Documents/_blender/templates/orbiting-cam-helical-360.blend"
   BLENDER_TESTS_FOLDER="/Users/me/Documents/_blender/tests"

   # check if the notes file already exists
   if [[ -f $NOTES_FOR_TODAY ]]
       then
           # if it exists, open it in your favorite Markdown editor and previewer
           open -a "Marked 2" $NOTES_FOR_TODAY
       else
           # if not, create and then open it in your editor and previewer
           touch $NOTES_FOR_TODAY
           echo -e "# BLENDER NOTES FOR $THE_DATE \nstarted at\n $THE_TIME\n\n##GOALS FOR THE DAY" >> $NOTES_FOR_TODAY
           open -a "FoldingText" $NOTES_FOR_TODAY
           open -a "Marked 2" $NOTES_FOR_TODAY
   fi

   # open up the whole blender notes folder in Atom
   atom $BLENDER_NOTES_FOLDER

   # create a copy of your favorite template scene for the day's work and open it up
   cp $BLENDER_ORBITING_CAMERA_TEMPLATE "$BLENDER_TESTS_FOLDER/$THE_DATE-$THE_TIME.blend"
   blender "$BLENDER_TESTS_FOLDER/$THE_DATE-$THE_TIME.blend"

   # open the Blender documentation for reference while you work
   open -a "Google Chrome" https://docs.blender.org/manual/en/latest/

   # Slack everyone in the ll-reality-lab channel to let them know you're working on stuff
   curl -X POST -H 'Content-type: application/json' --data '{"text":"starting my daily work in Blender if anyone wants to work together!"}' https://hooks.slack.com/services/XXXXXSECRETSTUFFXXXXXXX
   ```

4. Once you've done that, test it out in Terminal to make sure it works, then you can go ahead and drag its icon into the Dock like you would with any other app.
5. For extra aesthetic points, you can change its icon by
   a. selecting the command in finder
   b. typing `command + I` to get info
   c. opening your desired `.png` in Preview, selecting all and hitting `command + C` to copy
   d. selecting the current icon of your command in the info pane and then typing `command + V` to paste
