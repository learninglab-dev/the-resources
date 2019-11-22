# Notes!

## AudioPeak Project Launch Doc

### ft. Jad & Sophie & more!

Here, we'll keep track of all of our **progress** and *notes*.

> Our plan is to find a way to scrub LL video files for audio peaks, and turn those moments into GIFs, through a command line function. Those GIFs could then automatically be uploaded to an Express App for everyone to enjoy!

Steps:
- [ ] Research relevant command line plug-ins.
- [ ] Create the function!
- [ ] Create an Express app to upload resulting GIFs on.
- [ ] And, take notes the whole time!

---
`/bokgif` project
- natural language processing library
		- use [https://wordnet.princeton.edu/documentation](https://wordnet.princeton.edu/documentation)
		- find synonyms of a word entered
		- pick a certain number of words that are associated with the airtable gifs
		-  have a form in gif machine where it asks you to describe a gif using multiple choice (this is when it might be fun to have a web app of some kind?), send those adjectives to airtable too
		- search the synonyms of an input word for any that match the adjectives in airtable
		- if it matches, pull out one at random of the gifs associated with that adjective!
		- have a function that enables you to see the available adjectives in slack?
		- writing script that sends something to Airtable through Amazon 
		- build a slack command
- [http://compromise.cool/](http://compromise.cool/) for making sure a given word is an adjective? do that before searching for synonyms (but wordnet probably has this capability as well)
- uploading images to airtable using their API [https://chinarajames.com/how-to-upload-images-to-airtable-using-their-api/](https://chinarajames.com/how-to-upload-images-to-airtable-using-their-api/)
- 


Helpful command line links:
- [stack overflow](https://stackoverflow.com/questions/4420208/finding-audio-peaks-in-video-files)
- [ffmpeg commands for converting btwn audio/video/images](https://www.tecmint.com/ffmpeg-commands-for-video-audio-and-image-conversion-in-linux/)
- [Sound eXchange features ](http://sox.sourceforge.net/Docs/Features)
- [creating custom command line functions](https://codeburst.io/learn-how-to-create-custom-bash-commands-in-less-than-4-minutes-6d4ceadd9590medium.com/devnetwork/how-to-create-your-own-custom-terminal-commands-c5008782a78e)

`print("great job researching!")`

Useful functions:
- `$ sox old.wav new.wav trim [SECOND TO START] [SECONDS DURATION]`
	- extract parts of an audio file
- `$ sox foo.wav -e stat`
	- get info for an audio file (including amplitude)
- `$ ffmpeg -i input-video.avi -vn -acodec copy output-audio.aac`
	- extract audio from a video file
- ` $ ffmpeg -i input.mp4 -ss 01:10:27 -to 02:18:51 -c:v copy -c:a copy output.mp4`
	- example of trimming a video file

Potential process:
1. extract the audio file from the video file
2. get the stats for the audio file (with timestamps)
	- [https://stackoverflow.com/questions/38056970/ffmpeg-txt-from-audio-levels](https://stackoverflow.com/questions/38056970/ffmpeg-txt-from-audio-levels)
	- ` ffprobe -f lavfi -i amovie=laugh.mp3,astats=metadata=1:reset=1 -show_entries frame=pkt_pts_time:frame_tags=lavfi.astats.Overall.RMS_level -of csv=p=0 1> log1.txt `
3. isolate the moments with maximum amplitude (or close to it?)
	- we'll need to write a new command line program for this
4. store those seconds & trim the video file using those seconds
5. make that trimmed video file into a GIF
6. upload that GIF to the Express app
` var cp = require("child_process");

function mainFunction() {
  console.log("the main function is working!!");
  var output = cp.spawnSync('ffprobe', [
    '-f', 'lavfi',
    '-i', 'amovie=/Users/llf/Desktop/Development/gif-machine/laugh.mp3,astats=metadata=1:reset=1',
    '-show_entries', 'frame=pkt_pts_time:frame_tags=lavfi.astats.Overall.RMS_level',
    '-of',  'csv=p=0',
    '-print_format', 'json',
    '-show_format', '-show_streams',
  ], { encoding : 'utf8' }
).stdout;
   var parsedOutput = JSON.parse(output);
   var data = JSON.stringify(parsedOutput.frames, null, 4);

   // console.log("output is\n", data);
   var fs = require('fs');
   fs.writeFile('audiodata.json', data, 'utf8',  function (err) {
     if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }

        console.log("JSON file has been saved.");



      });

// create a var of a low volume #, loop through all of the timestamps to see if they're greater than it, store those and then find the max of those


}

module.exports = mainFunction;

// parsedOutput.sort(
//   function(a, b) {
//     return parseFloat(b['lavfi.astats.Overall.RMS_level']) - parseFloat(a['lavfi.astats.Overall.RMS_level']);
//   }
// ) [0]['pkt_pts_time']
// function getMax(arr, prop) {
//     var max;
//     for (var i=0 ; i<arr.length ; i++) {
//         if (max == null || parseInt(arr[i][tags][prop]) > parseInt(max[tags][prop]))
//             max = arr[i];
//     }
//     return max;
//     console.log("max" + max);
// }
//
// var maxRms = getMax(parsedOutput, "lavfi.astats.Overall.RMS_level");
// console.log("peak" + maxRms.pkt_pts_time); ` 

<img src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_yay_burst_mike_lowery_00_1024x1024@2x.png?v=1566225019"  alt="yay"  style="width:250px;height:200px;">

**Contributors**
1. Jad
2. Sophie
3. ~~jad's imaginary friend~~

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYzODg3ODc4MywtMTA2MDQ0NzA1MiwtMT
QxNzY4NjU0MiwtMTgxNzI4MjQxNywzODM4Nzc3MjEsLTEyNTkx
MDEwMzAsLTkyMDY4OTQyNiwtMTc3NDYwODA0MCwyMDMwODMyNT
cxLDExODAzNTI0MTksMjkzMDYzNDk2LDk2NTk3MDA4MSwtMTE1
ODQwOTEzMSwyMDk2ODY5ODQ2LDM2NzYzNzY2OCw4ODMzMzU5OT
IsMTE5Njk3Mjg2OSw2NzM5MTAyMjQsOTE2ODIyMTksNDc4MDE1
OTIxXX0=
-->