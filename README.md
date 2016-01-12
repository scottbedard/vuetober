<p align="center">
    <a href="//github.com/octobercms/october" target="_blank"><img src="//github.com/octobercms/october/blob/master/themes/demo/assets/images/october.png?raw=true" alt="October" width="auto" height="100px" /></a><a href="//github.com/vuejs/vue" target="_blank"><img src="http://vuejs.org/images/logo.png" width="auto" height="105px"></a>
</p>

<p align="center">A single page application build with October CMS and Vue.js</p>

### Installation
1. Clone the repository into your `/themes` directory.
2. Install theme dependencies `npm install`.
3. Assemble theme assets `gulp compile`
4. Install the RainLab.Blog plugin `php artisan plugin:install RainLab.Blog`

### Getting started
Standard pages can be made by adding a route in `/assets/js/app/routes.js`, and creating the matching component in `/assets/js/pages` directory. For pages that need data from the server, take a look at the [example blog page](https://github.com/scottbedard/oc-vuetober-theme/blob/master/assets/js/pages/blog).
