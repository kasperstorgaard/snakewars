const R = require('ramda');
const requestAnimationFrame = require('../../../shared/request.animation.frame.js');

module.exports = function($scope, $interval){
  var elementSize = function(domNode) {
    return [domNode.offsetWidth, domNode.offsetHeight];
  };

  var gridItemSize = R.curry(function(canvasSize, columns, rows){
    return [Math.floor(canvasSize[0]/columns), Math.floor(canvasSize[1]/rows)]
  });

  var drawSnake = R.curry(function(ctx, boxSize, snake){
    ctx.fillStyle = snake.color;
    R.forEach(function drawBox (position) {
      ctx.fillRect(position[0] * boxSize[0], position[1] * boxSize[1], boxSize[0], boxSize[1]);
    }, snake.positions);
  });

  var resetCanvas = function(canvas, context){
    context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  }

  var draw = function(canvas, context){
    var canvasBoxSize = gridItemSize(elementSize(canvas), $scope.columns, $scope.rows);
    var drawSnakeOnCanvas = drawSnake(context, canvasBoxSize);
    R.forEach(drawSnakeOnCanvas, $scope.snakes);
  }

  //--------- kickoff ---------//
  var kickoff = function(canvas) {
    var context = canvas.getContext('2d');

    //TODO: rewrite to use Date.now compare or better implementation
    $interval(function(){
      requestAnimationFrame(function(){
        resetCanvas(canvas, context);
        draw(canvas, context);
      });
    }, $scope.tickDurationMs);
  };

  //public
  this.elementSize = elementSize;
  this.gridItemSize = gridItemSize;
  this.kickoff = kickoff;
  this.draw = draw;
};
