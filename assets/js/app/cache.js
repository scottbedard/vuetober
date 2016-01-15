let Vue = require('vue');

//
// Load reset timestamp
//
let reset_at = document.getElementsByTagName('meta')['vuetober-cache'];
reset_at = reset_at ? reset_at.getAttribute('content') * 1000 : 0;

//
// Cache
//
module.exports = {

    /**
     * Fetch and cache static content
     *
     * @param  {Object} model
     * @param  {Sting}  content
     * @return {void}
     */
    getContent(model, content) {
        if (typeof(Storage) !== 'undefined') {
            let cache = window.localStorage.getItem(model.key);
            if (cache && model.cache) {
                let data = JSON.parse(cache);
                if (this.isUsable(model, data.cached_at)) {
                    model.state.content = data.content;
                    return;
                }
            }
        }

        Vue.http.get('/', { 'v-content': content }).then(response => {
            model.state.content = response.data;
            window.localStorage.setItem(model.key, JSON.stringify({
                content: response.data,
                cached_at: Date.now(),
            }));
        });
    },

    /**
     * Determines if cached data is usable or expired
     *
     * @param  {Object}     model
     * @param  {Number}     cache_at
     * @return {Boolean}
     */
    isUsable(model, cached_at) {
        return cached_at > reset_at && (Date.now() - cached_at) <= (model.cache * 60000);
    }
}

