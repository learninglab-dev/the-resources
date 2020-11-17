Here are some first steps:

1. get connected to the internet

2. log in to the mac app store and start downloading everything there

3. while those downloads are happening, install homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

4. with homebrew installed, start installing the basics:
```
brew install git
brew install node
brew cask install atom
```

5. open another terminal window while that stuff is installing and as soon as you're done installing git, set up a Development folder and clone `the-tools`
```
cd ~
mkdir Development
cd Development
git clone https://github.com/mkuzmick/the-tools.git
cd the-tools
```
Once node is done installing you can install the dependencies with `npm install`, then, when Atom is done installing, you can open up the folder with `atom .` so that you can start tweaking the scripts.

6. next we're going to make sure we have `usr/local/bin` and the `tools/scripts/ex` folders in our `$PATH` (this will let us run our custom scripts, like `sgit`, `sheroku`, `rocktheparty`, etc.), so we're going to add a line to our `.bash_profile` (and let's change the prompt while we're at it):
```
cd ~
echo "export PATH=/usr/local/bin:${PWD}/Development/the-tools/tools/scripts/ex:\$PATH" >> ~/.bash_profile
echo "PS1='\W \$ '" >> ~/.bash_profile
```

7. if you open up a NEW terminal window, you should be able to type `_test` and see `it's working`.

8. now you want to modify and run each of the setup scripts:
```
cd ~/Development/the-tools/tools/scripts/macsetup
./02_mainbrew.sh
./03_preferences.sh
./05_atom.sh
./06_npm.sh
```

Again--don't just run these without tweaking them to match what you're trying to achieve with your setup. You can find info on how to do that here: https://github.com/mkuzmick/the-tools/blob/master/documentation/macsetup-scripts.md

Slack the codeLab channel with any feedback or new ideas you have.
