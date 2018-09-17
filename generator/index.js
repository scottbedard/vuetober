var exec = require('child_process').exec;
var path = require('path');

module.exports = (api, options, rootOptions) => {
    // scaffold template files
    api.render('./template', { options });

    // activate the theme
    if (options.activate) {
        var themeDir = path.resolve(__dirname, '../../..').split('\\').slice(-1).pop();

        exec('php artisan theme:use ' + themeDir, {
            cwd: path.resolve(__dirname, '../../../../..'),
        });
    }
}