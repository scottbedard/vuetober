var path = require('path')

/**
 * Require Browsersync along with webpack and middleware for it
 */
var webpack = require('webpack')
var browserSync = require('browser-sync')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

/**
 * Require ./webpack.dev.config.js and make a bundler from it
 */
var webpackConfig = require('./webpack.dev.conf')
var bundler = webpack(webpackConfig)

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
    proxy: "{{ proxy }}",
    middleware: [
        webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true,
                chunks: false
            }
        }),
        webpackHotMiddleware(bundler)
    ],
    rewriteRules: [
      {
        match: /<link href="(.*)app\.(.*)\.css" rel="stylesheet">/ig,
        fn: function(match) { return '<link href="/app.css" rel="stylesheet">' }
      },
      {
        match: /<script src="(.*)app\.(.*)\.js"><\/script>/ig,
        fn: function(match) { return '<script src="/app.js"></script>' }
      },
    ],
})
