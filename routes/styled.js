var express = require('express');
var router = express.Router();
const marked = require('marked');
const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
var moment = require('moment');
var recursive = require("recursive-readdir");
const prepMarkdown = require('../tools/utilities/prep-markdown');

router.get('/', async function(req, res, next) {
  try {
    let styleFiles = await readdir(path.join(ROOT_DIR, 'public/stylesheets'));
    let linksList = [];
    for (var i = 0; i < styleFiles.length; i++) {
      linksList.push({
        url: `/styled/${path.basename(styleFiles[i], '.css')}`,
        linkTitle: `${styleFiles[i].replace('.css', '')}`,
        text: ""
      })
    }
    res.render('index', {title: 'stylesheet options', date: moment(), message: "all the styles",links: linksList })
  } catch (e) {
    console.log(e);
    res.send('error');
  }
})

router.get('/:style', function(req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/resources'));
  var linksList = [];
  for (var i = 0; i < markdownFiles.length; i++) {
    if (/\.md/g.test(markdownFiles[i])) {
      linksList.push({
        url: `/styled/${req.params.style}/${path.basename(markdownFiles[i], '.md')}`,
        linkTitle: `${path.basename(markdownFiles[i], '.md').replace(/-/g, " ")}`,
        text: ""
      })
    } else if (fs.existsSync(path.join(ROOT_DIR, 'data/resources', markdownFiles[i])) && fs.lstatSync(path.join(ROOT_DIR, 'data/resources', markdownFiles[i])).isDirectory()) {
      linksList.push(
        {
          url: `/styled/${req.params.style}/${markdownFiles[i]}`,
          linkTitle: `${markdownFiles[i]} folder`,
          text: `(contains markdown files for ${markdownFiles[i]})`
        }
      )
    }
  }
  res.render('index', { title: 'styled resource list', date: moment(), message:  `all the resources, styled with ${req.params.style}.css`,links: linksList });
});

router.get('/:style/*', async function(req, res, next) {
  // grab path from url and test to see if it corresponds to a folder, a file, or nothing
  console.log(JSON.stringify(req.params));
  var pathToTest = `${path.join(ROOT_DIR, 'data/resources', req.params[0])}`;
  try {
    // check if a folder exists, render links if so
    // else check if .md file exists, render resource if so
    // else nothing here
    if (fs.existsSync(pathToTest)) {
      var theLinksList = await makeLinksList(pathToTest, `${req.params.style}/${req.params[0]}`);
      console.log(JSON.stringify(theLinksList, null, 4));
      res.render('index', { title: 'simple resource list', date: moment(), message: "all the links to work",links: theLinksList });
    } else if (fs.existsSync(`${pathToTest}.md`)) {
      console.log(`${pathToTest}.md is an existing markdown file`);
      var resourcePackage = await prepMarkdown(`${pathToTest}.md`);
      resourcePackage.css = `/stylesheets/${req.params.style}.css`
      res.render("styled-resource",  resourcePackage);
      // res.render('json', {title: "test", json: resourcePackage})
    } else {
      res.render('styled-resource', {title: "no resource found", heroImage: "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg", convertedMarkdown: `nothing here yet: ${pathToTest}`})
    }
  } catch(err) {
    console.error(err)
  }
});

async function makeLinksList(folder, stem){
  let linksList = [];
  let elements;
  console.log(`launching makeLinksList with folder=${folder} and stem=${stem}`);
  try {
    elements = await readdir(folder);
  } catch (e) {
    console.log(e);
  }
  if (elements === undefined) {
    return null;
  } else {
    console.log("creating from");
    console.log(JSON.stringify(elements));
    for (var i = 0; i < elements.length; i++) {
      linksList.push({
        url: `/styled/${stem}/${elements[i].replace('.md', '')}`,
        linkTitle: `${elements[i].replace('.md', '')}`,
        text: ""
      })
    }
  }
  return linksList;
}

module.exports = router;
