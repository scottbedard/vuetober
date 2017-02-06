import Vue from 'vue';
import VueRouter from 'vue';
import WelcomeComponent from 'src/pages/welcome';

Vue.use(VueRouter);

describe('welcome.vue', () => {
    it('should render correct welcome content', () => {
        const vm = new Vue({
            render: (h) => h(WelcomeComponent),
            el: document.createElement('div'),
            router: new VueRouter({ abstract: true }),
        });

        expect(vm.$el.querySelector('h1').textContent).to.equal('Welcome to your new Vuetober theme!');
    });
});
