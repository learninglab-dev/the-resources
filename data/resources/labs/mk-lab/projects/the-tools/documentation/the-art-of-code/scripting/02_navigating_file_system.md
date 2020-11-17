
### NAVIGATING THE FILE SYSTEM

Much--**SO much**--of what you'll do in terminal involves navigating the file system (the sort of stuff you do in Finder on your Mac). You need to be able to find files, write files, rename files, add to files, upload files to services and platforms like Slack, Amazon, Google, etc. So this is really a core skill to pick up, and you'll want the 3-4 commands we repeat endlessly in this module to really become second-nature to you.

- To get started, type `pwd` (print working directory) to find the "path" of your current directory. This will show you the hierarchical list of folders and subfolders that indicates where your directory is. The first character of each path will be `/`, which represents the root directory--it's like the place where the trunk of the tree meets the roots, right at the ground.  Everything else sprouts from there.  You'll probably see something like `/Users/llf`--with the `llf` being whatever your username is. This is the same username that shows up with a little circular photo when you log in to your mac.  
- To get a sense of the tree trunk and the branches, type in `cd /` and hit enter.  This will take you to the root of the tree trunk. Next, enter the two commands that you may as well enter EVERY TIME you follow one of the steps in this section:
  - Enter `ls` to see what's there.
  - Enter `pwd` to see where you are.

This will help you get a better "pseudo-spatial" sense of where you're located, because without the cues offered by your Mac's GUI (Graphical User Interface), it can sometimes be difficult to know where you are.
- Now that you're in the root folder, let's find our way back to your own individual User folder, which is where all of YOUR stuff is going to be.  Enter `cd Users` to get into `/Users`, then once in `/Users`,   `cd llf` should get you into `/Users/llf`.
- Once in `/Users/llf`, your `ls` command should show you a bunch of folders you're pretty familiar with: they're the same folders you see frequently in the sidebar of your Mac's Finder. Most of the folders you see here were put there by Apple. But there's one folder that we in the Learning Lab put there for your use as a member of the codeLab team: "Development". Go ahead and type `cd Development` to get there. A quick `pwd` now should show you `/Users/llf/Development`, which is where you want to go at the beginning of nearly every work session here in the LL. In any new terminal window, you can always type `cd /Users/llf/Development` to get there (rather than doing `cd /` then `cd Users` then `cd llf` then `cd Development` as we just did--but it's important to get a pseudo-physical sense of the path, so going the "long way" at least once or twice is a good thing to practice).
![ls output in User folder](https://raw.githubusercontent.com/mkuzmick/the-art-of-coding/master/scripting/images/userFolder_ls.png)
![User folder seen in Finder](https://raw.githubusercontent.com/mkuzmick/the-art-of-coding/master/scripting/images/gui_userFolder.png)
- One thing you may be wondering is whether the User folder is secure. Like, now that you know how to get to the `/Users` directory, what's to stop you from `cd`ing into a folder you're not supposed to be able to access? Well try it! You probably noticed that the `ll_master` directory was one of the options when you `ls`ed in the `/Users` folder. Let's go back and see if we can poke around there. This time let's get there by entering `cd ..`.  The `..` refers to the directory one step closer to the root than where we are.  We can refer to this directory as the "parent" directory of our current directory. Confusingly, people usually refer to this as one step "up" rather than "down"--inverting the tree metaphor! But if you are tempted to throw your arms up in exasperation and bemoan the code world's annoying counter-intuitiveness, think what you yourself might say if you were discussing a "Family Tree" rather than a plain old tree? Are your grand-parents two steps up from you or two steps down? . . . In any case, get yourself back to the `/Users` folder and see if you can `cd` into the `ll_master` account, which is the admin account for the LL machines. Then trying `ls`ing to see what you can see. What you'll find is that you won't be allowed to do so--which is a good thing, security-wise! To see this folder, you'd need to be logged in AS the admin user.
- Once you're done trying to poke around in the admin User's account, let's get back to your own user folder using a cool shortcut: `cd ~`.  That `~` character (found in the top left of your keyboard) can be used to get you to the "home" for your user account.  And just like other path elements, you can concatenate it with other stuff to `cd` into complex paths.  `cd ~/Desktop` will always take you to your Desktop.  `cd ~/Movies` will take you to Movies, etc.
- To make sure you get a good sense of how the Mac's Finder app can visualize the exact same folders you're exploring in the Terminal, try opening up your current directory in Finder. To do this, you type the command `open . -a Finder` (which means "open the current directory in the app Finder").

### VISUAL CHALLENGE

Take 2-3 minutes to draw out one of the paths (or a few of the related paths) you've explored in a way that makes sense to you. Don't worry about following the specific tree-based analogies mentioned above (though you can obviously do this is makes sense to you). We aren't interested so much in checking on whether you know this or not, but rather in sourcing some interesting visualizations of paths.

### TAKEAWAYS

- Hopefully you are now INSANELY familiar with the following commands:
  - `cd`
  - `pwd`
  - `ls`
- And *somewhat* familiar with the `open` command--you saw this in module 1, but now we're not just opening an app--we're telling that app **what** to open (i.e. `open . -a Finder` or `open .. -a Finder`).
- And hopefully you have a sense of where on your machine you own "User" folder is, and how to get there.
