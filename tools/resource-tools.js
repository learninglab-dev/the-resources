const urlToResourceDoc = require('./utilities/url-to-resource-doc')

const resourceTools = async function(options){
  console.log(JSON.stringify(options, null, 4));
  if (!(options.text | options.print | options.clipboard)) {
    console.log("firing standard script");
    if (!options.url && options._[0]) {
      console.log(`you didn't supply a url, so let's make the url ${options._[0]}`);
      options.url = options._[0];
    }
    const result = await urlToResourceDoc(options);
    console.log(`done:\n\n${JSON.stringify(result)}`);
  } else {
    console.log(`firing text or print or clipboard or something else ultimately`);
  }
}
module.exports = resourceTools
