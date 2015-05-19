'use strict';

angular.module('tianshanyunApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.newbook = [];

    $http.get('/api/things/').success(function(response) {
      $scope.books = response;
    });

  });
