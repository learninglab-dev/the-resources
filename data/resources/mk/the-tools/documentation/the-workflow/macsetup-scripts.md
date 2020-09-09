# MAC SETUP SCRIPTS

This is the documentation on our mac setup scripts. You can use this to learn more about our scripts (so that you can run them or improve them) and to write similar scripts yourself.

### GETTING STARTED

If you haven't yet done a basic bash scripting tutorial, you may want to do that before proceeding, but you may also be able to understand all of this without much experience . . . this could even be a good way to get started scripting, because the setup scripts are extremely simple logically and syntactically. The only difficulties you'll face setting them up will involve finding the individual settings you can change and executing all of your commands in the right order. But the setup script is really just a series of very simple single-line commands.

### HOMEBREW AND CORE ELEMENTS

The first thing we need to do is to get [Homebrew](https://brew.sh) installed. The easiest thing to do is

* get your mac connected to the internet
* get your mac app store apps downloading in the background (unless you use `mas` to download from the App Store--we'll discuss this later)
* open safari and search for 'homebrew'
* copy the install script from the brew.sh homepage, which will be
```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

There are bunch of directions you can take from here, Once homebrew is installed, you need a couple of initial apps to get started:
```
  brew install git
  brew install node
  brew cask install atom
```

With `git`, `node` and `atom` installed, you are all set to clone this repository with `git`, install its dependencies with `node` (well, `npm` to be precise, and you won't **really** need this for macsetup, but you will for everything else--so go ahead and do it), and tweak any and all scripts to your liking with `atom`. Here is an example of the commands you might enter next

```
  mkdir Development
  cd Development
  git clone https://github.com/mkuzmick/the-tools.git
  cd the-tools
  npm install
  atom .
  # then tweak 01a_manual_start.sh or 02_mainbrew.sh
  ./02_mainbrew.sh
  ./03_preferences.sh
  ./04_fonts.sh
  ./05_atom.sh
  ./06_npm.sh
```
Again, you'll want to tweak all of those scripts before running them. And to learn how to do this, we'll provide basic explanations of each of these script bundles below.

### MAINBREW

Homebrew is a package manager for the Mac. It is very hard--maybe impossible--to live without if you are going to be coding on your Mac, or even if you just need to spend some time in your Mac's Terminal using command line tools. It is so so so much easier installing these tools with Homebrew than it is to go in search of each and every package you need. Here's the bare minimum you're going to need:
```
brew install git
brew install node
brew cask install atom
brew install awscli
brew install ffmpeg
brew install youtube-dl
brew cask install google-chrome
```
We also tend to add
```
brew cask install firefox
brew cask install vlc
brew cask install nvalt
brew cask install blender
brew cask install unity-hub
brew cask install spotify
brew cask install mas
```

### PREFERENCES

You can change many (not absolutely all, but many) preferences and settings from the command line, and this means that you can add these preferences to your `macsetup` script.

To get started, open up terminal and type `defaults read`. You will be overwhelmed by how much output you see, but if you scroll through it, you should see loads and loads of `"key" = value` pairs that have the names of familiar (and unfamiliar) settings. These preferences can also be seen in the many many `.plist` files you can find in `~/Library/Preferences`. To see just ONE value or one cluster of values, you can try commands like these:

```
defaults read com.apple.Safari
defaults read com.apple.finder ShowStatusBar
defaults read com.apple.screencapture location
```


In a [great piece](https://pawelgrzybek.com/change-macos-user-preferences-via-command-line/) on setting preferences from the command line, Pawel Gryzybek recommends the following workflow:

1. log current prefs with `defaults read > before`
2. change something
3. log new prefs with `defaults read > after`
4. figure out what's different with `diff before after`
5. use that info to construct the new command you need to add to your script

You'll end up finding something like

 ```
 "com.apple.menuextra.battery" = {
   ShowPercent = YES;
 };
 ```

And this would mean that the command you want to add to your setup scripts is

```
defaults write com.apple.menuextra.battery ShowPercent -bool YES
```
And that's basically it. You'll want to make sure that you add a comment that helps the future you understand what this line does, like

```
# show battery percentage in task bar
defaults write com.apple.menuextra.battery ShowPercent -bool YES
```
And then you can always comment things out if you don't think you'll use them all the time:
```
# show battery percentage in task bar
# defaults write com.apple.menuextra.battery ShowPercent -bool YES
```

There are additional complications that we'll address here eventually:
* Many of the preferences you **can't** see in `~/Library/Preferences` are in `~/Library/Containers`. For instance, **TextEdit's** preferences can be found at `/Users/mk/Library/Containers/com.apple.TextEdit/Data/Library/Preferences/com.apple.TextEdit.plist`. For more information on why some apps write their preferences to ~/Library/Containers, check out this [link](https://apple.stackexchange.com/questions/290310/whats-the-purpose-of-library-containers/290312).
* for these (and other apps?) a different syntax is used: `defaults write -app "Final Cut Pro" FFImportCopyToMediaFolder -bool false`, for instance, is what you'd do if you wanted to leave files in place on import by default in FCPX.
* some things aren't set using the `defaults` command at all (power management settings, for instance)

For more info you are invited to check out these links:
* ss64's [page on mac preferences](https://ss64.com/osx/defaults.html) from the command line.
* [herrbischoff's fantastic page](https://github.com/herrbischoff/awesome-macos-command-line) on mac command line stuff.
* [cnet tutorial](https://www.cnet.com/news/tutorial-preferences-files-the-complete-story/) on setting preferences, `.plist` files, etc.

### FONTS

Coming soon.

### ATOM

Coming soon.

### NPM

Coming soon.

### EXTRAS

Coming soon.

## .............................................
## APPENDIX

Extras of all sorts.

### THINGS TO ADD

If you would like to help us build these scripts, here are the things we need next. Go ahead and submit a pull request, or just slack MK your new command if you find a way to accomplish what you need to accomplish with a terminal command.

* c4d still a little difficult in Catalina, don't forget `xattr -d com.apple.quarantine /Volumes/mk_storage/R20_Install_Mac.dmg` or similar before installing
* blender preferences? `/Users/ll/Library/Application Support/Blender/2.80/config/userpref.blend`
* position dock on the left
* programmatically add to the list of things in the finder sidebar
* screensaver = flurry at 30 minutes
* change default apps for major filetypes--`.mov`, `aiff`, `wav`, etc. with QuickTime, for instance (good link on using duti for this [here](https://superuser.com/questions/273756/how-to-change-default-app-for-all-files-of-particular-file-type-through-terminal))
- new window opens home folder
- download c4d (install?? add license.ini file?)
- download unreal or no?
- open chrome and login?
- open bettersnaptool and set to open on startup
- open alfred and set prefs
* shorter font list
* assets
  - ll-video-assets
  * ll-audio-assets
  - ll-c4d-assets
  - ll-unity-assets
  - ll-branding
  - ll-still-assets
  - ll-graphics-assets
- log in to mac app store, download everything, then log out (will need `brew install mas` back in to do this---and a logi)
- change computer name on network
- uncheck save passwords in Safari
- create additional user accounts
- install printers ([potentially relevant forum post](https://discussions.apple.com/thread/7872923) and [another](https://apple.stackexchange.com/questions/275388/add-an-ip-printer-with-command-line) and [another](https://dae.me/blog/1826/add-a-printer-via-command-line-in-os-x/) and [another](https://redlinetech.wordpress.com/2013/06/04/install-printers-on-a-mac-from-the-command-line/))
- canon utility and plugin

## 20191126 TODO

* blender preferences?
* open -a for a number of key apps to get them going?
* don't forget to have apps installed before trying to write 03_preferences (maybe that becomes the last script?)
* verify github account and sign in
* sign in to github from the command line
* turn off autocomplete in `.md` files in Atom (in package settings--can this be automated from the command line?)
* `AppleShowScrollBars = WhenScrolling;`
* `heroku login`
* install c4d
* install c4d extras
* turn off epic and spotify start on open


## 20191126 NOTES

* had to manually change spotlight search (only apps and system prefs)--but saved the diff (in `~/Desktop`)
* set default markdown opener to FoldingText
* set up what goes in the sidebar (both of the above are in `~/Desktop/sidebar-and-markdown-ft-default`)
* install unity version
  * sign in
  * install version
* install resolve
* change default autocomplete in .md
* sign in to dropbox
* restart once preferences are installed
* log in to Slack
* log in to Chrome (for multiple users)
* Adobe installs
* connect to home net
* connect to H secure net
* open and config bettersnaptool
  * don't forget to start on open
* log in to heroku cli
* zshrc with .env vars and functions like
  * aws credentials
* enable react apm package for all js files
* `npm link` for `the-tools`
* ADD fcpx background-render off
* add fcpx destinations?
* preferences for nvalt
  * folder to point to
  * single files
  * md as possible extension and default extension
  * textpane horizontal



## FUTURE GOALS
* add nv folderize script --- at lest until nvUltra is released:  https://brettterpstra.com/2014/05/04/folderize-sync-nvalt-notes-to-nested-folders/
