//
// Routes
//
module.exports = {

    '/home': {
        name: 'home',
        title: 'Home',
        component: require('./../pages/home/home'),
    },

    '/about': {
        name: 'about',
        title: 'About',
        component: require('./../pages/about/about'),
    },

    '/blog': {
        name: 'blog',
        title: 'Blog',
        component: require('./../pages/blog/blog'),
    },

    '/blog/:slug': {
        name: 'blog-post',
        component: require('./../pages/blog/show'),
    },

    '*': {
        name: '404',
        title: 'Page not found',
        component: require('./../pages/404/404'),
    },

};
