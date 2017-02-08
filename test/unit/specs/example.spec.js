import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePageComponent from 'src/pages/home/home';

// Use describe() to group similar tests together.
describe('src/pages/home/home.vue', () => {

    // Use it() to specify exactly what you're testing.
    it('displays a welcome message', () => {

        // Since our home page component uses the <router-link>
        // component, we'll need to provide a mock router to
        // define it. In tests, make sure it is abstract.
        const MockRouter = new VueRouter({
            abstract: true,
            routes: [{ name: 'videos', path: '/videos', },],
        });

        // Inside of our test environment, we have access
        // to Vue's template compiler. This enables us
        // to render a test component in templates.
        const vm = new Vue({
            components: { 'v-home-page': HomePageComponent, },
            el: document.createElement('div'),
            router: MockRouter,
            template: '<v-home-page></v-home-page>',
        });

        // Finally, we can look at the component and make our assertion.
        expect(vm.$el.querySelector('h1').textContent).to.equal('Welcome to your new Vuetober theme!');
    });
});
