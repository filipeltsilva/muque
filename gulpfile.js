'use strict';

const del = require('del');
const gulp = require('gulp');

const deploy  = require('./tasks/deploy');
const images  = require('./tasks/images');
const scripts = require('./tasks/scripts');
const styles  = require('./tasks/styles');

gulp.task('clean', () => {
  del('./dist/*').then((paths) => {
    paths.length > 0
      ? console.log('Deleted: ', paths.join('\n'))
      : console.log('Nothing to delete');
  });
});

gulp.task('default', scripts.dev);

gulp.task('deploy', deploy);

gulp.task('build', scripts.production);
