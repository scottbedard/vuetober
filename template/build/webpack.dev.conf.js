var baseWebpackConfig = require('./webpack.base.conf');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var utils = require('./utils');
var webpack = require('webpack');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
    devtool: '#eval-source-map', // eval-source-map is faster for development
    plugins: [
        new webpack.DefinePlugin({ 'process.env': config.dev.env }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'src/index.htm',
            inject: true,
            template: 'src/index.htm',
        }),
    ],
});
