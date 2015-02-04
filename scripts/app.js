'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
var APP = angular
  .module('myappApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);


APP.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/heads', {
        templateUrl: 'views/heads.html',
        controller: 'HeadsCtrl'
      })
      .when('/shirts', {
        templateUrl: 'views/shirts.html',
        controller: 'ShirtsCtrl'
      })
      .when('/pants', {
        templateUrl: 'views/pants.html',
        controller: 'PantsCtrl'
      })
      .when('/accessories', {
        templateUrl: 'views/accessories.html',
        controller: 'AccessoriesCtrl'
      })
      .when('/end', {
        templateUrl: 'views/end.html',
        controller: 'EndCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//create a global variable called APP that I can use in all controllers

APP.heads = [
      {thumbnail:'thumbnail-hat', display:'display-hat', img:'ThorHat.png', on:false},
      {thumbnail:'thumbnail-blackwidowhair1', display:'display-blackwidowhair1', img:'BlackWidowHair1.png', on:false},
      {thumbnail:'thumbnail-blackwidowhair2', display:'display-blackwidowhair2', img:'BlackWidowHair2.png', on:false},
      {thumbnail:'thumbnail-captainMask', display:'display-captainMask', img:'CpAmMask.png', on:false},
      {thumbnail:'thumbnail-eyePatch', display:'display-eyePatch', img:'Eyepatch.png', on:false},
      {thumbnail:'thumbnail-ironmanHelmet', display:'display-ironmanHelmet', img:'IronManMask-07.png', on:false},
      {thumbnail:'thumbnail-hulkHair', display:'display-hulkHair', img:'hulkHair.png', on:false}

      ];

      //add APP.shirts

APP.shirts = [
      {thumbnail:'thumbnail-captainShirt', display:'display-captainShirt', img:'cptAmShirt.png', on:false},
      {thumbnail:'thumbnail-hawkeyeShirt', display:'display-hawkeyeShirt', img:'HawkEyeShirt.png', on:false},
      {thumbnail:'thumbnail-hulkBody', display:'display-hulkBody', img:'hulkBody.png', on:false},
      {thumbnail:'thumbnail-ironmanShirt', display:'display-ironmanShirt', img:'ironmanShirt.png', on:false},
      {thumbnail:'thumbnail-thorShirt', display:'display-thorShirt', img:'thorShirt.png', on:false},

      ];

      //add APP.pants

APP.pants = [
      {thumbnail:'thumbnail-pants1', display:'display-pants1', img:'pants1.png', on:false},
      {thumbnail:'thumbnail-hulkPants', display:'display-hulkPants', img:'pants2.png', on:false},
      {thumbnail:'thumbnail-captainPants', display:'display-captainPants', img:'pants3.png', on:false},
      {thumbnail:'thumbnail-Pants4', display:'display-Pants4', img:'pants4.png', on:false},
      {thumbnail:'thumbnail-Pants5', display:'display-Pants5', img:'pants5.png', on:false},
      {thumbnail:'thumbnail-ironmanPants', display:'display-ironmanPants', img:'pants6.png', on:false},

      ];

      //add APP.accessories

APP.accessories = [
      {thumbnail:'thumbnail-hammer', display:'display-hammer', img:'ThorHammer.png', on:false},
      {thumbnail:'thumbnail-shield', display:'display-shield', img:'CpAmShield_small-06.png', on:false},
      {thumbnail:'thumbnail-arrow', display:'display-arrow', img:'HawkEyeArrow-16.png', on:false},

      ];




