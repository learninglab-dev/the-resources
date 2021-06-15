# Using Webflow to Make a Visual Essay

## Getting Started
The first thing that you should do if you have a topic in mind for a web-based visual essay is compile a list of websites that you’d like to emulate in some way and have serve as inspirations for your project. Having these websites in the back of your mind and beginning to outline the content of your website like you would a paper — main idea, supporting media, conclusion — can help you build a preliminary vision for your visual essay as you move forward in learning the tools you need to realize this vision.

## A Crash Course on Webflow
Before you go any further in the process of building your website, it’s important that you learn about Webflow’s components. What better way to gain proficiency with Webflow than from its makers? Webflow offers a comprehensive yet [concise introductory video tutorial]( https://university.webflow.com/courses/webflow-101-crash-course) available for free. I highly recommend that you start with more beginner tutorials before trying more advanced tricks in Webflow because I found that the tutorials build upon each other and having a firm understanding of Webflow's interface and lingo is essential.

Below are some tools and terms that I discovered through watching the above tutorials and that I wish I knew sooner in my Webflow journey:

**Box model** - the layout of everything in Webflow follows a box model. This means that if you were to storyboard your visual essay, at its core, it would really just be a bunch of boxes in or on top of each other.

**Nesting** - when you place a box in another. The inner box becomes the child to the outer parent box. Children elements inherit styling from parent elements. In other words, changes made to parent styling in the Style panel (which you can access by pressing ‘S’ or the paintbrush on the upper right corner) changes styling of all of its children. Changes to text styling for children elements won't affect parent elements, as they can override parent styling changes. The navigator (which you can access by pressing ‘Z’ or the three bar icon on the left-hand side) is very useful for seeing and interacting with your website’s hierarchy of elements.

**Div block vs. Container vs. Section** - identifying which layout element I should use and when was perhaps the most confusing experience I had in the beginning stages of building my visual essay.

* To break it down, containers and sections are both just div blocks with presets. Sections stack page contents vertically and are just like chapters in a book. Containers are like smaller sections of a particular chapter and help keep content in sections organized and centered. Containers are designed to keep content from going edge-to-edge of your computer screen. 

* You can easily change the presets of a section by adding margin to make it look like a container or reducing the margin of a container to make it look like a section. However, you cannot nest sections the same way you can nest containers, so it’s important to at least partially adhere to the section-container dichotomy if you’re planning to build webpages on the more complicated end of the spectrum.

* Div blocks can help keep containers organized and often take the shape of various lines, blank spaces, and text. I didn’t really use div blocks in my project and only used them to add the occasional shape or object that would give my website’s layout a nice final polish. 

**Classes** - elements with the same class name (which you can edit at the top of the style panel) allow you to reuse various styles throughout your project. For example, if you were creating a section with a grid based layout, and wanted the styling to be the same for each grid, assigning the same class to each grid element would ensure continuity. If you make a change on one class then all elements using that class also get changed. Classes are in blue and you can use the Style Manager (click ‘G’or the three teardrops in the upper right corner) to get a running list of all your website’s classes.

**Combo class** - overrides a particular class if you want to add a more specific style. Do this by just typing a new class name beside the old class name in the Style panel selector field. 

**Tags** - these are similar to classes and are made specifically for text. Tags help you set default typography presets. You can access tags through the style panel, and they show up as pink in the style manager. If you want to set font, size, color presets for all of the various text and headings in your project, it might be helpful to do so at the outset or all at once. This brief tutorial details how to change tags.


## On Interactions
Most of the websites that are built to catch user’s attention, such as the Apple website, have a boatload of interactions that essentially help the content of a webpage come alive. Interactions manage everything from elements changing positions, hover and reveal effects, and more. I used interactions to change the opacity and size of some of my media, reveal text at specific moments in scroll position, and play and pause lottie animations. Lottie animations are helpful for animating videos or other objects such that users can scroll through the media at their own pace. 

Interactions can be a rabbit hole, but the most important thing to know is that you can either apply animations to an entire page or a particular element (section, container, etc.). Access interactions by clicking the lightning rod in the upper right corner or clicking H. The process of adding and modifying animations varies greatly depending on the animation. This is where having a link list of all your website inspirations comes in handy! If there’s a particular move that you’d like to implement in your website, there are many Webflow tutorials available to help you do just that. Browsing through these showcased websites specifically created on Webflow could be useful in identifying specific animations that interest you and viewing other websites that use that animation. Some users even let you clone their websites so that you can more easily apply certain moves to your project.


## Tips
Here are some tips and pointers that I picked up in the Webflow process that might help you stay organized and efficient as you build your website!

* **Cloning** - It might be helpful to start your project by actually navigating through someone else’s website. I recommend clicking through each element in the navigator to understand the elements’ relationship to each other and all their various properties so that you can have a tangible grasp of the Webflow interface and its offerings.
* **Smart styling** - I did a terrible job at naming my classes, so much so that I had to keep clicking back on the classes’ names so that I would remember what each class actually contained. Choose class names that are specific to the various content or properties of a class. This will make navigating your website and applying interactions feel less confusing.
* **Interactions** - While you may feel the need to learn everything there is to know about interactions at the outset of your project, it might actually be more helpful to deal with interactions last. The process of finding, learning, and creating animations was the most time-consuming part of building my website when it should not have been. Focusing on the barebone content of your website will ensure that you're laying a solid groundwork for your website that you can later enhance, if time permits.
* **Lottie Animations** - If you’re interested in learning more about creating video-based lottie animations, view this [tutorial]([https://](https://www.youtube.com/watch?v=2djbqUOtFgg)) 

You need to have After Effects and the Bodymovin plug-in installed on your computer. Also, make sure that you modify your ‘Scripting & Expressions’ preferences on AE such that “Allow scripts to write files and access network” is checked. Webflow cannot import large lottie files, so make sure the video you hope to animate is trimmed to about less than 3 seconds. When you add the .json file to your project, click on the name of the animation and the gear icon, make sure that render is set to SVG (in light gray) so that the animation doesn’t flicker.
* **Margin and padding** - make these your best friends. Because of Webflow’s boxed layout, sometimes adding elements beside or on top of each other doesn’t happen exactly the way that you’d like. Maybe they’re too close to each other or too far apart. Whatever the case, go to the Spacing menu in the Style panel to adjust the spacing outside (margin) or inside (padding) an element’s boundary.
* **Special typography** - If you want to bold, italicize, color, or change the format of a particular phrase within a group of text, you do so by highlighting that phrase and clicking the paint brush that appears right above it. This paint brush creates a text span that allows you to change the typography of that phrase without changing the other text surrounding it.

