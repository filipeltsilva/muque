'use strict';

const concat     = require('gulp-concat');
const config     = require('../config.json');
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');
const sourceMaps = require('gulp-sourcemaps');
const uglify     = require('gulp-uglify');

function buildToDev() {
  return gulp.src(config.folders.scripts)
    .pipe(concat('application.js'))
    .pipe(gulp.dest(config.folders.buildRoot));
}

function buildToProduction() {
  return buildToDev()
    .pipe(uglify())
    .pipe(gulp.dest(config.folders.buildRoot));
}

exports.dev = buildToDev;
exports.production = buildToProduction;
