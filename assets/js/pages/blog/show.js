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
         * Fetch route data
         *
         * @return void
         */
        data(transition) {
            let slug = this.$route.params.slug;
            this.$http.get(`/owl/rainlabblogapi/post/${ slug }`, ).then(response => {
                this.$set('post', response.data);
                document.title = response.data.title;
            });
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            post: {
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
        };
    },
};
