import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Root from './root'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Router
//
Vue.use(VueRouter)

const { redirects, routes } = require('./app/routes')

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  redirects,
  routes
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(Root){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
