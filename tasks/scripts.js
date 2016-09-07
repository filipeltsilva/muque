'use strict';

const concat     = require('gulp-concat');
const config     = require('../config.json');
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');
const sourceMaps = require('gulp-sourcemaps');
const uglify     = require('gulp-uglify');

function buildScripts() {
  return gulp.src(config.folders.scripts)
    .pipe(plumber())
      .pipe(sourceMaps.init())
        .pipe(concat('application.js'))
      .pipe(sourceMaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.folders.buildRoot));
}

module.exports.dev = function() {
  return buildScripts();
};

module.exports.production = function() {
  return buildScripts()
    .pipe(uglify())
    .pipe(gulp.dest(config.folders.buildRoot));
};
