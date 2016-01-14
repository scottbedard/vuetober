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
            this.$http.get(`/owl/rainlabblogapi/post/${ slug }`).then(
                response => {
                    this.$set('post', response.data);
                    document.title = response.data.title;
                },
                error => {
                    // 404
                },
            );
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            post: {},
        };
    },
};
