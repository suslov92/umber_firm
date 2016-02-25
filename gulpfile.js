var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith');

//server connect
gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

// css
gulp.task('css', function () {
  gulp.src('css/style.css')
    .pipe(prefix('last 15 version'))
    .pipe(minifyCSS(''))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

//html
gulp.task('html', function(){
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('imgMin', function(){
  return gulp.src('img/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('img/'))
});

// srites
gulp.task('sprite', function () {
  var spriteData = gulp.src('img/icon/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    algorithm: 'top-down',
    padding: 20
  }));
  return spriteData.pipe(gulp.dest('sprites/'));
});

//watch
gulp.task('watch', function(){
  gulp.watch('css/*.css', ['css']);
  gulp.watch('index.html', ['html']);
  gulp.watch('img/**/*', ['imgMin']);
});

//default
gulp.task('default', ['connect', 'watch']);