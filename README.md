![alt tag](http://i.imgur.com/Ia3H0Ae.png)

# oc-vuetober-theme

This project is an opinionated approach to single page applications within the wonderful worlds of [Vue.js](https://vuejs.org), [October CMS](https://octobercms.com), and [Laravel](https://laravel.com). To see what's included out of the box, check out the [live demo](http://vuetober.scottbedard.net).

<a name="installation"></a>
## Installation

In order to use this theme, you'll need to have a fair understanding of [Vue.js](https://vuejs.org). If you've never used this framework before, you can get the fundamentals down through [this free screencast series](http://vuecasts.com/).

To install a Vuetober theme, run the following commands from your `/themes` directory.

```bash
# clone down the repository and cd into it
$ git clone https://github.com/scottbedard/oc-vuetober-theme.git mytheme
$ cd mytheme

# install dependencies
$ npm install

# run setup command
$ npm run setup

# compile production assets
$ npm run build
```

> **Note:** As of version 2.1, pulling in `vue-cli` is no longer neccessary.

Other available commands

```bash
# start development server
$ npm run dev

# run unit tests
$ npm test
```

<a name="screencasts"></a>
## Screen casts

**Episode 1:** [Introduction to Vuetober](https://www.youtube.com/watch?v=IkjrU61CXq0)

**Episode 2:** [Using the development server](https://www.youtube.com/watch?v=nv55CLfWBcQ)

**Episode 3:** [Registering global components](https://www.youtube.com/watch?v=-_KnTB5P2Zc)

**Episode 4:** [Communicating witht the backend](https://www.youtube.com/watch?v=V8n2cSrTUyw)

<a name="features"></a>
## Features

**Single file components**

Vue is a fantastic framework, and when using `.vue` files we have a great foundation for creating small, composable components. With this setup, we're able to write our code using any pre-processors we like, and take advantage of things like [hot reloading](https://vue-loader.vuejs.org/en/features/hot-reload.html) and [scoped css](https://vue-loader.vuejs.org/en/features/scoped-css.html).

**State of the art tooling**

This theme takes full advantage of [Webpack 2](https://webpack.js.org). The build script will optimize your application with techniques like automatically inlining small images, tree shaking, and more. In addition to this, [ESLint](http://eslint.org/docs/rules) will automatically fix your javascript to ensure a consistent style throughout your codebase.

**Modern Javascript**

You're free to use the latest and greatest Javascript and [JSX](https://github.com/vuejs/babel-plugin-transform-vue-jsx). Your code will be compiled by Babel into something that every browser can understand.

**Unit testing**

Every aspect of this theme is unit testable, with great tooling set up to help you deliver rock solid code. This includes the ability to easily render components in tests, mock dependencies, and even spy on functions. In addition to this, code coverage reporting is already configured, which means it's trivially easy to integrate with a service like [CodeCov](https://codecov.io).
