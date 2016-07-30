var gulp = require('gulp');
var size = require('gulp-size');
var config = require('../config').optimize.php;

gulp.task('optimize:php', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});