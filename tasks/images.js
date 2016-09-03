'use strict';

const gulp = require('gulp');
const changed = require('gulp-changed');
const imageMin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

function buildToProduction() {
  return gulp.src(sourcePath.images)
    .pipe(plumber())
    .pipe(changed(distPath.images))
    .pipe(imageMin())
    .pipe(plumber.stop())
    .pipe(gulp.dest(distPath.images));
}
