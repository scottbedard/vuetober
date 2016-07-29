export default {
  redirects: {
    '/': '/foo'
  },
  routes: {
    '/foo': {
      name: 'foo',
      component: require('../pages/foo')
    },
    '/bar': {
      name: 'bar',
      component: require('../pages/bar')
    }
  }
}
