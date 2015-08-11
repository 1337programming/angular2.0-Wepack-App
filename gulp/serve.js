var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config.js');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

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