'use strict';

const browserSync = require('browser-sync').create();
const config      = require('../config');
const gulp        = require('gulp');
const reload      = browserSync.reload;

function startServer() {
  return browserSync.init({
    server: config.distRoot
  });
}

gulp.task('server:dev', ['scripts:dev', 'styles:dev'], () => {
  startServer();

  gulp.watch([config.scripts.files, config.scripts.mainFile], ['scripts:dev', reload]);
  gulp.watch([config.styles.files, config.styles.mainFile], ['styles:dev', reload]);
});

gulp.task('server:dist', ['build'], () => startServer());
