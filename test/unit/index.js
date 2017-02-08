// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all files that should be included in code coverage
let coverageBlacklist = [
    './app/boot.js',
    './index.htm',
    './main.js',
];

var srcContext = require.context('../../src', true, /^\.\/(.*)(\.vue$|\.js$)/);
srcContext.keys().filter(file => coverageBlacklist.indexOf(file) === -1).forEach(srcContext);
