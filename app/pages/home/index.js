const angular = require('angular');

require('./home.html');

module.exports = angular
  .module('snakewars.pages.home', [
    require('angular-ui-router'),
    require('../../shared/components/canvas').name
  ])
  .controller('HomeController', require('./home.controller.js'))
  .config(require('./home.routes.js'));
