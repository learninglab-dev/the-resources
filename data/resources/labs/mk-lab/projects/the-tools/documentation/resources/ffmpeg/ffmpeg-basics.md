

### video from stills

```
ffmpeg -r 60 -f image2 -s 1920x1080 -i pic%04d.png -vcodec libx264 -crf 25  -pix_fmt yuv420p test.mp4

ffmpeg -r 24 -f image2 -s 1920x1080 -i /Users/mk/Desktop/_blender/renders/bok-logo/%04d.png -vcodec libx264 -crf 23  -pix_fmt yuv420p /Users/mk/Desktop/test.mp4

ffmpeg -r 24 -f image2 -s 1920x1080 -i /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe/%04d.png -vcodec libx264 -crf 23  -pix_fmt yuv420p /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe.mov

ffmpeg -r 24 -f image2 -s 640x360 -i /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe/%04d.png -vcodec libx264 -crf 23  -pix_fmt yuv420p /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe-360.mov

ffmpeg -r 24 -f image2 -s 640x360 -i "/Users/mk/Dropbox (MLV)/shared-2019/mk_sync_2019/_tools/blender/renders/particles-20191110/%04d.png" -vcodec libx264 -crf 23  -pix_fmt yuv420p /Users/mk/Desktop/particles-20191110-360.mov


ffmpeg -r 24 -f image2 -s 640x360 -i /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe-eevee/%04d.png -vcodec libx264 -crf 23  -pix_fmt yuv420p /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe-eevee-360.mov


/Users/mk/Desktop/_blender/renders/bok-logo/


# or try

ffmpeg -f image2 -framerate 24 -i /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe/%04d.png -vf scale=640x360 /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe-360.gif

ffmpeg -f image2 -framerate 24 -i /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe/%04d.png -vf scale=640x360 /Users/mk/Desktop/_blender/renders/mk-name-drop-wireframe-360.gif


ffmpeg -f image2 -framerate 24 -i "/Volumes/mk_storage/_apps/Dropbox (MLV)/shared-2019/mk_sync_2019/_tools/blender/renders/motiongraphics/%04d.png" -vf scale=320x180 /Users/mk/Desktop/abstract-vis-180.gif

```
