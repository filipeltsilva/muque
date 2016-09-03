'use strict';

const gulp = require('gulp');

const styles = require('./tasks/styles');

gulp.task('default', styles.dev);

gulp.task('build', styles.production);
