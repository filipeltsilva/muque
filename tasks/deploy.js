'use strict';

const config  = require('../config');
const ghPages = require('gulp-gh-pages-cname');
const gulp    = require('gulp');

gulp.task('deploy', ['build'], () => {
  return gulp.src(config.distRoot)
    .pipe(ghPages({
      // branch: your_branch_name
      // cname: your_cname_value
      // message: your_deploy_message
      // remoteUrl: your_site_repository_url
  }));
});
