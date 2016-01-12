//
// Routes
//
module.exports = {
    '/home': {
        name: 'home',
        component: require('./../pages/home/home'),
    },
    '/about': {
        name: 'about',
        component: require('./../pages/about/about'),
    },
    '/blog': {
        name: 'blog',
        component: require('./../pages/blog/blog'),
    },
    '*': {
        name: '404',
        component: require('./../pages/404/404'),
    }
};
