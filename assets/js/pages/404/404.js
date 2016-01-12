//
// Home page
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./template.htm'),

    /**
     * @return {void}
     */
    created() {
        document.title = 'Page not found';
    },
};
