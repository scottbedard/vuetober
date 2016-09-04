<p align="center">
    <a href="//github.com/vuejs/vue" target="_blank"><img src="http://vuejs.org/images/logo.png" width="auto" height="105px"><a href="//github.com/octobercms/october" target="_blank"><img src="https://raw.githubusercontent.com/octobercms/october/master/themes/demo/assets/images/october.png" alt="October" width="auto" height="100px" /></a></a>
</p>

# oc-vuetober-theme

This project is an opinionated approach to single page applications within the wonderful worlds of [Vue.js](https://vuejs.org), [October CMS](https://octobercms.com), and [Laravel](https://laravel.com). To see what's included out of the box, check out the [live demo](http://vuetober.scottbedard.net).

<a name="getting-started"></a>
### Getting started

Before getting started, make sure you have both [NPM](https://www.npmjs.com) and [vue-cli](https://github.com/vuejs/vue-cli) installed. Once that is taken care of, run the following command from your `/themes` directory.

```bash
$ vue init scottbedard/oc-vuetober-theme myawesometheme
$ cd myawesometheme
$ npm install
```

To build your site for production, run the following command.

```bash
$ npm run build
```

The development server can be fired up at `localhost:3000` by running the following.

```bash
$ npm run dev
```

For a better development experience, make sure to install the [Vue devtools](https://github.com/vuejs/vue-devtools) Chrome extension.

<a name="routing"></a>
### Routing

Routes can be registered from the `app/routes.js` file. Simply import your component, and assign it to a route.

The layout components exist to provide an easy way of creating multiple site structures. To use a given layout for your page, make sure to register its route as a child route of the layout component.

When displaying dynamic content that may contain local links, it is recommended that you attach the `v-linkable` directive to the container. This will hijack click events and keep your user within the SPA. Without doing this, a full page reload will occur.

```html
<div v-html="blogPost" v-linkable></div>
```

<a name="unit-testing"></a>
### Unit testing and continuous integration

This theme comes ready to go with unit testing and code coverage reporting. To run the test suite, execute the following command.

```bash
$ npm test
```

Most continuous integration services like [Travic CI](https://travis-ci.org) and [Circle CI](https://circleci.com) should be able to infer the test command. Also, this theme works seamlessly with coverage reporting such as [Coveralls](https://coveralls.io).

<a name="resources"></a>
### Resources

This theme uses quite a few different tools. If you've never used some of these before, it is highly recommended that you familiarize yourself with them by giving their docs the once over.

- [Karma](https://karma-runner.github.io/1.0/index.html)
- [Vue](http://vuejs.org/guide)
- [Vue Loader](http://vue-loader.vuejs.org)
- [Vue Resource](https://github.com/vuejs/vue-resource)
- [Vue Router](http://router.vuejs.org)
- [Webpack](https://webpack.github.io)
