gulp.task('images', () => {
  return gulp.src(sourcePath.images)
    .pipe(plumber())
    .pipe(changed(distPath.images))
    .pipe(imageMin())
    .pipe(plumber.stop())
    .pipe(gulp.dest(distPath.images))
    .pipe(browserSync.stream());
});
