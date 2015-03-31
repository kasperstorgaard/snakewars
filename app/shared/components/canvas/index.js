const angular = require('angular');
require('./canvas.less');

module.exports = angular
  .module('snakewars.shared.components.canvas', [])
  .controller('CanvasController', require('./canvas.controller.js'))
  .directive('swCanvas', require('./canvas.directive.js'));

