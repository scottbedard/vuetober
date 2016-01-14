let Vue = require('vue');

/**
 * Moment.js - http://momentjs.com/docs/#/displaying/
 *
 * @param  {String} format
 * @return {String}
 */
let Moment = require('moment');
Vue.filter('moment', (value, format) => Moment(value).format(format));
