'use strict';

const config = require('../config');
const ghPages = require('gulp-gh-pages-cname');
const gulp = require('gulp');

function deploy() {
  return gulp.src(config.buildRoot)
    .pipe(ghPages({
      // branch: your_branch_name
      // cname: your_cname_value
      // message: your_deploy_message
      // remoteUrl: your_site_repository_url
  }));
}

module.exports = function () {
  return deploy();
};
