//
// Blog page
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./templates/index.htm'),

    /**
     * Fetch route data
     *
     * @type {Object}
     */
    route: {
        data(transition) {
            this.$http.get('/owl/rainlabblogapi/post').then(response => {
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
