# NOTES ON THE LOCALWORKFLOW

and related issues.

## FEATURES TO ADD NEXT

  - pretty print timelines
  - add deliverables to be emailed to trello list?
  - add day's shoots to trello list?
  - have trello check off feed google sheet



## NOTES ON FEATURES

### LOGGING Timecode

Name for the page and tool?
  - slate?
  - timecode logs

## DB MODELS

### shoot


### clip
(or video?)
```
  var VideoSchema = new Schema({
      shootId : String,
      fileName: String,
      paths: [String],
      proxy: Boolean,
      proxyLoc: String,
      ffprobeOutput: String,
      length: String,
      inTc: String,
      outTc: String,
      inUnixTime: Number,
      outUnixTime: Number,
  }, {strict: false});

  VideoSchema
    .virtual('url')
    .get(function () {
      return '/database/video/' + this._id;
  });

  ShootSchema
    .virtual('deleteUrl')
    .get(function () {
      return ('/database/video/' + this._id + '/delete');
  });   
```


### person
