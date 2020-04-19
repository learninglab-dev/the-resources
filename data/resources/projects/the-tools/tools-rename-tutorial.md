
## Changing and Understanding Things

You can do anything you want to the code on the machine you’re working on (as far as Marlon is concerned--ask Mike if you are an MPA!). We just won’t commit anything to the main repository without testing.

You are really encouraged to poke around and try to learn how the code works so that you can help us write new scripts. We have some basic tutorials on shell scripting and js scripting that you should check out. But you can also always talk to a member of the codeLab to get ideas on how to get started.

It is relatively easy to get started, and the basic things you need to learn if you are totally new to code are actually limited in number.  Everything is just



*   variables
*   functions
*   arrays
*   objects
*   loops
*   conditionals

And once you get these basics (10 minutes each to grasp the definition then some hours of practice), it’s just logic.  


## quick rename script tutorial

Let’s try to learn the basics of writing javascript by creating a script that renames the files in a folder based on the text of the folder’s name (something we do all the time in the LL).

To get started, we have to put together a little file full of code we can execute. So in the text editor of your choice, create a file and save it as `rename.js` somewhere you’ll be able to find it.  Start with just the following text.


	console.log("launching my rename script!");


We’re going to run this by typing


	node /path/to/my/rename.js


Or, if you are already in the folder that contains your file, you can just enter the file name. Try entering the following:


	cd /path/to/my/scriptsfolder
	node rename.js


 When you enter this command, you should see the following output


	launching my rename script!



### Variables, Strings, Numbers

So now we can run a script and get some output, but we want be able to send the script some input too, so that when we type `node rename.js myFile.mov` or `node rename.js /path/to/my/folder` we can perform some operations on a file or a folder of files. In order to handle this input, we are going to use the [process.argv][4] method that’s built in to node--it will give us a list or “array” of the command line arguments that were entered when you ran your script. For reasons we won’t go in to here, the argument that you add after the name of your script will be referenced with `process.argv[2]`. To test it out, add two lines to your script so that it now looks like this:


	var myInput = process.argv[2];
	console.log("launching my rename script!");
	console.log("going to perform some sort of operation on " + myInput);


In that first line we are “grabbing” the input and storing it in a variable called `myInput`.[^5] And when we call the console.log function on line 3, we are concatenating two strings with the `+` operator so that we can construct a little sentence that tells us something about the input.  So now try running it with `node rename "some sort of input"` to see what you get. You’ll note that you see different results if you have spaces in your input and shift between including and excluding the quotation marks.  If you have a path without spaces, you won’t need the quotation marks, but if you have a path WITH spaces, you will (try to guess why).

A quick word on **variables**. They can contain words (**strings**), numbers, lists of things (**arrays**), true/false values or **booleans**, **functions**, and interesting collections of properties and values (including all the preceding things in this list) we’ll learn about later called **objects**.  For now, we’re going to define them using the word `var`, as in `var myNumber = 5`. Once your variable has been created using `var`, you don’t need to add the `var` again to change the value.  For instance, this would work:


	var myNumber = 5;
	console.log(myNumber);
	// expected output would be '5'
	myNumber = 7;
	console.log(myNumber);
	// expected output would be '7'


Those `//` lines are comments--they don’t do anything in the code, but are helpful to write notes to yourself or to others (in this tutorial we’ll use them to add explanatory notes to the code in places).  Essentially what we’re doing above is creating a variable, then changing its value--we will do this many many times in this tutorial.  So much so that we aren’t going to go into every single thing about variables and data types right here, but there is one little thing about strings and numbers we need to know for our rename script before we move on.

Let’s start by adding two numbers together:


	var myNumber = 5;
	myOtherNumber = myNumber + 10;
	console.log(myOtherNumber);


What we should see as a result is `15`.  If, however, we type in the word (string) `ten` rather than the number `10`, let’s see what happens:


	var myNumber = 5;
	myOtherNumber = myNumber + "ten";
	console.log(myOtherNumber);


What we’ll get is not `15`, but, rather, `5ten`. When we put strings and numbers together in js, the string type wins, because while strings can contain characters like 5, 1, and 0, it is not at all clear how we can turn any arbitrary group of letters into a numerical value. We are going to be performing a bunch of string concatenation processes as we rename files, because we’ll want to take some prefix or stem (like the shoot date and project id, say) and then add on additional text and numbers (and these numbers will be different for each file).

As mentioned before, variables can also contain other data types and even functions, but we’ll hold off on all this until later so that we can stay focussed on the rename tutorial . . .


### Paths and Built-in Node Modules

