'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:PantsCtrl
 * @description
 * # PantsCtrl
 * Controller of the myappApp
 */
var APP = angular.module('myappApp');

APP.controller('PantsCtrl', function ($scope) {

    $scope.heads = APP.heads;
    $scope.shirts = APP.shirts;
    $scope.pants = APP.pants;
    $scope.accessories = APP.accessories;

    $scope.addPant = function(pant) {

    	pant.on = !pant.on;

    	APP.pants = $scope.pants;
    };
});
