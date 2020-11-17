# SAMPLE SCRIPTS #

## OPEN WHATEVER WITH WHATEVER ##

### Shell script ###

```
open -a [App] [MyFile]
```
for instance
```
open -a "Google Chrome" https://www.apple.com
```

### Node ###

```
const cp = require("child_process")

cp.spawnSync('open', [
	'-a',
	'Google Chrome',
	'https://www.apple.com'
])
```


## CREATE A FILE WITH CONTENTS ##

Shell script
