# Overriding Styled Markdown With HTML

When committing to [theResources](https://resources.learninglab.xyz), you can stick with markdown and have it styled by either the [default css](https://github.com/learninglab-dev/the-resources/blob/master/public/stylesheets/swiss.css) or your own custom css file you add to the repo.

But if you want to do **more** than this, you can always insert plain old html into the site. You can add YouTube embeds, for instance, by simply inserting the YouTube embed code. For instance,

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/M11SvDtPBhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

becomes

<iframe width="560" height="315" src="https://www.youtube.com/embed/M11SvDtPBhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

And, more complicatedly by more illustratively, this chunk of code

```
<style>
  .blue {
    color: blue;
  }
</style>

## you'll note that
normal markdown looks the same even when it's typed between the style tags and the upcoming div.

<div class="blue">
  <h2>but in the div</h2>
  even later on in the page you'll see that the blue class is working. But other markdown features like [links to sites like](https://resources.learninglab.xyz) will not work.
<div>
```

turns into this:

<style>
  .blue {
    color: blue;
  }
</style>

## you'll note that
normal markdown looks the same even when it's typed between the style tags and the upcoming div.

<div class="blue">
  <h2>but in the div</h2>
  even later on in the page you'll see that the blue class is working. But other markdown features like [links to sites like](https://resources.learninglab.xyz) will not work.
<div>
