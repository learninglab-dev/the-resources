

### GET THE ACTIVE OBJECT

Maybe the easiest way to get started is simply to grab hold of the selected object and store it in a variable. Here's how to do it:

`obj = doc.GetActiveObject()`

Once you've got the object stored in `obj` (or whatever you'd like to call it) you can do stuff to it.

### GET ALL THE TOP LEVEL OBJECTS IN DOC

With `objects = doc.GetObjects()` you can get a list of the objects in your scene, maybe so that you can loop through them with `for object in objects:`, etc.

### CREATE OBJECT

```
import c4d

obj = c4d.BaseObject(c4d.Ocube) # Create new cube
obj.SetRelPos(c4d.Vector(20))   # Set position of cube
doc.InsertObject(obj)           # Insert object in document
c4d.EventAdd()   
```
