var express = require('express');
var router = express.Router();
const marked = require('marked');
const fs = require('fs');
const path = require('path');
var moment = require('moment');
var recursive = require("recursive-readdir");


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
  console.log(`checking ${ROOT_DIR}/data/work/${req.params.id}`);
  if (fs.existsSync(`${ROOT_DIR}/data/work/${req.params.id}.md`)) {
    var markdownPath = `${ROOT_DIR}/data/work/${req.params.id}.md`;
    try {
      if (fs.existsSync(markdownPath)) {
        fs.readFile(markdownPath, {encoding: 'utf-8'}, (err, data) => {
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
            title: `${path.basename(markdownPath, '.md')}`,
            convertedMarkdown: marked(data),
            heroImage: heroImage
          });
        });
      } else {
        res.render('work', {title: "no file found", heroImage: "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg", convertedMarkdown: `didn't find anything here: ${markdownPath}`})
      }
    } catch(err) {
      console.error(err)
    }
  } else {
    recursive(`${ROOT_DIR}/data/work/${req.params.id}`, function (err, files) {
      var links = [];
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          links.push({
            url: `/work/${req.params.id}/${(files[i].split(`/work/${req.params.id}/`)[1]).split('.md')[0 ]}`,
            linkTitle: `${files[i].split("/work/")[1]}`
          })
        }
      }
      res.render('index', {
        date: moment(),
        message: `all the links to work for ${req.params.id}`,
        title: `${req.params.id} work`,
        links: links
      });
    });
  }
});

router.get('/:folderId/*', async function (req, res, next) {
  var markdownPath = `${path.join(ROOT_DIR, 'data/work', req.params.folderId, req.params[0])}.md`;
  try {
    if (fs.existsSync(markdownPath)) {
      fs.readFile(markdownPath, {encoding: 'utf-8'}, (err, data) => {
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
          title: `${path.basename(markdownPath, '.md')}`,
          convertedMarkdown: marked(data),
          heroImage: heroImage
        });
      });
    } else {
      res.render('work', {title: "no file found", heroImage: "https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg", convertedMarkdown: `didn't find anything here: ${markdownPath}`})
    }
  } catch(err) {
    console.error(err)
  }
});

router.get('/*', function(req, res, next) {
  res.send("nothing here.\n" + JSON.stringify(req.params));
})

module.exports = router;
