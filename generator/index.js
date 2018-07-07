module.exports = (api, options, rootOptions) => {
    // copy all template files
    api.render('./template', { options });
}