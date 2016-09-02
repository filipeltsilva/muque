'use strict';

var gulp        = require('gulp')
  , browserSync = require('browser-sync').create()
  , changed     = require('gulp-changed')
  , ghPages     = require('gulp-gh-pages-cname')
  , imageMin    = require('gulp-imagemin')
  , uglify      = require('gulp-uglify')
;

var distPath = {
  images: './dist/images/',
  root  : './dist/'
};

var sourcePath = {
  css           : './src/stylus/**/*.styl',
  images        : './src/images/**',
  javascript    : './src/javascripts/**/*.js',
  stylusMainFile: './src/stylus/main.styl'
};

const styles = require('./tasks/styles');

gulp.task('deploy', () => {
  return gulp.src(distPath.root + '**/*')
    .pipe(ghPages({
      // Configure your deploy according your necessities following the gulp-gh-pages-cname documentation
    }));
});

gulp.task('css', () => {
  return gulp.src(sourcePath.stylusMainFile)
    .pipe(plumber())
    .pipe(sourceMaps.init())
      .pipe(stylus({
        compress: true,
        use: koutoSwiss()
      }))
    .pipe(sourceMaps.write())
    .pipe(addMinifiedFileSuffix(rename))
    .pipe(plumber.stop())
    .pipe(gulp.dest(distPath.root))
    .pipe(browserSync.stream());
});

gulp.task('images', () => {
  return gulp.src(sourcePath.images)
    .pipe(plumber())
    .pipe(changed(distPath.images))
    .pipe(imageMin())
    .pipe(plumber.stop())
    .pipe(gulp.dest(distPath.images))
    .pipe(browserSync.stream());
});

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

gulp.task('server', () => {
  browserSync.init({
    server: distPath.root
  });

  gulp.watch([sourcePath.css, sourcePath.stylusMainFile], ['css']);
  gulp.watch(sourcePath.images, ['images']);
  gulp.watch(sourcePath.javascript, ['js']);
});

gulp.task('default', ['server']);
