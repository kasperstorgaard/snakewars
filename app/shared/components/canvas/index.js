const angular = require('angular');

module.exports = angular
  .module('snakewars.shared.components.canvas', [])
  .controller('CanvasController', require('./canvas.controller.js'))
  .directive('swCanvas', require('./canvas.directive.js'));

