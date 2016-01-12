//
// About page
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./template.htm'),

    /**
     * @return {Object}
     */
    data() {
        return {
            posts: [],
        }
    },

    /**
     * Fetch route data
     *
     * @type {Object}
     */
    route: {
        data(transition) {
            this.$http.get('owl/rainlabblogapi/post').then(response => {
                this.$set('posts', response.data.data);
            });
        },
    },
};
