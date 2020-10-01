## CREATING THE ROCK-THE-PARTY TOOL

In this tutorial we're going to learn how to write a simple **"shell script"** that downloads YouTube clips so that you can **Rock The Party** a little bit more quickly than you might otherwise. You can really think of this "script" just as you would the script of a play--it's a series of lines that will get committed to memory, and that will get recalled/enacted in a very specific order.
Here are the steps:

1. Create a folder for your scripts and open it up in Atom. We'll want to take this seriously because we are actually going to change our shell's default behavior so that it looks for this folder each time you enter a command. So do something at least as sensible as this:
    ```
    cd ~/Development
    mkdir _scripts
    cd _scripts
    atom .
    ```
2. Once you're in Atom, create a new file and save it as `rocktheparty.sh`.
3. We need to start off all the scripts we write with a line that tells the computer which "interpreter" to use as it parses our code.  For shell scripts, we are going to add `#!/bin/bash` as the first line (for a node.js script we'd add `#!/usr/bin/env node`).
4. Next, let's just add a quick echo command to get started--you can do whatever you'd like, but end up with something like
    ```
    #!/bin/bash

    echo "we are about to rock the party"
    ```
5. To actually **run** the script we'll need to make it "executable", and we do this by entering the following **IN TERMINAL**.
    ```
    chmod 755  ~/Development/_scripts/rocktheparty.sh
    ```
    (obviously subsituting the path to your script in if it's different from `~/Development/_scripts/rocktheparty.sh`)
6. Now let's run it!  Go ahead and simply enter the FULL path to your script in and hit enter (i.e. `~/Development/_scripts/rocktheparty.sh`). Make sure you can see the output before moving on.
7. (OPTIONAL) If you are IN the folder that contains `rocktheparty.sh` you might think that you can rock the party by just typing `rocktheparty.sh`, but for reasons that go beyond the scope of this tutorial you'd actually need to type `./rocktheparty.sh`.  Go ahead and try this if you'd like to.
8. All the usual commands you type into the Terminal can be added. Go ahead and play around a bit.
    ```
    #!/bin/bash

    echo "we are about to rock the party"
    say "let's get this party started at $(date)."
    say "party party party."
    say "we just rocked the party."
    ```
9. To get data INTO the script we can do a couple of different things, but we're going to focus on just one for now.  Try changing your script to
    ```
    #!/bin/bash

    echo "$1, we are about to rock the party"
    ```
    And then when you run the script, add your name at the end (after a space), for me, this would be `~/Development/_scripts/rocktheparty.sh Marlon`. Hopefully you get something like `Marlon, we are about to rock the party` back.
10. To truly rock the party you don't want to have to actually type in `~/Development/_scripts/rocktheparty.sh`. What we want to do is **add ~/Development/_scripts to our $PATH** so that our computer can just find the command there (just like it can find `ls` and `date` and the other commands we use). So we need to go back to Terminal to add something to a file called `~./bash_profile`--a file that may or may not yet exist on your machine. Open it up by entering `nano ~/.bash_profile` in Terminal (be really careful to enter the right code here). Then add the following line at the end of that file in nano.
    ```
    export PATH="/Users/mk/Development/_scripts:"$PATH
    ```
    obviously changing my `mk` to whatever your User name is. To save the file,
    - hit control-x to exit
    - when it then asks if you want to save, hit "Y"
    - then it will ask you to confirm the name of the file--just hit enter.

    Once you do all this you need to open a new Terminal window for it to take effect, but in this new Terminal window you *should* be able to simply type `rocktheparty.sh` to run the script. In fact, why don't we just change its name to `rocktheparty` or even `rock` or `rpt` (with no extension). Now, just like `ls` and `cd` and all of your other favorites, `rocktheparty` will be launchable from "anywhere" you are in the Terminal.
    
11. So now let's add our `youtube-dl` code. We know that we can type `youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best'` to get the right format, and other options for filename etc.--but these are very difficult, if not impossible to remember. So the script will really help us out by remembering the code for us and making it easily accessible. In your script, use the following code:
    ```
    #!/bin/bash

    VIDEO_TITLE=$(youtube-dl -e --get-title  $1)
    say "we are about to rock the party by downloading $VIDEO_TITLE"
    youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' -o "~/Desktop/%(title)s-%(id)s.%(ext)s" $1
    say "all done downloading. we are now ready to rock the party"
    ```
    Now it's all ready to run--go ahead and type `rocktheparty miPMQ544vM0`
