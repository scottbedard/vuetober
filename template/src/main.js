//
// On your mark
//
import Vue from 'vue';
import VueRouter from 'vue-router';

//
// Get set
//
Vue.use(VueRouter);
import { config, routes, redirects } from './app/router';
let Router = new VueRouter(config);
Router.map(routes);
Router.redirect(redirects);

//
// Go!
//
import Root from './app/root';
Router.start(Root, '#app');
