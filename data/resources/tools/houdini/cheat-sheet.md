# HOUDINI CHEAT SHEET

## MAC

**command** + B with pane active maximizes or returns to normal

hold **shift** while dragging to drag more slowly with the move, scale or rotate tools.

hold **control** while dragging to snap to increments with move, scale and rotate tools.

right click on handle (for move or whatever) to gain access to **handle parameters** (determining the units for the incremental snapping with **control** held down)

on a macbook pro, if you don't want to have to use an external mouse, you'll need to change the `houdini.env` file, adding the following:

```
# HOUDINI MIDDLE MOUSE PAN ENABLE/DISABLE
HOUDINI_MMB_PAN = 0
```

You should find this file in your `/Users/myUserId/Library/Preferences/Houdini/` folder if you poke around.
