'use strict';

angular
  .module('udCisc612Group3App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .when('/confirmation', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl'
      })
      .otherwise({
        redirectTo: '/intro'
      });
  })
  .controller('RootController', function ($scope, $location) {

    $scope.menu = [
      {
        'id': 1,
        'name': "Cheese Pizza",
        'description': "This particular pizza is a cheese pizza. It's got sauce, and cheese. And crust! Don't forget the crust!",
        'price': 12.99,
        'quantity': 1,
        'active': 0
      },
      {
        'id': 2,
        'name': "Pepperoni Pizza",
        'description': "This particular pizza is a pepperoni pizza. It's got sauce, and cheese. And crust! Don't forget the crust!",
        'price': 12.99,
        'quantity': 1,
        'active': 0
      },
      {
        'id': 3,
        'name': "Hawaiian Pizza",
        'description': "This particular pizza is a hawaiian pizza. It's got sauce, and cheese. And crust! Don't forget the crust!",
        'price': 12.99,
        'quantity': 1,
        'active': 0
      },
      {
        'id': 4,
        'name': "Mushroom Pizza",
        'description': "This particular pizza is a mushroom pizza. It's got sauce, and cheese. And crust! Don't forget the crust!",
        'price': 12.99,
        'quantity': 1,
        'active': 0
      }
    ];

    $scope.totalPrice = 0;

    $scope.cart = [

    ];

    $scope.addToCart = function(itemid) {
      for (var i in $scope.cart) { //loop through cart, find same item
        if ($scope.cart[i].id==itemid) {
          $scope.cart[i].quantity++;
          $scope.updatePrice();
          return;
        }
      }
      for (var i in $scope.menu) { //loop through menu, find id
        if ($scope.menu[i].id == itemid) {
          $scope.cart.push(JSON.parse(JSON.stringify($scope.menu[i])));   
        }
      }
      $scope.updatePrice();
    }

    $scope.removeFromCart = function(index) {
      $scope.cart.splice(index, 1);
      $scope.updatePrice();
    }

    $scope.updatePrice = function() {
      var totalPrice = 0;
      for(var item in $scope.cart) {
        totalPrice += $scope.cart[item].price * $scope.cart[item].quantity;
      }
      $scope.totalPrice = totalPrice.toFixed(2);
    }

  });
