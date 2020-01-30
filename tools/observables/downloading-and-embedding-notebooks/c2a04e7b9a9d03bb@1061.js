// https://observablehq.com/@observablehq/downloading-and-embedding-notebooks@1061
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["books.png",new URL("./files/fc09bd06afec513a17fd0307631db89669916563522226a80b8d80dc1d725874903ca937523cad1e7b687ad3cf9a2c4276372fe1c8a6e13da06704b6f10f371f",import.meta.url)],["dropdown.png",new URL("./files/13c14588354d7f2c5d7d0eb616865cfb521940dc03b9872ba5b9139b2e4637cff28da59ab7531a77e08b16429d023ee9bf31708d542367cc854a6be61e01bc49",import.meta.url)],["new.png",new URL("./files/7259795c0542cbf685daa8e51b926c87e9fa774bce3947e1c2e26095183cc9443921fe2c0f30af59f9f4c8ad7590924dcd45eabaf597d27aa5b1292169ee4c9c",import.meta.url)],["breakout.png",new URL("./files/7d971069b132d5677828ec93de1fc744f1eca03f4b853e1495aa4ec5a78bdbe7ba4798606449c6e18d39367360cdf9e05b8e34a94375bf85d5e442c8d40b8dae",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`# Downloading and Embedding Notebooks
<div style="color:gray;font-family:var(--sans-serif);margin-top:-0.4em;">Notebooks can be embedded and customized anywhere on the web (or off it).</div>

<figure>${await FileAttachment("books.png").image()}</figure>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`So, you’ve written your magnum opus: a notebook full of splendor and delight. Now, the problem is — How do you display it on your website? How do you integrate its nifty charts into your web app? How do you save it to your hard drive, to file away for posterity alongside your old Word documents and vacation photos?

As you’ve probably noticed by now, Observable notebooks are a little different than the regular old JavaScripts you know and love. They execute in order of [data flow](/@observablehq/how-observable-runs) rather than in a linear sequence of statements, and contain strange and marvelous reactive primitives, like [viewof](/@observablehq/introduction-to-views) and [mutable](/@observablehq/introduction-to-mutable-state).

Luckily, Observable provides an [open-source runtime](https://github.com/observablehq/runtime) which stitches together a notebook’s cells into a dependency graph and brings them to life through evaluation; a [standard library](https://github.com/observablehq/stdlib), which provides helpful functions for working with HTML, SVG, generators, files and promises among [other useful sundries](/@observablehq/standard-library); and an [inspector](https://github.com/observablehq/inspector), which implements the default strategy for rendering DOM and JavaScript values into a live web page — although you’re free to write your own.`
)});
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`## Embedding a cell on a web page

Individual cells from any published or shared notebook — a chart, a visualization, a widget — are quick and easy to embed. In the cell menu, click on **Embed code** to generate a bit of HTML that can be pasted into any web page to embed that cell.

<img width=220 src="${await FileAttachment("dropdown.png").url()}" />

For an example, click **Embed code** in the menu to the left of the cell below to try it out.`
)});
  main.variable(observer("graphic")).define("graphic", ["html"], function(html){return(
html`<svg width=100 height=100>
  <circle cx=40 cy=40 r=40 fill=green style="opacity: 0.25;" /> 
  <circle cx=50 cy=50 r=40 fill=red style="opacity: 0.25;" />  
  <circle cx=60 cy=60 r=40 fill=blue style="opacity: 0.25;" /> 
</svg>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`By default, the embed code loads the latest published version of the notebook. When you publish a new version of the notebook on Observable, your embedded cells will update immediately (or at least, within 30 seconds).

If you want to lock your embed code to a specific published version, you can add \`@version\` to your notebook’s ES module URL — and you can always find specific published versions [in your notebook history](https://observablehq.com/@observablehq/history).

Here’s a link to [a plain web page that embeds the \`graphic\` cell above](http://ashkenas.com/cell-embed-example.html), from two different versions of this notebook, hosted off-site.`
)});
  main.variable(observer()).define(["md","FileAttachment"], async function(md,FileAttachment){return(
md`## Notebooks as ES modules

Your notebook can be compiled and downloaded as a [JavaScript module](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)! Click **Download code** in the notebook menu to download your compiled notebook, including the Observable runtime, any imported notebooks, and an HTML template to demonstrate how to run your notebook.

<img width="239" alt="Screen Shot 2019-09-18 at 9 38 27 AM" src="${await FileAttachment("new.png").url()}">

Alternatively, you can “hot link” your code directly from Observable, as long as you’ve published your notebook or enabled link sharing:

~~~
https://api.observablehq.com/@jashkenas/my-neat-notebook.js?v=3
~~~

You can use this module to run your notebook in any JavaScript environment. In this form, notebooks are true JavaScript programs that you can manipulate and integrate deeply with your application. Now let’s explore some ways to use embedded notebooks!`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Rendering cells

The most obvious way to embed a notebook is to display its contents, live, in a web page. For this, the Observable runtime includes a [standard inspector](https://github.com/observablehq/inspector); it takes live values from the notebook and puts them into your HTML where you want them. For example, here’s how to render a notebook into an empty body ([see it live](https://bl.ocks.org/mbostock/raw/1cf3e863b054aca0bc7061b5292120ab/)):

~~~html
<!DOCTYPE html>
<body>
<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@jashkenas/my-neat-notebook.js?v=3";

// Load the notebook, observing its cells with a default Inspector
// that simply renders the value of each cell into the provided DOM node.
new Runtime().module(notebook, Inspector.into(document.body));

</script>
~~~`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The inspector doesn’t include any inline styles, but there is a [default stylesheet](https://cdn.jsdelivr.net/npm/@observablehq/inspector@3/dist/inspector.css) ([see source](https://github.com/observablehq/inspector/blob/master/src/style.css)) if you want it. To make your embedded notebook beautiful, try a CSS framework. We favor [Tachyons](http://tachyons.io/) here at Observable, but there are lots of good choices, such as GitHub’s [Primer](https://primer.style/css).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`If you don’t want to render the entire notebook, define a custom function to control which cells are rendered and where they go. For example, to render just the cell named “chart” into the DOM element with the same id, say:

~~~js
new Runtime().module(notebook, name => {
  if (name === "chart") {
    return new Inspector(document.querySelector("#chart"));
  }
});
~~~

It’s important to note that when you render a limited set of cells from your notebook, the cells that aren't used — or depended on by those that are — won’t be run at all! So be sure to include cells that have important side effects, and to remember to render your CSS \`<style>\` cells.

For your convenience, you can copy the code to embed a named cell (from a shared or public notebook) by clicking **Embed code** in the cell menu.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Reading values from JavaScript

While the standard inspector is useful for displaying notebooks as-is, either in whole or in part, Observable notebooks are true reactive programs that you can integrate deeply with vanilla JavaScript via *observers*.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`An *observer* is an object that you define and implements optional methods to observe a cell’s live value. These methods are called repeatedly by the runtime as follows:

* *observer*.pending() immediately prior to each evaluation;
* *observer*.fulfilled(*value*) when evaluation finishes, passing the new *value*; and 
* *observer*.rejected(*error*) if evaluation fails, passing the thrown *error*.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`For example, here’s an observer that doesn’t touch the DOM, instead logging all evaluation to the console:

~~~js
new Runtime().module(notebook, name => {
  return {
    pending() { console.log(\`\${name} is running…\`); },
    fulfilled(value) { console.log(name, value); },
    rejected(error) { console.error(error); }
  };
});
~~~`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Below is an observer that listens to the “selection” cell, calling *setSelection* to do something with the new value (say, a [React state hook](https://reactjs.org/docs/hooks-state.html)). This technique could be used with a [brushable scatterplot](/@d3/brushable-scatterplot) to drive your application with the selected data.

~~~js
new Runtime().module(notebook, name => {
  switch (name) {
    case "viewof selection": return new Inspector(container);
    case "selection": return {fulfilled(value) { setSelection(value); }};
  }
});
~~~`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Sometimes you just want the current value of a cell. For that, you don’t need a proper *observer*; instead, use [*module*.value](https://github.com/observablehq/runtime/blob/master/README.md#module_value) to get a promise to the current value of the cell with the given name.

~~~js
const module = new Runtime().module(notebook);
const value = await module.value("chart");
document.querySelector("#chart").appendChild(value);
~~~`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Writing values from JavaScript

In addition to observing reactive values, your JavaScript program can assign reactive values, too, allowing bidirectional dataflow. For example, say you have a [bar chart](/@d3/bar-chart), and your application wants to update the displayed data dynamically. First, keep a reference to the main module for your notebook:

~~~js
const main = new Runtime().module(notebook, name => {
  if (name === "chart") {
    return new Inspector(container);
  }
});
~~~

Then whenever you want to change the chart’s data, call [*module*.redefine](https://github.com/observablehq/runtime/blob/master/README.md#module_redefine):

~~~js
main.redefine("data", newData);
~~~

Because Observable uses dataflow, the chart will update automatically in response to the new data, and the inspector will replace the contents of the chart’s *container*. You can pass *module*.redefine a constant value, a function that references other cell values—even a [generator](/@observablehq/introduction-to-generators) function that repeatedly yields values to produce an animation, if you want.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Another way to alter the behavior of your running notebook is to override Observable’s [standard library](https://github.com/observablehq/stdlib). These built-in variables are provided to all notebooks. For example, for a fixed width of 640px instead of a responsive width, import [Library](https://github.com/observablehq/runtime/blob/master/README.md#Library), then re-assign the width value:

~~~js
import {Runtime, Inspector, Library} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

const runtime = new Runtime(Object.assign(new Library, {width: 640}));
const main = runtime.module(notebook, …);
~~~`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Notebooks as npm modules

The tarball you get when you click **Download code** is an installable npm module. If you right-click and copy the link, you’ll get something that looks like this:

~~~
https://api.observablehq.com/@jashkenas/my-neat-notebook.tgz?v=3
~~~

Use this URL with **npm** or **Yarn** to install the latest version of your notebook in \`node_modules\` under its published name (\`@jashkenas/my-neat-notebook\`), along with a copy of the Observable runtime:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/@jashkenas/my-neat-notebook.tgz?v=3
~~~

Depending on your version of Node, you’ll either need to use Node’s \`--experimental-modules\` flag, [esm](https://github.com/standard-things/esm), or your preferred bundler of choice. Note that the contents of this tarball may change over time (either because you republished your notebook, or because of internal changes to the compiled format). Thus, you may instead prefer to commit the source code contents of the download tarball into your repository rather than installing from node_modules.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Version pinning

To pin your notebook to a specific version, find the desired version number in the [history](/@observablehq/history) and add it to the URL. Both the ES module and tarball formats support versioning. For example:

~~~
https://api.observablehq.com/@jashkenas/my-neat-notebook@42.js?v=3
https://api.observablehq.com/@jashkenas/my-neat-notebook@365.tgz?v=3
~~~`
)});
  main.variable(observer("demo")).define("demo", ["md","FileAttachment"], async function(md,FileAttachment){return(
md`## Demos ✨

As an fun, off-site example of an embedded notebook in action, see [Breakout!](https://ashkenas.com/breakout) It runs [this notebook](/@jashkenas/breakout), and uses the standard inspector to render the game canvas, the New Game button, the current score, and the high score.

<a href="https://ashkenas.com/breakout"><img src="${await FileAttachment("breakout.png").url()}" style="max-width: 400px;" /></a>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A few more examples: [This CodePen](https://codepen.io/jashkenas/pen/gzZXPG) embeds a [simple notebook](/@jashkenas/tick) that ticks once a second. [Philippe Rivière](/@fil) wrote [a brief tutorial](https://visionscarto.net/observable-jekyll/) that demonstrates embedding [Tissot’s indicatrix](/@fil/tissots-indicatrix) into a blog. And as an arcane demonstration of the dark arts of recursive embedding, here is [a notebook embedding *itself!*](/@jashkenas/ouroboros-a-notebook-embeds-itself) 🤯`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We’re continuing to make notebook embedding more powerful — with your help. If you have interesting use cases, publishing workflows, npm module ideas, website embed techniques, or just want to talk about anything else you’d like to see embedded notebooks do, please join the conversation on [talk.observablehq.com](https://talk.observablehq.com/).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*Thanks for the pile of books, [ClipArt ETC](http://etc.usf.edu/clipart/54200/54238/54238_book_pile.htm).*`
)});
  return main;
}
