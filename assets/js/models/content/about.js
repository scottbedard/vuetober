let Vue = require('vue'),
    Cache = require('app/cache');

module.exports = {

    /**
     * Unique identifier for localStorage cache
     *
     * @type {String}
     */
    key: 'models.content.about',

    /**
     * Minutes to cache model for
     *
     * @type {Number}
     */
    cache: 43200, // one week

    /**
     * Current state of the model
     *
     * @type {Object}
     */
    state: {
        content: null,
    },

    /**
     * Fetch data from the server or cache
     *
     * @return {void}
     */
    fetch() {
        Cache.getContent(this, 'about');
    },
};
