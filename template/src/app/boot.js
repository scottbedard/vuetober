//
// Directives
//
require('./directives/linkable'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//
// Plugins
//
require('./plugins/resources'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
require('./plugins/router'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
