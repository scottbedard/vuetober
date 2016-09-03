import Vue from 'vue'

export default {
  getPost ({ slug }) {
    return Vue.http.get(`/api/rainlab/blog/${slug}`)
  },
  getPosts () {
    return Vue.http.get('/api/rainlab/blog')
  }
}
