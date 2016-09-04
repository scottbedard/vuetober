import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import RootComponent from './root'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import routes from './app/routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Configure Vue utilities and plugins
//
require('./app/boot'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Configure the router
//
const router = new VueRouter({
  base: __dirname,
  mode: 'history',
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Launch the application
//
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(RootComponent){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
