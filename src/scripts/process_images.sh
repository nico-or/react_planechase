# /bin/bash

# find . -type f -iname "*.jpg" | parallel mogrify -rotate 90 {}

# find . -type f -iname "*.jpg" | parallel convert {} -resize '1920x1080>' resized/{/}

# art crop  1214 x 543
# large      672 x 936
# normal     488 x 680
# small      146 x 204