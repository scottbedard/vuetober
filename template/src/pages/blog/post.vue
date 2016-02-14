<style lang="sass" scoped>
</style>

<template>
    <article class="blog-post page">
        <h3>\{{ post.title }}</h3>
        <p>\{{{ post.content_html }}}</p>
    </article>
</template>

<script>
import Blog from './../../resources/blog';

module.exports = {

    /**
     * @type {Object}
     */
    route: {

        /**
         * @type {Boolean}
         */
        waitForData: true,

        /**
         * Fetch route data
         *
         * @param  {Object}     transition
         * @return {Promise}
         */
        data(transition) {
            return Blog.get(this.$route.params)
                .then(response => this.$set('post', response.data));
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            post: { },
        };
    },


    /**
     * @return {void}
     */
    attached() {
        // Once attached to the DOM, find all links embedded in the content and
        // attach a listener to hijack their click event. This will allow us
        // to hand things off to the router, and work the same as v-link.
        this.$nextTick(() => {
            let links = this.$el.querySelectorAll('a');
            for (let i = 0, len = links.length; i < len; i++) {
                links[i].addEventListener('click', e => {
                    let path = links[i].getAttribute('href');
                    if (path.charAt(0) === '/') {
                        e.preventDefault();
                        this.$route.router.go({ path });
                    }
                });
            }
        });
    },
}
</script>
