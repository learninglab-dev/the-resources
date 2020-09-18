# HOW TO BUILD A NODEJS COMMAND LINE TOOL

This tutorial is going to walk through the steps of creating a command line tool. We've done a number of tutorials of this sort, so we'll focus this one on the relatively specific task of creating a command line tool that makes writing these resources easier by generating templates for us.

## 1. INITIATING A PROJECT WITH GITHUB AND NPM

The easiest way to start the project is to *begin* with the Github step. So navigate to your github account and click the green "New" button on the right side of the screen to create a new repository. Once on the "Create a new repository" page, type in a repo name like `simple-markdown-tools`, a description, check initialize with a README, select the "Node" option for your .gitignore file, then click "Create repository."

![000-create-a-repo.png](https://ll-show.s3.amazonaws.com/public/resources/mk/code/node-cli/000-create-a-repo.png)

Now you'll be taken to the new repo's page, where you can click the green "Clone or download button" to copy the url to the repo. Then, over in your terminal, you can navigate to wherever you'd like to do your work (your `~/Development` folder, say) and type in `git clone [paste in path here]`. Once the command runs you should be able to `ls` and see your repo's folder. Go ahead and `cd` into it and we can start the `npm` steps.

To initiate an npm project, *double-check* that you are in the **root** folder of your project, and then type `npm init`. You'll encounter a series of questions:
* you can leave the package name as is (hit enter)
* you can leave the version as 1.0.0 (hit enter)
* enter a short, simple description ("a command line tool that generates markdown templates").
* leave entry point as "index.js"(hit enter)
* don't bother with a test command for now (hit enter)
* the git repository should be correct if you've followed the workflow above, but you can double check that it matches the url you copied from github
* enter keywords ("markdown", say) if you wish--they will help people find your package on the npm site
* enter your name or alias as the author
* choose a license if you wish
* click "yes" to OK everything
* and you're done

If you now open up your project in your text editor (`atom .`) you'll see a `package.json` file that has all of this info in it. You'd follow these steps whether you are creating an express app or a command line tool or anything else using node. But in this particular tutorial, we'll move on to hooking up a command line tool.

## 2. HOOKING UP THE COMMAND LINE TOOL

The "front door" to our command line tool is going to be a file we call `cli.js` and put in the root folder of our application. For now let's just put in some starter code to confirm that we can get it to run. Enter the following at the top of the file and then save:

```
#!/usr/bin/env node
console.log(`it's working`);
```
Once you've done this, you'll be able to run the file by typing `./cli.js` into your terminal if the present working directory is your  `the-resources` folder (if you are elsewhere, you'll need to enter the full path to `cli.js`).

 Then we need to point to this file in the `package.json` document that we'll also find in the root of the repository. So add in the following json:

```
"bin": {
  "resource": "./cli.js"
},
```
You can check out this repo's completed doc [here](https://github.com/learninglab-dev/the-resources/blob/master/package.json) if you want to compare and contrast it with yours. This chunk of JSON is telling your computer (and any computer that installs your tool in the future) to run the
