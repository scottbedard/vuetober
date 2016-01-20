let Post = require('../../models/blog/post');
//
// Blog-post
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./templates/show'),

    /**
     * @type {Object}
     */
    route: {

        /**
         * Fetch route data
         *
         * @return void
         */
        data(transition) {
            Post.fetch(this.$route.params.slug);
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            post: Post.state,
        };
    },
};
