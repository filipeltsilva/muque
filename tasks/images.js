'use strict';

const changed  = require('gulp-changed');
const config   = require('../config.json');
const gulp     = require('gulp');
const imageMin = require('gulp-imagemin');
const plumber  = require('gulp-plumber');

function buildImages() {
  return gulp.src(config.folders.images_source)
    .pipe(plumber())
      .pipe(changed(config.folders.images_destination))
      .pipe(imageMin())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.folders.images_destination));
}

module.exports.production = function() {
  return buildImages();
};
