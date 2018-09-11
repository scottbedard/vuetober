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

### Overview

Vuetober 3 represents a major change from version 2. For starters, this project is now much less opinionated. The vue-cli plugin will simply transform your vue project to work as an October theme. Meaning you're now free to make an SPA, use TypeScript, utilize whichever test framework you want, etc... Eventually this plugin will play nicely with all [first-party plugins](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue).

Another big change is that we no longer need to manually manage Webpack configuration files. In fact, we can even run things from the amazing new GUI if we want to. Since Vuetober themes now live inside the vue-cli ecosystem, the webpack configuration will be composed dynamically. I highly recommend [giving this article a read](https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb), For the tl;dr version, just think of webpack loaders as plugins. You're free to mix and match, and the plugin maintainers will keep your config up to date.

### Getting started

1. Install [vue-cli](https://cli.vuejs.org/guide/installation.html)
2. Create a project in your `/themes` directory
3. Install [`vue-cli-plugin-vuetober`](https://www.npmjs.com/package/vue-cli-plugin-vuetober)
