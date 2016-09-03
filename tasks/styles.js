'use strict';

const stylePath = {
  source     : './src/stylus/**/*.styl',
  stylusFile : './src/stylus/main.styl',
  destination: './dist'
};

let gulp       = require('gulp');
let koutoSwiss = require('kouto-swiss');
let plumber    = require('gulp-plumber');
let sourceMaps = require('gulp-sourcemaps');
let stylus     = require('gulp-stylus');

let cssMin = require('gulp-cssmin');

function buildToDev() {
  return gulp.src(stylePath.source)
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(stylus({
      use: koutoSwiss()
    }))
    .pipe(sourceMaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(stylePath.destination));
}

function buildToProduction() {
  return buildToDev()
    .pipe(cssMin())
    .pipe(gulp.dest(stylePath.destination));
}

exports.dev = buildToDev;
exports.production = buildToProduction;
