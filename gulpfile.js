var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');
var webserver = require('gulp-webserver');

gulp.task('default', ['resize', 'optimize'], function () {
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: true
    }));
});

function resize(path) {
  return gulp.src(path)
    .pipe(imageResize({ 
      width : 1200,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('img'));
}

gulp.task('resize', ['resize-png', 'resize-jpg', 'resize-gif'], function() {
});

gulp.task('resize-png', function() {
  return resize('img/*.png')
});

gulp.task('resize-jpg', function() {
  return resize('img/*.jpg')
});

gulp.task('resize-gif', function() {
  return resize('img/*.gif')
});

gulp.task('optimize', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img'));
});
