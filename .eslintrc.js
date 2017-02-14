// http://eslint.org/docs/user-guide/configuring
module.exports = {
    env: {
        browser: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: [
        'html', // required to lint *.vue files
    ],
    root: true,
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger in development
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    },
};
