<style lang="sass" scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li { padding: 10px 0 }
    }
</style>

<template>
    <div class="blog page">
        <p>This blog demonstrates how to communicate with your October backend.</p>
        <ul>
            <li v-for="post in posts">
                <h3>\{{ post.published_at | moment 'MMM DD, YYYY' }}</h3>
                <h2>
                    <a v-link="{ name: 'blog-post', params: { slug: post.slug }}">
                        \{{ post.title }}
                    </a>
                </h2>
            </li>
        </ul>
    </div>
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
                return Blog.get().then(response => this.$set('posts', response.data));
            },
        },

        /**
         * @return {Object}
         */
        data() {
            return {
                posts: [],
            };
        },
    };
</script>
