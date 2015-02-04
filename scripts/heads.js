'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:HeadsCtrl
 * @description
 * # HeadsCtrl
 * Controller of the myappApp
 */
var APP = angular.module('myappApp');

APP.controller('HeadsCtrl', function ($scope) {

    $scope.heads = APP.heads;
    $scope.shirts = APP.shirts;
    $scope.pants = APP.pants;
    $scope.accessories = APP.accessories;

    $scope.addHead = function(head) {

    	head.on = !head.on;

    	APP.heads = $scope.heads;
    };
});
