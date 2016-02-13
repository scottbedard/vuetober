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
    '/intro': {
        name: 'intro',
        title: 'Introduction',
        component: require('./../pages/intro'),
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
    '/': '/intro',
};