OK, so now we can get input in to the script . . . let’s start sending in our actual input (a path to a folder) and then work towards renaming the files.  The first thing we want to do is determine the “stem” that all the files will share. This isn’t _exactly_ our path--it’s just the last part of it, just the name of the folder itself without the names of all the parent folders that enclose it.  So not `/path/to/20190901_Demo_Shoot_5Da`, but just `20190901_Demo_Shoot_5Da`. To do this, we are going to use some code that already exists as a “module” in node[^6]--the [path][5] module--which is essentially a bunch of functions that we can use without having to write them ourselves. To add the path module to your file you’ll “require” it and store it in a variable (and it makes sense to call this variable path so that you don’t get confused). So at the top of your file, add this line


	var path = require('path');


Then, once you have the path module stored in this variable, you can use all of its “methods” (its functions) by typing `path` followed by a `.` followed by the name of the method (i.e. `path.join`, `path.extname`, `path.normalize`, etc.).[^7] In this case, we’re going to use the `basename` method, which grabs that last chunk of the path, just the folder or file name rather than all of its parent folders.  Add a line that stores your folder’s name as the `folderName`.  All together your script so far will look like this:


	var path = require('path');
	var myInput = process.argv[2];

	console.log("launching my rename script!");
	console.log("going to perform some sort of operation on " + myInput);

	var folderName = path.basename(myInput);
	console.log("the folder name should be " + folderName);


All of the logs are optional, and you are encouraged to play around with them to get information about what your code is doing and to test your grasp of what’s going on so far.


### Loops

Let’s now imagine that we have 5 files in that folder, and that we want to generate the 5 file names, starting with 20190901\_Demo\_Shoot\_5Da\_001 that we’d give to these files. To accomplish this, we’d want to add a **loop**. Here’s the basic syntax for a `for` loop.


	for (var i = 0; i < 5; i++) {
	  console.log("i is now " + i);
	}


So what we’re doing is starting with `i = 0`, then adding one to `i` every time through the loop with `i++`, and as long as i satisfies the condition `i < 5`, we’ll execute the code between the two curly braces (`{ }`).

Now let’s try to figure out how we’d create those filenames. For a start, let’s try to take that `i` and append it to the folder name we got from `path.basename(myInput)`. . .


	var path = require('path');
	var myInput = process.argv[2];

	console.log("launching my rename script!");
	console.log("going to rename this folder: " + myInput);

	var folderName = path.basename(myInput);

	for (var i = 0; i < 5; i++) {
	  var newFilename = folderName + "_" + i;
	  console.log("new file name: " + newFilename);
	}


This isn’t bad--it will give us the following output:


	20190901_Demo_Shoot_5Da_0
	20190901_Demo_Shoot_5Da_1
	20190901_Demo_Shoot_5Da_2
	20190901_Demo_Shoot_5Da_3
	20190901_Demo_Shoot_5Da_4


But we want to “zeropad” the counter, numbering the files with 001, 002, 003 . . . 010, 011, etc.  And we want to start with 001.  So what can we do?  Starting with 1 is no big deal: we could do it one of two ways: either start with var`i = 1; i < 6; i++` or just use `(i + 1)` as the number we use in our counter.  But what about padding the number with zeroes? Well, it isn’t cheating to just google “zeropad js” or zerofill js” if you can’t quite figure out how to do it yourself, and if you did, you’d discover that there is a [js method for this][6]. All you need to do is take a string, then add .padStart, then the number of characters (in this case digits) you want in total, then the character you want to “fill” the empty spaces with:


	string.padStart(3, "0");


Now--here’s the problem. We CAN’T just try i.padStart(3, ‘0’), because i is an integer rather than a string.  Go ahead--try. It won’t break your computer, but you’ll get an error message that reads


	TypeError: i.padStart is not a function


So what we need to do is turn i into a string . . . and, as it turns out, there is a method for that: `i.toString()` will take the integer `i` and turn it into a string for us. Once we do this, we can add the padStart chunk of code on to “chain” the functions together:


	var counter = i.toString().padStart(3, '0');


or


	var newFilename = folderName + "_" + i.toString().padStart(3, '0');


so now the complete code (including our attempt to turn the series 0-4 into 1-5) is


	var path = require('path');
	var myInput = process.argv[2];

	console.log("launching my rename script!");
	console.log("going to rename this folder: " + myInput);

	var folderName = path.basename(myInput);

	for (var i = 0; i < 5; i++) {
	  var newFileName = folderName + "_" + (i + 1).toString().padStart(3, '0');
	  console.log("new file name = " + newFileName);
	}


