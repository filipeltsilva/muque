gulp.task('server', () => {
  browserSync.init({
    server: distPath.root
  });

  gulp.watch([sourcePath.css, sourcePath.stylusMainFile], ['css']);
  gulp.watch(sourcePath.images, ['images']);
  gulp.watch(sourcePath.javascript, ['js']);
});
