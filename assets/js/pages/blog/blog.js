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
            this.$http.get('owl/rainlabblogapi/post').then(response => {
                this.$set('posts', response.data.data);
            });
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            posts: [],
        }
    },

    /**
     * The page is ready to be displayed.
     *
     * @return {void}
     */
    created() {
        document.title = 'Blog posts';
        console.log ('ready');
    },
};
