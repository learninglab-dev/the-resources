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

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ5OTQ2MzA3MiwtMTIwMzc5NjA5LDE0ND
E5NDY3NTEsMTUzMzUxODk4OSwxOTI3NTg2NDQwLC02OTMwNTkx
MSwxNDA3NTY5MjQ2LDM1Nzk5NDMwNCwtNDc5ODYxMTcwLC0xMT
MyOTQ0MDk4LDExMzAwMDI1NDksMTUyMzMwNjM4NCwtMTQwMDA2
MzI4NywtNTMyNDU5MDcxLC04MDU4MTkxNjJdfQ==
-->