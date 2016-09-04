import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  getPost{{#if_eq lintConfig "standard"}} {{/if_eq}}({ slug }) {
    return Vue.http.get(`/api/rainlab/blog/${slug}`){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  getPosts{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
    return Vue.http.get('/api/rainlab/blog'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
