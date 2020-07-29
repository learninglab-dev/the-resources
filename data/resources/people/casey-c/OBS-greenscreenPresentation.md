# Using Green Screening as a Presenter in OBS

The OBS functionality is very simple, you really just need to know what you're looking for.

![](https://files.slack.com/files-pri/T0HTW3H0V-F017RSE4P3Q/screen_shot_2020-07-29_at_2.43.06_pm.png?pub_secret=9a1e716524)

To start off, open OBS and you should see that there is a Scene, but no Sources listed in the bottom left corner(if you've done anything with OBS previously, it will reopen to whatever your previous project was instead).

![](https://files.slack.com/files-pri/T0HTW3H0V-F017YQJTRJ7/screen_shot_2020-07-29_at_3.08.54_pm.png?pub_secret=5e3c275360)

- Click the "+" under the Sources panel and select "Video Capture Device"

![](https://files.slack.com/files-pri/T0HTW3H0V-F017RSE7JS2/screen_shot_2020-07-29_at_3.10.56_pm.png?pub_secret=66520f616d)

- Select "Create New" and this will open a new window with a drop down menu to select a Device, choose your webcam.

- Next up, you'll want to include whatever media you're looking to have behind you

- Press the same "+" and select "Window Capture"

- This will open a similar window in which you can select the app you'd like to capture, locate and select that app.

Now you should have both your webcam and your slides in the same screen. You can select each of them to reveal a red box outline, that can be grabbed and dragged to resize as needed.

Once you have both of them roughly in the right place(if your slides are in front of your webcam, you'll want to press the down arrow to the right of the "+" sign in the Sources panel). 

Now, finally to apply the green screen effect:

- Right click your webcam feed, somewhere within the red box outline, and scroll down to select "Filters"

- In the bottom left of that new window, press the "+" in the Effect Filters tab and select "Chroma Key"

![](https://files.slack.com/files-pri/T0HTW3H0V-F018NDSVC0G/screen_shot_2020-07-29_at_2.44.20_pm.png?pub_secret=fb9b2e98df)

- Now that you're here, you can change the values roughly to the point that your background will turn grey.
  - If you're doing a color other than Green, you can change it in Key Color Type.

Unfortunately there is no static combination of these settings that will give a perfect green screen, it will depend entirely on your background. So adjust the sliders until you find the minimum amount of distortion. Once you hit Okay, the Chroma Key will be live!

![](https://files.slack.com/files-pri/T0HTW3H0V-F017HS2B4TH/screen_shot_2020-07-29_at_2.39.59_pm.png?pub_secret=d9734e2653)

From here, you can drag the pane with your webcam feed in it around until you're in the place that works the best with your presentation.
