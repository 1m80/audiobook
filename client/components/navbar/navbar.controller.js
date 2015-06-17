'use strict';

angular.module('tianshanyunApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link' : '/'
    },{
      'title': '汉语',
      'link': '/hanyu/1'
    },{
      'title': '哈语',
      'link': '/hayu/1'
    },{
      'title': '维语',
      'link': '/weiyu/1'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });