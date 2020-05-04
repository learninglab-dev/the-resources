const moment = require('moment');
const placeholderImage = 'https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg';

module.exports = function(data){
  if (!data.previewImage) {
    data.previewImage = placeholderImage
  }
  if (!(data.title)) {
    console.log("the resource template requires .title argument");
    return `<h1>sorry, no data</h1>` ;
  } else {
    var templateText = `---
title: "${escapeDoubleQuotes(data.title)}"
description: "${escapeDoubleQuotes(data.description)}"
thumbnail: "${data.previewImage}"
author: "${process.env.MY_AUTHOR_ID}"
id: "${data.resourceId}"
---
# ${data.title}
Resource pulled from [${data.title}](${data.url}).
${data.timestamp}

${ data.embedCode ? data.embedCode
  : `![${data.title}](${data.previewImage})`
}

## DESCRIPTION
${data.description ? data.description : ""}

## KEYWORDS
${data.videoTags ? `\n${data.videoTags.join(", ")}` :  data.keywords}

`
    if (data.images.length > 0) {
      templateText+=`\n##IMAGE OPTIONS\n`
      for (var i = 0; i < data.images.length; i++) {
        templateText+=`![${data.images[i].alt}](${data.images[i].url})\n`
      }
    }

    if (process.env.SHOW_SCRAPED_DATA=="TRUE") {
      templateText+=`
## SCRAPED CONTENT
\`\`\`
${JSON.stringify(data, null, 4)}
\`\`\`
`
    }

    return templateText;
  }
}


function escapeDoubleQuotes(str) {
	return str.replace(/\\([\s\S])|(")/g,"\\$1$2");
}
