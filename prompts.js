var path = require('path');

var themeDir = path.resolve(__dirname).split('\\').slice(-1).pop();

module.exports = [
    {
        default: themeDir,
        message: 'Theme Name',
        name: 'name',
        type: 'input',
    },
    {
        message: 'Description',
        name: 'description',
        type: 'input',
    },
    {
        message: 'Author',
        name: 'author',
        type: 'input',
    },
]
