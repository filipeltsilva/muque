'use strict';

const config = require('../config');
const del    = require('del');
const gulp   = require('gulp');

gulp.task('clean', () => {
  del(config.distRoot + '/*').then((paths) => {
    paths.length > 0
      ? console.log('Deleted: ', paths.join('\n'))
      : console.log('Nothing to delete');
  });
});
