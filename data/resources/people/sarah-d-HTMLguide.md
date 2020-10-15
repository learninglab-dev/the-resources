# The Ecosystem
## A Beginner’s Guide to HTML, CSS, JS, & Markdown

#### Q: What are some ways in which we structure text?
**A**: There are so many ways we structure text! In headings, bold or italicized, bullets or paragraph form, small or large fonts, etc. The key idea is to think about how a web page structures and utilizes text through the following languages: HTML, CSS, and Javascript. Understanding the relationship between these 3 texts, and later on, the relationship between HTML and Markdown, will help you get the bigger picture of this virtual “ecosystem” and help you work faster in this terrain.

#### Q: What is HTML?
**A**: HTML stands for Hypertext Markup Language. It defines the meaning and structure of web content, and is usually assisted by CSS and Javascript when building a website.

#### Q: What is a WYSIWYG editor?
**A**: WYSIWYG stands for “What You See Is What You Get,” and it refers to text editors like Microsoft Word or Google Docs where users can edit and structure text without seeing the behind-the-scenes things occurring in the code of the app as it processes the changes the user is making on the blank document. Essentially, the users are using a given template to structure and design text as part of the editor’s functionality that is built into the app’s code.

#### Q: What is the difference between writing on paper vs. writing in a Google Doc vs. writing in HTML?
**A**: The difference is that structuring and styling text becomes more explicit, more deliberate, and more detailed. Recognizing this is important, because all that we normally take for granted when writing on paper (i.e. spacing between lines) become things we must consciously put into code.

#### Q: What is the relationship between a TextEdit file and an HTML file?
**A**: TextEdit is a text-only software that is similar to HTML, but when you drag an HTML document into a browser, the result may be different than what you have typed in your TextEdit file, because HTML requires more explicit instructions in the code to know, for example, when to skip lines or make something bold.

#### Q: What is Terminal?
**A**: Terminal gives us the command line interface (CLI), allowing us to automate tasks on a computer without the use of a graphical user interface (GUI), because it is text-based. You may use terminal to send simple text commands.

#### Q: What is a GUI?
**A**: A GUI is a set graphical icons that allows us to carry daily tasks. GUIs are most commonly seen in the layout of apps on phones: when you click on these apps to open then, you are interacting with a GUI and manipulating an underlying structure.

#### Q: What is CSS?
**A**: CSS, or Cascading Style Sheets, is used for styling the text in HTML. It is what you use to change the color, font size, etc. of your text to design your web page. It lets you style all elements of a type, class, or particular ID, so that you do not have to include (and manage) styling on every single element in your HTML.

#### Q: What is Javascript?
**A**: Javascript, or JS, is a programming language that is capable of doing things, rather than only conveying structure. For example, JS turns a static browser into an interactive one by putting HTML and CSS “into motion.” For example, you can use JS to make the color of a line of text flash between blue and pink. 

#### Q: What is the relationship between Javascript and Terminal?
**A**: JS is similar to Terminal in that both dictate the functionality or behavior of their platforms (for JS, it is the functionality of a web page, and for Terminal, it is the functionality of a computer). It is important to remember that JS reads code line by line.

### K: (KEY TIP) Google things you don’t know (definitions, Stack Overflow, etc.)! It can be very helpful.

#### Q: How are Elements and Console in Developer Tools (in Chrome) related to HTML and Javascript?
**A**: When you open Developer Tools in Chrome, you access two of several features of your browser, known as Elements and Console, that tell you crucial information about the web page you are currently on. Elements shows us the HTML elements of the page. Changes made in a remote HTML file will show up in Elements and alter your web page when that HTML file is dragged into your browser. Console lets us write Javascript.

#### Q: What is the DOM?
**A**: The DOM is the Document Object Model that consists of the structure of elements on your web page. This structure is nested. Below is an example of a basic DOM.

