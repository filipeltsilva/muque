gulp.task('deploy', () => {
  return gulp.src(distPath.root + '**/*')
    .pipe(ghPages({
      // Configure your deploy according your necessities following the gulp-gh-pages-cname documentation
    }));
});
