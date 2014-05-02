'use strict';

angular.module('udCisc612Group3App')
  .controller('IntroCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.placeOrder = function() {
    	console.log("Redirecting to menu");
    	$location.path("/menu");
    }
    
  });
