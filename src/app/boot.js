import axios from 'axios';
import Vue from 'vue';

//
// Configure our HTTP client
//
let token = document.querySelector('meta[name=token]').getAttribute('content');
axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

//
// Plugins
//
require('./plugins/router');

//
// Directives
//
require('./directives/linkable');

//
// Register global components
//
import components from 'src/components/global';
Object.keys(components).forEach(tag => Vue.component(tag, components[tag]));
