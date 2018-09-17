var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (api, options) => {
    var isProduction = process.env.NODE_ENV === 'production';
    var themeDir = path.resolve(__dirname, '../..').split('\\').slice(-1).pop();

    // use dev assets when not in production
    options.baseUrl = isProduction 
        ? '/themes/' + themeDir + '/assets/' 
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
