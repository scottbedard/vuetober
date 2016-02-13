<p align="center">
    <a href="//github.com/octobercms/october" target="_blank"><img src="https://raw.githubusercontent.com/octobercms/october/master/themes/demo/assets/images/october.png" alt="October" width="auto" height="100px" /></a><a href="//github.com/vuejs/vue" target="_blank"><img src="http://vuejs.org/images/logo.png" width="auto" height="105px"></a>
</p>

# oc-vuetober-theme

This project is an opinionated approach to SPAs within the worlds of [October CMS](https://github.com/octobercms/october), [Vue.js](https://github.com/vuejs/vue), and [Webpack](https://github.com/webpack/webpack). To get started, you'll need to have [vue-cli](https://github.com/vuejs/vue-cli) installed. Once that's taken care of, execute the following command from `/themes` to scaffold a new Vuetober theme.

```bash
vue init scottbedard/oc-vuetober-theme my-theme
cd my-theme
npm install
```

The dev server can be fired up on `localhost:3000` with the following command.

```bash
npm run dev
```

Thanks to hot-reloading, when a source file is changed the DOM will re-render and our application will maintain state. All requests except `/` will be proxied to our normal October endpoints. When it's time to deploy, execute the following to build your production assets.

```bash
npm run build
```
