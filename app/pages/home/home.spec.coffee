expect = chai.expect;

describe 'snakewars.pages.home module', ->
  beforeEach ->
    angular.mock.module (require './index.js').name

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($rootScope, $controller) ->
      scope = $rootScope.$new()
      controller = $controller('HomeController', { $scope: scope })

    describe 'initial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined

      it 'should modify the scope', ->
        expect(scope.test).to.equal 'home-test'
