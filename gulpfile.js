'use strict';

var gulp        = require('gulp')
  , browserSync = require('browser-sync').create()
  , changed     = require('gulp-changed')
  , imageMin    = require('gulp-imagemin')
  , koutoSwiss  = require('kouto-swiss')
  , rename      = require('gulp-rename')
  , sourceMaps  = require('gulp-sourcemaps')
  , stylus      = require('gulp-stylus')
  , uglify      = require('gulp-uglify')
;

var distPath = {
  images: './dist/images/',
  maps  : './maps/',
  root  : './dist/'
};

var sourcePath = {
  css           : './src/stylus/**/*.styl',
  images        : './src/images/**',
  javascript    : './src/javascripts/**/*.js',
  stylusMainFile: './src/stylus/main.styl'
};

function addMinifiedFileSuffix(renamedTask) {
  return renamedTask({
    suffix: '.min'
  });
}

gulp.task('browser-sync', () => {
  browserSync.init({
    server: distPath.root
  });

  gulp.watch(sourcePath.css, ['css']);
  gulp.watch(sourcePath.images, ['images']);
  gulp.watch(sourcePath.javascript, ['js']);
});

gulp.task('css', () => {
  return gulp.src(sourcePath.stylusMainFile)
    .pipe(sourceMaps.init())
      .pipe(stylus({
        compress: true,
        use: koutoSwiss()
      }))
    .pipe(sourceMaps.write(distPath.maps))
    .pipe(addMinifiedFileSuffix(rename))
    .pipe(gulp.dest(distPath.root))
    .pipe(browserSync.stream());
});

gulp.task('images', () => {
  return gulp.src(sourcePath.images)
    .pipe(changed(distPath.images))
    .pipe(imageMin())
    .pipe(gulp.dest(distPath.images))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src(sourcePath.javascript)
    .pipe(sourceMaps.init())
      .pipe(uglify())
    .pipe(sourceMaps.write(distPath.maps))
    .pipe(addMinifiedFileSuffix(rename))
    .pipe(gulp.dest(distPath.root))
    .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync']);
