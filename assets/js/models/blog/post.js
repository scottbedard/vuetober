let Vue = require('vue'),
    Cache = require('app/cache');

let Model = {

    /**
     * Unique identifier for localStorage cache
     *
     * @type {String}
     */
    key: 'models.blog.post',

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
        content_html: null,
        created_at: null,
        excerpt: null,
        has_summary: null,
        id: null,
        published: null,
        published_at: null,
        slug: null,
        summary: null,
        title: null,
        updated_at: null,
        user_id: null,
    },

    /**
     * Fetch data from the server or cache
     *
     * @return {void}
     */
    fetch(slug) {
        this.reset();
        this.state.slug = slug;
        this.key = `models.blog.post::${ slug }`;
        Cache.getModel(this, `/owl/rainlabblogapi/posts/${ slug }`);
    },

    /**
     * Reset the model properties
     *
     * @return {void}
     */
    reset() {
        for (let key of Object.keys(this.state)) {
            this.state[key] = null;
        }
    },
};

export default Model;
