var gulp = require("gulp");
var sourceMaps = require("gulp-sourcemaps");
var stylus = require("gulp-stylus");

var distPaths = {
  root: "./dist/"
};

var sourcePaths = {
  css: "./src/stylus/**/*.styl",
  stylus: "./src/stylus/main.styl"
};

gulp.task("css", function() {
  return gulp.src(sourcePaths.stylus)
    .pipe(sourceMaps.init())
      .pipe(stylus({
        compress: true
      }))
    .pipe(sourceMaps.write("."))
    .pipe(gulp.dest(distPaths.root));
});
