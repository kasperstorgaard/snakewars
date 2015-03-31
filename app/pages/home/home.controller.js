module.exports = function($scope, $timeout, $interval){
  $scope.test = 'home-test';

  $scope.snakes = [
    {id: 'blueSnake', positions: [[0,0],[1,0],[2,0],[3,0]], color: '#0000ff' },
    {id: 'redSnake', positions: [[0,7],[1,7],[2,7],[3,7]], color: '#ff0000' },
  ];

  $timeout(function(){
    $scope.$broadcast('update:canvas')
  }, 0);

  //TEST
  var randCoord = function(){
    return [Math.floor(Math.random()*20), Math.floor(Math.random()*20)]
  }

  $interval(function(){
    $scope.snakes[0].positions = [randCoord(), randCoord(), randCoord(), randCoord()]
    $scope.snakes[1].positions = [randCoord(), randCoord(), randCoord(), randCoord()]
  }, 0);
};
