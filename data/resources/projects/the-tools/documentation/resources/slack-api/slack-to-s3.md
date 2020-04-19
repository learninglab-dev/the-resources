# slack-to-s3 notes

## EXAMPLES FOR REFERENCE

example of comment on user-uploaded gif:

```
{
   "type": "message_action",
   "token": "Y2JldsIWiBOM4TitUaNPH1au",
   "action_ts": "1574649684.260043",
   "team": {
       "id": "T0HTW3H0V",
       "domain": "bokcenter"
   },
   "user": {
       "id": "U0HTZUUP4",
       "name": "marlon"
   },
   "channel": {
       "id": "C34MKDQMU",
       "name": "medium-gif"
   },
   "callback_id": "copyToS3",
   "trigger_id": "849326316839.17948119029.1f17438b933c22b926d60175ddbf9df4",
   "message_ts": "1574120701.020400",
   "message": {
       "type": "message",
       "text": "",
       "files": [
           {
               "id": "FQAQY8E66",
               "created": 1574120688,
               "timestamp": 1574120688,
               "name": "001_360.gif",
               "title": "001_360.gif",
               "mimetype": "image/gif",
               "filetype": "gif",
               "pretty_type": "GIF",
               "user": "U0HTZUUP4",
               "editable": false,
               "size": 1157643,
               "mode": "hosted",
               "is_external": false,
               "external_type": "",
               "is_public": true,
               "public_url_shared": false,
               "display_as_bot": false,
               "username": "",
               "url_private": "https://files.slack.com/files-pri/T0HTW3H0V-FQAQY8E66/001_360.gif",
               "url_private_download": "https://files.slack.com/files-pri/T0HTW3H0V-FQAQY8E66/download/001_360.gif",
               "thumb_64": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_64.png",
               "thumb_80": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_80.png",
               "thumb_360": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_360.png",
               "thumb_360_w": 360,
               "thumb_360_h": 203,
               "thumb_480": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_480.png",
               "thumb_480_w": 480,
               "thumb_480_h": 270,
               "thumb_160": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_160.png",
               "thumb_360_gif": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_360.gif",
               "thumb_480_gif": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_480.gif",
               "image_exif_rotation": 1,
               "original_w": 640,
               "original_h": 360,
               "deanimate_gif": "https://files.slack.com/files-tmb/T0HTW3H0V-FQAQY8E66-8cc6c264e2/001_360_deanimate_gif.png",
               "thumb_tiny": "AwAbADCumFcnPGSP0oO1uTn8qjyOeR+dO28AbgaAHsQCuFw3uOtIGA4Ocj0FOkVzKnfAxTDAwyS35UhjAj4HHB96RlP/AOs1IrnAIYcDHQ01myMbh/3yaYCHgdG/KpVdscKwzV0ikxzSuBXDnZjBJ9ajeVhnPBq5gZ6UjgDtSuMzQTtHTFBJ5496vqTg0MBjoKYj/9k=",
               "permalink": "https://bokcenter.slack.com/files/U0HTZUUP4/FQAQY8E66/001_360.gif",
               "permalink_public": "https://slack-files.com/T0HTW3H0V-FQAQY8E66-a852eeda90",
               "is_starred": false,
               "has_rich_preview": false
           }
       ],
       "upload": true,
       "user": "U0HTZUUP4",
       "display_as_bot": false,
       "ts": "1574120701.020400",
       "client_msg_id": "2dd5247c-2d46-49a7-9324-4c0b676825e3"
   },
   "response_url": "https://hooks.slack.com/app/T0HTW3H0V/849326316951/9mrvvLbbxa4BhSBOXpdHOjzN"
}

```

example of comment on bot-uploaded gif:

```
{
  "type": "message_action",
  "token": "Y2JldsIWiBOM4TitUaNPH1au",
  "action_ts": "1574649919.141475",
  "team": {
      "id": "T0HTW3H0V",
      "domain": "bokcenter"
  },
  "user": {
      "id": "U0HTZUUP4",
      "name": "marlon"
  },
  "channel": {
      "id": "CBCFS8WGJ",
      "name": "ll-log-of-operations"
  },
  "callback_id": "copyToS3",
  "trigger_id": "847012002180.17948119029.19610db08c37b1a228d0b0f11e4c22a6",
  "message_ts": "1574643922.001900",
  "message": {
      "type": "message",
      "subtype": "bot_message",
      "text": "new message",
      "ts": "1574643922.001900",
      "username": "ll-tools",
      "bot_id": "BMLU0ME21",
      "blocks": [
          {
              "type": "image",
              "block_id": "ufHU",
              "image_url": "https://ll-show.s3.amazonaws.com/public/uploads/sophie-and-marlon-001_360.gif(3 MB)
https://ll-show.s3.amazonaws.com/public/uploads/sophie-and-marlon-001_360.gif
",
              "alt_text": "peakGif: sophie-and-marlon-001",
              "title": {
                  "type": "plain_text",
                  "text": "peakGif: sophie-and-marlon-001",
                  "emoji": true
              },
              "fallback": "640x360px image",
              "image_width": 640,
              "image_height": 360,
              "image_bytes": 2918757,
              "is_animated": true
          }
      ]
  },
  "response_url": "https://hooks.slack.com/app/T0HTW3H0V/847469933376/s8UT7CAHd3jVxzcOh8EUCVNs"
}
```
