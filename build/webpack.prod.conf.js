var baseWebpackConfig = require('./webpack.base.conf');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var env = process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            extract: true,
            sourceMap: config.build.productionSourceMap,
        }),
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        path: config.build.assetsRoot,
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({ 'process.env': env }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }}),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            filename: path.resolve(__dirname, '../pages/index.htm'),
            inject: true,
            minify: {
                // https://github.com/kangax/html-minifier#options-quick-reference
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
            },
            template: 'src/index.htm',
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0;
            },
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor'],
        }),
    ],
});

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin');

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            algorithm: 'gzip',
            asset: '[path].gz[query]',
            minRatio: 0.8,
            test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
        })
    );
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
