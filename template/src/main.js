import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Root from './root'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Router
//
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: require('./app/routes')
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(Root)
})
