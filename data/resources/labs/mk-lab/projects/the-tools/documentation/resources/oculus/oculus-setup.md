
### OCULUS GO SETUP

* factory reset by holding power and volume down at same time
* set to developer mode on paired phone
* make sure android build settings are there in your unity install
* in android studio
	* under configure, SDK
		* make sure you have everything from API level 21 up installed (Lollipop on up)
		* the under SDK tools, select the most recent release (that isn't an RC)
		* then under SDK Tools, check "show package details", and
			* make sure to have most recent version of Android SDK Build Tools selected
			* most recent version of LLDB selected
			* android sdk platform tools selected
			* and NDK (though look back at this---settings have changed since most tutorials)
		* then back to configure, project defaults, project structure
			* copy down all three links
				* SDK
				* GPK
				* NDK
			* then add those variables on environment variables
				* will .zshrc work?
				*
