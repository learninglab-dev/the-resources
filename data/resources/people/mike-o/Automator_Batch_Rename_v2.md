## How to use Automator to batch rename a large number of files

Automator is a powerful application that can automate many processes on your Mac. This brief resource is intended to demonstrate how you can rename a large number of files in a single folder, by writing the name of the folder into the file, and appending a counter at the end of the file name, incremented from '001'.

Here is an example of how that could look once completed:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01K23KPBL7/screen_shot_2021-01-21_at_5.21.14_pm.png?pub_secret=3bd9c68663)

To start, open the application 'Automator' on your Mac.

Once open, click 'File' and then 'New'.


When the program opens, a dialog box will appear. Click 'Workflow' and then 'Choose'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KNV1JHEY/screen_shot_2021-01-21_at_4.42.31_pm.png?pub_secret=5eb3fa816a)

Next, on the left side of the application window, select 'Files & Folders', and then double-click 'Get Specified Finder Items'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KGQ6VD8A/screen_shot_2021-01-21_at_4.43.58_pm.png?pub_secret=28133cc810)

After that, double-click 'Rename Finder Items'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KGSMHAN6/screen_shot_2021-01-21_at_5.44.35_pm.png?pub_secret=428bb72a1d)

Another dialogue box will appear after this. Decide if you would like Finder to Add a 'Copy Finder Items' action that will retain a copy of your original files. For this demonstration, we are selecting 'Don't Add'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01L6KKQD08/screen_shot_2021-01-21_at_4.57.37_pm.png?pub_secret=326a0f86be)

This is how the application window will look once you double-click 'Rename Finder Items', and then 'Don't Add'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KA1D8MN2/screen_shot_2021-01-21_at_4.58.06_pm.png?pub_secret=7f3d06be08)

#### Customizing how your files will be renamed

For the purpose of this tutorial, the type of image files that we will be renaming are by an artist named 'Timothy Cole', and they are 'Prints' of the original medium which is 'Wood Engraving'.

We want all three of these pieces of information to be contained in every image file that we have (11 in all), so we are going to set our actions so that we have renamed files that appear as:

'TimothyCole_Print_WoodEngraving_001.jpg',
'TimothyCole_Print_WoodEngraving_002.jpg',

and so on throughout the remaining images.

(Again, you can feel free to customize your naming conventions to suit your needs and preferences.)

To initiate this formula for renaming our files, click on the drop-down menu that says 'Add Date or Time' and select 'Make Sequential'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01L6KLAY9E/screen_shot_2021-01-21_at_5.07.20_pm.png?pub_secret=cd3fe5b49f)

Next select the 'new name' radio button, and copy & paste in the name of your folder containing the images, which we have already named as 'TimothyCole_Print_WoodEngraving'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KVDB1S0H/screen_shot_2021-01-21_at_5.09.26_pm.png?pub_secret=94f6907fc7)

After this, we need to set the manner in which the files will be incremented. Since you may be renaming a large number of files, we want to make all numbers '3' digits long, as seen here:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01L6KLME56/screen_shot_2021-01-21_at_5.10.47_pm.png?pub_secret=7eb5e6cf56)

As well, to match the naming structure above ('TimothyCole_Print_WoodEngraving_001.jpg'), we need to have the incremented numbers separated by an 'underscore' (rather than a 'dash'), so select 'underscore' in the drop-down menu named 'separated by'.

Once you've done that, you can see the example filename in the dialogue box.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KGRMUSNN/screen_shot_2021-01-21_at_5.35.03_pm.png?pub_secret=8507d15383)


Now we just need to add the files into the top action item box, named 'Get Specified Finder Items', like so:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KP1CRH6Y/screenrecording_001.gif?pub_secret=1a6f1264dd)

Once all the files have been successfully added to the 'Get Specified Finder Items' dialogue box, we are ready to 'Run' the automation.

Select 'Run' in the top right of the Automator application window, and the program will initiate.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KVDB1S0H/screen_shot_2021-01-21_at_5.09.26_pm.png?pub_secret=94f6907fc7)


And then we can now go back to our 'TimothyCole_Print_WoodEngraving' folder and see that our files have now been correctly renamed. Success!!

![](https://files.slack.com/files-pri/T0HTW3H0V-F01K23KPBL7/screen_shot_2021-01-21_at_5.21.14_pm.png?pub_secret=3bd9c68663)
