# OBS RESOURCE DEVELOPMENT LOG #

all the steps to produce the steps

## DAY BY DAY ##

just things that happened on specific days, that don't quite fit in the structure
### 20200921 ###

Today we brought in a sample of the `.json` for a scene collection (the file you get if you hit "Scene Collection" => "Export"). Even a small one of these will run hundreds of lines, so they can be tough to parse. But here appears to be the structure of the root level:
```
{
	"current_program_scene": ,// string : name of the scene you want to start with
	"current_scene": "images-from-_mixed-20200903.163801", // but how is this different? TEST!
	"current_transition": "Fade",
	"groups": [], // empty array in my collections so far
	"modules": {} // properties like "auto-scene-switcher", not sure about this just yet	"nam": "_mixed-20200903.163801",
    "preview_locked": false,
    "quick_transitions": [], // array of transitions with hotkeys
    "saved_projectors": 
}
```



## LINKS AND REFERENCES ##

