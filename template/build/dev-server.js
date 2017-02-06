var browserSync = require('browser-sync');
var config = require('../config');
var express = require('express');
var path = require('path');
var proxyMiddleware = require('http-proxy-middleware');
var webpack = require('webpack');
var webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        chunks: false,
        colors: true,
    },
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];

    if (typeof options === 'string') {
        options = { target: options }
    }

    app.use(proxyMiddleware(context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

// browser sync
browserSync({
    proxy: "{{ proxy }}",
    open: false,
    middleware: [
        devMiddleware,
        hotMiddleware,
    ],
    rewriteRules: [
        {
            match: /<link(.*){{ name }}\/assets(.*?)>/ig,
            fn: function(match) {
                return '';
            },
        },
        {
            match: /<div id=\"?app\"?><\/div>(.*)<\/body>/ig,
            fn: function(match) {
              return '<div id="app"></div><script src="/app.js"></script></body>';
            },
        },
    ],
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000' + '\n');
});
