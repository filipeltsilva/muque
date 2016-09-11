'use strict';

const browserSync = require('browser-sync').create();
const config      = require('../config');
const gulp        = require('gulp');

function startServer() {
  return browserSync.init({
    server: config.buildRoot
  });
}

gulp.task('server:dev', ['scripts:dev', 'styles:dev'], () => {
  startServer();

  gulp.watch([config.scripts.files, config.scripts.mainFile], ['scripts:dev']);
  gulp.watch([config.styles.files, config.styles.mainFile], ['styles:dev']);
});

gulp.task('server:build', ['build'], () => startServer());
