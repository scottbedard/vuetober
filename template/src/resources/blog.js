import Vue from 'vue';

module.exports = {

    url: '/owl/rainlabblogapi/posts{/slug}',

    /**
     * Make a get request to the blog api
     *
     * @param  {Object}     params
     * @return {Promise}
     */
    get(params) {
        return Vue.resource(this.url).get(params);
    },
};
