import Vue from 'vue'

module.exports = {
  getPosts () {
    return Vue.http.get('/api/rainlab/blog')
  }
}
