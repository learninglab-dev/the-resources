## Renaming a collection of files inside nested folders

This resource will permit you to very quickly rename any number of files inside a nested folder structure, and will add the names of the folders as prefixes in the filenames.

This is how the files would look after this is completed, and note that the names of both folders are included in the filenames of the images:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KM665U06/screen_shot_2021-01-25_at_4.44.48_pm.png?pub_secret=aa5813e745)

To accomplish this, we will create a 'Quick Action' in the Mac application 'Automator'. Once this Quick Action is established, it will exist as a right/control-clickable operation in Finder, so going forward we will not need to open Automator to perform this action.

Here is the folder structure that we will use for this resource, and note that the files have not been renamed yet in any highly consistent manner:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KTPYL010/screen_shot_2021-01-25_at_3.56.54_pm.png?pub_secret=66b95b0c00)


To start, open 'Automator'. Once open, click 'File' and then 'New'.

When a dialogue box appears, instead of 'Workflow', select 'Quick Action', and then 'Choose'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KZUTUPA8/screen_shot_2021-01-25_at_3.57.57_pm.png?pub_secret=42df922600)

After clicking 'Quick Action', another dialogue box will appear that will need to be customized a bit. In the dropdown that says 'Workflow receives current', select 'files or folders', and in the 'in' dropdown select 'Finder'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KQPXRJ2Z/screen_shot_2021-01-25_at_4.26.40_pm.png?pub_secret=eaa28fae6f)

Now scroll down the list of available 'Actions' on the left part of the application window and double-click 'Run Shell Script'.

Inside the 'Shell' drop-down menu of the 'Run Shell Script' dialogue box, select '/bin/zsh' if your operating system is on Catalina, Big Sur (or newer). If you are on an older operating system, select '/bin/bash'.

Since the computer for this demonstration is on Catalina, we are going to select '/bin/zsh'.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KD4X33HV/screen_shot_2021-01-25_at_4.36.17_pm.png?pub_secret=989a7bc310)

Now we have to insert some code inside the 'Run Shell Script' window for this Quick Action to work:

Paste the following code into the 'Run Shell Script' window.
```
IFS=$'\n'
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

Now we are ready to give this Quick Action a try.

Make sure to save your Quick Action by selecting 'File', 'Save' and then rename your Quick Action something that you will remember (e.g., 'Rename', 'BatchRename', etc.).

Now navigate over to the folder that you want to rename. Right-click (or control-click) the folder, scroll down to 'Services', and find the item that matches your saved Quick Action. Select that Service.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KU6Q13MZ/screen_shot_2021-01-25_at_4.43.10_pm.png?pub_secret=2d11e55f8e)


The service operation will run very quickly, and once completed you should see that your files have been renamed in alignment with the nested folder structure.

Here is how that looks once completed:

![](https://files.slack.com/files-pri/T0HTW3H0V-F01KM665U06/screen_shot_2021-01-25_at_4.44.48_pm.png?pub_secret=aa5813e745)

In addition, you will see inside each child folder a 'renameinfo.txt' file that tells you what the original filenames "were," as well as what they are renamed "to" once the Quick Action is performed.

Good luck in your renaming adventures, and stay organized out there.
