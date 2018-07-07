module.exports = (api, projectOptions) => {
    //
    // modify webpack config
    //
    api.chainWebpack(webpackConfig => {
        
        // save catch-all route in the theme's "pages" directory
        webpackConfig.plugin('html').tap(args => {
            args[0].filename = '../pages/index.htm';
            args[0].template = 'src/index.htm';
            return args;
        });
    });
}
