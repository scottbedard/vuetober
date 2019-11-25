<p align="center">
    <img height="64px" src="http://i.imgur.com/Ia3H0Ae.png" /><br />
    <br />
    <a href="https://www.npmtrends.com/vue-cli-plugin-vuetober">
        <img src="https://img.shields.io/npm/dt/vue-cli-plugin-vuetober.svg" alt="Downloads" />
    </a>
    <a href="https://david-dm.org/scottbedard/vuetober">
        <img alt="Depdendencies" src="https://img.shields.io/david/scottbedard/vuetober" />
    </a>
    <a href="https://www.npmjs.com/package/vue-cli-plugin-vuetober">
        <img src="https://img.shields.io/npm/v/vue-cli-plugin-vuetober.svg" alt="Version" />
    </a>
    <a href="https://github.com/scottbedard/oc-vuetober-theme/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT" />
    </a>
</p>

Vuetober is a [vue-cli](https://cli.vuejs.org) plugin for creating October themes with the latest frontend tooling. Say goodbye to managing complicated Webpack configuration and build scripts. Just select the features you want, and get to work!

## Getting started

There are two ways to get started with Vuetober. If you're new to vue-cli, we recommend [using the pre-built SPA](https://github.com/scottbedard/vuetober-spa). Starting this way lets us make some decisions for you. Just perform a `git clone`, and you're theme is ready to go. [This article](https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb) provides a good overview of what vue-cli is, and why you should consider using it.

For more experienced users, use the following steps to create a custom Vuetober setup.

1. Install vue-cli, [see documentation here](https://cli.vuejs.org/guide/installation.html)
2. From `/themes`, execute the following commands:
   - `vue create mytheme` and select what features you'd like
   - `cd mytheme`
   - `vue add vuetober` and follow the prompts
   
Once this is done, the following commands should be available:

```bash
# start development server
yarn serve

# build production assets
yarn build
```

Other commands may also be available, depending on the feature selection. Check your `package.json` for a complete list.

## Using plugins

When developing Vuetober themes, APIs are usually needed to communicate with plugins. Since all rendering is done on the client side, October's frontend utilities like components and the AJAX framework are not available. Below is a list of plugins that have been made to help bridge the gap.

- [RainLab.User](https://github.com/scottbedard/rainlab-user-api)

## Advanced usage

### SEO optimization

We recommend adding the [RainLab.Sitemap](https://github.com/rainlab/sitemap-plugin) and [Bedard.Prerender](https://github.com/scottbedard/oc-prerender-plugin) plugins. When used together, these can make sure your application is compatible with crawlers for sites like Google, Facebook, and Twitter.

### Continuous integration

For themes that include frontend unit tests, it's best to connect them to a service like [Circle CI](https://circleci.com) and [Codecov](https://codecov.io) to get the most out of them. In the future we will provide documentation on setting this up. For now, feel free to use [this theme](https://github.com/scottbedard/speedcube.site/blob/dev/circle.yml#L73-L95) as an example.

## Showcase

Here are a couple sites to show what Vuetober themes are capable of. Feel free to add your projects to this list!

- [The Speedcube Site](https://speedcube.site)
- [scottbedard.net](https://scottbedard.net)

## License

[MIT](https://github.com/scottbedard/oc-vuetober-theme/blob/master/LICENSE)

Copyright (c) 2016-present, Scott Bedard
