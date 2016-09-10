'use strict;';

const gulp = require('gulp');

gulp.task('build', ['clean', 'images:build', 'scripts:build', 'styles:build']);
