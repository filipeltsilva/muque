'use strict';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));

const gulp       = require('gulp');
const cssMin     = require('gulp-cssmin');
const koutoSwiss = require('kouto-swiss');
const plumber    = require('gulp-plumber');
const sourceMaps = require('gulp-sourcemaps');
const stylus     = require('gulp-stylus');

function buildToDev() {
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

function buildToProduction() {
  return buildToDev()
    .pipe(cssMin())
    .pipe(gulp.dest(config.folders.buildRoot));
}

exports.dev = buildToDev;
exports.production = buildToProduction;
