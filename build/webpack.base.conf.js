var config = require('../config');
var eslintFriendlyFormatter = require('eslint-friendly-formatter');
var isProduction = process.env.NODE_ENV === 'production';
var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
};

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProduction
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        modules: [
            resolve('src'),
            resolve('scss'),
            resolve('node_modules'),
        ],
        alias: {
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [resolve('src'), resolve('test')],
                options: {
                    fix: true,
                    formatter: eslintFriendlyFormatter,
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: utils.cssLoaders({
                        extract: isProduction,
                        sourceMap: isProduction
                            ? config.build.productionSourceMap
                            : config.dev.cssSourceMap,
                    }),
                    postcss: [
                        require('autoprefixer')({ browsers: ['last 2 versions'] }),
                    ],
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: '/',
                sassLoader: {
                    includePaths: [
                        resolve('scss'),
                        resolve('node_modules'),
                    ],
                },
            },
        }),
    ],
};
