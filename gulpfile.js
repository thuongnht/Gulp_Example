var requireDir = require('require-dir');
var gulp = require('gulp');

requireDir('./gulp/tasks', {recurse: true} );

gulp.task('default', ['cleancss', 'cleanjs', 'cleanimages', 'cleanphp'], function() {
	gulp.start('optimize:css', 'optimize:images', 'optimize:js', 'optimize:html', 'optimize:php');

	gulp.start('watch');
});

// gulp.task('default', ['cleanjs'], function() {
// 	gulp.start('optimize:js');
// });