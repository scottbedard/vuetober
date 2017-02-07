import Vue from 'vue';
import RootComponent from './root';

/* eslint-disable no-new */
new Vue({
    render: h => h(RootComponent),
    el: '#app',
});
