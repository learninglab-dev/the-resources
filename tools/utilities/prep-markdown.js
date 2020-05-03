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
    if (theStuff.attributes.thumbnail) {
      theStuff.thumbnail = theStuff.attributes.thumbnail;
    } else if (/!\[.*\]\(.*\)/.test(theStuff.body)) {
      console.log("there's an image in the .md file!");
      theStuff.thumbnail = theStuff.body.match(/!\[.*\]\(.*\)/)
        .toString()
        .replace(/!\[.*\]\(/, "")
        .replace(")", "");
    } else {
      console.log("no hero image, let's go with crayons");
      theStuff.thumbnail = "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg"
    }
    theStuff.convertedMarkdown = marked(theStuff.body);
    theStuff.title = theStuff.attributes.title ? theStuff.attributes.title : path.basename(mdPath);
    theStuff.description = theStuff.attributes.description ? theStuff.attributes.description : "a resource from the Bok Learning Lab";
    console.log(`************\nabout to render ${JSON.stringify(theStuff, null, 4)}`);
    return theStuff;
  } catch (e) {
    console.log(e);
    return
  }
}

module.exports = prepMarkdown;
