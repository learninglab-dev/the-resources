A Comprehensive Guide to Webflow for Non-Coders
===

---
title: 'Guide to Making a Website in Webflow'
---

Guide to Making a Website in Webflow
===

## Table of Contents

[TOC]


## What is Webflow?

Webflow is a powerful low-code/no-code website builder that allows for maximum flexibility. You can make websites based on templates or start from scratch. Webflow also allows you to create websites through **“dynamic content”**--meaning that you can create multiple pages with the same layout, but with different information--very rapidly and without painstakingly editing each page. Finally, Webflow allows you to change your layout depending on the screen size (called  [ breakpoints](#breakpoints))to make your website look good on mobile devices.

## Getting a Free Webflow Account

Go to [Webflow](https://webflow.com/) and click the purple button in the upper-righthand corner that says “Get started — it's free.”

![](https://i.imgur.com/P4l9nXP.png)

You can connect Webflow to your Harvard account by signing in through Google, or make your own account with a different email address.

![](https://i.imgur.com/TSbwDr7.png)

Keep in mind that you will only be able to make two pages with a free account. If you need more space, please contact the Learning Lab team at [help.learninglab.xyz](help.learninglab.xyz)

Learning to Use Webflow: Online Video Tutorials
---

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

## What Do I Need to Know about Web Design Before Starting? 

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

## Key for Top Bar (Red, from left to right)

### Home and Settings ![](https://i.imgur.com/3mggM5T.png) 
Takes you to three additional options: back to your dashboard, to your project settings, and to an editor (not helpful/relevant until after you publish your project, so feel free to ignore).

### Page ![](https://i.imgur.com/FlnLtBL.png)
Tells you which page you are editing on your website. If a specific page is clicked, it will take you to Pages in the Navigator on the left. 

### Toggle Preview ![](https://i.imgur.com/M6JpJzm.png) 
Shows you a preview of what your final website will look like. It is handy to toggle back and forth between this view and the editor. 

---

## Breakpoints Section (Middle of Bar)

### What is a breakpoint?
A [breakpoint](https://www.browserstack.com/guide/responsive-design-breakpoints) is the “point” at which a website’s content and design will adapt in a certain way in order to provide the best possible user experience. This is why the layout of the same website might look different in a mobile view than on when looking at it on a computer. 

#### Add Larger Breakpoint ![](https://i.imgur.com/p5MH1LE.png) 
Allows you to add a larger breakpoint than the desktop base breakpoint. 

#### Desktop Base Breakpoint ![](https://i.imgur.com/V5ynkAt.png) 
This is the standard view to which each page is automatically sized, ideal for computer monitors. Once you populate your webpage in this view, you can then go into the other breakpoints and change things so they fit on the screen. The breakpoints are “nested”: Editing something from the desktop base breakpoint will change that thing in all other breakpoints. However, if you edit something in a smaller breakpoint, like the tablet breakpoint, it will only change that item there and in any smaller view (991 px and down). Therefore, changing something in the smallest breakpoint, the mobile portrait breakpoint will only change it in that view.

#### Tablet Breakpoint (991 px and down) ![](https://i.imgur.com/Zxfcd1X.png)
This is a view ideal for ipads and other large tablet devices. If you change anything here, that item will also change in the mobile landscape and mobile portrait breakpoints, but not in the desktop base breakpoint.

#### Mobile Landscape Breakpoint (767 px and down) ![](https://i.imgur.com/Bg1NWVp.png) 
This is a view ideal for small screens like iPhones when viewed horizontally. If you change anything here, that item will also change in the mobile portrait breakpoint, but in no other breakpoint.

#### Mobile Portrait Breakpoints (478 px and down) ![](https://i.imgur.com/9qk7YV2.png) 
This is a view ideal for small screens like iPhones held vertically. If you change anything here, it will change in no other breakpoint, since it is the smallest view. 

#### Canvas Settings ![](https://i.imgur.com/Cbq11oO.png)

![](https://i.imgur.com/B3yb7WG.png)

This tells you how many pixels 
wide your canvas is. You can also adjust the size by percentage. If you click this button, a larger dropdown appears with many helpful settings. If you **show element edges,** you’ll see more clearly how items on your page are nested in one another (for example, you’ll see the edges of a textbox that is in a Section block). **Show empty elements**--like a Section block--will also help you add content into them, or delete them if you don’t need them anymore. **X-ray Mode** limits the amount of colors you see on your webpage, which helps you to visualize what item is inside what other item. The two **guide options** in the dropdown menu will provide vertical lines to help you to align your items precisely. **Vision preview** shows you how people with visual impairments will see your site so that you can change it and make it more accessible.


---

### Undo/Redo Button ![](https://i.imgur.com/KCQMqE8.png)
You can also use `CTRL/ALT + Z` for “Undo” and `CTRL/ALT + SHIFT + Z` for “Redo.”

### Changes Saved/ Not Yet Saved ![](https://i.imgur.com/RRAJiGb.png) or ![](https://i.imgur.com/LnrxKrf.png)
If the green checkmark appears, your changes have been saved. If the grey `...` appear, Webflow is in the process of saving your most newest action.

### Export Code ![](https://i.imgur.com/ckA2QOb.png) 
If you want to export your website’s code, click this button. You can export in HTML, CSS, or JS. 

### Share Project ![](https://i.imgur.com/SeWgFCS.png) 
If you want to share your project with others, click this button. It gives you the option of sending a read-only link or inviting collaborators to edit your project with you.

### Publish Website ![](https://i.imgur.com/3rgEMmw.png) 
If you are all done with your website, you can publish it to the web by clicking here and indicating which domain you will use. Publishing your website may end up costing money, so contact your Learning Lab liaison prior to publishing so they can give you the right domain name to use for free.

## Key for Left Panel (Green, from top to bottom)


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
| ![](https://i.imgur.com/71eQVH2.png)|**Help Button:** Confusingly, the help button doesn’t do anything if you click it, **you have to hover over it** before a sidebar appears with three options. If your window browser is really narrow, it won’t appear until you expand the width. **Help and Feedback** gives you four different options: looking at **text and video guides,** going to **courses on Webflow,** going to the **Community Forum** to ask questions, or **sending feedback or a help request** (this is a good second step after contacting your Learning Lab Liaison, who can probably help you more quickly). **Keyboard Shortcuts** is a large key that shows you what all the shortcuts are. **[CSS Preview](https://university.webflow.com/lesson/css-preview)** will allow you to see the CSS script for each particular item you click on. This is only useful if you already know CSS and want to manipulate the code. **Reset Walkthrough** will allow you to get the virtual tour again.     


# Key for Left Panel (Green, from top to bottom)

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
