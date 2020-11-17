# basic tools #

a quick little tutorial on creating yourself a custom commandline toolset.


## 0. why bother? ##

There is very little that can't be done from the command line on your mac. You can launch apps, start files, grab text from anywhere, send text anywhere, transcode media, edit video, resize photos, create gifs, talk to Slack and Airtable and YouTube and your bank. And you can make these tasks relatively simple by creating some scripts that cobble together the difficult-to-remember shell commands and with some pretty powerful javascript packages.

## 1. getting started ##

Now, you CAN do all of this with shell scripts alone, and we will definitely touch on those. But this complete tutorial set is also going to teach you how to create a node package so that we can use all sorts of cool js code that people have already written for us. So, to get started, we're going to have to do some basic groundwork getting node and git and github and homebrew and a code editor connected. If you are working on a Learning Lab machine, you may be able to skip this part, but it's still useful to read.

### TLDR steps ###

If you just want to get going immediately here are your commands:
1. install [Homebrew](https://brew.sh/) with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
2. make sure you have a folder for development: `mkdir ~/Development`
3. `brew install atom`
4. `brew install node`
5. `brew install git`
6. get a github account 

### steps with explanation

1. check if **Homebrew** is installed by typing `which brew` into terminal and hitting enter. If you see a result, it's installed. If it says `brew not found` it's not, so google "install homebrew" and copy the command you see on [brew.sh](https://brew.sh/). Currently it's `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"` but it has been known to change. You'll need to enter your password and confirm that you want to install homebrew, and it will take a while. Homebrew is the package manager for macs--it makes installing and managing all of your tools way way way way way easier.
2. once Homebrew is installed, you can use it to install a whole bunch of useful stuff. But the very first thing we're going to install is going to be [Atom](https://atom.io/), our text editor. To do this, type `brew cask install atom` into your Terminal and hit enter. 
3. While you wait for Atom to install, open up a second Terminal window so that you can multitask. In that second window, create a Development folder for yourself if it doesn't exist. By default, your Terminal windows should open up in your "Home" directory. Enter `pwd` (present working directory) to see what your home directory is, and you should see that it's `/Users/You`, where you is whatever you made your username. If you type `ls` you should see a bunch of folders (directories) that are familiar to you from your time spent in the Mac Finder: Movies, Desktop, Documents, Downloads, etc.  If you don't see "Development" or "Developer" there, go ahead and create it with `mkdir Development` (**m**a**k**e a **dir**ectory called **Development**). Then move in to this director with `cd Development` (change directories into Development). Now if you hit `pwd` you should see `/Users/You/Development`. This is where we're going to put all of our code.
4. Check back in the window you're using to install atom. Once it's done, type in `brew install git` and start waiting again for git, the industry-standard software-version-management tool, to be installed. We'll be using git to keep track of our code "repositories," and to send code to and grab code from [Github](https://github.com/). Git is great at keeping track of our changes and the multiple versions of our code (which is great, just in case we make changes that break things--which we undoubtedly will), and it's an important tool to use for collaboration if we're going to have dozens or even hundreds of people contributing to a project without creating total chaos.
5. While we won't use it for a couple of steps, you'll also need to install [Node.js](https://nodejs.org/en/) with `brew install node`. Node.js, or just plain "Node,"" is the tool we use to run "server-side" JavaScript. You may find a little [context](https://en.wikipedia.org/wiki/JavaScript#History) helps grasp this idea. So, initially js was developed to run little bits of interactivity in your web browser, on the "client side." Essentially when you downloaded a website, you'd also be downloading a little bit of javascript code that handled the interactions like clicking on buttons or moving your mouse around. But node was developed so that the big computers that SEND you the webpages can also do their "thinking" in javascript. So now there isn't necessarily some one single `.html` file with a little bit of JavaScript tacked on that the server sends you, instead you "say" to the server "give me something that's relevant to me" and the server makes use of all the various contextual info it has on you (including lots and lots of tracking info!) to think up a good response (YouTube shows you the latest Bieber interview, Amazon puts shop vacs on the first page) . . . and, with node, it do this "thinking up a good response" with JavaScript. This was a really big development, because since everyone who coded for the web already knew JS, it made **WAY** easier to be a "full-stack" developer (one who codes both the client-side or "front end" and the server-side or "back end"), because you could use a single language, and often little chunks of code performing similar logical operations, on both the client and the server. And, since a server is just a big computer, like your computer, this also means that the Node.js JavaScript "[runtime](https://en.wikipedia.org/wiki/Runtime_system)" can be used to do all sorts of things on your local machine. And that's actually what we're going to use it for in this set of tutorials.



## 2. your first shell script ##

But before we start using node, we're going to create a couple of really simple shell scripts, which is something people who spend all day developing stuff on computers have been doing for decades (and might continue doing for decades). Whether you are writing code for your startup's pet-sharing app or ingesting footage for your documentary film or preparing layouts for *Vogue* or rendering out a shot of Thanos fighting the Avengers, you're going to be using at least a few shell scripts.

### TLDR ###

1. get to know some [basic shell commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet): `ls`, `cd`, `mkdir`, `echo`, `mv`, `open`, `rm`, etc.
2. create a `script.sh` file that you run with `bash script.sh`
3. create a `mycommand` file with a "shebang" at the top
4. add your scripts folder to your $PATH by creating a `~/.zshrc` file containing this code (some of which adds additional powers to your shell)
	```
	export PATH=/usr/local/bin:/Users/YOU/Development/scripts:$PATH
	PROMPT='%2~ %# '
	alias chrome='open -a "Google Chrome"'
	```
5. then open a new Terminal window and make sure your scripts and aliases are running

### LONGER INSTRUCTIONS ###

1. 
2.
3.
4.
5.


## 3. more complicated shell scripts  ##

### TLDR ###

1. accepting arguments
2. running other tools
3. running other scripts
4. loops
5. text manipulation
6. curl for data
7. file upload?


## 4. your first node script

### TLDR ###

1. create repo on github, clone to local machine
2. npm init
3. package.json and "bin"
4. cli.js 
5. npm link and it should work

you're now done with this section.