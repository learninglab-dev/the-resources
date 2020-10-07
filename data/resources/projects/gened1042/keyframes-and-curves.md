# KEYFRAMES AND CURVES

When you're using After Effects(or really any animation software), you have the benefit of leaning on the reliability of *math* to create objects and motion.

Luckily -- and this is the big point of interest in using animation software -- you generally don't need to do the calculations yourself.

### LINEAR INTERPOLATION
What you're seeing below is an object moving across the *x* axis of an *xy* grid, from -700 pixels to 700 pixels, over the course of 1 second(or 24 frames).

Under gif, you'll see how this is mapped out by After Effects, the red line being the *x* axis and the green is the *y*.

![](https://ll-show.s3.amazonaws.com/public/uploads/SimpleAnimation_yoyo.gif)

Now, while this is an important first step to making an animation, it's also good to note that as a move, it's actually a bit boring. The motion itself is almost like early Pong or Tetris games and if you think about how today's animation. In reality, most motion will be inconsistent in its speed, often slow at the beginning and end, while accelerating in the middle.

### BEZIER INTERPOLATION ("EASE IN EASE OUT")

This is where Bezier curves come in. In the animation here, you can see it has much more of a yoyo'ing style to it, almost like a ball thrown up in the air.

This is important to note that by simply adjusting your *distance / time* calculation, you can create far more dynamic motion. In After Effects, this is referred to as Ease In/Ease Out or Easy Ease keyframing.

And the most exciting thing about this? **Animation programs will calculate these interpolations for you!**

![EasyEaseAnimation_yoyo.gif](https://ll-show.s3.amazonaws.com/public/gened-1042/EasyEaseAnimation_yoyo.gif)


[back to the main page for the workshop](https://resources.learninglab.xyz/simple/projects/gened1042/animation-workshop)
