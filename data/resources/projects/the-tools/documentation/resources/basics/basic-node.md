

### CREATING A SIMPLE EXPRESS APP

Use express-generator to create an app called whatever you want wherever you want it, but this is how to create `my-app` inside a `Development` folder in your home directory.

```
cd ~/Development
npx express-generator my-express-app
cd my-express-app
npm install
npm start
```

Open up [localhost:3000](http://localhost:3000) in your browser.

That's it.

### MAKING CHANGES AND RESTARTING THE SERVER




### TWEAKING THE EXPRESS APP BEFORE YOU GO FURTHER

To avoid having to restart your server, install [nodemon](https://www.npmjs.com/package/nodemon) with `npm install nodemon` (while **inside** the `/my-app` folder), then add a `devstart` script for using while you develop the app by adjusting the `"scripts"` section of your `package.json`:

```
"scripts": {
  "start": "node ./bin/www",
  "devstart": "nodemon ./bin/www"
},
```

Now restart your server
