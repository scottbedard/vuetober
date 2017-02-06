var fs = require('fs');
var path = require('path');
var prompt = require('prompt');

prompt.message = false;

var themeDirectory = path.basename(path.resolve(__dirname, '..'));

var schema = {
    properties: {
        name: {
            description: 'Theme name',
            default: themeDirectory,
            required: true,
        },
        description: {
            description: 'Theme description',
            required: false,
        },
        author: {
            description: 'Theme author',
            required: false,
        },
        url: {
            description: 'Development url',
            required: true,
        },
    },
};

prompt.start();

prompt.get(schema, function (err, result) {
    // create our theme.yaml file
    var theme = 'name: \'' + result.name + '\'\n' +
        'description: \'' + result.description + '\'\n' +
        'author: \'' + result.author + '\'';

    fs.writeFileSync(path.resolve(__dirname, '../theme.yaml'), theme);

    // update our dev-server to use the correct url and directory
    var devServer = fs.readFileSync(path.resolve(__dirname, './dev-server.js'), 'utf8')
        .replace(/oc-vuetober-theme/g, themeDirectory)
        .replace(/http:\/\/vuetober\.october\.dev/g, result.url);

    fs.writeFileSync(path.resolve(__dirname, './dev-server.js'), devServer);
});
