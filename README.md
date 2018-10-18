<p align="center">
    <img height="64px" src="http://i.imgur.com/Ia3H0Ae.png" /><br />
    <br />
    <a href="https://www.npmtrends.com/vue-cli-plugin-vuetober">
        <img src="https://img.shields.io/npm/dt/vue-cli-plugin-vuetober.svg" alt="Downloads" />
    </a>
    <a href="https://www.npmjs.com/package/vue-cli-plugin-vuetober">
        <img src="https://img.shields.io/npm/v/vue-cli-plugin-vuetober.svg" alt="Version" />
    </a>
    <a href="https://github.com/scottbedard/oc-vuetober-theme/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT" />
    </a>
</p>

Welcome to the beta for the next major version of Vuetober. This version is being done as a plugin for vue-cli 3. Hand pick the features you want and enjoy the latest technologies with the best tools. More documentation will be coming soon. Be advised, this plugin is in beta and is not ready for production use. Changes may happen at any time.

## Overview

Vuetober 3 represents a major change from version 2. For starters, this project is now much less opinionated. The vue-cli plugin will simply transform your vue project to work as an October theme. Meaning you're now free to make an SPA, use TypeScript, utilize whichever test framework you want, etc... Eventually this plugin will play nicely with all [first-party plugins](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue).

Another big change is that we no longer need to manually manage Webpack configuration files. In fact, we can even run things from the amazing new GUI if we want to. Since Vuetober themes now live inside the vue-cli ecosystem, the webpack configuration will be composed dynamically. I highly recommend [giving this article a read](https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb), For the tl;dr version, just think of webpack loaders as plugins. You're free to mix and match, and the plugin maintainers will keep your config up to date.

## Getting started

 The first thing you'll need to do is [install vue-cli](https://cli.vuejs.org/guide/installation.html). Once this is done you have two options, which depend on your experience with vue-cli and what you're trying to build. For newcomers, it is recommended to use the pre-configured SPA.

```bash
npm install -g @vue/cli

# or

yarn global add @vue/cli
```

#### Option #1: Start from scratch

This is a good option for people who are more comfortable with Vuetober, and know a bit about how the build tooling works. Doing this will simply transform your vue-cli application to work as an October theme. It'll be up to you to decide which tools you'd like to include in your project, and how to structure your code. To start from the beginning, follow these steps...

1. Create a new vue-cli project in your `/themes` directory
2. Install [`vue-cli-plugin-vuetober`](https://www.npmjs.com/package/vue-cli-plugin-vuetober)

#### Option #2: Use the pre-configured SPA

The other option is to let us make some decisions for you, and hit the ground running with a production ready SPA. In many cases, it's easier to do this and simply remove features you don't want than it is to start from scratch. To start building a single page application, [head over to the vuetober-spa repository](https://github.com/scottbedard/vuetober-spa).
