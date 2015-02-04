'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ShirtsCtrl
 * @description
 * # ShirtsCtrl
 * Controller of the myappApp
 */
var APP = angular.module('myappApp');


APP.controller('ShirtsCtrl', function ($scope) {
    
    $scope.heads = APP.heads;
    $scope.shirts = APP.shirts;
    $scope.pants = APP.pants;
    $scope.accessories = APP.accessories;

    $scope.addShirt = function(shirt) {

    	shirt.on = !shirt.on;

    	APP.shirts = $scope.shirts;
    };
  

  });
