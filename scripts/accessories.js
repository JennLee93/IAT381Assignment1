'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AccessoriesCtrl
 * @description
 * # AccessoriesCtrl
 * Controller of the myappApp
 */
var APP = angular.module('myappApp');

APP.controller('AccessoriesCtrl', function ($scope) {

    $scope.heads = APP.heads;
    $scope.shirts = APP.shirts;
    $scope.pants = APP.pants;
    $scope.accessories = APP.accessories;

    $scope.addAccessories = function(accessories) {

    	accessories.on = !accessories.on;

    	APP.accessories = $scope.accessories;
    };
});
