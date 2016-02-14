import Vue from 'vue';

module.exports = {

    /**
     * @type {String}
     */
    url: '/api/rainlab/blog{/slug}',

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
