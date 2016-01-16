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
     * @param  {String}     endpoint
     * @param  {Object}     params
     * @return {Promise}
     */
    fetchFromServer(model, endpoint, params) {
        return new Promise((resolve, reject) => {
            Vue.http.get(endpoint, params)
                .then(response => {
                    this.addToStorage(model, response);
                    resolve(response);
                })
                .catch(error => reject());
        });
    },

    /**
     * Fetch static content out of localStorage by key
     *
     * @param  {Object}     model
     * @return {Promise}
     */
    fetchFromStorage(model) {
        return new Promise((resolve, reject) => {
            let cached = JSON.parse(window.localStorage.getItem(model.key));
            if (cached && this.isUsable(model, cached)) {
                resolve(cached);
            } else {
                reject();
            }
        });
    },

    /**
     * Fetch models out of localStorage by key
     * @param  {Object} model
     * @param  {String} endpoint
     * @return {void}
     */
    getModel(model, endpoint) {
        let fill = function(data) {
            for (let key of Object.keys(data)) {
                model.state[key] = data[key];
            }
        };

        this.fetchFromStorage(model)
            .then(response => fill(response.data))
            .catch(failure => {
                this.fetchFromServer(model, endpoint)
                    .then(response => fill(response.data));
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
        let fill = function(data) {
            model.state.content = data;
        }

        this.fetchFromStorage(model)
            .then(response => fill(response.data))
            .catch(failed => {
                this.fetchFromServer(model, '/', { 'v-content': content })
                    .then(response =>fill(response.data));
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

