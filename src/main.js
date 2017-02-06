import Vue from 'vue';
import App from './App';
import router from './router';

console.log ('HELLO');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
