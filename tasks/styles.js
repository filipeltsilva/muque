const stylePath = {
  src       : './src/stylus/**/*.styl',
  stylusFile: './src/stylus/main.styl',
  dest      : './dist'
};

let gulp = require('gulp');
let koutoSwiss = require('kouto-swiss');
let plumber = require('gulp-plumber');
let sourceMaps = require('gulp-sourcemaps');
let stylus = require('gulp-stylus');

// gulp.task('styling', () => {
//   return gulp.src(sourcePath.stylusMainFile)
//     .pipe(plumber())
//     .pipe(sourceMaps.init())
//       .pipe(stylus({
//         compress: true,
//         use: koutoSwiss()
//       }))
//     .pipe(sourceMaps.write())
//     .pipe(plumber.stop())
//     .pipe(gulp.dest(distPath.root))
//     .pipe(browserSync.stream());
// });

function buildDev() {

}

function buildProd() {

}

exports dev = buildDev;
exports production = buildProduction;
