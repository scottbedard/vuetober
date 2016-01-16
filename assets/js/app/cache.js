let Vue = require('vue');

//
// Load reset timestamp
//
let isCacheable = typeof(Storage) !== 'undefined',
    reset_at = document.getElementsByTagName('meta')['vuetober-cache'];

reset_at = reset_at ? reset_at.getAttribute('content') * 1000 : 0;

//
// Cache
//
module.exports = {

    /**
     * Adds data to the local storage
     *
     * @param {Object} model
     * @param {Object} response
     * @return {void}
     */
    addToStorage(model, response) {
        window.localStorage.setItem(model.key, JSON.stringify({
            data: response.data,
            cached_at: Date.now(),
        }));
    },

    /**
     * Fetch data from the server
     *
     * @param  {Object} params
     * @return {Promise}
     */
    fetchFromServer(params) {
        return Vue.http.get('/', params);
    },

    /**
     * Fetch data out of localStorage by key
     *
     * @param  {Object}     model
     * @return {Promise}
     */
    fetchFromStorage(model) {
        return new Promise((resolve, reject) => {
            let cached = JSON.parse(window.localStorage.getItem(model.key));
            if (cached && this.isUsable(model, cached)) {
                model.state.content = cached.data;
                resolve();
            } else {
                reject();
            }
        });
    },

    /**
     * Fetch and cache static content
     *
     * @param  {Object} model
     * @param  {Sting}  content
     * @return {void}
     */
    getContent(model, content) {
        // Fetch the content from storage
        this.fetchFromStorage(model).catch(failed => {

            // If that fails, fetch it from the server
            this.fetchFromServer({ 'v-content': content }).then(response => {
                this.addToStorage(model, response);
                model.state.content = response.data;
            });
        });
    },

    /**
     * Determines if cached data is usable
     *
     * @param  {Object}     model
     * @param  {Object}     data
     * @return {Boolean}
     */
    isUsable(model, data) {
        let modelIsCacheable = !! model.cache,
            cachedAfterReset = data.cached_at > reset_at,
            isNotExpired = (Date.now() - data.cached_at) <= (model.cache * 60000);

        return modelIsCacheable && cachedAfterReset && isNotExpired;
    }
}

