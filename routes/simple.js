var express = require('express');
var router = express.Router();
const marked = require('marked');
const fs = require('fs');
const path = require('path');
var moment = require('moment');
var recursive = require("recursive-readdir");


router.get('/', function(req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/resources'));
  var linksList = [];
  for (var i = 0; i < markdownFiles.length; i++) {
    if (/\.md/g.test(markdownFiles[i])) {
      linksList.push({
        url: `/simple/${path.basename(markdownFiles[i], '.md')}`,
        linkTitle: `${path.basename(markdownFiles[i], '.md').replace(/-/g, " ")}`,
        text: ""
      })
    } else if (fs.existsSync(path.join(ROOT_DIR, 'data/resources', markdownFiles[i])) && fs.lstatSync(path.join(ROOT_DIR, 'data/resources', markdownFiles[i])).isDirectory()) {
      linksList.push(
        {
          url: `/simple/${markdownFiles[i]}`,
          linkTitle: `${markdownFiles[i]} folder`,
          text: `(contains markdown files for ${markdownFiles[i]})`
        }
      )
    }
  }
  res.render('index', { title: 'simple resource list', date: moment(), message: "all the links to work",links: linksList });
});

router.get('/*', async function(req, res, next) {
  // grab path from url and test to see if it corresponds to a folder, a file, or nothing
  var pathToTest = `${path.join(ROOT_DIR, 'data/resources', ...(req.params[0].split('/')))}`;
  try {
    // check if a folder exists
    if (fs.existsSync(pathToTest)) {
      console.log(`${pathToTest} is an existing folder`);
      fs.readdir(pathToTest, (err, data)=>{
        console.log("got data");
        console.log(JSON.stringify(data, null, 4));
        res.json(data);
      })
    } else if (fs.existsSync(`${pathToTest}.md`)) {
      console.log(`${pathToTest}.md is an existing markdown file`);
      fs.readFile(`${pathToTest}.md`, {encoding: 'utf-8'}, (err, data) => {
        if (err) {res.send("check back in a minute")};
        console.log(data);
        if (/!\[.*\]\(.*\)/.test(data)) {
          console.log("there's an image in the .md file!");
          var heroImage = data.match(/!\[.*\]\(.*\)/)
            .toString()
            .replace(/!\[.*\]\(/, "")
            .replace(")", "");
        } else {
          console.log("no hero image, let's go with crayons");
          var heroImage = "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg"
        }
        res.render("resource",  {
          title: `${path.basename(pathToTest)}`,
          convertedMarkdown: marked(data),
          heroImage: heroImage
        });
      });
    } else {
      res.render('resource', {title: "no resource found", heroImage: "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg", convertedMarkdown: `nothing here yet: ${pathToTest}`})
    }
  } catch(err) {
    console.error(err)
  }
});



module.exports = router;
