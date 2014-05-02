'use strict';

angular.module('udCisc612Group3App')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cart = function() {
    	console.log("Redirecting to cart");
    	$location.path("/cart");
    }

    $scope.addToCart = function(itemID) { //adds item to cart but does not navigate away

    }

    $scope.advancedOptions = function() {

    }

  });
