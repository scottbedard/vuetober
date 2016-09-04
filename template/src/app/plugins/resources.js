import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use({
  install{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
    Vue.prototype.$resources = this.resources{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  resources{{#if_eq lintConfig "standard"}} {{/if_eq}}(resources) {
    const promises = []{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Object.keys(resources).forEach(key => {
      const promise = resources[key]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      promise.then(({ data, body }) => {
        // @todo: figure out why data is a string on the dev server
        this[key] = typeof data === 'object' ? data : JSON.parse(body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      promises.push(promise){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    return Promise.all(promises){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
