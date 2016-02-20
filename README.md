<p align="center">
    <a href="//github.com/vuejs/vue" target="_blank"><img src="http://vuejs.org/images/logo.png" width="auto" height="105px"><a href="//github.com/octobercms/october" target="_blank"><img src="https://raw.githubusercontent.com/octobercms/october/master/themes/demo/assets/images/october.png" alt="October" width="auto" height="100px" /></a></a>
</p>
# oc-vuetober-theme

This project is an opinionated approach to SPAs within the wonderful worlds of [October CMS](https://github.com/octobercms/october), [Vue.js](https://github.com/vuejs/vue), and [Webpack](https://github.com/webpack/webpack). To see what's included out of the box, check out the [live demo](http://vuetober.scottbedard.net).

### Getting started

Before we begin, you'll need to have [vue-cli](https://github.com/vuejs/vue-cli) installed. Once that's taken care of, execute the following from your `/themes` directory to create a new Vuetober project.

```bash
vue init scottbedard/oc-vuetober-theme my-theme
cd my-theme
npm install
```

The dev server can be fired up on `localhost:3000` with the following command.

```bash
npm run dev
```

Thanks to hot-reloading, when a source file is changed the DOM will re-render and our application will maintain state. When it's time to deploy, execute the following to build your production assets.

```bash
npm run build
```

### Routing & dynamic content linking

Routing is pretty straight forward, you may register components and redirects in `/src/app/routes.js`. Managing router events and configuration can be done from `/src/app/router.js`. For more information on routing, check out the [official documentation](http://vuejs.github.io/vue-router/en/index.html).

If you're displaying dynamic content that might contain internal links, the `v-linkable` directive should be used to hijack their click events and keep the user within the SPA.

```html
<p v-linkable>
    {{{ blogPost }}}
</p>
```

### Splitting dependencies

By default, Vue's dependencies and plugins will be split off into their own bundle. This allows us to modify the actual application without forcing users to re-download the dependencies. If your project is using other dependencies, it is recommended that you add them to the vendors bundle. To do this, simply add the dependency to `entry.vendors` in the [base webpack config](https://github.com/scottbedard/oc-vuetober-theme/blob/master/template/build/webpack.base.conf.js).
