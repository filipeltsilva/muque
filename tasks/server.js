'use strict';

const browserSync = require('browser-sync').create();
const config = require('../config');
const gulp = require('gulp');

gulp.task('server', () => {
  browserSync.init({
    server: config.buildRoot
  });

  // gulp.watch(config.scripts.files, scripts.dev);
  // gulp.watch(config.styles.files, styles.dev);
});
