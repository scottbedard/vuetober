//
// Layouts
//
import SplashLayout from 'src/layouts/splash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import StandardLayout from 'src/layouts/standard'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Pages
//
import BlogListPage from 'src/pages/blog/list'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import BlogShowPage from 'src/pages/blog/show'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import WelcomePage from 'src/pages/welcome'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Routes
//
export default [

  {
    path: '',
    component: SplashLayout,
    children: [
      { path: '/welcome', component: WelcomePage }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  {
    path: '',
    component: StandardLayout,
    children: [
      { path: '/blog', component: BlogListPage },
      { path: '/blog/:slug', name: 'blog/show', component: BlogShowPage }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  //
  //
  // Redirects
  //
  { path: '/', redirect: '/welcome' }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
