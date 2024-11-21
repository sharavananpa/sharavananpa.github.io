#!/bin/sh -l

npm install gulp gulp-htmlmin gulp-clean-css gulp-uglify gulp-minify-inline gulp-svgmin gulp-rev gulp-rev-replace del --save-dev
gulp

mv CNAME dist/CNAME
mv site.webmanifest dist/site.webmanifest
mv favicon.ico dist/favicon.ico
rm *
mv -v ./dist/* .
rm dist
rm -r .github