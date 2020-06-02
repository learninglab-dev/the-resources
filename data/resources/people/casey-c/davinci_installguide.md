# Davinci Resolve Install Guide

Davinci Resolve is an incredibly powerful editing program developed by Blackmagic Design. They offer it for free to anyone, with the option of buying an upgrade that unlocks certain functions. For the most part those functions, while totally amazing, aren't necessary to the vast majority of everyday video/audio/color tasks. So what they have here is a software that rivals Premiere, Avid and Final Cut Pro X that is 100% free to use!

![](https://www.tuneskit.com/images/resource/davinci-resolve-logo.jpg)

This is a quick walkthrough on how to install it on your machine. Scroll down to find guides for macOS, Windows 10, and Ubuntu 20.04(this will also work for most Linux distros)

### Installing on a Mac

1. [Start by navigating to this link](https://www.blackmagicdesign.com/support/), and select the "Mac OS X" button under the Latest Downloads panel.
  - If the most recent option only says "Davinci Resolve Update", that will work fine, just use that one.

2. Next up, fill out the Register window with your information. Don't worry, they won't send you tons of spam and don't require your credit cards!

![](https://files.slack.com/files-pri/T0HTW3H0V-F0149AEKZDM/screen_shot_2020-06-02_at_11.46.19_am.png?pub_secret=c8a996c9dc)

3. Unzip the .zip file and double click the .dmg file that was inside. This will open a new Finder window. From here, double click "Install Davinci Resolve"

![](https://files.slack.com/files-pri/T0HTW3H0V-F014NM3V7T7/screen_shot_2020-06-02_at_11.48.14_am.png?pub_secret=c7010f92cb)

4. Keep hitting "Continue", "Agree"(only if you agree to the terms and conditions), and eventually enter your password.

5. Once you've yes'd your way through the installer, it should launch normally! You now have access to one truly impressive piece of software! Enjoy!


### Installing in Windows(very similar to macOS)

1. [Start by navigating to this link](https://www.blackmagicdesign.com/support/), and select the "Windows" button under the Latest Downloads panel.
  - If the most recent option only says "Davinci Resolve Update", that will work fine, just use that one.

2. Next up, fill out the Register window with your information. Don't worry, they won't send you tons of spam and don't require your credit cards!

![](https://files.slack.com/files-pri/T0HTW3H0V-F0149AEKZDM/screen_shot_2020-06-02_at_11.46.19_am.png?pub_secret=c8a996c9dc)

3. Double click the .zip file and open the Application file that is inside. This will open a install window(and remember to allow the permissions if prompted).

4. From here, make sure everything is checked that doesn't say "installed" already and continue.

![](https://files.slack.com/files-pri/T0HTW3H0V-F014HAQAAR4/screen_shot_2020-06-02_at_2.28.04_pm.png?pub_secret=4da112d087)

5. Keep hitting "Continue", "Agree"(only if you agree to the terms and conditions!), and eventually enter your password.

![](https://files.slack.com/files-pri/T0HTW3H0V-F0152M68NE5/screen_shot_2020-06-02_at_2.28.45_pm.png?pub_secret=837e427e07)

6. Once you've yes'd your way through the installer, it should launch normally! You now have access to one truly impressive piece of software! Enjoy!

### Installing in Linux

1. [Start by navigating to this link](https://www.blackmagicdesign.com/support/), and select the "Linux" button under the Latest Downloads panel.
  - If the most recent option only says "Davinci Resolve Update", that will work fine, just use that one.

  - Pay close attention to where it downloads to, I'd recommend moving it to your Home directory for ease of use, but if not, be sure to adjust accordingly in the following directory paths.

  - Also, be careful that you're not installing this as the root user, otherwise this may cause user permission errors when running Resolve as a non-root user.

2. Start in Terminal with `cd /path/to/downloaded/installer`


3. Once in the right directory, run `unzip ./DaVinci_Resolve_Studio_16.2.2_Linux.zip`
  - If you're using a different version, be sure to adjust the version number to match your .zip file


4. Finally, run `sudo ./DaVinci_Resolve_16.2.2_Linux.run -i`, it will have you agree to permissions and enter your password. From here, Resolve should launch.
  - If the downloaded installer doesn't have executable permissions, you can restore them with `chmod +x ./DaVinci_Resolve_16.2.2_Linux.run`
