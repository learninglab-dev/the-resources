## CREATING THE ROCK-THE-PARTY TOOL

As you've worked in terminal you've typed a series of instructions, which you can make visible by entering the `history` command. If you do this you might see lines that look something like this:
```
501  ls
502  cd Development
503  ls
504  cd the-art-of-coding
505  ls
506  atom .
507  history
```
Here we changed directories to get into the `~/Development` folder, and then into  `~/Development/the-art-of-coding` so that we could open it up in Atom. In this tutorial we're going to learn how to write a "script" that contains a series of lines just like this. You can really think of it as you would a script in a dramatic context--it's a series of lines that will get committed to memory, and that will get recalled/enacted in a very specific order. For instance, to get the behavior we see above, we would use the following lines:

```
#!/bin/bash

cd ~/Development/the-art-of-coding
atom .
```
That first line opens up the script by telling the computer which app to use as the interpreter.  Were this a node.js script we'd enter `#!/usr/bin/env node`, but for shell scripts, we use `#!/bin/bash`.  

But where do we put these lines?  And how do we run them? Let's do a quick step-by-step runthrough of what we'd do to write a simple executable script.

1. Navigate to a folder you'd like to use to hold your scripts.  You'll probably enter something like
    ```
    cd ~/Development
    mkdir scripts
    cd scripts
    atom .
    ```
2. Now--in Atom--create a new file and call it `myscript.sh`.  Start off with that `#!/bin/bash` line and then add some commands it might be interesting to chain together.
    ```
    #!/bin/bash

    cd ~/Development
    echo "These are all of your development projects:"
    ls
    echo "done."
    ```
3. To actually RUN this script you'll need to find it in your Terminal and make it **executable**, which you can do by typing
    ```
    chmod 755 ~/Development/scripts/myscript.sh
    ```
    And once you've done that, all you need to do is enter the full path to your script to run it:
    ```
    ~/Development/scripts/myscript.sh
    ```
    (if you put your script somewhere else, you'll need to enter something different)
4. Now let's start the actual script you'
