# musiclablove recipe

this is a log of the operations Jordan performed to create the musiclablove page.

1. create a github account if you don't already have one
2. create a new repository called "musiclablove" (select "node" as the .gitignore template and whichever license you feel like)
3. clone the repository by typing `git clone [URL YOU COPY FROM YOUR REPOSITORY PAGE]`
4. change directories into your `musiclablove` folder by typing `cd musiclablove` into terminal.
5. make sure that you have node installed by typing `node --version`.  If you don't see a result, install with homebrew by typing `brew install node`.
6. make sure express-generator is installed by typing in `express --version`. If you get a result, it's installed, if not, type `npm i -g express-generator`.
7. now create an express app in the current folder by typing `express . --view=ejs`.  [EJS](https://ejs.co/) is the templating language we're going to use for this app (more on the significance of this in a bit).
8. you now need to install all of the dependencies with `npm install` and then start the app up with `npm start`
9. make a change, hit control c and restart with `npm start`.
10. to avoid having to restart constantly, install nodemon with `npm i -g nodemon`, then change your start script in your package.json file to read `"start": "nodemon ./bin/www"` where it currently just says `"start": "node ./bin/www"`.
11. make sure that you always save your files in atom before trying to reload--if you see a blue dot, it means that you've changed the file, but that you haven't saved it yet.  Typically you'll hit the following key combination again and again and again: command+S to save, command+Tab to get back to your browser, command+R to reload the browser.
