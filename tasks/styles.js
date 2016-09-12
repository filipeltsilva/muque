'use strict';

const config      = require('../config');
const cssMin      = require('gulp-cssmin');
const gulp        = require('gulp');
const koutoSwiss  = require('kouto-swiss');
const plumber     = require('gulp-plumber');
const sourceMaps  = require('gulp-sourcemaps');
const stylus      = require('gulp-stylus');

function buildStyles() {
  return gulp.src(config.styles.files)
    .pipe(plumber())
      .pipe(sourceMaps.init())
        .pipe(stylus({
          use: koutoSwiss()
        }))
      .pipe(sourceMaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.buildRoot));
}

gulp.task('styles:dev', () => {
  return buildStyles();
});

gulp.task('styles:build', () => {
  return buildStyles()
    .pipe(cssMin())
    .pipe(gulp.dest(config.buildRoot));
});
