var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');

// helper function to get the base url for theme assets
// if no explicit value is set, we'll try to use the theme directory
function getProductionBaseUrl(api, pluginOptions) {
    var baseUrl = pluginOptions.baseUrl;
    const osSeparator = path.sep

    if (typeof baseUrl !== 'undefined') {
        return baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    }

    return '/' + api.resolve('assets').split(osSeparator).slice(-3).join('/') + '/';
}

// helper function for resolving configuration
// returns undefined if object does not have property
function resolveProperty(obj, p) {
    return p.split('.').reduce(function(p, k) {
        return p && p[k];
    }, obj);
}

module.exports = (api, options) => {
    var isProduction = process.env.NODE_ENV === 'production';

    var pluginOptions = resolveProperty(options, 'pluginOptions.vuetober') || {
        baseUrl: undefined,
    };

    // configure the dev server and public path based on environment
    options.devServer = {
        disableHostCheck: true,
        public: 'http://localhost:8080',
    };

    options.publicPath = isProduction 
        ? getProductionBaseUrl(api, pluginOptions) 
        : 'http://localhost:8080/';

    // set webpack's output directory to /assets
    options.outputDir = 'assets';

    // save our only page to /pages
    api.chainWebpack(function(config) {
        config.plugin('html').tap(function(args) {
            Object.assign(args[0], {
                minify: Object.assign((args[0].minify || {}), {
                    // comments will always need to be removed to preserve october's
                    // theme configuration and php section at the top of the file.
                    removeComments: true,
                }),
                filename: '../pages/index.htm',
                template: 'src/index.htm',
            });

            return args;
        });
    });

    //
    // non-production
    //
    if (!isProduction) {
        api.configureWebpack(function(config) {
            return {
                devServer: {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                },
                plugins: [
                    new WriteFilePlugin({ test: /\.htm$/ }),
                ],
            };
        });
    }
}
