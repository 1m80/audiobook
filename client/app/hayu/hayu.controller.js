'use strict';

angular.module('tianshanyunApp')
  .controller('HayuCtrl', function ($http, $scope, $routeParams) {
  	if ($routeParams.page) {
        $scope.currentPage = $routeParams.page;
      }
      else {
        $scope.currentPage = '1';
      }
    $scope.pages = [];


    $http.get('/api/things/lang/hayu/'+$routeParams.page).success(function(response) {
        $scope.books = response.books;
        $scope.numPages = response.page.pageCount;
      });


    $scope.onSelectPage = function(page) {
      $http.get('/api/things/lang/hayu/'+page).success(function(response) {
        $scope.books = response.books;
        $scope.numPages = response.page.pageCount;
        
      });
    };
    $scope.booklang = 'all';



    function getPageId($routeParams) {
    	var pageId;
    	if ($routeParams.page) {
    		pageId = $routeParams.page;
    	}
    	else {
    		pageId = '1';
    	}
    	return pageId;
    }
  });
