'use strict';

const changed  = require('gulp-changed');
const config   = require('../config.json');
const gulp     = require('gulp');
const imageMin = require('gulp-imagemin');
const plumber  = require('gulp-plumber');

function buildToProduction() {
  return gulp.src(config.folders.images.source)
    .pipe(plumber())
    .pipe(changed(config.folders.images.destination))
    .pipe(imageMin())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.folders.images.destination));
}

exports.production = buildToProduction;
