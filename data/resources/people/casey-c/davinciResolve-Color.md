# Color Grading in Davinci resolve

This is by far Resolve's most well developed set of tools, it's what they entered the market with and has consistently held it's place as one of the go-to tools for work like this.

In video, color correction is not only about adjusting colors to reflect "true" interpretations of real colors, but also to generate style and bring unique Looks to your footage. You can make your footage heavily contrasted with deep blacks and sharp whites, wash it out for a dreamier look, green tinged to show the corruption of the story or lean heavily into contrasting base colors, popping the warmth of skintones against blue skies.

![](https://www.borrowlenses.com/blog/wp-content/uploads/2018/07/color-grading-comparison.jpg)

There are quite a few ways to fine-tune your footage with these tools, but the majority of them boil down to changing the values of two sets of three criteria:

- Red
- Green
- Blue

and

- Lift
- Gamma
- Gain

![](https://www.provideocoalition.com/wp-content/uploads/content-uploads/AVH/Lift-Gamma-Gain.jpg)

For example, you may want to correct the skintone of someone on screen that was exposed a little more blue than you'd want to be slightly more natural. In this case, you would decrease the Blue Gamma channel.

![](https://files.slack.com/files-pri/T0HTW3H0V-F014GBYDMD5/adjustbluegamma.gif?pub_secret=03445770a3)

Or, if you wanted to increase the contrast of the entire image, you can globally increase the Gain and decrease the Lift.

![](https://files.slack.com/files-pri/T0HTW3H0V-F014VNMS25B/increasecontrast.gif?pub_secret=b8bf6fad5f)

There is a fourth form of Value, called Offset, this is a global change to all values equally.

If you have more questions about how Lift/Gamma/Gain are defined, [this is an extremely well written article on the subject](https://www.provideocoalition.com/whats-in-a-name/)

## The Tools

As you move around the Color tab, there's quite a few different ways to represent and control how color behaves. Most of them have very similar functions, mostly changing the levels of specific hues and values. The most common tools you'll use are these:

[Color Wheels](https://www.diyphotography.net/easy-colour-correction-grading-using-colour-wheels/)
  - Color wheels map color variations on four x/y graphs in which you can grab the center and focus it towards a specific color, raising the corresponding hue levels to match.

![](https://files.slack.com/files-pri/T0HTW3H0V-F014VLFHDJN/colorwheels.png?pub_secret=b3b722bd6c)

Color Bars
  - Color bars operate similarly to the wheels, but isolate hue level mixing to individual base colors instead of mapping it onto a color wheel.

![](https://files.slack.com/files-pri/T0HTW3H0V-F01589CS61X/colorbars.png?pub_secret=adb907cdeb)

[Color Curves](https://blog.frame.io/2017/09/20/beginners-guide-to-curves/#:~:text=For%20this%20method%2C%20you're,up%20to%20boost%20your%20highlights.)
  - This tool differs slightly from the other two. The line graph can be marked and moved in order to increase or decrease the values in that specific range of color. It can also be done for each, individual color, all of them together, and additionally you can identify a specific hue that is outside of RGB.

![](https://files.slack.com/files-pri/T0HTW3H0V-F014U9AGL93/colorcurves.png?pub_secret=cc5ccc5e81)


## Nodes

The last, important bit of information you'll need before you jump into color corrections is where these changes go. Instead of working with Adobe's layer system, or applying the effects directly onto an individual clip, like you would in Final Cut Pro, Resolve works in "Nodes".

![](https://files.slack.com/files-pri/T0HTW3H0V-F014X4CT1A6/nodes.png?pub_secret=b95a099b14)

This is simply a system of housing for types of corrections you're applying. While you can apply all your corrections to a single node, it can help with accuracy and organization if you were to use one node for all of your color mixing, another for increasing contrast, and a third for applying a vignette. This way you can adjust the color of the shadows in your shot without adding that color to the circle of your vignette.

This also opens your options up to much more powerful applications of keying, split toning, masking, tracking and animating grades. Below are some guide links for slightly more advanced tools available in Resolve's Color tab.

- [Node Types](https://www.youtube.com/watch?v=LOLoVnSClSs)
  - These will enable you to apply color grades with increasing levels of granularity.


- [Keying using Qualifiers](https://www.youtube.com/watch?v=UlHRy_qzOyY)
  - How to use Resolve's Qualifier tool to single out certain hues in your image and apply changes to them, or isolate them from global changes.


- [Keyframing Color Grades](https://www.youtube.com/watch?v=1S_-B5FWuhs)
  - Used in animating your color grade to change over time.
