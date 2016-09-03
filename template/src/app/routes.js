//
// Layouts
//
import SplashLayout from 'src/layouts/splash'

//
// Pages
//
import WelcomePage from 'src/pages/welcome'

//
// Routes
//
export default [

  //
  // Routes
  //
  {
    path: '',
    component: SplashLayout,
    children: [
      { path: '/welcome', component: WelcomePage }
    ]
  }
  //
  // {
  //   path: '',
  //   component: StandardLayout,
  //   children: [
  //     { path: '/alternate-layout', component: AlternateLayoutPage },
  //     { path: '/blog', component: BlogIndexPage },
  //     { path: '/blog/:slug', name: 'blog/show', component: BlogShowPage }
  //   ]
  // },
  //
  //
  // Redirects
  //
  // { path: '/', redirect: '/welcome' }
]
