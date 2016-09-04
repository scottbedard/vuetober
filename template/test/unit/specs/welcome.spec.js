import Vue from 'vue'
import WelcomeComponent from 'src/pages/welcome'

describe('welcome.vue', () => {
  it('should render correct welcome content', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(WelcomeComponent)
    })
    expect(vm.$el.querySelector('h1').textContent).to.equal('Welcome to your new Vuetober theme!')
  })
})
