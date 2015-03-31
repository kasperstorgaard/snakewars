//global styles
require('./less/layout/layout.less');

//dependencies
var angular = require('angular');

//initialize
var app = angular
  .module('snakewars', [
    require('angular-ui-router'),
    require('./pages/home/index.js').name,
  ])
  .config(require('./app.routes.js'))

module.exports = app;
