//
// Layouts
//
import SplashLayout from 'src/layouts/splash'
import StandardLayout from 'src/layouts/standard'

//
// Pages
//
import BlogListPage from 'src/pages/blog/list'
import BlogShowPage from 'src/pages/blog/show'
import WelcomePage from 'src/pages/welcome'

//
// Routes
//
export default [

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
      { path: '/blog', component: BlogListPage },
      { path: '/blog/:slug', name: 'blog/show', component: BlogShowPage }
    ]
  },

  //
  //
  // Redirects
  //
  { path: '/', redirect: '/welcome' }
]
