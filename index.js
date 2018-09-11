var path = require('path');

module.exports = (api, options) => {
    // set webpack's output directory to /assets
    options.outputDir = 'assets';
    
    //
    // production
    //
    if (process.env.NODE_ENV === 'production') {
        // save our only page to /pages
        api.chainWebpack(function(config) {
            config.plugin('html').tap(function(args) {
                Object.assign(args[0], {
                    filename: '../pages/index.htm',
                    template: 'src/index.htm',
                });

                return args;
            });
        });
    }

    //
    // non-production
    //
    else {
        // use our dev entry point
        api.configureWebpack(function(config) {
            config.entry = { 
                app: ['./src/dev.js'],
            };
        });
    }
}
