'use strict';

angular.module('udCisc612Group3App')
  .controller('ConfirmCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.editCart = function()
	{
		console.log("got hrere");
		$location.path("/cart");
	}

  });
