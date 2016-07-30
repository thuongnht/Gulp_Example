var gulp = require('gulp');
var del = require('del');
var config = require('../config').optimize.delete;

gulp.task('cleanphp', function(cb) {
    del(config.php, {force: true}, cb)
});