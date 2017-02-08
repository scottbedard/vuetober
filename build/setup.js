'use strict';

var colors = require("colors/safe");
var fs = require('fs');
var path = require('path');
var prompt = require('prompt');

const themeDirectory = path.basename(path.resolve(__dirname, '..'));

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

//
// if they haven't removed our repo yet, offer to do it for them
//
let isVuetoberRepository;
try {
    const gitConfig = fs.readFileSync(path.resolve(__dirname, '../.git/config'), 'utf8');
    isVuetoberRepository = Boolean(gitConfig.match(/github\.com[\/:]scottbedard\/oc-vuetober-theme/g));
} catch (err) {
    isVuetoberRepository = false;
}

if (isVuetoberRepository) {
    schema.properties.cleanupGit = {
        before: value => Boolean(value.match(/^[Yy](.*)/)),
        default: 'y',
        description: colors.gray('  Remove git repository (y/n)'),
        pattern: /^[YyNn](.*)*/,
        required: true,
    };
}

//
// start the setup prompt
//
console.log (colors.white('  Setup a new Vuetober theme'));
console.log ();

prompt.message = false;
prompt.start();

//
// process the answers the user provided
//
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
    const devServer = fs.readFileSync(path.resolve(__dirname, './dev-server.js'), 'utf8')
        .replace(/oc-vuetober-theme/g, themeDirectory)
        .replace(/http:\/\/vuetober\.october\.dev/g, result.url);

    fs.writeFileSync(path.resolve(__dirname, './dev-server.js'), devServer);

    // remove the setup command
    if (result.cleanup) {
        var setupPath = path.resolve(__dirname, 'setup.js');
        var packageJson = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
            .replace('"setup": "node build/setup.js",\n    ', '');

        fs.writeFileSync(path.resolve(__dirname, '../package.json'), packageJson);
        fs.unlink(setupPath);
    }

    // remove the old git repository
    if (result.cleanupGit) {
        fs.unlink(path.resolve(__dirname, '../.git'));
    }

    console.log ();
    console.log(colors.green('  Vuetober set up complete, go build something amazing!'));
});
