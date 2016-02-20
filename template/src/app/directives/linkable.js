import Vue from 'vue';

/**
 * Keep local links from dynamic content as part of the SPA
 *
 * @return {void}
 */
Vue.directive('linkable', {

    /**
     * Bind to the click event
     *
     * @return {void}
     */
    bind() {
        this.el.addEventListener('click', this.onClicked.bind(this));
    },

    /**
     * Hijack local links and direct them to the router
     *
     * @param  {Object} e       The click event
     * @return {void}
     */
    onClicked(e) {
        if (e.target.tagName === 'A' && e.target.hostname === window.location.hostname) {
            e.preventDefault();
            this.vm.$router.go({ path: e.target.pathname });
        }
    },

    /**
     * Unbind the click event
     *
     * @return {void}
     */
    unbind() {
        this.el.removeEventListener('click', this.onClicked);
    },
});
