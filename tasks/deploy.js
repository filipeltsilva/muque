'use strict';

const config = require('../config.json');
const ghPages = require('gulp-gh-pages-cname');
const gulp = require('gulp');

module.exports = function () {
  return gulp.src(config.folders.buildRoot)
    .pipe(ghPages({
      // branch: your_branch_name
      // cname: your_cname_value
      // message: your_deploy_message
      // remoteUrl: your_site_repository_url
  }));
};
