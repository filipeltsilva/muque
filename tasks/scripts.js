gulp.task('js', () => {
  return gulp.src(sourcePath.javascript)
    .pipe(plumber())
    .pipe(sourceMaps.init())
      .pipe(uglify())
    .pipe(sourceMaps.write())
    .pipe(addMinifiedFileSuffix(rename))
    .pipe(plumber.stop())
    .pipe(gulp.dest(distPath.root))
    .pipe(browserSync.stream());
});
