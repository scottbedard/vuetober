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
      promise.then(response => {
        this[key] = JSON.parse(response.data)
      })
      promises.push(promise)
    })
    return Promise.all(promises)
  }
})
