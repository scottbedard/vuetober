<p align="center">
    <a href="//github.com/octobercms/october" target="_blank"><img src="https://raw.githubusercontent.com/octobercms/october/master/themes/demo/assets/images/october.png" alt="October" width="auto" height="100px" /></a><a href="//github.com/vuejs/vue" target="_blank"><img src="http://vuejs.org/images/logo.png" width="auto" height="105px"></a>
</p>

<p align="center">A single page application built with October CMS and Vue.js</p>
<p align="center">A live demo for this theme can be found <a href="http://vuetober.scottbedard.net">here</a></p>

> **Warning:** This repository is an experimental October theme, and should be treated as such.

### Installation
1. Clone the repository into your `/themes` directory.
2. Install theme dependencies `npm install`.
3. Assemble theme assets `gulp compile`
4. Install the Bedard.Vuetober plugin `git clong https://github.com/scottbedard/oc-vuetober-plugin.git`
4. Install the RainLab.Blog plugin `php artisan plugin:install RainLab.Blog`
5. Install the Owl.RainLabBlogApi plugin `git clone https://github.com/october-widgets/rainlab-blog-api.git`

### Routing
To register a route or redirect, simply create an entry in `/assets/js/app/routes.js` or `/assets/js/app/redirects.js`. For more information how routing works, please visit the [vue-router documentation](http://vuejs.github.io/vue-router/en/index.html).


### Pages
A few examples have been made to help get you started. For basic pages, simply add a Vue component to the `/pages` directory. The `/blog` pages demonstrate how to fetch data from the server, and use route parameters. For more information on making requests, please visit the [vue-resource documentation](https://github.com/vuejs/vue-resource).

Static content can be fetched from the server, and then cached for a period of time. For an example of this, take a look at the `/about` page.
