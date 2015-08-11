var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config.js');
var browserSync = require('browser-sync');

gulp.task('serve', ['webpack', 'watch'], function() {
	var server = {
		baseDir: ['./', 'src/public']
	};
	browserSync.instance = browserSync.init({
		startPath: '/',
		server: server,
		browser: 'default'
	});
});