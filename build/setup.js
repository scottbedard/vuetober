var fs = require('fs');
var path = require('path');
var prompt = require('prompt');

prompt.message = false;

var themeDirectory = path.basename(path.resolve(__dirname, '..'));

var schema = {
    properties: {
        name: {
            default: themeDirectory,
            description: 'Theme name',
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
        cleanup: {
            default: true,
            description: 'Remove setup command',
            required: true,
            type: 'boolean',
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

    // remove the setup command once we're done setting up
    if (result.cleanup) {
        var setupPath = path.resolve(__dirname, 'setup.js');
        var packageJson = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
            .replace('"setup": "node build/setup.js",\n    ', '');

        fs.writeFileSync(path.resolve(__dirname, '../package.json'), packageJson);
        fs.unlink(setupPath);
    }
});
