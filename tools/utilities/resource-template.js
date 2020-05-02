const moment = require('moment');
const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

module.exports = function(data){
  if (!(data.title)) {
    console.log("the resource template requires .title argument");
    return `<h1>sorry, no data</h1>` ;
  } else {
    var templateText = `
# ${data.title}
Resource pulled from [${data.title}](${data.url}) ${moment().format('YYYYMMDD-HH:mm:ss.SSS')}.
![${data.title}](${data.image ? data.image : placeholderImage })

## DESCRIPTION
${data.description ? data.description : ""}

## KEYWORDS
${data.videoTags ? `\n${data.videoTags.join(", ")}` :  data.keywords}

## SCRAPED CONTENT
\`\`\`
${JSON.stringify(data, null, 4)}
\`\`\`
`
    return templateText;
  }
}
