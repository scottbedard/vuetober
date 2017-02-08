// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
    build: {
        assetsPublicPath: '/themes/oc-vuetober-theme/assets/',
        assetsRoot: path.resolve(__dirname, '../assets'),
        assetsSubDirectory: 'static',
        bundleAnalyzerReport: false,
        env: require('./prod.env'),
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        productionSourceMap: true,
    },
    dev: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        autoOpenBrowser: true,
        cssSourceMap: false,
        env: require('./dev.env'),
        proxyTable: {},
    },
};
