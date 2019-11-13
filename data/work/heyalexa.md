# Hey Alexa...

## A Peas in a Pod Project ft. Marlon

1.  Started by logging into to LL_Fellows with usual password
	- Amazon account already linked to Echo Show and Fire
    
2. Then linked Echo to the same account
	-   Now have:
		- LL_Fellow’s Echo (Wake word “Alexa”)
		- LL_Fellow’s Echo Show (wake word “Echo”)
		- LL_Fellow’s Fire

3. Now to pair two echo buttons to each Echo / Echo show
	- Each labelled with the name they belong to
	- “Alexa set up my echo buttons”
	- Hold button until turns orange
	- Release, will turn blue when paired


## Voiceflow

Voiceflow is a startup that provides an easy-to-use platform for building voice applications for Alexa and Google Assistant. It build-your-uses two basic block types - "speak" and "choice" which are organized through on-screen drag-and-drop. It also provides more advanced features, and allows enterprise customers to integrate APIs into the voice app. 

*What We Did*
 - We've created our own Airtable account to populate with demo records. We follow steps 1-3 in the "Using Airtable with your Alexa Skill" [tutorial](https://learn.voiceflow.com/en/articles/2521183-using-airtable-with-your-alexa-skill). 
 - After the Airtable steps, we created our Voiceflow Test Project. Note: the article uses an older version of Voiceflow, so we had to adjust a few of our steps. 
	 - Instead of dragging the "API" block, we had to drag the "Integrate" block, and then select "Custom API".
	 - The following steps, like adding URL endpoint and Result Variable Mapping, are intuitive since they appear in the same order they do in the tutorial. 
 - We followed the demo through to step 5 and then uploaded the skill to Alexa. 
 - In order to customize your invocation word on Amazon, you need to save the model and then rebuild it. It takes a few seconds to upload to Alexa, so be patient!
 - Make sure that your Alexa speaks in English (US) because it considers different accents, like UK and AUS, to be different languages. 

**After understanding how custom commands can be created through Voiceflow, we decided to delve deeper and make the functionality more useful. We want Alexa to be able to retrieve any record from our database of choice based on some "intent."  To do this, we referred to this link. **

 - 

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjg1Mzg2NTYyLDE0OTk0NjMwNzIsLTEyMD
M3OTYwOSwxNDQxOTQ2NzUxLDE1MzM1MTg5ODksMTkyNzU4NjQ0
MCwtNjkzMDU5MTEsMTQwNzU2OTI0NiwzNTc5OTQzMDQsLTQ3OT
g2MTE3MCwtMTEzMjk0NDA5OCwxMTMwMDAyNTQ5LDE1MjMzMDYz
ODQsLTE0MDAwNjMyODcsLTUzMjQ1OTA3MSwtODA1ODE5MTYyXX
0=
-->