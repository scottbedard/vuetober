//
// Blog page
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./templates/index'),

    /**
     * Fetch route data
     *
     * @type {Object}
     */
    route: {
        data(transition) {
            this.$http.get('/owl/rainlabblogapi/posts').then(response => {
                this.$set('posts', response.data);
            });
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            posts: [],
        };
    },
};
