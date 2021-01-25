## How to use Automator to batch rename a large number of files

Automator is a powerful application that can automate many processes on your Mac. This brief resource is intended to demonstrate how you can rename a large number of files according to your own preferences and needs.

To start, open the application 'Automator' on your Mac.

Once open, click 'File' and then 'New'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KNV1CLKE/screen_shot_2021-01-21_at_4.41.36_pm.png?pub_secret=6a303ffb90)

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

You should then see a log at the bottom of the application window that confirms the success of your automation.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01L6MKUQJU/screen_shot_2021-01-21_at_5.40.52_pm.png?pub_secret=e8febfae4a)

And then we can now go back to our 'TimothyCole_Print_WoodEngraving' folder and see that our files have now been correctly renamed. Success!!

![](https://files.slack.com/files-pri/T0HTW3H0V-F01K23KPBL7/screen_shot_2021-01-21_at_5.21.14_pm.png?pub_secret=3bd9c68663)


## Bonus points challenge!!

The above set of instructions will work perfectly well if you have only 1 folder of items that you would like to be renamed.

However, what if you had a series of folders nested inside a larger parent folder that all contain images that you want renamed? And in addition, you would like the names of the parent and child folders to be written into the files themselves?

If so, the filenames would then look something like:

'ParentFolderName_ChildFolderName1_001.jpg'
'ParentFolderName_ChildFolderName1_002.jpg'

and so on

Here is the folder structure that we will use for this challenge, and note that the files have not been renamed yet in any highly consistent manner:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KTPYL010/screen_shot_2021-01-25_at_3.56.54_pm.png?pub_secret=66b95b0c00)

To do this, we are going to create what is called a 'Quick Action'. A 'Quick Action' initiates a service that will perform the renaming operation of nested folders and files without even having to open the Automator application!

To start, open 'Automator'. Once open, click 'File' and then 'New'.

When a dialogue box appears, instead of 'Workflow', select 'Quick Action', and then 'Choose'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KZUTUPA8/screen_shot_2021-01-25_at_3.57.57_pm.png?pub_secret=42df922600)

After clicking 'Quick Action', another dialogue box will appear that we need to customize a bit. In the dropdown that says 'Workflow receives current', select 'files or folders', and in the 'in' dropdown select 'Finder'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KQPXRJ2Z/screen_shot_2021-01-25_at_4.26.40_pm.png?pub_secret=eaa28fae6f)

Now scroll down the list of available 'Actions' on the left part of the application window and double-click 'Run Shell Script'. This is what that will look like:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KD3XNGUF/screen_shot_2021-01-25_at_4.28.21_pm.png?pub_secret=3b43b3da80)

Inside the 'Shell' drop-down menu of the 'Run Shell Script' dialogue box, select '/bin/zsh' if your operating system is on Catalina, Big Sur (or newer). If you are on an older operating system, select '/bin/bash'.

Since the computer for this demonstration is on Catalina, we are going to select '/bin/zsh'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KD4X33HV/screen_shot_2021-01-25_at_4.36.17_pm.png?pub_secret=989a7bc310)

Now we just need to paste the correct code into the window below, and we should be in great shape. Here is the code for you to copy and paste inside the 'Run Shell Script' window:
```
for d in "$@"
do
	cd $d
	for f in *;
  do
      cd $d/$f
      n=1
      for e in *;
      do
          OLDNAME=$d/$f/$e
          EXTENSION="${e##*.}"
          NEWNAME="$d/$f/$(basename $d)_$(basename $f)_00$((n++)).$EXTENSION"
          echo "$OLDNAME ---> $NEWNAME" >> renameInfo.txt
          mv -- $OLDNAME $NEWNAME
      done
  done
done
```

That will look like this in Automator:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01L6H1UVC1/screen_shot_2021-01-25_at_4.39.14_pm.png?pub_secret=d861a39b35)

Now we are ready to give this Quick Action a try!

Make sure to save your Quick Action by selecting 'File', 'Save' and then rename your Quick Action something that you will remember (e.g., 'Rename', 'BatchRename', etc.).

Now navigate over to the folder that you want to rename. Right-click (or control-click) the folder, scroll down to 'Services', and find the item that matches your saved Quick Action. Select that Service.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KU6Q13MZ/screen_shot_2021-01-25_at_4.43.10_pm.png?pub_secret=2d11e55f8e)


The service operation will run very quickly, and once completed you should see that your files have been renamed in the way that we had intended:

'ParentFolderName' <br />
'ChildFolderName1' <br />
'001.jpg' (incremented for each file)

All concatenated together and separated by underscores.

Here is how that looks once completed:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KM665U06/screen_shot_2021-01-25_at_4.44.48_pm.png?pub_secret=aa5813e745)

In addition, you will see inside each child folder a 'renameinfo.txt' file that tells you what the original filenames "were," as well as what they are renamed "to" once the Quick Action is performed.

Double success!! Good luck in your renaming adventures, and stay organized out there.
