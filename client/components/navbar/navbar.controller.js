'use strict';

angular.module('tianshanyunApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link' : '/'
    },{
      'title': '汉语',
      'link': '/hanyu'
    },{
      'title': '哈语',
      'link': '/hayu'
    },{
      'title': '维语',
      'link': '/weiyu'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });