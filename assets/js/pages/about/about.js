let content = require('./../../models/content/about');

//
// About page
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./template.htm'),

    /**
     * Fetch route data
     *
     * @type {Object}
     */
    route: {
        data(transition) {
            content.fetch();
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            about: content.state,
        }
    }
};
