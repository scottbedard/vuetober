import Vue from 'vue';

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
const components = require('src/components/global');
Object.keys(components).forEach(tag => Vue.component(tag, components[tag]));
