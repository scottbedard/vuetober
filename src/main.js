import RootComponent from './root';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// attach a csrf token to all of our xhr requests
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name=token]').getAttribute('content');

// boot up our components, directives, plugins, etc...
import './app/boot';

// set up the router
import routes from './app/routes';

const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes,
});

// instantiate our application and mount it to the dom
/* eslint-disable no-new */
new Vue({
    render: h => h(RootComponent),
    el: '#app',
    router,
});
