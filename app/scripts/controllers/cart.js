'use strict';

angular.module('udCisc612Group3App')
  .controller('CartCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.menu = function() {
    	console.log("Redirecting to menu");
    	$location.path("/menu");
    }

    $scope.removeFromCart = function(cartItemNum) {

    }



  });
