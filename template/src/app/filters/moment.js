import Vue from 'vue';
import Moment from 'moment';

/**
 * Moment.js - http://momentjs.com/docs/#/displaying/
 *
 * @param  {String} format
 * @return {String}
 */
Vue.filter('moment', (value, format) => Moment(value).format(format));
