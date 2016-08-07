import StandardLayout from 'src/layouts/standard'
import SplashLayout from 'src/layouts/splash'

import WelcomePage from 'pages/welcome'
import AlternateLayoutPage from 'pages/alternate_layout'
import BlogIndexPage from 'pages/blog/index'
import BlogShowPage from 'pages/blog/show'

module.exports = [

  //
  // Routes
  //
  {
    path: '',
    component: SplashLayout,
    children: [
      { path: '/welcome', component: WelcomePage }
    ]
  },
  {
    path: '',
    component: StandardLayout,
    children: [
      { path: '/alternate-layout', component: AlternateLayoutPage },
      { path: '/blog', component: BlogIndexPage },
      { path: '/blog/:slug', name: 'blog/show', component: BlogShowPage }
    ]
  },

  //
  // Redirects
  //
  { path: '/', redirect: '/welcome' }
]
