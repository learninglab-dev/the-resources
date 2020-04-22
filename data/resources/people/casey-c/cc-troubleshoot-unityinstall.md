# Troubleshooting Unity Installs

There is a bug in Unity Hub's install that seems to pop up every once in a while. Though, unfortunately, it seems that Unity hasn't officially acknowledged this as a problem, it has definitely been documented as something that happens.

## The Problem
Unity Hub's installer will churn and churn for a while and eventually just disappear. No install, no error message, no trace.

## The Solution
Or, more accurately, a list of things that may have fixed it in the past:

#### Wiping out old Installs
Often times, if you have old installs for Unity already on your machine, these can cause an installer error.
  - Simply go to your Applications folder
  - Find your Unity launcher(not Unity Hub)
      - On a mac, this is Applications/Unity/Hub/Editor/[version]
  - Rename "Unity" to something like "Old Unity"

Once this is done, run the installer again.

#### Run a stripped down install
Occasionally, if the install load is a bit too heavy for the bandwidth on your internet, this can cause the install to simply stop. Try installing again and install no dependencies with it. Uncheck any of the options on install(except the debugger), and try running it again. You can always download these later, if you need.

#### [Try installing without the Hub](https://unity3d.com/get-unity/download)
There is an option to install Unity itself without the Hub, this seems to have worked for others out there with this problem. Just navigate to the link above and "Choose your unity + download". 

#### Install, and install again
I can't believe I'm actually offering this as advice, but as a immovably stubborn individual that frequently needs to install this on 10-15 machines at a time, this has worked for me:

Just keep running the installer. Every time it fails, try it again. In the past, it has taken up to 5 false start installs to get it to work. It makes no sense, it can be endlessly perplexing, but patience just might win on this one. That said, please reach out again if you run this 5 times and it still hasn't installed.
