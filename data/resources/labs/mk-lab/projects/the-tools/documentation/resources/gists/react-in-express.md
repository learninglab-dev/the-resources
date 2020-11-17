

```

  app.get('/reactapp', (req, res) => {
    res.sendFile(path.join(__dirname+'/react/reactapp/build/index.html'));
  });

  app.get('/reactapp/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/react/reactapp/build/index.html'));
  });

  app.get('/shards', (req, res) => {
    res.sendFile(path.join(__dirname+'/react/shards/build/index.html'));
  });

  app.get('/shards/*', (req, res) => {
    console.log("got request for shards/*");
      res.send('got it')
    res.sendFile(path.join(__dirname+'/react/shards/build/index.html'));
  });


```
