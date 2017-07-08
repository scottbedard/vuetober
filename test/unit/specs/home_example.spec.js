import HomeComponent from 'src/pages/home/home';
import Vue from 'vue';
import VueRouter from 'vue-router';

describe('home page', () => {
    it('displays a welcome message', () => {

        // spin up a router instance
        const router = new VueRouter({
            abstract: true,
            routes: [{ name: 'videos', path: '/videos' }],
        });

        // create a vue instance
        const vm = new Vue({

            // define the component we're testing
            components: {
                'v-home-page': HomeComponent,
            },

            // mount to an in-memory dom element
            el: document.createElement('div'),

            // pass our router into the vm
            router,

            // use vue's template compiler to render our template
            template: '<v-home-page />',
        });

        // finally, make our assertion that the dom looks as we expect
        expect(vm.$el.querySelector('h1').textContent).to.equal(
            'Welcome to your new Vuetober theme!'
        );
    });
});
