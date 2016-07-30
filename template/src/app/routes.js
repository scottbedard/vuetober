import StandardLayout from 'src/layouts/standard'
import SplashLayout from 'src/layouts/splash'

import WelcomePage from 'pages/welcome'
import AlternateLayoutPage from 'pages/alternate_layout'
import BlogIndexPage from 'pages/blog/index'

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
      { path: '/blog', component: BlogIndexPage }
    ]
  },

  //
  // Redirects
  //
  { path: '/', redirect: '/welcome' }
]
