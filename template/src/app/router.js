//
// Config
//
export var config = {
    hashbang: false,
    history: true,
    saveScrollPosition: true,
};

//
// Application routes
//
export var routes = {
    '/home': {
        name: 'home',
        title: 'Home',
        component: require('./../pages/home'),
    },

    '/sandbox': {
        name: 'sandbox',
        title: 'Sandbox',
        component: require('./../pages/sandbox')
    }
};

//
// Redirects
//
export var redirects = {
    '/': '/home',
};
