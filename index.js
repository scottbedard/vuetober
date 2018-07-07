var path = require('path');

module.exports = (api, options) => {
    // set webpack output to our themes "assets" directory
    options.outputDir = 'assets';
    
    // save catch-all route in the theme's "pages" directory
    api.chainWebpack(config => {
        config.plugin('html').tap(args => {
            args[0].filename = '../pages/index.htm';
            args[0].template = 'src/index.htm';
            return args;
        });
    });

    // configure the webpack public path
    api.configureWebpack(config => {
        config.output.publicPath = '/themes/' + path.basename(api.resolve('.')) + '/assets/';
    });
}
