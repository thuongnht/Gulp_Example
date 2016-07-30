var gulp = require('gulp');
var hint = require('gulp-jshint');
var minifyjs = require('gulp-uglify');
var gulpIgnore = require('gulp-ignore');
var size = require('gulp-size');
var config = require('../config').optimize.js;

gulp.task('optimize:js', function() {
	return gulp.src([config.src])
		//.pipe(hint())
		//.pipe(hint.reporter())
		.pipe(gulpIgnore.exclude(config.ignore))
		.pipe(minifyjs(config.options))
		.pipe(gulp.dest(config.dest))
		.pipe(size());
});
