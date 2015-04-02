require('./player.controller.js');
require('./player.tpl.html');
require('./player.less');

module.exports = function playerDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'player.tpl.html',
    controller: 'PlayerController',
    scope: {
      startDirection: '='
    }
  };
};

