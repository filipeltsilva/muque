'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var changed     = require('gulp-changed');
var imageMin    = require('gulp-imagemin');
var koutoSwiss  = require('kouto-swiss');
var reload      = browserSync.reload;
var rename      = require('gulp-rename');
var sourceMaps  = require('gulp-sourcemaps');
var stylus      = require('gulp-stylus');
var uglify      = require('gulp-uglify');

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
    server: distPath.root;
  });

  gulp.watch(sourcePath.css, ['css']).on('change', reload);
  gulp.watch(sourcePath.images, ['images']).on('change', reload);
  gulp.watch(sourcePath.javascript, ['js']).on('change', reload);

})

gulp.task('css', () => {
  return gulp.src(sourcePath.stylusMainFile)
    .pipe(sourceMaps.init())
      .pipe(stylus({
        compress: true,
        use: koutoSwiss()
      }))
    .pipe(sourceMaps.write(distPath.maps))
    .pipe(addMinifiedFileSuffix(rename))
    .on('error', (error) => {console.log(error.message);})
    .pipe(gulp.dest(distPath.root));
});

gulp.task('images', () => {
  return gulp.src(sourcePath.images)
    .pipe(changed(distPath.images))
    .pipe(imageMin())
    .pipe(gulp.dest(distPath.images));
});

gulp.task('js', () => {
  return gulp.src(sourcePath.javascript)
    .pipe(sourceMaps.init())
      .pipe(uglify())
    .pipe(sourceMaps.write(distPath.maps))
    .pipe(addMinifiedFileSuffix(rename))
    .pipe(gulp.dest(distPath.root));
});

gulp.task('default', ['browser-sync']);