Run it, and you should see exactly what you want to see:


	new file name = 20190901_Demo_Shoot_5Da_001
	new file name = 20190901_Demo_Shoot_5Da_002
	new file name = 20190901_Demo_Shoot_5Da_003
	new file name = 20190901_Demo_Shoot_5Da_004
	new file name = 20190901_Demo_Shoot_5Da_005



### Functions

You can take chunks of code you think you’ll reuse (or even just big chunks you’d like to condense somehow to make things more readable) and wrap them in **functions. **For instance, while it’s not the longest, most unreadable chunk of code, that `folderName + "_" + (i + 1).toString().padStart(3, '0')` chunk of code seems overly complicated for what’s happening. Essentially we just want to take the folderName and i and get a new filename (and maybe console.log out that filename to see if it looks right. So let’s delete out current loop and replace it with the following:


	for (var i = 0; i < 5; i++) {
	  var newFileName = getNewName(folderName, i);
	}

	function getNewName(folderName, i) {
	  var newName = folderName + "_" + (i + 1).toString().padStart(3, '0');
	  console.log("new file name = " + newFileName);
	  return newName;
	}


So we have two values being sent to the function: first, the folder name, then the index `i`, and out of these the function will create the newName and `return` it (i.e. send it back--if we didn’t `return` anything, then we wouldn’t be able to access the value of `newName` outside of the `getNewName` function.

Right now this is a relatively simple function, so we aren’t getting THAT much value from creating it rather than leaving all of the code in one big block, but this will change as our code becomes more complex, and as we begin to split off some of our code to create modules of our own.


### Arrays, Conditionals, Booleans

To really polish off those loops we want to be able to loop through not merely the numbers 0 through 4, but rather through all of the files in a folder, whether there are 5 of them or not. So we want to know exactly how many files there are in the folder to determine how many times to run the loop, and every time we execute the command we’re going to want to do something to one of the files--a file we can specify. In order to do this, we are going to have to create a list of those files, and in js we call this an **array**.

We are going to use another one of those built-in node.js modules, the [fs or “File System” module][7], which [contains a method][8] that will give us a list of all the files in a folder.  Here’s what we’ll add to our code:


	var fs = require('fs');
	var allTheFileNames = fs.readdirSync("/path/to/20190901_Demo_Shoot_5Da");
	console.log(allTheFileNames);


If you do that (on a Mac), you should see a list that looks something like this:


	[ '.DS_Store',
	  'file1',
	  'file2',
	  'file3',
	  'file4' ]


That .DS\_Store file is a hidden file (if you want to learn about why it’s there on Macs, check [this][9] out), and it’s an annoyance we’ll take care of later.  But the rest of the list should look right to you.  

To access a specific element of an array, the basic syntax is `myArray[i]`, where `myArray` is the name of your array, and `i` is the index of the element you want. Arrays are “zero-indexed,” which means that `myArray[0]` gets you the first element in the array, `myArray[1]` the second, and so on. So in this case, `console.log(myArray[0])` would get you `'.DS_Store'` rather than `'file1'`.

So this is great--we can run a loop and increment [i] each time through--if only we knew how many times to run the loop.  As it turns out, each array you create has a built-in length property you can access by referencing myArray.length.  So putting it all together, here’s what our code will look like:


	var path = require('path');
	var fs = require('fs');
	var myInput = process.argv[2];

	console.log("launching my rename script!");
	console.log("going to rename this folder: " + myInput);

	var folderName = path.basename(myInput);
	var allMyFiles = fs.readdirSync(myInput);

	for (var i = 0; i < allMyFiles.length; i++) {
	  var newFileName = folderName + "_" + (i + 1).toString().padStart(3, '0');
	  console.log("going to turn " + allMyFiles[i] + " into " + newFileName);
	}


So now, with `i < allMyFiles.length`, we are running the loop once for each element in allMyFiles. Then, each time through the loop we are able to reference a specific file with `allMyFiles[i]`. We are very close to having all the info we need to rename things.

But we still want to get rid of that annoying .DS\_Store file, and there are a couple of ways to do it. First let’s do it all on our own with a conditional “if . . . then” structure.  What we’ll do is check each and every allMyFiles[i] to see if it’s equal to DS\_Store, and if it isn’t, we’ll add that element to a new array we’ll call allMyActualFiles.  For now let’s just do this at the bottom of all the code you already have . . .


	var allMyActualFiles = [];
	for (var i = 0; i < allMyFiles.length; i++) {
	  if (allMyFiles[i] != ".DS_Store") {
	  console.log(allMyFiles[i] + " is an actual file.");
	  allMyActualFiles.push(allMyFiles[i]);
	  } else {
	    console.log(allMyFiles[i] + " is a hidden file.");
	  }
	}


So we’re creating an empty array in the first line, then checking to make sure that it is NOT equal (`!=`) to `".DS_Store"`, and if it isn’t equal, we use the `Array.push()` method to add that element to the array of actual files.

This conditional logic is essential for much of the code you’ll write, and Array.push() is a method you’ll use all the time, so the above code is important stuff to learn . . . BUT, we now need to let you know that filtering arrays is SO common and important that there is a built-in method for filtering them that condenses all this logic for you a little bit.

Js arrays have a built in method--`Array.filter`--that can create a brand new array that weeds out elements you don’t want (or that only includes elements you do want). The syntax may be a little confusing if you are new to all this, but, essentially, what we do is pass Array.filter a function that returns the **boolean** value `true` when we DO want to hold on to the element and `false` when we DON’T want to hold on to the element. The full code will look like this:


	var allMyFiles = fs.readdirSync(myInput);
	var allMyActualFiles = allMyFiles.filter(function(file) {
	  if (file != ".DS_Store") {
	    return true
	  } else {
	    return false
	  }
	});


This goes beyond what we’ll learn here, but in the actual code for theTools, we are likely to simplify the syntax even further and use a “regular expression” test to weed out any hidden files at all (i.e. anything that starts with a `.` -- not just `.DS_Store`).


	var allMyActualFiles = allMyFiles.filter(element => {
	  return !/^\./.test(element);
	});


 Again--that goes beyond what we’ll learn here.  But let’s learn another similar method for Arrays while we’re at it . . .

Let’s say that you want to have an array not just of the file names (the basenames), but also an array of paths (in fact, you are definitely going to need an array of paths, because to rename the file, you need to provide `fs.rename` with the entire path, not just the basename). In order to do this, we’re going to use a method that is very similar in structure to the filter method we just used: `Array.map()`. Just as we did with `Array.filter()`, we are going to pass `Array.map()` a function, but this function is going to return not just `true` or `false`, but a new value entirely, and this new value will be added to the new array.  So the create an array of paths, we’ll take the array of filenames and add on the enclosing folder’s path. We could just do this by concatenating strings, but the `path` module also has a method that will do it for us: `path.join()`.


	var allMyPaths = allMyActualFiles.map(x => path.join(folderName, x));
	console.log(allMyPaths);


 \\
We could also use Array.push() and  Array.map() to keep track of all the NEW filenames and paths we’re generating. Remember how we wrote a little loop that did this?


	for (var i = 0; i < 5; i++) {
	  var newFileName = getNewName(folderName, i);
	}

	function getNewName(folderName, i) {
	  var newName = folderName + "_" + (i + 1).toString().padStart(3, '0');
	  console.log("new file name = " + newFileName);
	  return newName;
	}


Let’s augment this a bit, first collecting all the instances of newFileName in one array, then using Array.map() to create ANOTHER array with all the paths.


	var allMyNewFilenames = [];

	for (var i = 0; i < allMyFiles.length; i++) {
	  var newFileName = getNewName(folderName, i);
	  allMyNewFilenames.push(newFileName);
	}

	var allMyNewPaths = allMyNewFilenames.map(x => path.join(folderName, x));

	function getNewName(folderName, i) {
	  var newName = folderName + "_" + (i + 1).toString().padStart(3, '0');
	  console.log("new file name = " + newFileName);
	  return newName;
	}


So `getNewName` remains the same for now, but now we’re collecting all the `newFileNames` we’re generating in an array, then creating another array of paths with `allMyNewFilenames.map`.

This is cool--we have learned how to manipulate arrays! But here’s the bad news: having four separate arrays--one for old filenames, one for old filepaths, one for new filenames, one for new file paths--is a little confusing. Worse, we might want to collect even MORE data about these clips.  Perhaps we’d like to know the file size, maybe the width and height if it’s a video file or still, maybe the starting timecode if it’s a video file, maybe its location if it’s stored on Amazon S3. Do we really want to create arrays for each and every one of these lists of data? How will we link them together? Wouldn’t there be loads of opportunities for errors and confusion?  

Yes. And this is why we need to start using objects.


### Objects

The weird thing about all of those arrays we listed above is that each element of each array is really reference a specific thing. There is a specific file that has an old basename, and old path, a new basename, a new path, height, width, starting timecode, etc. etc. etc. And it seems really weird to have separate lists of these qualities for each and every file, because it’s stripping each of these qualities in isolation from the object, rather than “attaching” them to that object (the way they’re really attached to the object in real--or digital--life). Objects allow us to do this.  They let us create a single “thing” and attach as many properties to it as we like--and these properties can be strings, numbers, booleans, arrays---even functions and objects.

When create a clip object for instance, we might want it to look like so:


	{
	  oldFilename: 'file1.mov',
	  oldPath: '/myDrive/footage/20190901_Demo_Shoot_5Da/file1.mov',
	  newFilename: '/20190901_Demo_Shoot_5Da_001.mov',
	  newFilepath: '/myDrive/footage/20190901_Demo_Shoot_5Da/20190901_Demo_Shoot_5Da_001.mov',
	}


While we identified an array with square brackets, in js an object gets enclosed with curly braces `{ }`. And in between we get a comma separated list of `property: value` pairs.

One tactic folks sometimes deploy involves creating a “constructor” function that creates all the new objects of a specific type, ensuring that each is structured exactly the same way. This can be helpful, because at some later date you might want to search your database for all of the objects (let’s say they’re photos) with a specific property (let’s say they were all shot with a 135mm lens), and you want to make sure that EVERY SINGLE object really does have a value for that property.

Let’s take our `getNewName` function (which is already, in a sense, constructing new elements) and do two things: 1) we’ll change its syntax and name so that it’s a constructor, and 2) we’ll start adding all of the properties we might want to have attached to each object, right here in this function.


	function VideoFile(folderName, filename, i) {
	  this.folderName = folderName;
	  this.oldName = filename;
	  this.oldPath = path.join(folderName, filename);
	  this.newName = folderName + "_" + (i + 1).toString().padStart(3, '0');
	  this.newPath = path.join(folderName, this.newName);
	  this.stats = fs.statSync(this.oldPath);
	}


