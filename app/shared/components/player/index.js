const angular = require('angular');

module.exports = angular
  .module('snakewars.shared.components.player', [])
  .controller('PlayerController', require('./player.controller.js'))
  .directive('swPlayer', require('./player.directive.js'));