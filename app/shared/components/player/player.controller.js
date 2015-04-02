const bacon = require('baconjs');

module.exports = function($scope, $window) {
	var arrowKeys = bacon.fromEvent($window, 'keydown')
		.map('.keyCode');
	arrowKeys.onValue(function(){
		console.log(arguments)
	});
};