const axios = require('axios');
const cheerio = require('cheerio');
const cp = require('child_process');
const fs = require('fs');
const moment = require('moment');

module.exports = async function (url){
  if (url) {
    console.log(`working on ${url}`);
    const response = await axios.get(url)
      .catch(e => {console.log(e)});
    const $ = cheerio.load(response.data);
    var resourceData = {
      title: $('title').text() ? $('title').text() : `added`,
      description: $("meta[property='og:description']").attr("content") ? $("meta[property='og:description']").attr("content") : "",
      image: $("meta[property='og:image']").attr("content") ? $("meta[property='og:image']").attr("content") : "",
      url: $("meta[property='og:url']").attr("content") ? $("meta[property='og:url']").attr("content") : url,
      type: $("meta[property='og:type']").attr("content") ? $("meta[property='og:type']").attr("content") : "",
      keywords: $("meta[name='keywords']").attr("content") ? $("meta[name='keywords']").attr("content") : "",
      videoTags: [],
      originalUrl: url,
    }
    if ($("meta[property='og:video:tag']")) {
      for (var i = 0; i < $("meta[property='og:video:tag']").length; i++) {
        resourceData.videoTags.push($($("meta[property='og:video:tag']")[i]).attr("content"))
      }
    }
    // console.log(JSON.stringify(resourceData, null, 4));
    // fs.writeFileSync(`${ROOT_DIR}/temp/${moment().format('YYYYMMDD-HHmmss.SSS')}`, response.data);
    return resourceData;
  } else {
    console.log("getSiteContent function requires parameter url");
  }
}
