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
        if (e.target.tagName === 'A') {
            let path = e.target.getAttribute('href');
            if (path.charAt(0) === '/') {
                e.preventDefault();
                this.vm.$router.go({ path });
            }
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
