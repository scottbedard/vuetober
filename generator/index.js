module.exports = (api, options, rootOptions) => {
    // render common files
    api.render('./common', { options });

    // typescript
    if (api.hasPlugin('typescript')) {
        api.render('./ts', { options });
    }

    // javascript
    else {
        api.render('./js', { options });
    }
}