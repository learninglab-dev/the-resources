## Audio Peak GIF Generator

Make a GIF from your own videos with these simple steps!
> this program combined the **audiopeaks** project (which sought to develop code that located the moments of peak audio within a video clip) and the **GIF-machine** project (which produced a program that enabled users to create gifs in the command line!)
*Happy GIF making! <3*
Steps:
1. open Terminal 
2. navigate to gif-machine
	- `cd Desktop`
	- `cd Development`
	- `cd gif-machine`
3. record a video!
	- open the QuickTime Player application
	- go to File -> New Video Recording (shortcut: command + option + N)
		- tip: make some noise at some point in the recording! 
	- save your video to the Desktop
	- copy the file pathname 
		- right click the file, hold down option, and click Copy "[filename].mov" as Pathname
4. in the Terminal, run `tools --peakGif [file pathname]`
5. enjoy your GIF!

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NzQyOTcyNjMsMzk4MTQ0MjU0LDE3NT
k2MzU1MTAsMTk4NTQyODkwMiwtMjEyNDE1ODkxNF19
-->