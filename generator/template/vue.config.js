var path = require('path');

var themeDir = path.resolve(__dirname).split('\\').slice(-1).pop();

module.exports = {
    baseUrl: '/themes/' + themeDir + '/assets',
}
