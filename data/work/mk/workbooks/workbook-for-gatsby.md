---
title: "Gatsby Workbook"
tags: 
  - gatsby
  - code
  - marlon
---
# GATSBY WORKBOOK

## LINKS TO LEARN FROM

- [working with images in Gatsby](https://www.gatsbyjs.org/docs/working-with-images/)
- [working with Airtable in Gatsby](https://www.gatsbyjs.org/packages/gatsby-source-airtable/)
- [working with environment variables in Gatsby](https://www.gatsbyjs.org/docs/environment-variables/)
- [styled components in Gatsby](https://www.gatsbyjs.org/docs/styled-components/#creating-global-styles)
- [client data fetching in Gatsby](https://www.gatsbyjs.org/docs/client-data-fetching/)
- github for [gatsby-source-airtable](https://github.com/jbolda/gatsby-source-airtable/blob/master/examples/recipes-with-photos/src/templates/recipeTemplate.js)
- [additional gatsby tutorials](https://www.gatsbyjs.org/tutorial/additional-tutorials/)
- [gatsby plugin for remote images](https://www.gatsbyjs.org/packages/gatsby-plugin-remote-images/)
- 


* gatsby
	* create new site
	* with .md files locally
	* and an airtable test
	* put on netlify
	* custom netlify domain


[gatsby lifecycle](https://medium.com/narative/understanding-gatsbys-lifecycle-31c473ba2f2d)



* [more advanced tutorial on markdown pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)
* work on handling images in markdown:
	* tutorial on [working with images in markdown posts and pages](https://www.gatsbyjs.org/docs/working-with-images-in-markdown/)
	* [handling preview/hero images in markdown](https://www.gatsbyjs.org/docs/working-with-images-in-markdown/).
	* handling all markdown images with [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)
	* will need to use [gatsby-remark-copy-linked-files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/) to handle any gifs or videos
* gatsby in subfolder
	* some links
		* [troubleshooting trailing slashes](https://spectrum.chat/gatsby-js/general/serving-gatsby-website-on-path~93ef04bc-4749-4648-8ddb-ef8aedfec56a)
		* gatsby [pathPrefix](https://www.gatsbyjs.org/docs/path-prefix/) docs
		* 
* write a custom list of Airtable stuff
* [additional gatsby tutorials](https://www.gatsbyjs.org/tutorial/additional-tutorials/)
* need `function normMarkdownMetadata (node) { return newNodeWithNormedMetadata }`
* [gatsby theme tutorials](https://www.gatsbyjs.org/tutorial/theme-tutorials/)
* [testing in gatsby](https://www.gatsbyjs.org/docs/testing/)
* do more interesting things with the parsed markdown.  here are gatsby's docs on [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
* gatsby [page transitions](https://www.gatsbyjs.org/docs/adding-page-transitions-with-plugin-transition-link/)
* gatsby [pagination](https://www.gatsbyjs.org/docs/adding-pagination/)
* gatsby [sitemap](https://www.gatsbyjs.org/docs/creating-a-sitemap/)
* gatsby [routing](https://www.gatsbyjs.org/docs/routing/)
* gatsby [fetching data on client side](https://www.gatsbyjs.org/docs/client-data-fetching/)
* tutorial on making a simple [gatsby blog](https://reacttraining.com/blog/gatsby-mdx-blog/)
* try grid in layout component
* simple blog posts
* try gatsby plugin for remote images
* look into gatsby gif optimization
* gatsy and youtube/vimeo embeds---anything to be done here?


## THE TOOLS


![graphyQL](https://cdn-media-1.freecodecamp.org/images/1*49DDRZhUWvVnH-QNHuSUSw.png)

### GraphQL

The Fullstack Tutorial for GraphQL is [here](https://www.howtographql.com/).

Article on [GraphQL vs REST](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b)

[Apollo tutorial](https://www.apollographql.com/docs/tutorial/introduction).

### Gatsby

Gatsby [main tutorial](https://www.gatsbyjs.org/tutorial/).

The Gatsby site's [page](https://www.gatsbyjs.org/tutorial/part-zero/) on setting up your development environment is useful even not for Gatsby.

[Why Gatsby uses GraphQl](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/).

Additional tutorial: https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial

Apollo using Gatsby
https://blog.apollographql.com/a-new-apollo-docs-experience-5645b9d56260


### TINA

https://tinacms.org/docs/getting-started/introduction


### GraphQL code generators

Here are a few GraphQL code generators:
* [GraphQL Code Generator](https://graphql-code-generator.com/)
* [Zeus](https://github.com/graphql-editor/graphql-zeus)
* [Prisma GraphQL generator](https://github.com/prisma-labs/graphqlgen)

and before graphQL [swagger](https://github.com/swagger-api/swagger-codegen)


## NOTES


### ADD TO GATSBY WORKBOOK

link to gatsby basics site: https://mkuzmick.github.io/gatsby-basics/

adding global styles with a layout component: https://www.gatsbyjs.org/docs/global-css/

typography.js looks useful and cool: https://kyleamathews.github.io/typography.js/

key article on styling: https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660

gatsby steps:
* start new app
```
gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-four
```
*

next up: https://www.gatsbyjs.org/tutorial/part-five/
<<<<<<< HEAD


#### AIRTABLE DEEP LINKING

NOTE: when perfoming "deep linking" of Airtable tables, you need to grab all of the tables you need to perform the links (it doesn't "see" that you need linked records from another table and grab them for you automatically--you need to pull in that table, and, presumably, to make sure that the view you've chosen contains everything you need to make all those links work)k
=======
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxNzUwNjU2OF19
-->
>>>>>>> 0a4ddd78c770b0a9590cd30cd6283b3872297124
