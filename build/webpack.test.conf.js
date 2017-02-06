var baseConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var utils = require('./utils');
var webpack = require('webpack');

var webpackConfig = merge(baseConfig, {
    // use inline sourcemap for karma-sourcemap-loader
    module: {
        rules: utils.styleLoaders(),
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        }),
    ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
