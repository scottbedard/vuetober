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

    '/blog': {
        name: 'blog',
        title: 'Communicating with October',
        component: require('./../pages/blog/index'),
    },

    '/blog/:slug': {
        name: 'blog-post',
        component: require('./../pages/blog/post'),
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
