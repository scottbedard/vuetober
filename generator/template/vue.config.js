var path = require('path');
 
var isProduction = process.env.NODE_ENV === 'production';
var themeDir = path.resolve(__dirname).split('\\').slice(-1).pop();

module.exports = {
    baseUrl: isProduction ? '/themes/' + themeDir + '/assets' : undefined,
}
