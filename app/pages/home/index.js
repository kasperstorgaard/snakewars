var angular = require('angular');

require('./home.html');

var app = angular
  .module('snakewars.pages.home', [
    require('angular-ui-router')
  ])
  .controller('HomeController', function($scope){
    $scope.test = 'home-test';
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeController'
      });
  });

module.exports = app;
