'use strict';

var colors = require("colors/safe");
var fs = require('fs');
var path = require('path');
var prompt = require('prompt');

prompt.message = false;

const themeDirectory = path.basename(path.resolve(__dirname, '..'));

console.log (colors.white('  Setup a new Vuetober theme'));
console.log ();

const schema = {
    properties: {
        name: {
            default: themeDirectory,
            description: colors.gray('  Name'),
            required: true,
        },
        description: {
            description: colors.gray('  Description'),
            required: false,
        },
        author: {
            description: colors.gray('  Author'),
            required: false,
        },
        url: {
            description: colors.gray('  Development url'),
            required: true,
        },
        cleanup: {
            before: value => Boolean(value.match(/^[Yy](.*)/)),
            default: 'y',
            description: colors.gray('  Remove setup command (y/n)'),
            message: 'Answer must be yes or no',
            pattern: /^[YyNn](.*)*/,
            required: true,
        },
    },
};

prompt.start();

prompt.get(schema, function (err, result) {
    if (err) {
        console.log ();
        console.log ();
        console.log (colors.red('  Setup canceled'));
        return;
    }

    // create our theme.yaml file
    const theme =
        `name: '${ result.name }'
        description: '${ result.description }'
        author: '${ result.author }'`;

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

    console.log ();
    console.log(colors.green('  Vuetober set up complete, go build something amazing!'));
});
