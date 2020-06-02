# Creating a Catalina Install Drive

First steps are going to be to create an install drive, something for your computer to run on while your main hard drive is being wiped and reinstalled.

![](https://i.redd.it/m8c20gchf7231.jpg)

Before you run off looking for that one drive you're sure you stuck in a junk drawer somewhere, go to the App Store and download macOS Catalina. It's a bit large, so it'll take a bit to download.

While that runs, go looking for that junk drawer drive your aunt gave you of photos of her extended family, most of whom you've never met anyways. This drive will need to be 12gb or larger(recommended, but might be able to get away with less).

Once you're back, if the Catalina download is done, it will probably start trying to install it on your computer, just quit out of that.

## Now, let's prepare the drive

1. Plug it in.

2. cmd + space "Disk Utility"

3. Drop down the "View" tab and select "Show All Devices"

4. Select the root drive in the side bar.

5. Click on "Erase"

6. Choose "Mac OS Extended(Journaled)" as the format.

7. Choose GUID Partition Map as the scheme.

8. Rename it "installdrive" and hit Erase(before this point, make sure there's nothing important on the drive)

9. cmd + space "Terminal"

10. enter `sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/installdrive`

11. you'll have to enter your password(Terminal shows no characters when typing passwords, just type and hit enter)

12. let it run, and you should have a functioning install drive!

## Go [here]() for Part 2!