Now we can call this function to create a new instance of `VideoFile`.  Here’s the full code, since adding this is going to let us simplify things a bunch.


	var path = require('path');
	var fs = require('fs');
	var myInput = process.argv[2];

	var allMyFiles = fs.readdirSync(myInput);
	var allMyActualFiles = allMyFiles.filter(element => {
	  return !/^\./.test(element);
	});

	var videoFiles = [];

	for (var i = 0; i < allMyActualFiles.length; i++) {
	  var newFile = new VideoFile(myInput, allMyActualFiles[i], i);
	  videoFiles.push(newFile);
	}

	function VideoFile(folderPath, filename, i) {
	  this.initialFolderPath = folderPath;
	  this.folderName = path.basename(folderPath);
	  this.oldName = filename;
	  this.oldPath = path.join(folderPath, filename);
	  this.newName = this.folderName + "_" + (i + 1).toString().padStart(3, '0');
	  this.newPath = path.join(folderPath, this.newName);
	  this.stats = fs.statSync(this.oldPath);
	}

	console.log(JSON.stringify(videoFiles, null, 4));


You should be able to follow MOST of this by now, so let’s emphasize the new elements. First, we are instantiating an array called `videoFiles`, and we are adding a bunch of objects (new instances of `VideoFile`) to this array. As we create these new objects with our constructor function, we attach all the new properties to something we call `this`--which is really is “this”, the object we’re creating as we’re running the constructor function.  Finally, in order to “see” the object in the console, we run the JSON.stringify method, which takes the object and shows it to us using Javascript Object Notation (which is something you should get the hang of if you are going to work with data, because it is one of the standard ways of passing large datasets around--not just in Harvard’s labs and research centers, in the world beyond the academy as well). Go ahead and run this, and you should see quite a bit of output . . . see if you can parse it!


### Renaming (finally)

OK. So now we have an array of objects, and each object contains [the two things we need to rename the file: the old path and the new path][10].  We COULD add another loop that zips through our objects, but let’s make things quicker by just adding the rename function to our constructor, since we’re already running that on each and every file in the main loop.


	function VideoFile(folderPath, filename, i) {
	  this.initialFolderPath = folderPath;
	  this.folderName = path.basename(folderPath);
	  this.oldName = filename;
	  this.oldPath = path.join(folderPath, filename);
	  this.newName = this.folderName + "_" + (i + 1).toString().padStart(3, '0');
	  this.newPath = path.join(folderPath, this.newName);
	  this.stats = fs.statSync(this.oldPath);
	  fs.renameSync(this.oldPath, this.newPath);
	}


That’s it--you’ve done it!  You can find the completed script right here in this repository for reference: `tools/demos/rename.js`.
