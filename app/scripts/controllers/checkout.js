'use strict';

angular.module('udCisc612Group3App')
  .controller('CheckoutCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.confirm = function() {
      //do order completion here
    	$location.path("/confirmation");
    }


  });
