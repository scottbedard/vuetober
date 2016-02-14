import Vue from 'vue';

/**
 * Moment.js - http://momentjs.com/docs/#/displaying/
 *
 * @param  {String} format
 * @return {String}
 */
import Moment from 'moment';
Vue.filter('moment', (value, format) => Moment(value).format(format));

