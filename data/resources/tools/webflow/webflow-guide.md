# A Comprehensive Guide to Webflow for Non-Coders

## Table of Contents
- [Guide to Making a Website in Webflow](#guide-to-making-a-website-in-webflow)
  * [What is Webflow?](#what-is-webflow-)
  * [Getting a Free Webflow Account](#getting-a-free-webflow-account)
- [Learning to Use Webflow](#learning-to-use-webflow)
  * [Online Video Tutorials](#Online-Video-Tutorials)
  * [What Do I Need to Know about Web Design Before Starting?](#what-do-i-need-to-know-about-web-design-before-starting)
- [Menus and Buttons](#menus-and-buttons)
  * [Key for Top Bar](#key-for-top-bar)
  * [Breakpoints Section](#breakpoints-section)
  * [Key for Left Panel](#key-for-left-panel)
  * [Key for Right Panel](#key-for-right-panel)


## What is Webflow?

Webflow is a powerful low-code/no-code website builder that allows for maximum flexibility. You can make websites based on templates or start from scratch. Webflow also allows you to create websites through **“dynamic content”**--meaning that you can create multiple pages with the same layout, but with different information--very rapidly and without painstakingly editing each page. Finally, Webflow allows you to change your layout depending on the screen size (called  [ breakpoints](#breakpoints))to make your website look good on mobile devices.

## Getting a Free Webflow Account

Go to [Webflow](https://webflow.com/) and click the purple button in the upper-righthand corner that says “Get started — it's free.”

![](https://i.imgur.com/P4l9nXP.png)

You can connect Webflow to your Harvard account by signing in through Google, or make your own account with a different email address.

![](https://i.imgur.com/TSbwDr7.png)

Keep in mind that you will only be able to make two pages with a free account. If you need more space, please contact the Learning Lab team at [help.learninglab.xyz](help.learninglab.xyz)

Learning to Use Webflow
---
## Online Video Tutorials

1. This [comprehensive introduction](https://www.youtube.com/watch?v=Omz_ae1J4C8) is very well explained and easy to understand. I recommend starting here. It is broken up into 12 sections:
* [0:00](https://www.youtube.com/watch?v=Omz_ae1J4C8&t=0s) Getting Started
* [5:45](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=0s**) Understanding the Dashboard
* [11:40](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=700s**) Adding & Editing Text/Buttons/Images
* [20:30](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=1230s**) Adding Layout Bundles 
* [21:40](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=1300s**) Understanding Navigation and Organizing Your Site 
* [23:00](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=1380s**) Upgrading Your Site 
* [26:00](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=1560s**) Website View Settings
* [26:30](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=1590s**) Mobile/Desktop/Tablet Site 
*  [31:00](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=1860s**) Animations and Interactions
*  [37:00](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=2220s) Project Settings (Logo, SEO, etc.)
*  [41:50](**https://www.youtube.com/watch?v=Omz_ae1J4C8&t=2510s) Starting From a Template

2. **Webflow University:** Learn all about how to use Webflow for free from Webflow University. In particular, this[ Webflow 101 Crash Course](https://university.webflow.com/courses/webflow-101-crash-course) will get you on your feet. These videos go a bit fast and are not always easy for no-coders to understand (lightning-fast attempts at jokes do not help).

## What Do I Need to Know about Web Design Before Starting

### [The Box Model](https://www.youtube.com/watch?v=MrAnu4zdjjY)
All elements--sections, paragraphs, headings, images, etc.--have boundaries that can be represented as boxes. These boxes are spaced in relation to one another and are often **nested** inside one another. The Box Model allows us to **design responsively,** i.e. making a website that will look good on a variety of different screen sizes. 
![](https://j.gifs.com/oQ9Z7Y.gif)



### [How Elements Relate to One Another: “Parents,” “Children,” “Siblings,” and “Ancestors”](https://www.linkedin.com/learning/css-selectors-2/the-html-family-tree-parents-children-ancestor-descendant-siblings?trk=lynda_redirect_learning)
The Navigator is a vital tool that functions like a family tree for elements. It maps out your webpage from top to bottom.The outermost elements are called “parents,” and anything within them are called “children.” 

![](https://i.imgur.com/ZHF0Hwi.jpg)

![](https://i.imgur.com/NUgFQFe.png)


Let’s look at the images of the Navigator above. Here, the parent is the **Body.** The Body is always the bottom-most layer into which all elements are placed. The Body’s children are the **Section** and the **Container.** The Section and Container are siblings because they are both children of the Body, but are not nested within one another. Section also has two children: the **Heading** and the **Image.** Sadly, we generally don’t call these “grandchildren” to the Section or “great-grandchildren” to the “Body!” Instead, the Body and Section are “ancestors” and the Heading and Image are “descendants.” Otherwise, describing how elements are related to one another gets too complicated. For the same reason, there is no such thing as “aunts” or “nieces,” or “second cousins twice removed,” for that matter. For the purposes of web design, anything that’s not within a direct lineage is unrelated.

In Webflow, style changes that you make to the parent are automatically made to the children as well. If you want a child element to be different, style it individually. 

The more or taller the children are, the taller your parent element will be. This happens automatically. If you want your parent element not to adjust its size based on the children nesting inside it, insert fixed values (Width and Height under **Layout** on the **right Style Panel.**)

### To Review: How Websites are Layered
Understanding how websites are layered is important because, in order to build one, you will need to "nest" elements inside one another, like the example below. You can think of website elements like matryoshka dolls. Each element rests inside one another. The outermost element (the Body) is called the "parent" and the ones inside it are called "children." The largest doll (again, the Body) is called an "ancestor" in relation to the smallest two dolls, the "descendents." The smallest two dolls (the Heading and Image) are "siblings" because they are positioned next to one another and are not nested. There is no such thing as aunts or nieces--for the purpose of web design, anything that is not a direct lineage is unrelated. 


![](https://i.imgur.com/xPtyWJw.jpg)

## Menus and Buttons

**Note:** Some explanations have links to videos on Webflow University. Not all of these are up-to-date, so you might see that the layouts are slightly different. The information itself should be helpful, however, which is why they are included. 

There is one top menu bar (red) and two side menus: the navigator (green) to the left and the styler (yellow) to the right. **Because Webflow allows only limited drag-and-drop capabilities, you must format your website by adjusting options in these menus.**

![](https://i.imgur.com/KCypW91.png)

### Key for Top Bar 
(Red, from left to right)

#### Home and Settings ![](https://i.imgur.com/3mggM5T.png) 
Takes you to three additional options: back to your dashboard, to your project settings, and to an editor (not helpful/relevant until after you publish your project, so feel free to ignore).

#### Page ![](https://i.imgur.com/FlnLtBL.png)
Tells you which page you are editing on your website. If a specific page is clicked, it will take you to Pages in the Navigator on the left. 

#### Toggle Preview ![](https://i.imgur.com/M6JpJzm.png) 
Shows you a preview of what your final website will look like. It is handy to toggle back and forth between this view and the editor. 

---

### Breakpoints Section (Middle of Bar)

#### What is a breakpoint?
A [breakpoint](https://www.browserstack.com/guide/responsive-design-breakpoints) is the “point” at which a website’s content and design will adapt in a certain way in order to provide the best possible user experience. This is why the layout of the same website might look different in a mobile view than on when looking at it on a computer. 

##### Add Larger Breakpoint ![](https://i.imgur.com/p5MH1LE.png) 
Allows you to add a larger breakpoint than the desktop base breakpoint. 

##### Desktop Base Breakpoint ![](https://i.imgur.com/V5ynkAt.png) 
This is the standard view to which each page is automatically sized, ideal for computer monitors. Once you populate your webpage in this view, you can then go into the other breakpoints and change things so they fit on the screen. The breakpoints are “nested”: Editing something from the desktop base breakpoint will change that thing in all other breakpoints. However, if you edit something in a smaller breakpoint, like the tablet breakpoint, it will only change that item there and in any smaller view (991 px and down). Therefore, changing something in the smallest breakpoint, the mobile portrait breakpoint will only change it in that view.

##### Tablet Breakpoint (991 px and down) ![](https://i.imgur.com/Zxfcd1X.png)
This is a view ideal for ipads and other large tablet devices. If you change anything here, that item will also change in the mobile landscape and mobile portrait breakpoints, but not in the desktop base breakpoint.

##### Mobile Landscape Breakpoint (767 px and down) ![](https://i.imgur.com/Bg1NWVp.png) 
This is a view ideal for small screens like iPhones when viewed horizontally. If you change anything here, that item will also change in the mobile portrait breakpoint, but in no other breakpoint.

##### Mobile Portrait Breakpoints (478 px and down) ![](https://i.imgur.com/9qk7YV2.png) 
This is a view ideal for small screens like iPhones held vertically. If you change anything here, it will change in no other breakpoint, since it is the smallest view. 

##### Canvas Settings ![](https://i.imgur.com/Cbq11oO.png)

![](https://i.imgur.com/B3yb7WG.png)

This tells you how many pixels 
wide your canvas is. You can also adjust the size by percentage. If you click this button, a larger dropdown appears with many helpful settings. If you **show element edges,** you’ll see more clearly how items on your page are nested in one another (for example, you’ll see the edges of a textbox that is in a Section block). **Show empty elements**--like a Section block--will also help you add content into them, or delete them if you don’t need them anymore. **X-ray Mode** limits the amount of colors you see on your webpage, which helps you to visualize what item is inside what other item. The two **guide options** in the dropdown menu will provide vertical lines to help you to align your items precisely. **Vision preview** shows you how people with visual impairments will see your site so that you can change it and make it more accessible.


---

#### Undo/Redo Button ![](https://i.imgur.com/KCQMqE8.png)
You can also use `CTRL/ALT + Z` for “Undo” and `CTRL/ALT + SHIFT + Z` for “Redo.”

#### Changes Saved/ Not Yet Saved ![](https://i.imgur.com/RRAJiGb.png) or ![](https://i.imgur.com/LnrxKrf.png)
If the green checkmark appears, your changes have been saved. If the grey `...` appear, Webflow is in the process of saving your most newest action.

#### Export Code ![](https://i.imgur.com/ckA2QOb.png) 
If you want to export your website’s code, click this button. You can export in HTML, CSS, or JS. 

#### Share Project ![](https://i.imgur.com/SeWgFCS.png) 
If you want to share your project with others, click this button. It gives you the option of sending a read-only link or inviting collaborators to edit your project with you.

#### Publish Website ![](https://i.imgur.com/3rgEMmw.png) 
If you are all done with your website, you can publish it to the web by clicking here and indicating which domain you will use. Publishing your website may end up costing money, so contact your Learning Lab liaison prior to publishing so they can give you the right domain name to use for free.


## Key for Left Panel 
(Green, from top to bottom)

| Image_of_Left_Sidebar| Explanation |
|:--------:| -------- |
| ![](https://i.imgur.com/EYXomyt.png)|**When nothing is selected, the panel automatically shows you the navigator bar, which is also the third button down.** It shows you an overall layout of your page; in other words, what elements are nested within what. **The Body** is the lowermost base that covers the entire page, like a “background layer” in Photoshop.           |
| ![](https://i.imgur.com/CxXg51X.png)|[**Add:**](https://university.webflow.com/lesson/add-elements-panel) There are two tabs, **Elements** and **Layouts**. In the Elements Tab, you can add things one by one into your webpage. The dropdown list is listed in order of what you need to add first. You must start by adding something from the **Layout dropdown.** A **Section,** for example, is literally one part of your webpage. Every webpage is made up of a series of sections. After inserting your section, you can drag in a **Container,** which will initially be center aligned, or a **Div Block,** which will initially be left aligned.  Then, you can drag in what you actually want to be in that section: text (in the **Typography** dropdown), pictures and videos (from the **Media** dropdown), buttons (in the Forms dropdown), and other elements. The **CMS** dropdown is for adding sections that can be populated with data that you can then make automatically fill in on website pages. The symbol for CMS looks like a stack of coins. We’ll talk more about CMS later.Add: There are two tabs, Elements and Layouts. In the Elements Tab, you can add things one by one into your webpage. The dropdown list is listed in order of what you need to add first. You must start by adding something from the Layout dropdown. A Section, for example, is literally one part of your webpage. Every webpage is made up of a series of sections. After inserting your section, you can drag in a Container, which will initially be center aligned, or a Div Block, which will initially be left aligned.  Then, you can drag in what you actually want to be in that section: text (in the Typography dropdown), pictures and videos (from the Media dropdown), buttons (in the Forms dropdown), and other elements. The CMS dropdown is for adding sections that can be populated with data that you can then make automatically fill in on website pages. The symbol for CMS looks like a stack of coins. We’ll talk more about CMS later. **In the Layouts Tab,** you can select a variety of prefabricated sections into which you can insert images or replace text. This is an easy way to make a website fast!         |
|![](https://i.imgur.com/sbRwp1i.png)|[**Symbols:**](https://university.webflow.com/lesson/symbols) Symbols are a way to make a “master key” of any element so you can then copy that element and anything inside it and use it over and over again on any of your pages within your project. Changing something within your symbol will change the same thing in all other places.          |
| ![](https://i.imgur.com/v8R4rTw.png)|**[Navigator:](https://university.webflow.com/lesson/navigator)** **Note:** Older videos show the navigator on the right panel, but it has since been moved to the left panel. Everything else about it remains the same): The third button (four horizontal lines that look like a paragraph) takes you to the Navigator. The Navigator is like a family tree for elements that maps out your webpage from top to bottom. It shows you the layout of your page and what elements are inside nested what. The outermost elements are called “parents,” and anything within them are called “children.” To learn more about “parents,” “children,” “ancestors,” and “descendants” from an HTML point of view--which will help you understand what Webflow is visualizing as this panel--look at the simple video explanation [here.](https://www.lynda.com/CSS-tutorials/HTML-family-tree-Parents-children-ancestor-descendant-siblings/800217/2811138-4.html)           |
| ![](https://i.imgur.com/SOsFks0.png)|**[Pages:](https://university.webflow.com/lesson/clients-guide-to-the-editor-pages-tab)** Pages show you each page you have made for your website. This is how you easily navigate from working on one page to working on a different page. If you add a new page (top right corner), then it will appear under **Static Pages.** The settings button (gear) in the right corner of each page will allow you customize settings for the page like the page name, adding a password, and how the page comes up on search websites and social media. **Utility Pages** are default templates for your site’s 404 page (error page), password page (entering a password), and search result page. You can customize these pages to look the way you want.          |
| ![](https://i.imgur.com/A4sfCNq.png)|**[CMS Collections:](https://university.webflow.com/lesson/webflow-collections-overview)** CMS Collections are like a database where you can input content that can [then be configured to automatically populate your pages](https://university.webflow.com/courses/cms-and-dynamic-content?video=ipR6xq3ZjII) (i.e. be used as **dynamic content**).To compare to a standard database: **Bases** are like your entire database. You can add a new base by clicking the stack of coins with the plus symbol at the top left corner. Then click “ + Add New Field.” **Fields** are like your columns, or your categories by which you organize your data. You can add custom fields by going to your base (see above) and hovering over the arrow to the right. Then click on it when it becomes a gear box. **Items** (or **Content**): This is like your rows, or each item about which various data is entered according to the prompts made by each field. So for example, if I was to make a list of people’s names, dates of birth, and phone numbers and called the database “X”: “X” would be the Base; “Name,” “DOB,” and “Phone #” would be the Fields, and each person and their information would be the Items or content.          |
|    ![](https://i.imgur.com/EsUvszA.png)| **Ecommerce:** The shopping cart icon is for setting up a store. A step-by-step setup guide will appear to the right once you click on this icon. Since setting up an online store is likely not relevant to your school project, we will not be discussing it in detail here, but a 20-minute video course on Webflow University about how to set up your ecommerce site is available [here](https://university.webflow.com/courses/webflow-ecommerce).          |
| ![](https://i.imgur.com/eF7Lcfw.png)| **[Assets:](https://university.webflow.com/lesson/assets-panel)** Assets is a handy tab that looks like two pictures and is where you can store all your media for repeat use. You can drop your files in or use the cloud button to the right to select a file. You can organize your files with folders, which you can make by clicking the button that looks like a folder with a **+** sign. As long as you're in the same project, you should be able to use these assets, even if you are working on different pages.|
| ![](https://i.imgur.com/nSx4geN.png)| **Settings:** Settings allows you to access several advanced features. These features are probably not going to be useful for you unless you want a full-time professional website (and in some cases you’ll need to pay extra to use them). **Search** is NOT for searching for text on your page. It is an indexing tool for your CMS data. It’s a way, in other words, to make a site search map. **Backups** are a way to add a backup to your project. **Ecommerce** is a way to configure your store settings, including general information (store name, address, etc.), payment methods you accept, checkout, shipping, taxes, notifications, and integrations with other applications. **Email** is where you enter information about how you want your emails to look for your ecommerce webpage. |
| ![](https://i.imgur.com/FBvFBvB.png)|**[Audits:](https://university.webflow.com/lesson/audit-panel)** Audits check to see if there are any areas in your website that could be made better, faster, or more accessible. You’re probably not going to need this unless you are going to keep your website long-term, but it may be helpful just to check Webflow’s suggestions.|
|  ![](https://i.imgur.com/Rgw9PhG.png)| **Search:** The spyglass is for searching for key terms or elements on your website pages. When you click the spyglass, a box appears on the top of the page where you can enter your search term. You can designate for what you are searching by clicking the gear on the right side of the search bar.          |
|  ![](https://i.imgur.com/L8ZVf2y.png)| **Video Tutorials:** This useful panel takes you to a variety of tutorials that are organized by topic. If you click on a video, it will appear to the right instead of appearing in a new tab unless you click **Open Video in new Tab** at the top of the screen. If you want to close the video, click **Close.** You can also go on to the next video by hitting **Next Video.** If you are not finding the tutorials that you need, you can always [search Webflow University](https://university.webflow.com/) for the video that you need. Videos also have transcripts below them on the Webflow University pages.          |
| ![](https://i.imgur.com/71eQVH2.png)|**Help Button:** Confusingly, the help button doesn’t do anything if you click it, **you have to hover over it** before a sidebar appears with three options. If your window browser is really narrow, it won’t appear until you expand the width. **Help and Feedback** gives you four different options: looking at **text and video guides,** going to **courses on Webflow,** going to the **Community Forum** to ask questions, or **sending feedback or a help request** (this is a good second step after contacting your Learning Lab Liaison, who can probably help you more quickly). **Keyboard Shortcuts** is a large key that shows you what all the shortcuts are. **[CSS Preview](https://university.webflow.com/lesson/css-preview)** will allow you to see the CSS script for each particular item you click on. This is only useful if you already know CSS and want to manipulate the code. **Reset Walkthrough** will allow you to get the virtual tour again.           |


## Key for Right Panel 
(Yellow from top to bottom)

### The Style Panel



| Image_in_the_Right_Sidebar           | Explanation |
| -------- | -------- |
|  ![](https://i.imgur.com/u1pdgNd.png)| **[Style Panel:](https://university.webflow.com/lesson/style-panel-overview)** The style panel, or the paintbrush tab, is where you can style any element, whether that be a section, image, text, or video. The aspects you can **style are an element’s selector (Tag), layout, spacing, size, position, typography (not always applicable), backgrounds, borders, and effects. **The menu may look intimidatingly long to you with its many different options, so we are going to explain what each one does section by section, from top to bottom. 

#### Selection Indicator

![](https://i.imgur.com/h6F7pUm.png)

The very top of the style panel shows what element you have selected on your page. This is very helpful because sometimes you can accidentally click on another element and style that instead of the one you want. Always double-check here to make sure that you’ve selected the right item to edit. If you select a different element in the Navigator Panel on the left, the selection indicator here will automatically change to match it. So if I selected “Container” in the Navigator Panel, the selection indicator will also change to “Container.” You’ll also see the element you have selected on the page bordered by a blue line.

#### Expand, Collapse, and Focus Mode

![](https://i.imgur.com/6PmSWCR.png)

The `...`  to the right of the selection indicator will allow you to **expand or collapse all the sections below it** for easy viewing. It also will allow you to go into **[Focus Mode](https://webflow.com/feature/focus-mode-in-style-panel)** which automatically collapses all other sections than the one you are working on. This keeps the panel from becoming overwhelming and makes it easier to navigate. You can turn off the “Focus Mode” by clicking on it again after it has been selected. 

#### Selector

![](https://i.imgur.com/dHj47aL.png)

The selector allows you to categorize your elements into **classes or tags. Tags allow you to set the default styles for batches of elements, allowing you to make sweeping changes. Classes can override tags for more specific situations.**

#### Tags

![](https://i.imgur.com/IvaqbDq.png)

**[Tags](https://university.webflow.com/lesson/html-tags)** are used to indicate how your web browser formats and displays content. Tags are used for setting defaults, which can then be overridden with other tags or classes. Tags are also particularly helpful for creating consistent rich text (text with specific options for bolding, italicizing, changing the page formats, etc.). There are several different types of tags:

##### ![](https://i.imgur.com/hwlnowI.png) **[Body (All Pages)](https://youtu.be/1HlU4tjxsQI?t=31)**
Body (All Pages) allows you to select attributes that will make them defaults for any page or element you make after that. For example, you would use Body (All Pages) to make a default font across all pages, textboxes, buttons, and other elements. **Once you set your defaults using the Body (All Pages) tag, you can use classes to override those defaults in specific areas or for specific elements.** 
In order to use the Body (All Pages) tag, you must first select “Body” in the Navigator panel on the left or on the page and then select the magenta “Body (All Pages)” under “HTML tags.”

##### ![](https://i.imgur.com/8QFl3Yp.png) [Headings](https://youtu.be/1HlU4tjxsQI?t=164) 
Heading tags can be made to indicate specific styles for **All H1(–H6) Headings.** Let’s say you make an **All H1 Headings** tag and indicate that you want Montserrat font in size 50 px. Anytime thereafter you drop in an H1 heading into your project, it will automatically have Montserrat font in size 50 px, because *all H1 Headings* will act the same. Even if your Body (All Pages) tag says that your default font is a different size, the Headings tag will override it. **A class can override your Headings tag by indicating in certain areas when you want the attribute (in this case, font and size) different.** 

##### ![](https://i.imgur.com/wRJ37wb.png) [Paragraphs](https://youtu.be/1HlU4tjxsQI?t=290) 
Paragraph tags can be made to indicate specific styles for **All Paragraphs.** Web designers commonly use All Paragraphs to add a specific line height (controls the height for each line of text) or standardized spacing in between paragraphs. 

##### ![](https://i.imgur.com/o1VCmhB.png) [Links](https://youtu.be/1HlU4tjxsQI?t=352)
Link tags can be made to indicate specific styles for “All Links.” For example, if you wanted to change the color of all the links found on your website from the standard blue to pink, you could do this using the tag “All Links.” Be careful, though, because this will also affect all elements that are based on links, like link blocks or buttons. If you don’t want sweeping changes like this, make a class instead to adjust more finitely. 

##### Tag-Based Style Guide 
You can make a style guide by copying and pasting [this readymade guide](https://webflow.com/website/style-guide-edu?s=style-guide-edu) into your project and then adjusting each element accordingly. This is a good way to set defaults for a project early on so you don’t have to worry about it later. This style guide can also be used as a reference. (Be sure to add a password to the style guide if you don’t want it to show up on Google search results.)

#### [Classes](https://university.webflow.com/lesson/web-styling-using-classes)

![](https://i.imgur.com/K2raYV1.png)

Classes are essentially a way of creating style continuity by indicating that everything with a certain class should have the same attributes. So if you made a container with an image and text in it and styled it to your liking and then called it “Basic Card,” for example, any other container that you also indicate as “Basic Card” will automatically have the same style and format. In other words, Classes allow you to easily clone the style of elements across pages without having to painstakingly restyle them over and over again. With a class, all the element’s with the class label match one another effortlessly. **Use classes when you want to style a bunch of different elements in a similar way, but for not *all* of a certain kind of element (it’s better to use tags in that case).**

There are three kinds of classes: **base classes, combo classes, and global classes.** 

##### Base Class
A base class is what we just defined above: a label that will automatically change the way elements look so that you have continuity across your elements and webpages. 

##### [Combo Class](https://youtu.be/Rrz0I0Gc5IM?t=263)

![](https://i.imgur.com/D5r48VC.png)

A combo class is made by adding another class alongside your base class. It lets us combine the base class with more specific styles. So if you wanted all your buttons to look the same, you could make a class called “Buttons” and style it to your liking. Let’s say all of your buttons are black, as indicated by your “Buttons” class. If one button is in a section with a black background and needs to be a different color so people can find the button, you can use a combo class to indicate only the button’s color change and then add it next to the class button in the Selector. This will only change the color of that specific button without changing all the rest of them. It allows you, in other words, to create alternate “versions” of your standard class. 

##### [Global Class:](https://youtu.be/Rrz0I0Gc5IM?t=459)

![](https://i.imgur.com/bkrziTP.png)

 A global glass has certain styling properties--color, typography, background, anything you choose--applied to it. You add your global class alongside your base class and/or combo class, and *if those styling properties haven’t already been set by the base class,* the global class will change them to its settings. (If your base class already indicates that something should have a specific background, for example, adding a global class with a different background won’t change your element at all.) Global classes are helpful because they can be applied to anything: headers, buttons, sections, etc. So global classes are a way of adding one or more specific stylistic attributes to elements without going in and individually editing every single element by hand. Just add the global class, and you are done!

##### The Hierarchy of Classes and Tags

![](https://i.imgur.com/hqIffdC.png)

Your element will use a certain hierarchy to determine which style attributes it should apply. Let’s use an H1 Header as an example. An H1 Header is just a header that you indicate is H1 after you drag it onto your page. It’s generally the largest header (H6 is the smallest). **The first thing it will look for is guidance from a class made for headings.** If there is no class applied, **it will then look for information in an All H1 Headings tag.** If there is no such tag, **it will finally look for style information in the most diffuse place: the Body (All Pages).** In this way, you can have multiple tags and classes to set styles that apply in specific situations to create complex websites with multiple styles. 

#### [States](https://university.webflow.com/lesson/states)
With [States,](https://zellwk.com/blog/style-hover-focus-active-states/) you can change how an element looks and behaves when a user interacts with it by, for example, clicking on it. State changes are especially helpful for links, buttons, and dropdown menus, but can be used with any element. States work in tandem with **Transitions** in the **Effects** dropdown at the bottom of the Style panel. Transitions give you a smoother *transition* between state changes, allowing you to indicate how much time a transition should take and how it should look. If you don't add a transition to your state, the change will be instantaneous.

You can access States by clicking on the blue down caret to the right of the Selector bar. 

![](https://i.imgur.com/4zY0x1S.png)

The caret will turn white when pressed, and a dropdown menu will appear.

![](https://i.imgur.com/lX1vCkc.png)

Once you have made changes, a blue dot will appear to the right of the state to show that a change has been made and recorded. 

![](https://i.imgur.com/OPgPlnd.png)

There are four options in States: **None, Hover, Pressed,** and **Focused.** 

##### None
None is the default option and shows what your element looks like when it is in its normal state. Always start with None by styling your element for how it should look on your website, then move on by selecting one of the other states, which will change how it will appear during a specific interaction with a user. 

Unlike the other four state options, when you click None, no box appears next to the class of your element (here, `Container 6`). 

**Hover, Pressed,** and **Focused,** on the other hand, appear next to your class in a green Green. 

![](https://i.imgur.com/a2qNFbh.png)

You can go back to the None state by hovering over the Green box and clicking the `X` that appears to the right. **When you’re done styling your element, you will need to change the state back to **None** in order to preview what happens on your screen.** This is because when you are in a certain state, like Hover, the element will change on the canvas to reflect what it looks like when hovered over. 

##### Hover
Hover will allow you to style how your element should look when it is hovered over with a cursor. 


##### Pressed
Pressed will allow you to style how your element should look while someone is clicking and holding down the mouse button. In CSS, it is also called “active.” Pressed will inherit any styling changes you have made to **Hover.** 


##### Focused
Focused allows you to change how an element looks when people press Tab,   like a text field. You can preview how your focused state looks by going to the Toggle Preview in the top left-hand corner of the page and then pressing the Tab button or using your cursor to enter into a textbox. 

### [Layout](https://www.youtube.com/watch?v=LxVXkJXbCYo&t=0s)

![](https://i.imgur.com/JY0kAyJ.png)

Layout tells your section how to position itself on a page. **These settings are what you use instead of physically dragging the element around on the page,** like you would in an image design tool like Adobe Photoshop. You can then further adjust the position using the next setting, **Spacing.** 

#### ![](https://i.imgur.com/Hkc0WFc.png) [Block](https://youtu.be/LxVXkJXbCYo?t=20)
In Block, elements start on a new line and take up the full available width of the parent element (the outermost nested layer of elements). This is the default option. Block elements “knock down” other elements to the next line. For example, if you had a heading and a button, and wanted to add a paragraph in between, with Block, the button would automatically move down one line and your section would get longer. 
![](https://i.imgur.com/hlctqru.png)

#### ![](https://i.imgur.com/TeJs75a.png) [Flex](https://youtu.be/LxVXkJXbCYo?t=56)
Flex, **or Flexbox,** stacks its child elements (the things inside the element you are editing) on a horizontal or vertical axis. Flexbox is good for justifying and aligning content, usually along one dimension--meaning stacking things horizontally (left or right) or vertically (up or down). 
![](https://i.imgur.com/arAM0tF.png)
**Use Flex on the Parent element; that will affect all of the children without you having to specify their alignments individually.** By default, Flex is horizontal, but you can change it below where it says **Display.** You can change the Alignment (center aligned, left or right aligned, etc.) and Justification (justified to the center, bottom of the page, top of the page) as well. Flexbox allows you to make rules for the parent and have the children follow those rules. **However, entering in different settings into a child element will allow the child to “break” the rule (overriding the properties you set) that the parent and all the other children follow. 
For a more in-depth explanation of Flex and its many uses, look [here.](https://university.webflow.com/lesson/intro-to-flexbox)**

#### ![](https://i.imgur.com/H8ZyKzX.png) [Grid](https://youtu.be/LxVXkJXbCYo?t=151)
Grid lets you set rows and columns on the parent element and then place the children right inside to create photo grids, short bios, or even a visual list of products for sale. By default, everything in a grid automatically takes up the next available cell.
![](https://i.imgur.com/l9Ivili.png)
**You can adjust the grid layout more finitely by using a div block (an empty rectangle) and placing elements inside.** This allows you to have, for example, both an image and text in one grid cell. **Use the Navigator** to place children elements within the **Div block** and arrange your grid. Dragging and dropping into a Div block can be a bit difficult, and it’s easy to accidentally move things around in the grid instead. **Or, hold down** `CMD/CNTRL` **and then drag the child element into the Div block.** Finally, by changing a child element’s default to **Manual** positioning, you can break only that element out of the grid formation and drag it to a new position on the grid. 
**For a more in-depth explanation of Grid and its many uses, look [here](https://university.webflow.com/courses/grid?video=1ViSR5fSDwg).** 

#### ![](https://i.imgur.com/v9Sn47z.png) [Inline-block](https://youtu.be/LxVXkJXbCYo?t=312)
Inline-block allows elements to sit next to each other in a row, creating, for example, a row of images. When the inline block elements hit the inner boundary of their parent, they will wrap to the next line. 

![](https://i.imgur.com/TNaS4Z0.png)

Like block elements, you can give each element dimensions (i.e. make one image larger thanthe others), but they sit in line. Inline-block would be good for a vision board or photo collage showing candid shots of a group project in progress, for example.

#### ![](https://i.imgur.com/4eB9T6g.png) [Inline](https://youtu.be/LxVXkJXbCYo?t=357) 
Inline is the default for text content. The text’s font and line height determine its size. 
![](https://i.imgur.com/M8Z8nkD.png)

**Use Inline when:**
1. **[You want to use a Span to change one part of your text in a text block,](https://youtu.be/LxVXkJXbCYo?t=374)** making it bigger, changing the font or color, etc. Highlight the text you want to make bigger and then click the **paintbrush** in the black bar that appears for **Wrap with Span.** This separates this little bit of text for styling (and you can even make it a class if you want to use the same presets again elsewhere). Making changes in **Typography** will affect how the Spanned text, and the rest of the text block, looks.

2. **[Making Text Links:](https://youtu.be/LxVXkJXbCYo?t=463)** Text links are inline by default--this allows you to style the links so they pop out and look a little different from the surrounding text. 

#### ![](https://i.imgur.com/SDXERoM.png) [Display None](https://youtu.be/LxVXkJXbCYo) 
Display None hides the element without you needing to delete it permanently. The element won’t take any space on the page (unlike if you made something 0% opacity)--it looks like it’s completely removed from the document. This is helpful when you don’t want it to show up at a certain breakpoint. If you want to select it again, use the Navigator. You’ll see that it’s hidden by the eye-with-a-line-through-it symbol next to the element.

### [Spacing](https://university.webflow.com/lesson/spacing-margin-and-padding)
![](https://i.imgur.com/L6HyzQZ.png)

#### Margin (OUTSIDE)
The space around an element (like how much space between an image and text block).

#### Padding (INSIDE)
The space inside an element (like inside a button, or inside a parent element).

**Hold down Alt/Option and drag** to add pixels to the padding or margin to two sides of your element. One standard for spacing is **adding 20px in margins to top and bottom** to create a distance between elements that helps distinguish them.

**Hold down SHIFT and drag** to add pixels to the padding or margin to all sides of your element. 

#### [Auto Margin](https://youtu.be/hLvb4SBo4q0?t=146) (Horizontally Aligning Elements)
![](https://i.imgur.com/mAizNUs.png)

A way to easily horizontally center elements with a defined width. Click the number on one side of the margin, or click where it says **Auto.** A box with more options, including preset pixels, will appear. Click the **Auto button** on the left. Do this for the other side of the margin, and your element will be entered. **A shortcut to auto margin is the** ![](https://i.imgur.com/VYMWNXj.png) **symbol in the top-right corner.** Auto-margin will not work with **Inline-block, Inline, or Display None.**

#### Vertically Aligning Elements
Use **Flexbox** which lets us set layout rules on a parent element once. These rules will apply to all of the children. You can use Alignment and Justification to further create the look you want. You can use Flexbox for single elements or groups of elements.

#### Negative Margin (To Overlap Elements)
You can use negative margin to overlap items.

![](https://i.imgur.com/ZlyyMO7.png)

 Using negative margin will bring your element up the page and closer to other elements. Elements below the one you are editing will follow it. This is a great way to remove excess space or overlapping layouts. 

##### When to Use Padding and Margin
It’s not necessary to use padding and margin to position everything.** If you only add a margin to make something look centered (instead of Flexbox to justify and align it, or using Auto Margin), if you change the browser size or look at it from a different **breakpoint,** it will stop being centered. 

### [Size](https://university.webflow.com/lesson/size-settings-width-height)

![](https://i.imgur.com/ExkvgWt.png)
 
Sizing helps you control how wide or tall is each **Section, Container,** or other similar organizational parent element. It also helps you create **“dynamic”** websites that can be resized to look good at all **Breakpoints.** **Note that the size of text (headings, paragraphs, etc.) are controlled by the Typography section.** If you want to see how something might look bigger or smaller, type in a number into one of the write-in boxes, **hold down OPT/ALT and drag left or right to increase or left to decrease the size of the unit.** The elements that you are adjusting should change accordingly. There are lots of other rapid input field controls that allow you to easily adjust sizes without lifting your hands off the keyboard, which are explained [here](https://university.webflow.com/lesson/input-values-and-units). 

#### [Size Units:](https://youtu.be/hyAeX0p-uIA)
![](https://i.imgur.com/WSZag4V.png)
There are ten units/options to choose from next to each write-in box in the three rows (**Width/Height, Minimum Width/Height, and Maximum Width/Height**) under **Size**: Seven visible units, and three that are hidden. **The seven visible units are : Pixels (PX), Percentages (%), Ems (EM), CH (Character-Based), Viewport Width (VW), Viewport Height (VH), and Auto (Automatic Sizing).** The three additional hidden options are: **Rems (REM), Viewport Minimum (VMIN), and Viewport Maximum (VMAX).**

##### Absolute and Relative Units
Of these ten options, **only pixels are absolute units;** they do not base their dimension on anything other than themselves. In other words, 300 px is always going to equal 300 px, no matter how big your screen size, font size, or other factors are. **Percentages, Ems and Rems, CH, and VW, VH, VMin, and VMax are called relative units** because their measurements are determined by another factor and therefore are adjustable. Specifically, these relative units respond to three different factors. **Percentages** are determined by the element’s parent element (for example, I want “Heading A” to be 20% of its parent, “Section 1”). **Ems, rems, and Ch** depend on the currently declared font sizes. Finally, viewport-based (vw, vh, vmin, vmax) options depend on the dimensions of the **[viewport.](https://docs.google.com/document/d/1QNeBNVpUiuc0lmvjBviCqpuWrHDMitx0Sy7_ZkDDqFw/edit#bookmark=id.f0sheg9u7dla)**

##### [Fractional Units](https://www.youtube.com/watch?v=ZPtpzuRajzM) (FR)
Fractional Units are one unit of size, but they only work for elements set to **Grid,** which is why they are not on the unit dropdown menus under **Size.** Instead, you can find them by clicking the small down arrow that appears when you hover next to one of the places it says “1FR” (on the top of the columns) or “Auto” (on the left side of the rows).

![](https://i.imgur.com/gJkP4eu.png)
If you drag in a Grid from the left panel, the grid’s size is automatically measured in FRs.

###### [What do FRs do?](https://university.webflow.com/lesson/css-grid-fractional-unit-fr-overview)
FRs allow you to adjust one column or row to be bigger (a bigger fraction) than the others, and have the others automatically adjust to be smaller fractions. 1FR is 100% of the available space. 2FRs are half (or 50%) of the available space. 3FRS are one-third of the available space, and so on. This allows the browser to focus on the math and you to focus on designing. 

##### ![](https://i.imgur.com/0rLIfu1.png) **[Pixels (PX)](https://youtu.be/hyAeX0p-uIA?t=122)**
###### What is a pixel? 
Pixels is an absolute unit of measurement that is frequently used in graphic and web design. Pixels correspond to the resolution of the screen. One pixel is the smallest dot that can be correctly displayed on the screen. 1 pixel = 0.26 mm (0.0104 in) if the resolution of your screen is 96 ppi (pixels per inch).

###### The difference between px and ppi**
Ppi describes the resolution in pixels of a digital image (whereas dpi, or “dots per inch” is used to describe the number of ink dots on a printed page). To use the example of an image, the larger the number of your pixels are, the larger your image will be. The higher your ppi, the better resolution and clarity your image will have.

###### When sizing your image, do so by making a Class.
Otherwise, if you change an image’s pixel size directly, and then change it again at a lower **breakpoint**, the pixel size for the image changes everywhere. You will end up in a frustrating loop trying to make your image sized differently on different breakpoints, only to have it keep changing. However, if you size an element using a class, the size adjustments you make will apply to lower breakpoints, but will not affect larger ones, like your **Desktop Base Breakpoint**. Other benefits of using classes to size elements is that you can apply that class to multiple items, which you can alter all at the same time just by editing the size in their Class.

###### Try not to set too many absolute pixel values.
Oherwise, children may awkwardly go beyond their parents or need to be changed painstakingly at every breakpoint. Since **you can use pixels with other values**--for example, a set width in px, but height in auto--**rely more on relative units allow your website design to adapt to multiple screen sizes.** 

![](https://i.imgur.com/ZLilvVN.png)
###### If you want to see how your website will look on a flowing spectrum of screen sizes, change your Canvas width by grabbing the black tab on the right.
This will make your website viewport larger or smaller. As you drag the black tab left or right, you will notice a measuring tape on the bottom with a black flag that will tell you exactly how wide the viewport is in pixels. Using this measuring tape, you can see how your content adjusts based on the size. 
![](https://i.imgur.com/uq4D9RA.png)
You can also drag the black tab to change the Canvas size in ![](https://i.imgur.com/onPCK2G.png) **Toggle Preview.** 

##### ![](https://i.imgur.com/Ua0XHOF.png) [Percentages (%):](https://youtu.be/hyAeX0p-uIA)
Percentage allows you to adjust your elements based on what percentage of the width or height of its **Parent** element you want it to take up, not including **padding.** What is helpful about this is that **Percentages adjusts to your screen size across breakpoints while keeping the same proportions on your webpage.** You can also make Percentages do math for you, i.e. specifying, for example, that you want 35% x 1.4 (enter in “35*1.4”). It will compute what that is for you and adjust accordingly, no extra calculator needed. 

##### ![](https://i.imgur.com/NJwSvUy.png) [Ems (EMS)](https://youtu.be/qrduUUdxBSY?t=524)

###### What is an Em?
An em is a scalable unit that is equal to your current font size, which is measured in **pixels** in the **Typography** section. So, for example, if my font size were 12 px, 1 em = 12 px, but if I changed the font to size 16 px, 1 em = 16 px. In other words, Ems are a relative unit that allows you to indicate how big or small to make elements in relation to your font size. This is helpful because if you make a class of elements have a smaller font size for a lower **Breakpoint**, the elements will automatically adjust to keep the same proportions in relation to your smaller font size. This keeps elements looking the same across breakpoints. 
**Ems are helpful for creating proportional padding.** For example, if you’d like a the padding in a button to remain proportional to the size of the font in the padding, use Ems in the padding instead of pixels.

###### [Converting Ems to pixels](https://youtu.be/hyAeX0p-uIA?t=382)
You can calculate how many pixels are ems with this equation: A px (font size) x B (Ems) = C px (element’s size). So if we said we wanted an element to be 30 Ems wide and we had a font size of 20px, the equation would be: 20 px x 30 em = 600 px. **Or, you can use one of many EM to px converters:** [This](https://www.omnicalculator.com/conversion/px-to-em) calculator will ask you to put in your “base pixel size,” which means your font size. 

###### A caution about using Ems
Be careful using Ems, because they cascade downward to all children, potentially increasing the sizing effects more than you want.** For example, if you have a parent element that you’ve specified is 2 ems wide, and inside that a child element (let’s say a heading) that you have also specified is 2 ems wide, the child heading will multiply the two and become 4 ems wide. 

##### Rems (REM, or “Root Font-Size”) 
###### [What is a Rem?](https://youtu.be/hyAeX0p-uIA?t=422) 
Rems are useful because they do not cascade and multiply like Ems do. They are based on the HTML root element--in other words, they will base their unit on whatever the user’s default font size is on their browser. This is usually 16 pixels, unless the user has changed their default font size. Rems are used in responsive design when you want to change everything at once, like making all fonts larger or smaller for a certain **Breakpoint.**

###### Where do I find Rems? It isn't on the dropdown box, right?
For some reason, Rems, Viewport Minimum (VMin) and Viewport Maximum (VMax) are hidden except if you use this trick:** Type in the number and unit *without any spaces*--for example, “50rem”-- into the write-in box and hit enter. The unit REM will magically appear on the side and in the dropbox!
![](https://i.imgur.com/dub8Fzg.jpg)

##### ![](https://i.imgur.com/RYhqaDd.png) [CH (Character-Based)](https://youtu.be/hyAeX0p-uIA?t=620)
CH is a text based relative size unit based on the width of the zero element. So the width of ten zeros in a row at whatever font and font size you are using is 10CH. 

##### [Viewport-based options](https://youtu.be/qrduUUdxBSY?t=181)
There are four units that are based on the size of the viewport: **Viewport Width (VW), Viewport Height (VH), Viewport Minimum (VMIN), and Viewport Maximum (VMAX).**

##### [Viewport Width (VW)](https://youtu.be/hyAeX0p-uIA?t=476) and [Viewport Height (VH)](https://youtu.be/hyAeX0p-uIA?t=476) 
**Viewport Width (VW) ![](https://i.imgur.com/GpeXe84.png) and Viewport Height (VH) ![](https://i.imgur.com/kabe3Bf.png) divide the viewport into a grid of 100 x 100 units.** Based on this information you can specify how many units you want the width or height to be. So, for example, if you specify that you want a **Div Block** (basically, a rectangle in which you can put other things like photos or text) and specify that you want the the width to be 50 vws, you will see that the width of the Div Block will be exactly 50% of the viewport, no matter what size that viewport is. So if you make the size of your web-browser larger or smaller, it will adjust. Depending on how you adjust your browser window, the shape of the Div Block may change from a square to a rectangle, because all that vw or vh is indicating is the width or length in relation to the viewport size. You can put a vh unit into the **Width** section or a vw unit into the **Height** section.

###### [What's the difference between percentages and viewport width/height](https://youtu.be/hyAeX0p-uIA?t=494) 
Remember, percentage allows you to adjust your elements based on what percentage of the width or height of its Parent element you want it to take up. For example, let’s say you have an image whose width is set to 50% inside a container whose width is set to 800 px. The image width will be 400 px wide because that 50% **percentage is based on the parent element’s width, *not* the full viewing screen (the viewport). Viewport units are not affected by parent elements, they only respond/correspond to the size of the website window.**

##### [Viewport Minimum (Vmin), and Viewport Maximum (Vmax)](https://youtu.be/qrduUUdxBSY?t=255)
**Like Vw and Vh, [Vmin and Vmax](https://youtu.be/hyAeX0p-uIA?t=524) divide the viewport into a grid of 100 x 100 units.** Based on this information you can specify how many units you want the width or height to be. **However, Vmin will automatically select the smaller of the two viewport dimensions (its width or height). Vmax will automatically select the larger of the two dimensions.** For example, if you had a Container that was 50 vmin, it would be half of whichever the smallest dimension is. If you resized your browser so that the width was smaller than the height, the size of the Container would respond based by adjusting itself to half of whatever the width was. If, on the other hand, you resized your browser so that the height was smaller than the width, the size of the Container would respond based by adjusting itself to half of whatever the height was.

###### Where do I find Vmin and Vmax? They aren’t on the dropdown box, right?
For some reason, Viewport Minimum (VMin) and Viewport Maximum (VMax), as well as Rems, are hidden except if you use this trick: Type in the number and unit without any spaces--for example, “50rem”-- into the write-in box and hit enter. The unit REM will magically appear on the side and in the dropbox!

![](https://i.imgur.com/nIAMhZf.jpg)

 ##### ![](https://i.imgur.com/DUOMt3f.png) [Auto (Automatic Sizing)](https://youtu.be/hyAeX0p-uIA?t=54)
 Elements on the web are automatically sized depending on what is inside them (i.e., their children). The larger the font of a heading in a section, for example, the taller the section is going to be to accommodate that heading. **Width** and **Height** under **Size** are automatically set to “Auto” for sections.
 
#### [ Sizing Options](https://youtu.be/hyAeX0p-uIA)
You have three different ways to set the size of your elements.

##### Width/Height
![](https://i.imgur.com/thJ5nhR.png)

Width/Height is the normal way you size your objects, the same as you would use on an image editing program.

##### Minimum Width/Height (Min W, Min H) 
![](https://i.imgur.com/vKuya7R.png) 
##### and Maximum Width/Height (Max W, Max H)
![](https://i.imgur.com/09fbhIB.png)

Minimum Width/Height and Maximum Width/Height set the size thresholds--the  lowest and highest size limits--for any given element. This means that if you are using a **relative unit** for the Width or Height, Min/Max settings **act as buffers** that ensure that, even if viewport size changes, your element will stop changing size at specific points. Minimum Width/Height, for example, keeps text, for example, for getting too small that you can’t see it on a phone screen. A Maximum Width/Height, on the other hand, could prevent an image getting so large that it becomes pixelated. 


#### [Overflow](https://youtu.be/hyAeX0p-uIA?t=815)
![](https://i.imgur.com/OyNt6cC.png)
Overflow allows you to control what happens if an element, like text, runs over the boundaries of the parent element because it is too big. There are four options: **Visible, Hidden, Scrollbar, and Auto.** Overflow is automatically set to **Visible.** Set Overflow on the **Parent** element that has overflowing elements inside. 

##### Visible ![](https://i.imgur.com/O7P4qFr.png) 
The automatic Overflow setting. Visible shows content that overflows its container.

##### Hidden ![](https://i.imgur.com/T7e4kug.png)
Hidden hides overflowing content without adding a scrollbar. It cuts everything that overflows the boundary box. 

##### Scroll, or Scrollbar ![](https://i.imgur.com/9OEM0wf.png)
Scroll, or Scrollbar, always displays a scrollbar for overflowing content. 

##### Auto ![](https://i.imgur.com/dR7CHmF.png) 
Auto only displays a scrollbar when content overflows. If there is not enough content to overflow, a scrollbar does not appear. 

#### [Fit (Object Fit)](https://)
![](https://i.imgur.com/BMRNJ5y.png)

Object fit allows us to set how an element (like an image) should be resized to fit inside another element (like a container). Let’s use an image and container with a black background as an example to explain how each of the below five options differ from one another. **Before using Fit, you must set explicit width and height dimensions on the Parent element and then set the width and height of the individual element you want to adjust both to 100%.** In other words, the child element is taking up 100% of the width and height of the Parent element, which is a set dimension. **Object fit is set on the child element, while the parent needs a width and height.**

##### Fill ![](https://i.imgur.com/jNsgucG.jpg) 
Let’s say you are inserting an image into a container with a black background. The image will be sized to fill the container, filling it completely. If the image’s aspect ratio does not match that of the container, then the image will be stretched to fit.
 
##### Contain ![](https://i.imgur.com/C8lKlOx.jpg) 
Let’s say you are inserting an image into a container with a black background. The image is scaled to maintain its aspect ratio while fitting within the container. The entire image fits into the container without skewing its proportions. If the aspect ratio does not match that of the container, the container will adjust and blank spaces will appear on two sides of the image: This is called [“letterboxing.”](https://en.wikipedia.org/wiki/Letterboxing_(filming)) In this case, the image’s widest dimension is its width, so the letterboxing appears above and below the image to compensate for its smaller height dimension.
 
![](https://i.imgur.com/SVsGMh5.jpg)

##### Cover ![](https://i.imgur.com/UEGfL3C.jpg) 
Let’s say you are inserting an image into a container with a black background. This setting allows the image to cover the space available without distorting its proportions. If the image’s aspect ratio does not match that of the container, then the image will be clipped to fit.

##### None ![](https://i.imgur.com/ewh7jjU.jpg)
Let’s say you are inserting an image into a container with a black background. The image will not be resized at all in relation to the container. In this case, the image becomes so much larger that only a part of it is visible. The black container expands to accommodate it, but we cannot see it. 

![](https://i.imgur.com/mSqzbbY.jpg)

##### Scale Down ![](https://i.imgur.com/inxCzcr.jpg) 
Let’s say you are inserting an image into a container with a black background. With Scale Down, the image is be sized as if None or Contain were specified, whichever would result in a smaller object size.

![](https://i.imgur.com/1dCC3eW.png)

#### Position (Focal Point)
The`...`s open the Positions tab. This allows you to set an anchor point so that that part will always be visible. For example, if you want to make sure that a picture’s upper right corner will always be visible, you would click the dot in the upper-right corner. You can use Position alongside **Fill, Contain, Cover, None, and Scale Down.**

#### Position (Panel)

![](https://i.imgur.com/bz7mEBa.png)

Using the position panel allows you even more options to place your elements on your page. There are six options in the Position panel: **Static, Relative, Absolute, Fixed, Sticky, and Float & Clear, which is located in a separate dropdown bar.** For all positioning options, the settings made for the Parent element affect the children, too. For all options besides Static, you can get your desired element to stack on top of another one by [selecting it and then changing its option away from Static. ](https://youtu.be/GPadt8wmGXM?t=169)

![](https://i.imgur.com/CPRTcIW.png)

Among these options, **Absolute** and **Fixed** have multiple options for justifying your image:
1. Upper left corner
2. Upper right corner
3. Lower left corner
4. Lower right corner
5. Left half of screen
6. Right half of screen
7. Bottom half of screen
8. Top half of screen
9. Entire screen

##### [Static](https://www.youtube.com/watch?v=GPadt8wmGXM&t=26s)

![](https://i.imgur.com/AXO65au.png)

Static is the default position and displays an element based on styles in the **Layout** section. Elements are displayed using the **Box Model**. For most basic designs, using Static is fine.

##### [Relative](https://www.youtube.com/watch?v=GPadt8wmGXM&t=55s)

![](https://i.imgur.com/JANf7hN.png)

Relative is similar to **Static** in that it displays an element based on the styles in the **Layout** section, but it offers more positioning options. You can move it around from its default place without affecting the position of the other elements. You are positioning an element relative to its Static default position, hence the name. You can adjust the element’s positions on four sides. To see how to use this kind of square positioning tool, see **Spacing.** 

######
[Z-Index](https://youtu.be/GPadt8wmGXM?t=95)

![](https://i.imgur.com/Yhcpojy.png)
You can also use Relative to set the Z-Index. The Z-Index controls stacking what is in front of or behind what someone sees on their screen--or, in other words, our Z-axis. You can use the Z-axis to make a photo collage where some images overlap and cover others. Keep in mind that Z-axis does control stacking, but does not control movement along the Z-axis. **By default, sibling elements toward the bottom of the list in the Navigator stack on top. If you want to change one photo to put it on top, change the Z-index for that image only to “1.” The largest the Z-index’s number indicates what’s on the very top, and the lowest number will indicate which element is on the very bottom.**
The Parent’s Z-index will affect how Children behave, even if the Children’s Z-index is set to a higher number than the other elements around them. 

##### [Fixed](https://www.youtube.com/watch?v=GPadt8wmGXM&t=375s)
Fixed positions an element relative to the browser window (or **Viewport**), so it stays in place as the page is scrolled. This is a cool way to get background images that stay in place as text scrolls by for a certain time. With Fixed, you can also make permanently appearing sidebars, [progress bars](https://youtu.be/_k4iTbcqPf8), and banners (like ones asking for Cookie preferences that you often see on the bottom of websites nowadays). You can also make a [pop-up box](https://webflow.com/blog/how-to-build-a-pop-up-modal-in-webflow) with a darkened screen around it (called a “pop-up modal”).  Like **Absolute,** when the element is designated as Fixed, it does not take up space in the normal flow of the webpage (i.e. it won’t push things around as it moves). 

##### [Sticky](https://www.youtube.com/watch?v=GPadt8wmGXM&t=611s)
![](https://i.imgur.com/uzGbgCY.png)

Sticky fixes an element to the canvas only after a user scrolls past a specific location on the page. **Sticky works like a Relatively positioned element. It sits within the normal document flow until you hit a defined distance. Then it stays on the screen, like a Fixed element within its direct Parent.** Once the sticky element hits the bottom of its parent, it doesn’t scroll past it. It then behaves like a **Static** element, in that it then takes up space again (rejoining the normal flow of the webpage).

![](https://i.imgur.com/Vk8cGPI.png)

**In order to make Sticky work, you must define a distance on one or more sides here. The distance indicates where the element should begin to “stick” once that point is passed (so, for example, 0 px from the top, so it will stick right at the top).** Sticky is [particularly useful for making sidebars](https://university.webflow.com/lesson/create-a-sticky-sidebar) that stay in place as you scroll through a website.


#### [Float and Clear](https://www.youtube.com/watch?v=GPadt8wmGXM&t=797s)
![](https://i.imgur.com/Fp7PYpK.png)
Float and Clear are a hold-over from older ways of laying out websites, before **Flexblox** was invented. They are still useful, however, for a number of applications.

##### Float 
Float can wrap an element around another element. This is useful for **[wrapping text around an image](https://youtu.be/GPadt8wmGXM?t=821)** **by floating the image in a specific direction (i.e. to the left or the right).** Float will wrap all elements that come after the one being floated in the **Navigator.** For example, in this image, the picture is being floated. The title that comes above the image is not affected, but the text (labeled Paragraph in the Navigator), does, so it is wrapped around it. Float can be used in tandem with **Static, Relative, Absolute, Fixed, and Sticky.**

![](https://i.imgur.com/X1qUgSC.png)

**Float Buttons:**

###### ![](https://i.imgur.com/cAOHBWT.png) Don’t Float
This is the default option. 

###### ![](https://i.imgur.com/oIzbmxV.png) Left 
Left tells an element to position itself to the left of surrounding elements, if possible. Absolutely positioned elements will ignore this command. 

###### ![](https://i.imgur.com/384Ybj4.png) Right
Right tells an element to position itself to the right of surrounding elements, if possible. Absolutely positioned elements will ignore this command. The elements below it on the Navigator list are also automatically cleared as well. 

##### Clear
Clear will make other elements move out of the way of an element you specify. They will start after the floated element. For example, in this image, Heading 2 (“Sugar is Key”) has now been Cleared. It, and the paragraph below it, is no longer wrapping around the Floated image. 

![](https://i.imgur.com/1YQ0bdX.png)

**There are four Clear options: None, Left, Right, and Both.**

###### None ![](https://i.imgur.com/w0uXvui.png) 
This is the default option. 

###### Left ![](https://i.imgur.com/jsj53vM.png) 
This will clear things to the left. This is helpful when you have two images that are being Floated on the same page, and you want to specify at what point the next header should be placed on the page in relation to these images.  For example, Heading 2 (“Sugar is Key”) is now Cleared Left of both Floated images. Note that this doesn’t necessarily mean that Heading 2 is *justified* to the left--it just means that it cleared the image of the macarons that is on the left side of the page. 

![](https://i.imgur.com/fiIp90I.jpg)

###### Right ![](https://i.imgur.com/Q6B34rQ.png)
This will clear things to the left. This is helpful when you have two images that are being Floated on the same page, and you want to specify at what point the next header should be placed on the page in relation to these images. For example, Heading 2 (“Sugar is Key”) is now Cleared Right of both Floated images. Note that this doesn’t necessarily mean that Heading 2 is *justified* to the right (it’s not, in this example)--it just means that it cleared the image of the hand holding candied fruit that is on the right side of the page. 

![](https://i.imgur.com/ziWx5Tu.png)

###### Both ![](https://i.imgur.com/e0CAaeC.png) 
**Clear Both** is a quick way to Clear something from any floated element. 

### [Typography](https://university.webflow.com/lesson/advanced-typography-styles)
The Typography Panel features many of the same buttons and options that you would see on Microsoft Word or another program for making written documents. Here, we’ll just be covering features with which you may not be familiar. 

#### Size Units
There are seven different size units: **Pixels (PX), Percentages (%), Ems (EM), Rems (REM), CH (Character-Based), Viewport Width (VW),** and **Viewport Height (VH).** These units are all explained in the section about the Size panel above.

#### Weight 
The weight indicates how bold or thin your text is. Beside each number is an explanation of how thick it is (such as “400 - Normal”), and you can play around to see which weight looks best for your text.

#### Color
![](https://i.imgur.com/7MGfmOu.jpg)

##### Matching Colors
There is not an eyedropper tool (yet) in Webflow, but you can match a color in one section with that in another by copying and pasting its [HEX color code](https://www.color-hex.com/). Hex color codes specify different tones and work on all browsers. As you move the white circle around to find your ideal color, the HEX color code will change, so there is no need to look it up externally. 

##### Transparency
The slider bar below the color bar allows you to adjust the transparency, with the grey and white checkers indicating that an item is 100% transparent on the left.!


#### Style
There are two bars sets of buttons under the Style subsection: **Italicize** and **Decoration.** 

![](https://i.imgur.com/cvj8w7C.png)

##### Italicize
The default option is not italicized, which is the button that looks like the ![](https://i.imgur.com/RxVuill.png) Highlighting the text you want to italicize and then clicking on the ![](https://i.imgur.com/npuyyGn.png) button will italicize that text. 

##### Decoration

![](https://i.imgur.com/254F7oC.png) The default option is **None.**

![](https://i.imgur.com/m57H3QQ.png) **Strike-through**

![](https://i.imgur.com/9jNXdGa.png) **Underline**

![](https://i.imgur.com/H8eW4v9.png) **Over-line:** A feature that is not in most word processing programs, this creates a line that hovers over the text. 

#### More Type Options
There are more features that appear after clicking the More Type Options dropdown:

![](https://i.imgur.com/0rbuxO3.jpg)

##### Letter Spacing

This allows you to adjust how much space is between each letter and can create nice effects for headings. For example, this heading has a 2px spacing in between each letter. The default is **Normal,** but you can delete this and type in units into the box. 

![](https://i.imgur.com/bJ6tEs6.jpg)

##### Text Indent

Text Indent will indent the first line of your text, but not subsequent paragraphs.

![](https://i.imgur.com/GeZY8IW.jpg)

##### [Columns](https://university.webflow.com/lesson/use-text-columns-in-webflow)
This feature allows you to make text columns. The default is **Auto,** but you can delete this and type in units into the box. Note that Columns cannot be set on Flex parent elements.

![](https://i.imgur.com/ifoI4vW.png)

You can create a solid line or dotted lines that separate the columns, change its color, and width by clicking the `...` next to **Columns.** **Gap** will allow you to adjust the space in between each column. 

###### Column Child
Once you apply the columns property to an element, any element inside becomes a column child. By default, column children wrap to the next column — their span setting is set to “don’t.” You can override this setting for specific children. In general, columns cannot be set on Flex parent elements.

![](https://i.imgur.com/bWQKPMy.jpg)

##### [Breaking](https://webflow.com/feature/white-space-property-added-to-control-text-wrapping)
Breaking controls a CSS property called “white-space.” Breaking affects how text wraps within an element. There are five breaking options: **Normal, No Wrap, Pre, Pre Wrap, Pre Line,** and **Break Spaces.** For any of these options, holding down SHIFT + SPACE will add non-breaking space (i.e. gaps)  in between text. This is an advanced feature of CSS and you may not need it. However, [this interactive example](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) will help you understand the differences between the five options (or see the GIF below for a video version, courtesy of Webflow).


![](https://i.imgur.com/TnoQC8T.gif)

**Tip:** For non-CSS experts, use the Breaking dropdown to play with how you want your text to use, and make a final selection based on trial and error. It's easier to understand what each option looks like on your text than what exactly each option does.

###### Normal
Text wraps to the next line. This is the default option. Indents and other spaces are not preserved.

###### No Wrap
Text travels outside the element’s bounding box and potentially even off the page. 

###### Pre
Breaks between paragraphs and indents are preserved, but text can also travel outside the bounding box. 

###### Pre Wrap
Breaks between paragraphs and indents are preserved, and the text stays inside the bounding box. If the dimensions of the bounding box are fixed, this means that the text will wrap to the next line. 

###### Pre Line
Breaks between paragraphs and indents *not* preserved. The text stays inside the bounding box. If the dimensions of the bounding box are fixed, this means that the text will wrap to the next line. 

###### Break Spaces
Just like pre-wrap, except:
* Any sequence of preserved white space always takes up space, including at the end of the line.
* A line breaking opportunity exists after every preserved white space character, including between white space characters.
* Such preserved spaces take up space and do not hang, and thus affect the box’s intrinsic sizes (min-content size and max-content size).

To review, these are the differences between the five options:

![](https://i.imgur.com/0cl4lbO.png)

#### [Spans](https://www.youtube.com/watch?v=J2846GiZuLA&t=479s)
**[Use Spans to change one part of your text in a text block,](https://youtu.be/LxVXkJXbCYo?t=374)** making it bigger, changing the font or color, etc. Highlight the text you want to make bigger and then click the **paintbrush** in the black bar that appears for **Wrap with Span.** This separates this little bit of text for styling (and you can even make it a class if you want to use the same presets again elsewhere). Making changes in **Typography** will affect how the Spanned text, and the rest of the text block, looks. You can also make the span a **Class** to make other specific text on your website follow these style rules. 

![](https://i.imgur.com/M8Z8nkD.png)

### [Backgrounds](https://university.webflow.com/lesson/background-styles-overview)
You can set backgrounds not only to the Body, Sections, or Containers, but also to text and other kinds of elements. If you want all the backgrounds on your webpage to be the same color, use the **Body (All Pages) tag** to make this, as well as other style changes, the default for all of your pages. The panel to select your color is the same as those described under Typography above, but other settings are worth mentioning here. Image & Gradient:** You can choose **an image or make a gradient or overlay** by selecting the `+` sign on the right. You can have multiple backgrounds at the same time, which are found underneath the tab. 

![](https://i.imgur.com/8lYmDdO.png)

You can **show** ![](https://i.imgur.com/hUIp4kx.png), **hide** ![](https://i.imgur.com/C33BTfV.png), or **discard layers** ![](https://i.imgur.com/Jf7f8oY.png). 

When you click the + button or click on one of the layers, the following panel will appear. 

![](https://i.imgur.com/fLFnh1T.png)

There are four Types at the top: **Image** ![](https://i.imgur.com/9OQSFGm.png), **Linear Gradient** ![](https://i.imgur.com/0xfwpfc.png), **Radial Gradient** ![](https://i.imgur.com/UDLIxWu.png), and **Color Overlay** ![](https://i.imgur.com/xTJqVyo.png). 


#### Image ![](https://i.imgur.com/Ryyf2M3.png) 
When you select Choose Image, your **Assets** in the left panel will pop up and you can select or upload an image from there. 

##### @2x
@2x will set the image width to half its original size so it renders sharply on HiDPI devices. 

##### [Sizing](https://youtu.be/GxhbxvUIUd4?t=129)
There are three options for how to size your background image: **Cover, Custom,** and **Contain.**

###### Custom
Custom lets you specify an exact width and/or height of the background image in quantifiable units such as pixels or percentage values. This is helpful if you do want to tile your image. To set the background image to scale larger than the element, use any percentage higher than 100%.

###### Cover
Cover scales the image to fill and cover the whole background of the element, overriding any set width and height. The image may be trimmed, depending on the aspect ratio of the element, the screen size, and the image.

###### Contain
Contain scales your background image to stay contained inside the element without getting clipped or cropped. Keep in mind that this may mean that your image looks tiled. This value also overrides any set width and height.


##### Position 
![](https://i.imgur.com/tKPTFq4.png)

This allows you to set an anchor point so that that part will always be visible. For example, if you want to make sure that a picture’s upper right corner will always be visible, you would click the dot in the upper-right corner. You can use Position alongside **Fill, Contain, Cover, None,** and **Scale Down.** Note that this tab is different from the **Positions panel,** which is right below the **Size panel.**



##### Tile
![](https://i.imgur.com/gtyFTn0.png)

There are four different ways your image could be tiled, which will be noticeable if you select **Contain** as your sizing option:


![](https://i.imgur.com/8TADrxP.png) The background image is repeated both vertically and horizontally. This is the default option.

![](https://i.imgur.com/cKCvJ5M.png) The background image is repeated horizontally only. 

![](https://i.imgur.com/BwKeWCL.png)  The background image is repeated vertically only.

![](https://i.imgur.com/M7RxrrQ.png) The background image is not repeated at all. 

##### [Fixed:](https://youtu.be/GxhbxvUIUd4?t=168)
The two options, **Fixed** or **Not Fixed,** determine the behavior of the background image when you are scrolling. 

###### Not Fixed
Not Fixed is the default option, meaning that the image scrolls with the page. 

###### Fixed
Fixed means that the image stays in place when you scroll. This works well if you set your image to **Cover,** which makes your image scale to the size of your viewport, regardless of the size of the element itself. Your element becomes a window through which you can see your image, and as you scroll up, what you see in the window changes. 

#### Linear Gradient ![](https://i.imgur.com/VIYSO1N.png)

![](https://i.imgur.com/NkDkO8B.png)

By default, you will see a sliding bar with two different colors (called “stops,” as in, the point where the color blending stops): black and white. Double click on the color in the box to change it. You can click along the sliding bar to add more stops and make more complicated gradients. To delete a stop, just click on it and drag it outside of the sliding bar. You can stack gradients on top of images. **You see both by changing the opacity on the stops of the gradient to see through to the image.**

##### Repeat
Repeat is a way to create gradient stripes, but you need to drag your stops toward the middle to create extra space in which the gradient can repeat. 

#### Radial Gradient ![](https://i.imgur.com/qK8Pcpy.png)
Radial gradients start with the center color and shift outward to a new color. **The center color is the stop to the left** and the outer color is the one to the right. We can move the focal point of the center color using the Position tool. 

![](https://i.imgur.com/AHPiBsh.png)

##### Size

![](https://i.imgur.com/j5Xdahd.png)

**The span** (the distance between the starting point and where the gradient ends) is controlled by the four Size buttons: **Closest Side, Closest Cornest, Farthest Side,** and **Farthest Corner.** 

###### Closest Side ![](https://i.imgur.com/aPMcafq.png)
Closest Side extends the gradient from the defined position to the closest side and then stops. 


###### Closest Corner ![](https://i.imgur.com/WGWeP0O.png)
Closest Corner extends the gradient from the defined position to the closest corner and then stops.

###### Farthest Side ![](https://i.imgur.com/UHjYWIs.png)
Farthest Side extends the gradient from the defined position to the farthest side.

###### Farthest Corner ![](https://i.imgur.com/xCcya8e.png)
Farthest Corner extends the gradient from the defined position to the farthest corner. This is the default option. 

##### [Color Overlay](https://www.youtube.com/watch?v=GxhbxvUIUd4&t=380s)
Color overlays are a great way to differentiate a background that has an image by making it slightly darker. You can also use a color overlay over a **[background video,](https://www.youtube.com/watch?v=GxhbxvUIUd4&t=403s)** [a feature](https://webflow.com/blog/new-feature-the-background-video-component) that can be added to your page from the panel to the left under the + sign. Remember that changing the opacity will help you “see through” this layer to the image beneath it. 

##### [Borders](https://university.webflow.com/lesson/borders)
Borders are relatively self explanatory. [You can choose to have a border](https://www.youtube.com/watch?v=BTHJfo25jik&t=228s) on one side of the element, or on all four sides, by selecting the side here.

![](https://i.imgur.com/YDDevpM.png)

Each side can have a different kind of border, as well.

##### Radius
The radius controls the rounding of the border on all four sides ![](https://i.imgur.com/eLcj5G9.png) or on only one side ![](https://i.imgur.com/n5fSJcU.png). This is a one way to create a button with rounded corners. You can also set the radius to specific corners and specify how much you want the selected corner(s) to be rounded.

![](https://i.imgur.com/yILJkSg.png)

##### Making Button Shapes with Radius

###### Round
Round try entering a large number into the radius box, like “500 px.”

###### Elliptical (an oval with tapered edges) 
Type in “50%.” Percentages will base themselves on the width and height of an element, but if you have multiple ellipses on buttons of different widths, they can appear inconsistent. 

###### [Circle](https://youtu.be/BTHJfo25jik?t=134)

Type in “50%,” but make sure that your element has a width equal to its height in the **Size** panel. This also works with images. If you want to make an image that is not square circular, however, do the following: Put the image inside a blank **Div Block.** Select the Div Block’s dimensions to equal values so it becomes a square. Then set the radius to 50% and in **Size,** select the **Hidden** ![](https://i.imgur.com/yPjboVU.png) option in **Overflow.** This will hide any part of the image that falls outside the radius that you have made. Change the Image’s width and height of the image to 100% and then change the **Object Fit** in **Size** to **Cover.** You can always change the focal point of the image by changing its **Position** (also in the Size panel).
Click on the word “Radius” for the option to reset your radius. You can also reset the radius by holding down the Option key and clicking on the word “Radius.”

##### Style
The Style buttons allow you to set your border to a straight line, two different kinds of dashed lines, or not at all. 

More advanced options are covered in the Webflow University video [here.](https://youtu.be/BTHJfo25jik)

### [Effects](https://university.webflow.com/lesson/effects) 

These extra visual effects can help your website look professional and give visual clues for actions like clicking on a button.

#### How can I make various effects interactive?
Use **States** by going to the **Selector** at the top of the menu. 

![](https://i.imgur.com/1VSsJLS.png)

By default, your elements’ states are set to **None,** which shows how elements normally appear on the website. Add your desired effect to a specific state for it to appear only at certain times. For example, you can add a shadow to an image using **Box Shadows** on **Hover.** When the image is hovered over, the shadow appears. When you’re done styling your element, make sure to go back up to the **Selector** and change the state to **None** in order to preview the interaction and transition on your screen. 

If you’ve applied **Effects** to your **States,** you may notice that the change from **None** to another state is instantaneous. Use the **Transitions** option (below) to create a smoother conversion from one state to another state. **Transitions should be added when elements are in the None State.** 

#### [Opacity](https://university.webflow.com/lesson/opacity)

Opacity allows you to control how see-through an element is, and can be helpful for layering elements over images or videos to create complex visual effects. [This](https://www.youtube.com/watch?v=FYTeaqB5UHo&feature=emb_imp_woyt) additional short instructional video from Webflow University demonstrates how to combine Opacity with a hover transition in **Transitions.** 

#### [Box Shadows](https://www.youtube.com/watch?v=YHQ820W8FRw&t=88s)

Box shadows cast a shadow behind your element and can be a way for you to distinguish different features on your page. Box shadows apply to the element itself. You can add multiple shadows to one element in layers, just like ones used in **Image & Gradient** under the **Backgrounds** panel.

##### How are box shadows different from borders?
Borders affect the dimensions of an element, while shadows do not. 

There are two types of Box Shadows: **Outside** and **Inside.** 

##### Outside
Outside shadows fall outside the element. This is probably what you think of when you imagine a normal shadow. 

![](https://i.imgur.com/3NbDVev.png)

##### Inside
Inside shadows are literally inside the boundary line of the element. If you want to apply a shadow to the text, go to **Text Shadows** under **More Type Options** in the **Typography** panel.

![](https://i.imgur.com/lVsHmbo.png)

##### Box Shadow Styling Tip
If you want a muted shadow, use the **Blur** slidebar to make the shadow less defined. Instead of using a gray color, Webflow recommends a black shadow with a lower opacity to achieve a subtle shadow effect that will still look good if you change colors. 

#### [2D & 3D Transforms](https://www.youtube.com/watch?v=YHQ820W8FRw&t=565s)

2D and 3D transformations only affect the element and the **Children** inside it, not anything else on the page. 

When you click the `+` button, you can add a new transformation. You can Move your element and child elements along the **x, y, and z axises;** **Scale** them, **Rotate** them, or **Skew** them. You can do all of these things using various size units. Click once on the **PX (pixels)** to see the other unit options. 

![](https://i.imgur.com/O9LM7vB.png)

**Transforms must be stacked as separate layers--one aspect per layer--in order for the element to do two things at once.** If you try to move to a new tab you lose the settings that you set in the last tab. So if you changed from **Move** to **Scale,** all your settings from **Move** would disappear. Make them into separate layers. 

##### Adding a 3D perspective
In order to make elements look 3D, you must set **Perspective.** There are two different kinds of perspective: **Children perspective** and **Self perspective.** If you do not set a perspective at all, you can still make items look 3D, but they will move isometrically. You can play around with settings to see which effect you like best. 

###### [Children Perspective]([https://](https://www.youtube.com/watch?v=YHQ820W8FRw&t=737s))
To make multiple children in a Parent element look 3D, set the perspective on the Parent element. **The Parent element becomes the “camera” by which you view the rest of the elements.** 

![](https://i.imgur.com/RocomyQ.jpg)

For example, here, we selected one of the cards in a section and **Rotated** it along the **Z axis**. Notice how the cards are all rotating and are at slightly different angles. This is because you are seeing the cards from the perspective of the parent element (in this case, the Section). 

![](https://i.imgur.com/LwPsAGe.jpg)

**Child Perspective Distance**
To change how close up the elements look, click the `…` and then adjust the **Distance** under **Children Perspective.**

![](https://i.imgur.com/Cc7BUDg.png)

The higher the value, the less distorted your perspective will be. The lower the value, the more distorted things appear (as if you were looking at your elements through a widescreen lens). 

Use the grid under **Children Perspective** to set the **Origin** point. **This is like changing your camera angle,** so that setting your origin to the top left corner will make your elements look as though you were viewing them from the top left.

![](https://i.imgur.com/upX38X9.jpg)

###### [Self-Perspective]([https://](https://www.youtube.com/watch?v=YHQ820W8FRw&t=908s))
**Self-perspective turns each element into its own “mini” camera instead of relying on a parent element.** 

![](https://i.imgur.com/75qbDYx.jpg)

Select the **Child** element and change the **Distance** with the slide bar or the write-in box next to Self-Perception. The element's sibling elements will also move with it.

![](https://i.imgur.com/x2v1Ejy.png)

Here is an example of three Child elements rotating as the **Distance** is changed on one of them:

![](https://i.imgur.com/3MnhB9r.png)
**The angles are now all the same, because each has their own “mini camera.”**

**Remember, the best way to see what works best for you is to experiment. **


#### [Transition](https://www.youtube.com/watch?v=YHQ820W8FRw&t=251s)
Transition allows for subtle changes from one **State** to another, such as switching from how an element looks in **None** (the normal state) to how it looks in **Hover** (i.e. when hovered over with the mouse). Again, you can find **States** by going to the **Selector** bar at the top of the **Style panel** and clicking the blue downward caret to the right. A dropdown menu with the four state change options will appear. 
By default, your elements’ states are set to **None,** which shows how elements normally appear on the website. **Transitions should be added when elements are in the None State.** 

When you add a new transition by clicking the `+` button to the left, you have three controls: **Type, Duration,** and **Easing.**

##### Type
The Type dropdown allows you to select which aspect of the element you want to transition. For example, if the background color of a button changes on **Hover** and you want a smooth transition for when that happens, will select **Background Color** in the Type dropdown. 

##### Duration
You can control how long the transition takes with the Duration sliding bar, or by typing how many **milliseconds (MS)** you would like the transition to take in the type-in box to the right. The default option is 200 milliseconds, or 0.2 seconds. How long you make a transition is purely a matter of taste. 

##### Ease
Easing changes the way an element runs through a transition. The default option is **Ease**: a transition begins slowly, speeds up in the middle, and then slows down again at the end. Ease gives you the sense that you are dragging something, like a slider on a slider bar, because it mimics how objects move in space due to friction and/or inertia. You can also set up options that only slow down in the beginning (**Ease In**) or at the end (**Ease Out**). You can customize your easing by clicking on the **Easing Editor** icon. This will open up a panel to the left. 

![](https://i.imgur.com/TeemAW2.png)

You can choose pre-made options to the left or customize your easing action by drawing the blue dots indicating the start and end points. To get an idea of how fast this action would occur and what it looks like, click the **Play** button. An arrow will mimic the speed of the transition. If you are making a transition for a **Hover** or **Pressed** state, you can preview how your transition looks on the canvas by hovering or clicking on your element. The element should take just as long to revert to the **None** state as it does to transition to a new state. 

#### [Filters](https://www.youtube.com/watch?v=YHQ820W8FRw&t=434s)

Filters allow you to add different effects to your elements, like images. You can blur an element or make adjustments to its color. Filters affect the entire element and any **Children** inside it. You can add filters to **Classes** to change multiple elements at once. 

##### Example of an Interctive Filter
You can apply Filters to certain **States** (like have something blur on None and have no blurring effects on hover, revealing the element) and then use **Transitions** to create a smooth shift between the two States. When you add a new transition in Transitions, you can select **Filters** (under **Common**) in the **Type dropdown menu.**

![](https://i.imgur.com/48K8y93.gif)

#### [Cursor](https://www.youtube.com/watch?v=YHQ820W8FRw&t=30s) 
This feature allows you to select a specific kind of cursor--whether it be an arrow, hand, “thinking wheel,” or other icon--for specific actions. For example, you may want to have a different cursor when hovering over a button so the user knows that they can click it. Use **Toggle Preview** in the Upper left hand corner to see how your cursor will change on your website. 

### Element Settings Panel

![](https://i.imgur.com/pfODKl0.png)

#### ID
ID is mostly used to create [Section Links or Anchor Links]([https://](https://university.webflow.com/lesson/section-link)). For example, let’s say I wanted a button to send me to the bottom part of my page to a section. We would first select the section element, go to the Element Settings Panel, and then type an ID name into the ID box. To configure the link, we would then click on the button element, go again to the Element Settings Panel, and click Page Sections. Select the name of the ID name you just made in the dropdown panel that appears. Your button is now linked to your section.

![](https://i.imgur.com/MZiqmhK.png)

#### Tags

#### Visibility
This is a no-longer functioning feature that is still on the panel for some reason. To change the visibility of an element on different devices, go to the Style Panel and change the **Display Property** to **None** when under in a specific **Breakpoint.**

#### Link Settings (For buttons or links)
Link settings allow you to specify what happens if you click on a link or button.

![](https://i.imgur.com/IOYPcK7.png)

There are six different kinds of linking options: **Link, Page, Page Section, Email, Phone Number, and Attachment. **

##### Link ![](https://i.imgur.com/Q8zQrIP.jpg)
Link allows you to put in an external link (not on your webpage). You can have it **Open in a New Tab** by checking the box. 

###### Preload
You can also select how the browser downloads the link pages. These should only be altered for links that you know users will click a lot, otherwise having too many Preload options will slow down your page significantly. There are three Preload options: **Default, Prefetch, and Prerender.**
 - Default: Default only downloads the linked page when a user clicks. Therefore, page loading happens at normal speeds. 
 - Prefetch: With this option, the download link is pre-loaded once after the current page is fully loaded. This is good to use for a link users are likely to click.
 - Prerender: Prerender has the browser fully render and start downloading all necessary assets (css, images, javascript) for that page link before your user opens it. This setting should only be used for primary links that users are likely to click. Having too many might slow down your page. 

###### Page ![](https://i.imgur.com/WZpLtIU.jpg)
Page allows you to link to another page on your own website. So, for example, if I had a link that says “Go Home,” I could choose the Homepage in the dropdown menu. Like **Link, Page** has **Preload** options.

###### Page Section ![](https://i.imgur.com/efRqXv4.jpg)
Page Section lets you move to a different part of the same page when you click on the link or button. For how to do this, see [this tutorial]([https://](https://university.webflow.com/lesson/section-link)) or go to the explanation in **ID.**

###### Email ![](https://i.imgur.com/clampGF.jpg)
When you click on the link or button, an email address will populate an email in the user’s mail program. You can even include a subject line, like “I’ve got a question!”

###### Phone Number  ![](https://i.imgur.com/Ydo7g6Q.jpg)

When you click on the link or button, a phone number will dial. This is a great feature to include because people can click to call if they are viewing your website from a phone.

###### Attachment ![](https://i.imgur.com/xs7cX1t.jpg)

When you click on the link or button, an attachment will try to download onto the user’s device. 

#### Image Settings (For images only)
![](https://i.imgur.com/bD0J8qu.png)

In Image Settings, you can replace your image, indicate that your image has a high **DPI (dots per inch)**, and adjust the size. 

##### [Alt Text]([https://](https://webflow.com/feature/improve-accessibility-with-more-control-over-image-alt-tags))
Additionally, you can create **Alt Text**--text that describes what the picture is in a simple and basic way for vision-impaired or blind users. There are three choices: Use **Alt text From Asset, Custom Description,** and **Decorative.**

###### Use Alt Text from Asset
Set default image alt text directly in the **Asset Manager** in the **left panel** to ensure they have descriptive alt text when added to your site. The alt text will be taken from there. 

###### Custom Description
You can type in your own alt text into the text box. 

###### Decorative
Decorative images have semantic meaning, or have limited information or value. You can just indicate that an image is “decorative” and has no alt text. 

##### Load
This allows you to control how fast an element, like an image or video, loads when a user arrives on your page. There are three options: **Lazy: Loads on Scroll; Eager: Loads with Page;** and **Auto: Defaults to Browser.** 

###### [Lazy: Loads on Scroll]([https://](https://webflow.com/feature/new-images-set-to-lazy-load-by-default))
Your image will load when the appear on the screen, instead of all of the images on your page loading at once.

###### Eager: Loads with Page
Your image will load when the page loads, even if it is offscreen.

###### Auto: Defaults to Browser
Your image will load in accordance with how your browser is set to load webpages. 

#### Video Settings (For videos only)
A link box allows you to enter in the link of the video you'd like to put onto your website, like an unlisted YouTube video.

#### YouTube Video Settings (For YouTube videos only)
![](https://i.imgur.com/7Sno4ze.png)

You can control many different aspects of how your YouTube video is played through this panel. Most are self-explanatory, but **Privacy mode** means that you can embed the video onto your website without using cookies. **Limit related videos to the same channel** might be helpful if you are making a kid-friendly website to avoid potentially inappropriate content from loading at the end of the video. 

#### Lottie Animation Settings (for Lottie animations only)
![](https://i.imgur.com/aoyWxmj.png)

You can create web animations with After Effects and Lottie and then embed them into your website. An entire course on creating Lottie animations is found [here]([https://](https://university.webflow.com/courses/after-effects-lottie-in-webflow)).

Just like with the image settings, we can replace the Lottie animation. We can also preview how our animation will look given time presets we set below that. Finally, we can choose how the Lottie is rendered: **[SVG or Canvas.]([https://](https://premiumaddons.com/docs/how-to-speed-up-elementor-pages-with-many-lottie-animations/))** **SVG** rendering supports all combinations of masks, but it can get overwhelmed and glitch with a large file or heavily-layered animations. **Canvas** does not support all combinations that can exist in one animation, but it plays more smoothly than SVG. 

#### Heading Type (For headings only)
![](https://i.imgur.com/VNGFh5h.png)

You can indicate how large to make your heading by clicking **H1** (the biggest) through **H6** (the smallest). To make your website accessible, Webflow recommends that you only have one H1 heading per page and that you nest your headings so that smaller headings appear under bigger ones. For an example of nested headings, look at this help guide itself. 


#### Column Settings (For columns only)
![](https://i.imgur.com/KiN9ByU.png)

Column options allows you to choose how to divide your columns using illustrative buttons, without working about **Fractional Units.** 

Another way to easily change the size of your columns is with the blue bar under **Customize.** It visually maps out how many the Fractional Units each column has. 

Finally, you can choose how you’d like your columns to display--**horizontally, vertically and equal,** or **vertically and unequal**--in three different breakpoints: **Tablet Portrait, Phone Landscape,** and **Phone Portrait.**

#### [Form]([https://](https://university.webflow.com/lesson/intro-to-forms)) Settings (for form blocks only)
![](https://i.imgur.com/5L0iX0u.png)

You can create responsive forms by using Form Settings. The **Show State** allows you to format in three different situations: **Normal, Success,** and **Error.**

##### Normal
Normal is how users see the form before they try to submit anything.

##### Success
Success is what appears when a user successfully submits the form. You can also send users to a new page that only says something like “You have submitted this form successfully” with the **Redirect URL.**

##### Error
Error is what appears when a user puts in incorrect information or there is an internal website issue. You can also send users to a new page that only says something like “There was an internal error. Please refresh and resubmit” with the **Redirect URL.**

##### Action and Method
Action and Method are advanced features used when integrating other applications, like MailChimp, into Webflow to take the submitted data and store/utilize it elsewhere. You can learn more about how to do this in [this tutorial.](https://university.webflow.com/lesson/collect-form-submissions-on-exported-sites)

#### [Dropdown]([https://](https://university.webflow.com/lesson/dropdown?utm_source=element-panel)) Settings (for dropdowns only)
![](https://i.imgur.com/EebH8UF.png)

This pane allows you to configure a dropdown menu. The **Open Menu** button will open your menu on your canvas so you can see what it looks like. **Add Link** will add a website link that will be included in the dropdown. Once you click it, you will be taken to the Link pane (see above). If you’d like your dropdown window to stay visible even after someone clicks or moves their cursor away from it, you can use the **Close Delay** to add **milliseconds (MS)** of delay time. 

#### [Lightbox]([https://](https://university.webflow.com/lesson/lightbox?utm_source=element-panel)) Settings (for lightboxes only)
![](https://i.imgur.com/NfmD327.png)

TThe Lightbox is essentially an image or video that will take you to another website or a full-screen version of the image when you click on it. Click on this image button 
![](https://i.imgur.com/vlwBOqY.jpg) to add images or this video button ![](https://i.imgur.com/gaYrosJ.jpg) to add videos to your lightbox. You can also **link with other lightboxes** on your website so that the same media will show on different pages.  

#### [Navbar](https://university.webflow.com/lesson/navbar) Settings (for navbars only)
![](https://i.imgur.com/9bFFasM.png)

A Navbar is like a dropdown menu, but it is generally at the top and helps with site navigation. Just like with the dropdown settings (see above), you have an **Open Menu** button that will open your menu on your canvas so you can see what it looks like and an **Add Link** button to add links to your Navbar. You can style your menu with Menu Type, which controls which directions the dropdowns will fall. **[Easing]([https://](https://webflow.com/website/Webflow-CSS-Easing-Visualized)) open** and **Easing close** control how smoothly the menus animations work, which can be lengthened or shortened in **milliseconds (MS)** with the **Duration** write-in box. 

#### [Slider]([https://](https://university.webflow.com/lesson/slider)) Settings (for sliders only) 
![](https://i.imgur.com/BlUFGcM.png)

Sliders are a way to create slideshows that present images, text, videos, and other media. 

The **Add Slide** button will add more slides. More navigation dots will appear at the bottom of your slider. You can navigate between slides by clicking on the **Navigation Dots** ![](https://i.imgur.com/FZD9Csi.png), clicking the **Arrow buttons** ![](https://i.imgur.com/uT1H2yf.png), or clicking the button with three lines and a down caret ![](https://i.imgur.com/omYT964.png) to select a specific slide. (To add content to your slides, see [this video](https://youtu.be/VC9kXcDAmXU).)

You can control what kind of **Animation** will move the slides from one slide to another, control the **[Easing,](https://university.webflow.com/lesson/navbar)** and the **Duration** of the animation in **milliseconds (MS).** 

Other options control how the appearance of the slider and how it functions. 

#### [Tab]([https://](https://university.webflow.com/lesson/tabs)) Settings (for tabs only)
![](https://i.imgur.com/F7BBd6k.png)

Tabs can help organize information on your website. Click the `+` button next to Set active tab to add a tab. You can change the name of the internal tag name (pencil button) or delete (trashcan) each individual tab. **Easing** and **Fade in** and **Fade out** control how the tab is animated. 

#### [Map]([https://](https://university.webflow.com/lesson/map)) Settings (for maps only)
![](https://i.imgur.com/uKzW8rv.png)

The map element lets you embed an interactive map to your site via the Google Maps JavaScript API. You can specify the location to highlight and choose from various display options.

Click **Add API Key** and type in the API key from Google Maps to embed your map. You’ll be taken to **Project Settings** under **Integrations,** where you can enter this data. (Look [here]([https://](https://youtu.be/6Z9BjZEJLvA)) for exactly how to do this.) You won’t be able to see the actual map until you publish the site because of the way that Google limits data use. 

You can specify what the address of the location is, how zoomed in the maps should be, and the type of map. Finally, you can specify [how users can zoom in and out ](https://youtu.be/6Z9BjZEJLvA) with the **Scrollwheel** and **Touch drag** options (for mobile devices).  

For more ways to integrate map applications into Webflow, look [here](https://university.webflow.com/integrations-type/maps). 

#### [Custom Attributes]([https://](https://university.webflow.com/lesson/custom-attributes))
Custom attributes are a way to define specific characteristics of an HTML element. Unless you are a coder, this section is probably not going to be relevant to you.

#### Search Index Settings
Webflow automatically makes a search index for you, and you can choose to have certain elements removed from your website’s search results. Buttons are automatically excluded, for example, but you could also exclude an image, for example. 

#### Editor Settings
You can control if collaborators can edit an element or not. 

### Style Manager Panel
The Style Manager panel shows all of your **Classes** and **Tags** that you have used in your current project. It is used to rename and clean up classes and tags. 

![](https://i.imgur.com/23IVtNJ.png)

**Combo Classes** appear under **Base Classes** with a `+` next to them. Classes are listed in the order they were created.

Click on the **Wrench icon** ![](https://i.imgur.com/0JdlDDK.png) to rename a class or tag or delete it. 

To remove unused classes or tags, click** Clean Up**  ![](https://i.imgur.com/u3vcut3.png) in the upper-right corner. A list of unused styles (in this case, 29 styles) will appear Click Remove to remove all of the unused syles. (There is no way to select only some styles to remove.)

### [Interactions]([https://](https://university.webflow.com/lesson/intro-to-interactions)) Panel

![](https://i.imgur.com/FUvuM0J.png)

**What are [interactions]([https://](https://university.webflow.com/lesson/intro-to-interactions))?:** Interactions are what happens on a website when something changes as a result of a user movement (scrolling, hovering, etc.). Interactions allow us to design around triggers and animations.


#### [Triggers]([https://](https://youtu.be/-U0IXSmp6kc))
A trigger is an action on the part of the user that begins the start of a change or sequence of changes.

There are two types of triggers: **element triggers**--an animation that happens when an element is interacted with, like when it is clicked on—and **page triggers**—an animation that happens when a page changes state, like when it is loading. A trigger—like clicking an element or scrolling down the page—can start or even continuously animate one or more elements on the page.

##### Element Triggers
Element triggers are a specific action made by the user that catalyze an animation on a specific element. Elements that serve as triggers do not always have to be the ones that are animated. For example, if I clicked on A, I might configure the interaction so that B spins around.

![](https://i.imgur.com/XeT5Dzd.gif)

Click on the element you want to set up as the trigger for your animation. Then click the `+` in the top-right corner to select the kind of trigger. There are five trigger options: **Mouse Click (Tap), Mouse Hover, Mouse Hover Over Element, Scrolling Into View,** and **While Scrolling in View.**

###### Mouse Click (Tap)
Animation starts on the first or second click.

###### Mouse Hover
Animation starts when the cursor hovers over or moves away from the element. There is no touch support with this option.

###### Mouse Hover Over Element
Animation starts when the cursor moves over the element along the X or Y axises. There is no touch support with this option.

###### Scrolling Into View
Animation starts when it scrolls into view. 
While Scrolling in View: Animation starts and continues while the element scrolls through the viewport. 

There are also four element-specific options: **Navbar Opens, Dropdown Opens, Tab Change,** and **Slider Change.**

###### Navbar Opens
Animate when the Navbar opens or closes.

###### Dropdown Opens
Animate when the Dropdown menu opens or closes.

###### Tab Change
Animate when Tab is in view or out of view.

###### Slider Change
Animate when the Slide is in view or out of view.

##### Page Triggers 
Page triggers start an animation when there is a change in the page itself, like when a page begins to load. 

Click the `+` in the top-right corner to select the kind of page trigger. There are four trigger options: **Mouse Move in Viewport, While Page is Scrolling, Page Load,** and **Page Scrolled.** 

###### Mouse Move in Viewport
This causes a continuous animation that occurs while the mouse moves over the viewport along the X or Y axis. There is no touch support with this option.

###### While Page is Scrolling
This causes a continuous animation which animates elements as one scrolls from the top to the bottom of the page. 

###### Page Load
An animation is triggered when a page starts or finishes loading.

###### Page Scrolled
An animation is triggered when a page scrolls up and/or down.

#### Animations
Animations are the actual change that happens to the element when the trigger action is done.

![](https://i.imgur.com/YNdUq0m.png)

Once you select an animation, you can select an action and on what devices/breakpoints you want the triggers to be set. 

#### I want more help with interactions. Where should I go?

There is a whole course on interactions and animations made by the Webflow team [here.](https://university.webflow.com/courses/interactions-and-animations-course) For examples of interactions with images of the Interactions Panel that illustrate how to configure them, look [here.]([https://](https://interactions.webflow.com/))  



