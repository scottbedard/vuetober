module.exports = (api, options) => {
    // save files to our theme's "assets" directory
    options.outputDir = 'assets';
    
    // save catch-all route in the theme's "pages" directory
    api.chainWebpack(config => {
        config.plugin('html').tap(args => {
            args[0].filename = '../pages/index.htm';
            args[0].template = 'src/index.htm';
            return args;
        });
    });
}
