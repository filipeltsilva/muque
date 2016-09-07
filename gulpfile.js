'use strict';

const browserSync = require('browser-sync').create();
const del  = require('del');
const gulp = require('gulp');

const config  = require('../config.json');
const deploy  = require('./tasks/deploy');
const images  = require('./tasks/images');
const scripts = require('./tasks/scripts');
const styles  = require('./tasks/styles');

gulp.task('build', scripts.production);

gulp.task('clean', () => {
  del('./dist/*').then((paths) => {
    paths.length > 0
      ? console.log('Deleted: ', paths.join('\n'))
      : console.log('Nothing to delete');
  });
});

gulp.task('default', scripts.dev);

gulp.task('deploy', deploy);

gulp.task('server', () => {
  browserSync.init({
    server: config.folders.buildRoot;
  });
});
