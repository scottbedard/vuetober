import Vue from 'vue'

module.exports = {
  getPost ({ slug }) {
    return Vue.http.get(`/api/rainlab/blog/${slug}`)
  },
  getPosts () {
    return Vue.http.get('/api/rainlab/blog')
  }
}
