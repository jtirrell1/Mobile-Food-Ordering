'use strict';

angular.module('udCisc612Group3App')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.toggleButtons = function(item) {
      for (var d in $scope.menu) {
        $scope.menu[d].active=0;
      }
      item.active = 1;
    }

    $scope.cart = function() {
    	console.log("Redirecting to cart");
    	$location.path("/cart");
    }

    $scope.addToCart = function(item) { //adds item to cart but does not navigate away
      $scope.$parent.addToCart(item);
    }

    $scope.advancedOptions = function() {

    }

  });
