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
        document.title = 'Home page';
    },
};
