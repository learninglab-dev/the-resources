const fs = require('fs');
const fm = require('front-matter');
const marked = require('marked');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

// receives markdown file path
// returns package containing .body, .attributes, .heroImage, .convertedMarkdown

var prepMarkdown = async function(mdPath, options){
  try {
    var theStuff = await fm(await readFile(mdPath, {encoding: 'utf-8'}));
    theStuff.html = await marked(theStuff.body);

    if (/!\[.*\]\(.*\)/.test(theStuff.body)) {
      console.log("there's an image in the .md file!");
      theStuff.heroImage = theStuff.body.match(/!\[.*\]\(.*\)/)
        .toString()
        .replace(/!\[.*\]\(/, "")
        .replace(")", "");
    } else {
      console.log("no hero image, let's go with crayons");
      theStuff.heroImage = "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg"
    }
    theStuff.convertedMarkdown = marked(theStuff.body);
    theStuff.title = path.basename(mdPath)
    return theStuff;
  } catch (e) {
    console.log(e);
    return
  }
}

module.exports = prepMarkdown;
