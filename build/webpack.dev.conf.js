var baseWebpackConfig = require('./webpack.base.conf');
var config = require('../config');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
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
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
    devtool: '#cheap-module-eval-source-map', // cheap-module-eval-source-map is faster for development
    plugins: [
        new webpack.DefinePlugin({ 'process.env': config.dev.env }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'src/index.html',
            inject: true,
            template: 'src/index.htm',
        }),
        new FriendlyErrorsPlugin(),
    ],
});
