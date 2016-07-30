import Vue from 'vue'
import VueRouter from 'vue-router'

//
// Bootstrap global Vue utilities
//
require('./app/boot')

//
// Set up the router
//
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: require('./app/routes')
})

//
// Start the application
//
import Root from './root'

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(Root)
})
