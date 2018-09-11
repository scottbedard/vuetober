var path = require('path');

module.exports = (api, options) => {
    // set webpack's output directory to /assets
    options.outputDir = 'assets';
    
    // if in production, save our only page to /pages
    api.chainWebpack(config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('html').tap(function(args) {
                Object.assign(args[0], {
                    filename: '../pages/index.htm',
                    template: 'src/index.htm',
                });

                return args;
            });
        }
    });
}