![DOM01](https://files.slack.com/files-pri/T0HTW3H0V-F012YKURDUK/img1.jpeg?pub_secret=8cbe4e26ff "Photo of DOM")
![DOM02](https://files.slack.com/files-pri/T0HTW3H0V-F013B2L4XQ9/img2.jpeg?pub_secret=06e949b4a3 "Second Photo of DOM")

* The head and body are the parent elements to the appended element. However, technically both the head and body are child elements of the html element. So, what determines whether an element is a child or parent element is nesting. 

#### Q: What is the difference between machine-readable and human-readable code?
**A**: All code is machine-readable, but not all code is human-readable. Humans can work with both types of code, but human-readable code is specifically tailored to the way humans read languages, which means it is more structured and clear or easy-to-follow (i.e. perhaps it contains instructions or comments throughout).

#### Q: How are Wordpress and Squarespace (and similar platforms) different from how we are creating a web page?
**A**: Wordpress and Squarespace are WYSIWYG editors, or “write your text only” editors, where you just fill in the templates, hit publish, and produce a web page. You are manipulating an underlying structure much like you do in Google Docs or Microsoft Word. Below the surface, Wordpress and similar platforms have compiled various packages and libraries (i.e. React) to form this easy-to-use, website-building template. On the other hand, we are building a web page without such templates. It is more like we are building a web page “from scratch,” but it is important to note that you are always manipulating something in coding.

#### Q: What is the difference between a HIGH and LOW level programming language?
**A**: The classifications “HIGH” and “LOW” level to a programming level refers to the level of abstraction of the language. For example, Javascript is a high level programming language because it is closer to a human language and is more human-readable than a low level language that is more machine-readable.

#### Q: What is Dot Notation?
**A**: JavaScript provides Dot Notation for accessing the “members” of an “object”. Under dot notation, a member is accessed by giving the object’s name, followed by a period (or dot), followed by the member’s name. See the image below for an example of Dot Notation, specifically the HTML written below `<script>`.

![DOT03](https://files.slack.com/files-pri/T0HTW3H0V-F012YKURE0K/img3.jpeg?pub_secret=140168a837 "Photo of Dot Notation")

#### Q: What are the various “naming conventions” for code?
**A**: Code can be written in camelCase, kebab-case, snake_case, and more! camelCase is the more conventional case for the names of variables in Javascript, but people make different choices based on the task at hand, experience, or preference.

#### Q: How can we create a paragraph element in Console using Javascript?
**A**: See the code below for the creation of a paragraph element.

```javascript

// Create a paragraph element
var paragraph = document.createElement("paragraph");

// Insert text
paragraph.innerText = "this is a paragraph";

// Append <p> to <body>
document.body.appendChild(paragraph);

// Give your element a name 
paragraph.id = “firstParagraph”

// Now, make your new paragraph element blue
paragraph.style.color = ‘blue’;

```

#### Q: What is the difference between = and ==?
**A**: = is an “assignment operator” whereas == is a condition (means “equal to”).

#### Q: How can we create a paragraph tag and make it change color?
**A**: Start by creating a blank HTML file from TextEdit. Drag that file into a web browser (Chrome). Next, open Developer Tools (command J). Then, follow the code below:

```javascript

// Create a new 'p' element and assign it to the variable paragraphTag
var paragraphTag = document.createElement("p");

// This shows what is in the variable
console.log(paragraphTag);

// Add text to paragraphTag
paragraphTag.innerText = "Good Morning, America!";

// Add paragraphTag to Elements
document.body.appendChild(paragraphTag);

// Assign a color to the text in your paragraphTag. You can see this element appear in Elements & on web browser
paragraphTag.style.color = “blue”

// Make the text in your paragraphTag change color every 1 second
function changeColor () {
	if (paragraphTag.style.color == “blue”) {
		paragraphTag.style.color == “pink”;
	} else if (paragraphTag.style.color == “pink”) {
		paragraphTag.style.color == “blue”;
	}
}
setInterval(changeColor, 1000);
```

#### Q: What is Atom?
**A**: Atom is a code editor. You can open both HTML and CSS in Atom, and you can use CSS and JS tags (`<style>` and `<script>`) “inline” in your HTML. You can also place the tags in separate files and link those files in the HTML. In Atom, the colored code and brackets help you know when your code is correct. The blue dot at the top of your file near its name means it is unsaved. 

#### Q: What does it mean to “comment out” something?
**A**: Commenting out something removes it from being put into motion without actually deleting it from your code. Essentially, it won’t be read. To comment out in HTML, use !--. To comment out in CSS, use /*...*/. To comment out in JS, use //. Commenting out is most commonly used when leaving instructions for your code (to make it more human-readable)!

#### Q: What is happening in real time on your web page when you edit your HTML file?
**A**: When you edit your HTML file, the changes do not automatically show up on your web page. You must save those changes and then refresh your browser (command R) to see the updated web page. Additionally, when you are editing your web page in Console, those changes will not get saved anywhere, so make sure you add those changes to your HTML file.

#### Q: How can we add Javascript to our HTML file in Atom?
**A**: Using a `<script>` tag allows us to write Javascript inside an HTML file. See the code below for an example.

```javascript
<script>

// Create new 'p' element and assign it to the variable newTag 
var newTag = document.createElement("p");

// Add newTag to Elements
document.body.appendChild(newTag);

// Add text to newTag
newTag.innerHTML = "Today is sunny";

// Assign a color to newTag. In CSS, style modifications (i.e. color) to the variable are called attributes. You must define the style of the variable before you can use the changeColor function below.
newTag.style.color = “orange”

// Retrieve newTag via array. An array or list of p tags is listed from 0 to X (number).
var newTag = document.getElementbyTagName("p")[0]

// This shows you what is in the variable.
console.log(newTag);

// Make the text in your paragraphTag change color every 1 second
function changeColor () {
	if (newTag.style.color == “orange”) {
		paragraphTag.style.color == “purple”;
	} else if (paragraphTag.style.color == “purple”) {
		paragraphTag.style.color == “orange”;
	}
}
setInterval(changeColor, 1000);
</script>
```

#### Q: What is the relationship between Markdown and HTML?
**A**: Markdown is a reduction of or a shorthand for HTML. For example, instead of closing something in an H1 tag, you would use # to mark the first heading (and ## for H2, ### for H3, all the way to H6, the smallest). Using Markdown helps us understand how our text will render in HTML without having to write HTML, but Markdown is missing more complicated features of HTML, so converting to HTML can be tricky, as it depends on the parser or Markdown to HTML converter. Some Markdown platforms include Stackedit, Dillinger, and Atom. The first two platforms allow you to see a preview of your Markdown file. Atom has a tool for viewing your markdown. Even Google Docs has a “Docs to Markdown” add-on that you can download.
* Although it is easier to go from HTML to Markdown, Markdown is faster to code in and you can show your work quickly. When trying to build a web page, you can turn your Markdown into HTML and with CSS you can style your web page (static web page) and add Javascript (dynamic web page). Style elements in Markdown are limited to bold, italicized, and underlined. 
