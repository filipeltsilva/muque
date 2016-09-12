'use strict;';

const gulp = require('gulp');

gulp.task('build', ['clean', 'images:dist', 'scripts:dist', 'styles:dist']);
