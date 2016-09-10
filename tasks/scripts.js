'use strict';

const browserSync = require('browser-sync').create();
const concat      = require('gulp-concat');
const config      = require('../config');
const gulp        = require('gulp');
const plumber     = require('gulp-plumber');
const sourceMaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');

function buildScripts() {
  return gulp.src(config.scripts.files)
    .pipe(plumber())
      .pipe(sourceMaps.init())
        .pipe(concat('application.js'))
      .pipe(sourceMaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.buildRoot))
    .pipe(browserSync.stream());
}

gulp.task('scripts:dev', () => {
  return buildScripts();
});

gulp.task('scripts:build', () => {
  return buildScripts()
    .pipe(uglify())
    .pipe(gulp.dest(config.buildRoot));
});
