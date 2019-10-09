var express = require('express');
var router = express.Router();
const marked = require('marked');
const fs = require('fs');
const path = require('path');
var moment = require('moment');

router.get('/', function(req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work'));
  var linksList = [];
  for (var i = 0; i < markdownFiles.length; i++) {
    if (/\.md/g.test(markdownFiles[i])) {
      linksList.push({
        url: `/work/${path.basename(markdownFiles[i], '.md')}`,
        linkTitle: `${path.basename(markdownFiles[i], '.md').replace(/-/g, " ")}`,
        text: ""
      })
    } else if (fs.existsSync(path.join(ROOT_DIR, 'data/work', markdownFiles[i])) && fs.lstatSync(path.join(ROOT_DIR, 'data/work', markdownFiles[i])).isDirectory()) {
      linksList.push(
        {
          url: `/work/${markdownFiles[i]}`,
          linkTitle: `${markdownFiles[i]} folder`,
          text: `(contains markdown files for ${markdownFiles[i]})`
        }
      )
    }
  }
  res.render('index', { title: 'show (your work)', date: moment(), message: "all the links to work",links: linksList });
});

router.get('/:id', async function (req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work'));
  if (markdownFiles.includes(`${req.params.id}.md`)) {
    fs.readFile(path.join(ROOT_DIR, 'data/work', `${req.params.id}.md`), {encoding: 'utf-8'}, (err, data) => {
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
      res.render("work",  {
        title: `${req.params.id}`,
        convertedMarkdown: marked(data),
        heroImage: heroImage
      });
    });
  } else if (fs.existsSync(path.join(ROOT_DIR, 'data/work', req.params.id)) && fs.lstatSync(path.join(ROOT_DIR, 'data/work', req.params.id)).isDirectory()) {
    var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work', req.params.id));
    var linksList = [];
    for (var i = 0; i < markdownFiles.length; i++) {
      if (/\.md/g.test(markdownFiles[i])) {
        linksList.push({
          url: `/work/${req.params.id}/${path.basename(markdownFiles[i], '.md')}`,
          linkTitle: `${path.basename(markdownFiles[i], '.md').replace(/-/g, " ")}`,
          text: ""
      })
      }
    }
    res.render("index", { title: 'show (your work)', date: moment(), message: `all the links to work for ${req.params.id}`,links: linksList })
  } else {
    res.render('test', {title: "nothing here just yet.", data: JSON.stringify(markdownFiles, null, 4)});
  }
});

router.get('/:folderId/:fileId', async function (req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work', req.params.folderId));
  if (markdownFiles.includes(`${req.params.fileId}.md`)) {
    fs.readFile(path.join(ROOT_DIR, 'data/work', req.params.folderId, `${req.params.fileId}.md`), {encoding: 'utf-8'}, (err, data) => {
      if (err) {res.send("check back in a minute")};
      console.log(data);
      if (/!\[.*\]\(.*\)/.test(data)) {
        console.log("there's an image in the .md file");
        var heroImageMd = data.match(/!\[.*\]\(.*\)/);

        var heroImage = heroImageMd.toString().replace(/!\[.*\]\(/, "").replace(")", "");
        console.log(`the heroImage is ${heroImage}`);
      } else {
        console.log("no hero image, let's go with crayons");
        var heroImage = "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg"
      }
      res.render("work",  {
        title: `${req.params.fileId}`,
        convertedMarkdown: marked(data),
        heroImage: heroImage
      });
    });
  } else {
    res.render('test', {title: "nothing here just yet.", data: JSON.stringify(markdownFiles, null, 4)});
  }
});

router.get('/*', function(req, res, next) {
  res.send("nothing here.\n" + JSON.stringify(req.params));
})

module.exports = router;
