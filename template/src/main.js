//
// On your mark
//
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { config, routes, redirects } from './app/router';

Vue.use(VueRouter);
Vue.use(VueResource);
require('./app/filters');

//
// Get set
//
let Router = new VueRouter(config);
Router.map(routes);
Router.redirect(redirects);

//
// Go!
//
import Root from './app/root';
Router.start(Root, '#app');
