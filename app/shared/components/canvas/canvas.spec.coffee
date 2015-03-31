expect = chai.expect;

describe 'snakewars.shared.components.canvas module', ->
  beforeEach ->
    angular.mock.module (require './index.js').name

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($rootScope, $controller) ->
      scope = $rootScope.$new()
      controller = $controller('CanvasController', { $scope: scope })

    describe 'initial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined

    describe 'elementSize', ->
      domNode = null

      beforeEach ->
        domNode = {offsetHeight: 20, offsetWidth: 30}

      it 'should exist', ->
        expect(controller.elementSize).to.not.be.undefined

      it 'should return an array of 2 numbers', ->
        result = controller.elementSize(domNode)
        expect(result).to.not.be.undefined
        expect(result.length).to.equal(2)
        expect(result[0]).to.be.a('number')
        expect(result[1]).to.be.a('number')


    describe 'gridItemSize', ->
      canvasSize = null
      columns = null
      rows = null

      beforeEach ->
        canvasSize = [300,240]
        columns = 12
        rows = 8

      it 'should exist', ->
        expect(controller.gridItemSize).to.not.be.undefined

      it 'should be curried (expecting 3 arguments)', ->
        expect(controller.gridItemSize(canvasSize)).to.be.a('function');
        expect(controller.gridItemSize(canvasSize,columns)).to.be.a('function');

      it 'should return an array of 2 numbers', ->
        result = controller.gridItemSize(canvasSize,columns,rows);
        expect(result).to.not.be.undefined
        expect(result.length).to.equal(2)
        expect(result[0]).to.be.a('number')
        expect(result[1]).to.be.a('number')


  describe 'directive', ->
    element = null
    template = "<a-great-eye></a-great-eye>"
    scope = null

    beforeEach inject ($rootScope, $compile) ->
      scope = $rootScope.$new()
      element = $compile(template)(scope);
      scope.$digest();

    describe 'initial', ->
      it 'should exist', ->
        expect(element).to.not.be.undefined
