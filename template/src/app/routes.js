import StandardLayout from 'src/layouts/standard'
import SplashLayout from 'src/layouts/splash'
import WelcomePage from 'pages/welcome'
import AlternateLayoutPage from 'pages/alternate_layout'

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
      { path: '/alternate-layout', component: AlternateLayoutPage }
    ]
  },

  //
  // Redirects
  //
  { path: '/', redirect: '/welcome' }
]
