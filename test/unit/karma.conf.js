// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
    
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    config.set({
        browsers: [
            'ChromeHeadless',
            // 'PhantomJS',
        ],
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' },
            ],
        },
        files: [
            '../../node_modules/babel-polyfill/dist/polyfill.js',
            './index.js',
        ],
        frameworks: ['mocha', 'chai-dom', 'sinon-chai'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap'],
        },
        reporters: ['spec', 'coverage'],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
    });
};
