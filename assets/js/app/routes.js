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
    '*': {
        name: '404',
        component: require('./../pages/404/404'),
    }
};
