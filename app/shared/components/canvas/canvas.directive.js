require('./canvas.controller.js');
require('./canvas.tpl.html');
require('./canvas.less');

const R = require('ramda');

module.exports = function canvasDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'canvas.tpl.html',
    controller: 'CanvasController',
    scope: {
      snakes: '=',
      columns: '=',
      rows: '=',
      tickDurationMs: '='
    },
    link: function(scope, element, attrs, ctrl){
      ctrl.kickoff(element[0]);
    }
  };
};

