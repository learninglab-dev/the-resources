<img src="https://live.staticflickr.com/2871/33129125296_1ef184d0c9_h.jpg" width="100%" style="border-radius: 5px; margin: 0px" alt="20170220_001_mMaking_LLUFrg_selects_stills_032.jpg">

# adding to show your work

We'd love you to work in public this year, sharing your ideas even in their development stages (like you'll find [this guy]([https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X/ref=sr_1_1?keywords=show+your+work&qid=1570210084&sr=8-1](https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X/ref=sr_1_1?keywords=show+your+work&qid=1570210084&sr=8-1)) suggesting). 

## the code
To accomplish this, we've created a little route on [show.learninglab.xyz](https://show.learninglab.xyz) that will serve up markdown files that are stored in the [gitub repo](https://github.com/mkuzmick/the-show/tree/master/data/work).

```
router.get('/:id', async function (req, res, next) {
  var markdownFiles = fs.readdirSync(path.join(ROOT_DIR, 'data/work'));
  if (markdownFiles.includes(`${req.params.id}.md`)) {
    fs.readFile(path.join(ROOT_DIR, 'data/work', `${req.params.id}.md`), {encoding: 'utf-8'}, (err, data) => {
      if (err) {res.send("check back in a minute")};
      console.log(data);
      res.render("work",  {
        title: `${req.params.id}`,
        convertedMarkdown: marked(data)
      });
    });
  } else {
    res.render('test', {title: "nothing here just yet.", data: JSON.stringify(markdownFiles, null, 4)});
  }
});
```
I guess you don't **really** need to know what this does, but, to make a long story short, it will take whatever you put at the tail end of `https://show.learninglab.xyz/work/*` and look for a matching markdown file in the `/data/work` directory. Then it will convert that markdown to html and serve it up (for instance, `https://show.learninglab.xyz/work/how-to`  looks for `how-to.md` in the folder and finds this file. It will even handle raw html if you ever need to add anything unusual or gain more complete control over the look of your work-in-progress.

## how do i do it?
So. How do you do it? Here are the steps:

1. open [stackedit.io]([https://stackedit.io/app#](https://stackedit.io/app#)) on your machine.
2. log in using `fellows@learninglab.xyz` (ask MK or someone for the password).
3. click on workspaces, select `work` and you should see a bunch of files in the browser on the left. You can select one and edit it, or you can create one of your own. (Note: everyone has access to everyone else's files--so be a good member of the collective and don't mess with stuff if it looks like someone else cares deeply about it).

And that's it, basically

## how do i help even more?
We'd love ALL of you to load up this folder with `.md` files, and we'd love for a few of you to maybe get psyched about helping us with styling, and also with rendering the code a touch more complex and flexible. 

In fact, why don't we just start a feature-request list right here---the cool thing is that we can all add to it!!!!

* upgrade default style
* handle custom styles
* slack integration?
	* send updates?
	* take data in and add to `.md`
	* slash to add quickly
	* dropdown to add images to s3 and then populate a photo-blog
	* add a `/makeitpublic` or `/publish` slash or some such and just ship a nicely styled version of the post in question.
* find hero image and style differently (maybe identify in alt text?)
* find hero image and add to `og:image` or `twitter:image` to make sure our experience in slack is slicker and more visually appealing
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMTY3MTQyLC00MzkwNDgyNzQsLTE4Mz
Q4OTUwNzUsMjEzNjAyMDM0NV19
-->