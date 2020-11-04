# Puppet Pin: the Basics

The Puppet Pin tool is a deforming tool that determine what part of an image will move, rotate, or remain rigid.

![](https://pbblogassets.s3.amazonaws.com/uploads/2015/12/Bird-Puppet-Tool.gif)

There are 5 different types, each that determine how your image's mesh will behave when deformed:

- Puppet Position Pin Tool: The pins you place with this tool can only control the position of the pin. These pins display as yellow circles in the UI.

- Puppet Starch Pin Tool: These pins add rigidity to your mesh, they display as red circles in the UI.

- Puppet Overlap Pin Tool: These pins display as blue circles in the UI.

- Advanced Pins: Enables you to control the position, scale, and rotation of the pin. This allows significant control over how the Puppet effect mesh deforms around that pin. The mesh can create noticeable shearing if you do not animate all three properties. For example, you can use an advanced pin to animate the head of a character to move to the side and look downwards. However, if you do not animate the rotation manually, the head continues to point in the same direction and create a stretched appearance. These pins display as blue-green circles in the UI.

- Bend Pins: These pins automatically calculate their location from the surrounding pins, similar to starch pins, while allowing you to control of the scale and rotation of the pin. You can use the bend pins to create the appearance of the chest of the character breathing, or of a wagging tail. Another case can be where you scale or rotate a part of the mesh but have the position of the pin automatically move with the rest of the puppet. These pins display as orange-brown circles in the UI.
