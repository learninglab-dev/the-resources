cb, promise, asyc await

here's how we'd handle s3 upload with callbacks. First the s3 function:

```
module.exports.upload = async function(filePath, cb){
  const S3_BUCKET = process.env.S3_THESHOW_BUCKET;
  const s3 = new aws.S3();  // Create a new instance of S3
  const stream = fs.createReadStream(filePath);
  var params = {
    Bucket: S3_BUCKET,
    Key: path.join('public', 'uploads', path.basename(filePath)),
    Body: stream
  };
  s3.upload(params, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
}
```

then we'd call it like this:

```
ss3.upload(yargs.ss3, (err, data)=>{
      if (err) {
        console.log(err);
      } else {
        console.log(`got the ss3 result: ${JSON.stringify(data)}`);
      }
});

```

Going with promises, we'd promisify s3.upload thusly:

```
module.exports.uploadPromise = (filePath) => {
  const S3_BUCKET = process.env.S3_THESHOW_BUCKET;
  const s3 = new aws.S3();  // Create a new instance of S3
  const stream = fs.createReadStream(filePath);
  var params = {
    Bucket: S3_BUCKET,
    Key: path.join('public', 'uploads', path.basename(filePath)),
    Body: stream
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) { reject(err) }
      else { resolve(data) }
    })
  })
}
```

then we'd call it in one of two ways:

```

    ss3.uploadPromise(yargs.ss3)
      .then(data=>{console.log(JSON.stringify(data, null, 4));})
      .catch(err=>{console.log(err)});
```

or:

```
try {
      const result = await ss3.uploadPromise(yargs.ss3);
      console.log(JSON.stringify(result));
    } catch (e) {
      console.log(e);
    }

```

That's all.8
