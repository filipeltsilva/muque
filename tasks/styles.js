'use strict';

const config     = require('../config.json');
const cssMin     = require('gulp-cssmin');
const gulp       = require('gulp');
const koutoSwiss = require('kouto-swiss');
const plumber    = require('gulp-plumber');
const sourceMaps = require('gulp-sourcemaps');
const stylus     = require('gulp-stylus');

function buildStyles() {
  return gulp.src(config.folders.styles)
    .pipe(plumber())
      .pipe(sourceMaps.init())
        .pipe(stylus({
          use: koutoSwiss()
        }))
      .pipe(sourceMaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.folders.buildRoot));
}

module.exports.dev = function() {
  return buildStyles();
};

module.exports.production = function() {
  return buildStyles()
    .pipe(cssMin())
    .pipe(gulp.dest(config.folders.buildRoot));
};
