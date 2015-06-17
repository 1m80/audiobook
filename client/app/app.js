'use strict';

angular.module('tianshanyunApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    }).
    when('/main/:page', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    }).
    when('/hanyu/:page', {
      templateUrl: 'app/hanyu/hanyu.html',
      controller: 'HanyuCtrl'
    }).
    when('/hayu/:page', {
      templateUrl: 'app/hayu/hayu.html',
      controller: 'HayuCtrl'
    }).
    when('/weiyu/:page', {
      templateUrl: 'app/weiyu/weiyu.html',
      controller: 'WeiyuCtrl'
    }).
    when('/newbook/:booklang', {
      templateUrl: 'app/newbook/newbook.html',
      controller: 'NewbookCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
    
      

    $locationProvider.html5Mode(true);
  });