var gulp = require('gulp');
var del = require('del');
var config = require('../config').optimize.delete;

gulp.task('cleancss', function(cb) {
	del(config.css, {force: true}, cb)
});