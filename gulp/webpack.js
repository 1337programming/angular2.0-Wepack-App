var gulp             = require('gulp');
var gutil            = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var path             = require('path');
var config           = require('../webpack.config');


gulp.task('webpack-dev-server', function(callback) {
  var server = new WebpackDevServer(webpack(config), {
    publicPath: '/__build__/',
    contentBase: 'src/public',

    // Toggle this to enable _in code_ hot module replacement.
    // See hot-module.js / css for an example.  If you're looking
    // to simply update css / js, set to false for a sufficent enough
    // page refresh.  Otherwise you will need to wrap js requires
    // in the hot module loader accept callback in `app.js`.
    hot: true,
    inline: true,
    noInfo: true,
    quiet: true,
    stats: { colors: true },
    watchDelay: 3001
  });

  server.listen(8080, "localhost", function() {});

  gutil.log('[webpack-dev-server]',
    'http://localhost:8080/');

  callback();
});

gulp.task('webpack', ['clean', 'webpack-dev-server'], function (callback) {
  webpack(config, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
  });
});

