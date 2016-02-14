module.exports = {

    /**
     * Redirects
     *
     * @type {Object}
     */
    redirects: {
        '/': '/intro',
    },

    /**
     * Routes
     *
     * @type {Object}
     */
    routes: {
        //
        // Intro
        //
        '/intro': {
            name: 'intro',
            title: 'Introduction',
            component: require('./../pages/intro'),
        },

        //
        // Blog
        //
        '/blog': {
            name: 'blog',
            title: 'Communicating with October',
            component: require('./../pages/blog/index'),
        },

        '/blog/:slug': {
            name: 'blog-post',
            component: require('./../pages/blog/post'),
        },

        //
        // Sandbox
        //
        '/sandbox': {
            name: 'sandbox',
            title: 'Sandbox',
            component: require('./../pages/sandbox'),
        },
    },
};
