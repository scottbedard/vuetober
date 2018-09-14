var path = require('path');

var themeDir = path.resolve(__dirname, '../..').split('\\').slice(-1).pop();

module.exports = [
    {
        default: 'http://localhost',
        message: 'Application URL',
        name: 'server',
        type: 'input',
        validate: function(url) {
            if (!/^https?:\/\//.test(url)) {
                return 'Invalid application url, make sure to include a protocol (http://example.com)';
            }

            if (!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url)) {
                return 'Invalid application URL';
            }

            return true;
        },
    },
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
