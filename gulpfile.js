var gulp 			= require('gulp');
var autoprefixer 	= require('gulp-autoprefixer');
var rename 			= require('gulp-rename');
var watch 			= require('gulp-watch');
var concat			= require('gulp-concat');
var sass            = require('gulp-ruby-sass');
var order           = require("gulp-order");
var wrap            = require('gulp-wrap');
var connect		    = require('gulp-connect');
var webserver       = require('gulp-webserver');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');

gulp.task('default', ['js', 'sass', 'webserver', 'watch'], function() {

});

gulp.task('sass', function () {
    return sass('src/scss/bundle-order.scss', { style: 'expanded' })
        .pipe(autoprefixer())
        .pipe(rename(function(path) {
        path.basename = 'bundle';
    }))
        .pipe(gulp.dest('www/css/'));
});


gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(order(require('./js-order'), {base: './'}))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('javascript', function() {
  gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('www/js/maps'))
    .pipe(gulp.dest('www/js'));
});

gulp.task('compress', function() {
  return gulp.src('www/js/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('www/js/min'));
});

//Starts a php webserver
gulp.task('webserver', function() {
	connect.server({
		hostname: 'localhost',
		root: 'www',
    livereload: false,
		port: 8888
	});
});

gulp.task('build', function() {

});


//Gulp watch
gulp.task('watch', function() {

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch(['src/js/**/*.js'], ['js']);

});


