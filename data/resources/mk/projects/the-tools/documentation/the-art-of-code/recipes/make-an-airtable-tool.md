# make an airtable tool

so.

Airtable is cool. We all know this. Even those of us who momentarily resist its charms give in, ultimately.

But it is definitely a *little* bit difficult to enter data into Airtable whenever and wherever you'd like. Slack offers users a comparatively greedy and accepting interface, sucking in data with delight. Airtable resists.

In part this is due to Airtable's demands for structure. If you've ever tried to use Slack to store and retrieve ideas, you'll realize that there's a downside to its gleeful acceptance of all your random thoughts and links and media: you can never find it again.

So let's try to have our cake and it too.

We're going to code some different ways of getting stuff into Airtable. **Including** a Slack slash command.

## using the shell

Airtable actually makes it ridiculously easy to add things with shell scripts. If you go to the [Airtable API site](https://airtable.com/api) (and have logged in), you'll find loads of starter code.

So log in, create an API key (and note it down somewhere safe like 1Password), and start looking around at the shell commands for finding and creating records. We're going to focus on creating records first, because, as we said earlier, this is the biggest pain point (it's actually not so bad *viewing* your data in Airtable once it's there).

You'll end up seeing a command that looks something like this:

```
curl -v -XPOST https://api.airtable.com/v0/appXXXXXXXXXXXX/links \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  --data '{
  "fields": {
    "Name": "Top 5 things every Ableton Push 2 beginner should understand - YouTube",
    "URL": "https://www.youtube.com/watch?v=Vv5hA226s3I",
    "Tool": [
      "Ableton Live"
    ],
    "Medium": [
      "Music"
    ]
  }
}'
```

So let's grab this code and tweak it. Don't copy the above code--copy the code you see in your airtable.com/api interface and paste it into Atom for starters. Once it's there you can tweak the properties. You don't want to tweak the property names (the words `"Name"` and  `"URL"` and `"Tool"` in the example above), because these need to match the columns you have in Airtable **exactly**, but you *definitely* want to change the values because that's how we're going to add new records with characteristics the we define (either by asking for user input or by scraping other sources of data).

You don't absolutely need to understand every last bit of the command, but let's take a second to unpack what's happening here.
- with `curl` we invoke the **extremely** useful [curl](https://curl.haxx.se/docs/manpage.html) command ("transfer a URL"), which transfers data to or from server--this is definitely one of those essential shell tools that you NEED to familiarize yourself with
- the `-v` flag (which is the same thing as `--verbose`) just indicates that you'd like to see all the info on what's happening while the process is running--this can be helpful for debugging if something goes wrong
- the `-X` flag indicates that you are about to declare the method you'd like to use for the request, and then the `POST` indicates that this is a [POST request]((https://www.w3schools.com/tags/ref_httpmethods.asp)), the type of request you'll most frequently use for sending data to a server (in this case the data describing the Airtable record we'd like to add to our base).
- then we get the URL we're targeting with this request: `https://api.airtable.com/v0/appXXXXXXXXXXXX/links`.  You'll note that it's structure isn't random:
    - the `https` indicates that we're going to be connecting to the server using the "Hypertext Transfer Protocol Secure"
    - the  `api.airtable.com` is the domain name where we can access Airtable's server
    - the `v0` means that we are using version 0 of the API (and if Airtable ever came out with a new version of their API that's incompatable with the code we're about to write, they could be nice to us and continue to handle requests structured like ours at the `v0` endpoint--here's an [article that provides an explanation of this sort of thing](https://www.sparkpost.com/blog/api-versioning-best-practices/))
    - the next chunk, which shouldn't **literally** be `appXXXXXXXXXXXX` but rather whichever string you found on the airtable.com/api site, is the unique identifier of your Airtable base--this unique ID should stay stable even if you change your base's name by capitalizing or adding words, etc. (note that Airtable is NOT similarly forgiving of you renaming your columns/fields)
    - finally you should see the name of the **table** you are trying to access.  In our example it is `links`, but you should see whichever table you clicked in the airtable.com/api interface. Note that if you have spaces in your table name you'll see some `%20`s in your URL. Since you can't have spaces in URLs, we need to somehow indicate a space **without** actually using a space, and that's what `%20` is for. If you don't like seeing `%20`, we're right there with you. Here, and elsewhere, as in your column names, you may want to start using underscores or camelcase, turning `my links` into either `my_links` or `myLinks`, as this will make your life easier when writing your code. It's totally fine if the **values** of your cells have spaces (i.e. you don't have to fill the long text field with paragraphs of prose packed with underscores), because these values never show up in your code. But the words we use for our **tables** and **columns** will show up in our code when we use them to "grab" our records and their various properties, and it's definitely easier to do this when we avoid spaces.
- and then at the end of this line (and a bunch of the other lines) we encounter a `\` -- this is there to "escape" the return at the end of the line.  Like, if you are typing this into your shell and want to do it in a series of lines, but DON'T want the shell to interpret the first line as the complete command, what can you do?. You add a `\` before hitting return, and this will let you get to a new line to add additional elements of your command without unintentionally firing the command before all the info is in there. It does make things a little difficult to read (especially when you are new to shell scripting)--you may find it easier to create a file for your script (`myscript.sh`, say), where you can add multiple lines without needing to add the `\` again and again.
- next up are two lines beginning with `-H`, which indicates that we are sending "headers" to the server. These headers are sort of like prefaces to the content we send the server. There are [many types of headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), but here we are
     - proving to the server that we are authorized to perform this request by sending our API key, and
     - telling the server the format of the data we're about to send (in this case JSON or "Javascript Object Notation").
 - finally, with the `--data` flag we indicate that the next section of the command contains the actual data we want to send the server
 - and what we're sending is a string that represents a javascript object with a number of `fields` that should match the columns we see in our Airtable base.

Once you hit enter, this command *should* send a new record to your Airtable base. And if you only need to change a single word or two to make this useful to you--for instance if you are populating the table with records that have a single URL that may vary (a YouTube link, for instance), but other info that's always the same (i.e. everyone of these links is a task assigned to your name, or a specific LL lab, for instance), then you can get what you need done pretty easily with a shell script.

Try creating a file called `url2at.sh` (or something better than that), and type in the following code

 ```
 #!/bin/bash

curl -v -XPOST https://api.airtable.com/v0/appXXXXXXXXXXXX/links \
  -H "Authorization: Bearer V" \
  -H "Content-Type: application/json" \
  --data '{
  "fields": {
    "Name": "another of my links",
    "URL": "'$1'"
  }
}'


echo "\nsent $1 to airtable"

```

So what we're doing here is taking the same command we used above and then adding in the first argument we pass in to the script. To run it we need to
    1. Make it executable by entering `chmod 755 url2at.sh` (from within the directory that contains it, otherwise you'd need to enter the full path to `url2at.sh`).
    2. Type in the command: `./url2at.sh www.youtube.com`.  It should work!
