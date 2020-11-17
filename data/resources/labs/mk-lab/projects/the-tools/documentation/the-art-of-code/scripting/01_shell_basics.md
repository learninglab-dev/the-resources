## COMMAND-LINE BASICS

(like **REAL** basics)

### GETTING STARTED WITH THE BASH SHELL

Ok--so here we're going to learn to talk to the computer so that we can get it to do stuff for us.  

We do this by typing commands into the "[Shell](https://en.wikipedia.org/wiki/Unix_shell)", which will interpret these commands (it's a [command-line interpreter](https://en.wikipedia.org/wiki/Command-line_interface)) and then send appropriate instructions to the "[Kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system))" (which you can think of as the very core of the computer--where all the stuff happens). [DON'T follow all of these links--they're just there in case you are desperately curious--try to blitz through this module in 15-20 minutes, DOing everything, but not trying to gain full knowledge about every single word you encounter here!]

There are actually a bunch of shells used by different versions of the [Unix](https://opengroupblog.files.wordpress.com/2016/03/short-version-unix-web.pdf) operating system, the [Thompson Shell](https://en.wikipedia.org/wiki/Thompson_shell), the [Bourne Shell](https://en.wikipedia.org/wiki/Bourne_shell), the [Z shell](https://en.wikipedia.org/wiki/Z_shell) . . . there's no real reason to learn too much about all of them at this stage, other than to know that the shell your Mac uses is [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), which stands for "Bourne-Again Shell" (developer humor). So if you find yourself Googling for how to get the current date, try entering "bash current date command" (but don't worry about this now, we'll teach you how to get the date in a sec).

To access the shell on your Mac, you open up the Terminal app, which you can find in your `~/Applications/Utilities` folder. You can also hit `command + space` to open up the spotlight search window and start typing in "Terminal" until you see it appear for you to click.

If you like the way your terminal looks (fonts, colors, etc)--cool. If not, hit `command + ,` and you will be able to change anything you like. On our machines, we usually go for dark backgrounds at 80% opacity, for instance. If it will make you happy to do something crazier, then do it.

You should see a prompt, in the form of a line or box that may be flashing (depending on your preferences). This is where you type commands. Go ahead an type in the command `date` and hit return. You should see the date and time. Then try the following series of commands out to get a sense of some of the basic commands you'll find yourself using:
- type `uptime` and hit enter to find out how long your machine has been running since you last powered down or restarted
- enter `echo something` and the terminal should say `something` back to you (in text)
- try `say "I am glad you are learning to code"` and your computer should say something kind to you (turn your volume up to hear it)
- try `open -a Spotify` and you should be able to get Spotify to open if it's installed on your machine (or some other single-world application name--more on this in a sec). This may not seem much faster than clicking the Spotify icon with your mouse, but just wait--it will soon become clear (and maybe is already) just how cool it is to be able to make stuff like this without needing to involve a mouse (and a human hand)
- enter `history` to get a complete list of all the commands you've typed so far
- If you make a mistake while typing, you may find yourself trying to use the mouse to click to an earlier point in a line to insert a correction as you would in Microsoft Word.  And you'll find that this doesn't work. You need to either use the forward and back arrow keys, or to hold doing **option** while clicking the mouse to get to where you want to go.
- One very valuable thing to know is that the up-arrow key will go backwards in you command history. Hitting it once will reload the previous command, twice will reload the one before that, and so on. This makes re-entering or slightly tweaking a mis-typed command **much** easier than retyping.

### VISUAL CHALLENGE

 Take a moment to read a couple of the links about the Unix shell and kernel at the top of this section, or [any](http://www.ee.surrey.ac.uk/Teaching/Unix/unixintro.html) of [these](http://www.unix.org/what_is_unix.html) other [links](https://en.wikipedia.org/wiki/Unix) to see if what they say about the shell and kernel makes sense to you. And you may as well take a look at some images of [actual shells and kernels](https://www.shellingmachine.com/application/peanut-shelling.html) too! Once you've done this, reflect a bit on your current understanding (or "schema" or "mental model") of the shell/kernel relationship in the Unix-based operating system and draw your own visualization of this relationship. Don't spend forever on it, but do something you're happy sharing, then Slack it out to #medium-code!

![Peanut Shells and kernels](https://www.seriouseats.com/images/2011/10/20111011-peanut-shell.jpg)

### TAKEAWAYS

Hopefully, you can now
- explain to someone else the relationship between the "shell" and "kernel" (or at least not seem surprised or confused when you hear these words)
- open up the Terminal on your Mac
- type simple commands, including
  - `date`
  - `uptime`
  - `say`
  - `open -a [App-Name-Here]`
  - `history`
