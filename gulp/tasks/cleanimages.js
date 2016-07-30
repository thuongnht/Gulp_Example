var gulp = require('gulp');
var del = require('del');
var config = require('../config').optimize.delete;

gulp.task('cleanimages', function(cb) {
	del(config.images, {force: true}, cb)
});