'use strict';

const changed  = require('gulp-changed');
const config   = require('../config');
const gulp     = require('gulp');
const imageMin = require('gulp-imagemin');
const plumber  = require('gulp-plumber');

function buildImages() {
  return gulp.src(config.images.source)
    .pipe(plumber())
      .pipe(changed(config.images.destination))
      .pipe(imageMin())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.images.destination));
}

module.exports.production = function() {
  return buildImages();
};
