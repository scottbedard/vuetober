//
// Blog-post
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./templates/show.htm'),

    /**
     * @type {Object}
     */
    route: {

        /**
         * Route activated
         *
         * @return {void}
         */
        activate() {
            document.title = "I'm a complex title";
        },
    },
};
