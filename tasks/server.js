'use strict';

const browserSync = require('browser-sync').create();
const config = require('../config');
const gulp = require('gulp');

const scripts = require('./tasks/scripts');
const styles = require('./tasks/styles');

function startServer() {
  return function() {
    browserSync.init({
      server: config.buildRoot
    });

    gulp.watch(config.scripts.files, scripts.dev);
    gulp.watch(config.styles.files, styles.dev);
  };
}

module.exports.server = startServer();
