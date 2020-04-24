const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
const path = require('path');
const cp = require('child_process');

module.exports.resourceFromUrl = async function (options){
  if (options.url) {
    console.log(`working on ${options.url}`);
    axios.get(options.url)
      .then(function (response) {
        const $ = cheerio.load(response.data);
        var timestamp = moment();
        var resourceData = {
          title: $('title').text() ? $('title').text() : `added`,
          description: $("meta[property='og:description']").attr("content") ? $("meta[property='og:description']").attr("content") : "",
          image: $("meta[property='og:image']").attr("content") ? $("meta[property='og:image']").attr("content") : "",
          url: $("meta[property='og:url']").attr("content") ? $("meta[property='og:url']").attr("content") : options.url,
          type: $("meta[property='og:type']").attr("content") ? $("meta[property='og:type']").attr("content") : "",
          originalUrl: options.url,
          addedDate: timestamp.valueOf(),
          formattedTime: timestamp.format('YYYYMMDD hh:mm:ss.SSS')
        }
        // TODO: maybe grab all images?
        console.log(JSON.stringify(resourceData, null, 4));
        // console.log(JSON.stringify(response.data, null, 4));
        return resourceData;
      })
      .then((data) => {
        var initialText = `
# ${data.title}
${data.formattedTime}
![${data.title}](${data.image})

## OUTLINE
list of elements:
- one
- two

## CODE SNIPPETS
\`var fs = require('fs');\`

`
        var filepath = path.join(process.env.MY_RESOURCE_DRAFTS, `${(data.title.replace(/ /gi, "-")).substring(0,20)}.md`);
        fs.writeFileSync(filepath, initialText);
        if (process.env.MARKDOWN_EDITOR) {
          cp.spawnSync('open', [filepath, '-a', process.env.MARKDOWN_EDITOR]);
        }
        if (process.env.MARKDOWN_PREVIEW_APP) {
          cp.spawnSync('open', [filepath, '-a', process.env.MARKDOWN_PREVIEW_APP]);
        }
        console.log("filepath:");
        console.log(filepath);
        console.log("data.title");
        console.log(data.title);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  // console.log(JSON.stringify(options, null, 4));
}
