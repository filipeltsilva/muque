'use strict';

const gulp = require('gulp');

const del = require('del');
//const scripts = require('./tasks/scripts');
const styles  = require('./tasks/styles');

gulp.task('clean', () => {
  del('./dist/').then((paths) => {
    paths.length > 0
      ? console.log('Deleted: ', paths.join('\n'))
      : console.log('Nothing to delete');
  });
});

gulp.task('default', styles.dev);

gulp.task('build', styles.production);
