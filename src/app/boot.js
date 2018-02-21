import Vue from 'vue';
import components from 'src/components/global';

//
// plugins
//
import './plugins/router';

//
// directives
//
import './directives/linkable';

//
// global components
//
Object.keys(components).forEach(tag => Vue.component(tag, components[tag]));
