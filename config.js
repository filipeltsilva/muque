module.exports = {
  distRoot: './dist',
  images: {
    destination: './dist/assets/images',
    source: './src/images/*'
  },
  scripts: {
    destination: './dist/assets/js',
    files: './src/scripts/**/*.js',
    mainFile: './src/scripts/application.js'
  },
  styles: {
    destination: './dist/assets/css',
    files: './src/stylus/**/*.styl',
    mainFile: './src/stylus/main.styl'
  }
};
