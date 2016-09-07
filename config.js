module.exports = {
  buildRoot: "./dist",
  images: {
    destination: "./dist/images",
    source: "./src/images/*.*"
  },
  scripts: {
    files: "./src/scripts/**/*.js",
    mainFile: "./src/scripts/application.js"
  },
  styles: {
    files: "./src/stylus/**/*.styl",
    mainFile: "./src/stylus/style.styl"
  }
};
