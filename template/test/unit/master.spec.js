/* global describe, it, expect */

import Vue from 'vue';
import Master from 'app/master';

describe('master.vue', () => {
    it('Should render correct contents', () => {
        const vm = new Vue({
            template: '<div><master></master></div>',
            components: { Master },
        }).$mount();
        expect(vm.$el.querySelector('h1').textContent).toBe('oc-vuetober-theme');
    });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
