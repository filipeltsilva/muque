'use strict';

const browserSync = require('browser-sync').create();
const del  = require('del');
const gulp = require('gulp');

const config  = require('./config');
const deploy  = require('./tasks/deploy');
const server = require('./tasks/server');

gulp.task('clean', () => {
  del('./dist/*').then((paths) => {
    paths.length > 0
      ? console.log('Deleted: ', paths.join('\n'))
      : console.log('Nothing to delete');
  });
});

gulp.task('default', styles.dev);

gulp.task('deploy', deploy);

gulp.task('server', server);
