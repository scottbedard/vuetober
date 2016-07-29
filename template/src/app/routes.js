import StandardLayout from 'src/layouts/standard'
import SplashLayout from 'src/layouts/splash'
import HomePage from 'pages/home'
import BarPage from 'pages/bar'

module.exports = [

  //
  // Routes
  //
  {
    path: '',
    component: SplashLayout,
    children: [
      { path: '/welcome', component: HomePage }
    ]
  },
  {
    path: '',
    component: StandardLayout,
    children: [
      { path: '/bar', component: BarPage }
    ]
  },

  //
  // Redirects
  //
  { path: '/', redirect: '/welcome' }
]
