import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use({
  install (Vue, options) {
    Vue.prototype.$resources = this.resources
  },
  resources (resources) {
    let promises = []
    Object.keys(resources).forEach(key => {
      let promise = resources[key]
      promise.then(({ data, body }) => {
        // @todo: figure out why data is a string on the dev server
        this[key] = typeof data === 'object' ? data : JSON.parse(body)
      })
      promises.push(promise)
    })
    return Promise.all(promises)
  }
})
