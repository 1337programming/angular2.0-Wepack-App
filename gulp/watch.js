var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', function() {
	gulp.watch('src/*{,*/*}.*', ['reload-webpack']);
});

gulp.task('reload-webpack', ['webpack'], function() {
	browserSync.reload();
});