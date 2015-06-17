'use strict';

angular.module('tianshanyunApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {
    
    if ($routeParams.page) {
        $scope.currentPage = $routeParams.page;
      }
      else {
        $scope.currentPage = '1';
      }
    $scope.pages = [];


    $http.get('/api/things/main/'+$routeParams.page).success(function(response) {
        $scope.books = response.books;
        $scope.numPages = response.page.pageCount;
        
        for(var i=0; i<$scope.books.length; i++) {
          switch ($scope.books[i].type)
          {
            case 'hanyu':
              $scope.books[i].type='汉语';
              break;
            case 'weiyu':
              $scope.books[i].type='维语';
              break;
            case 'hayu':
              $scope.books[i].type='哈语';

          }
        }
      });


    $scope.onSelectPage = function(page) {
      $http.get('/api/things/main/'+page).success(function(response) {
        $scope.books = response.books;
        $scope.numPages = response.page.pageCount;
        

        for(var i=0; i<$scope.books.length; i++) {
          switch ($scope.books[i].type)
          {
            case 'hanyu':
              $scope.books[i].type='汉语';
              break;
            case 'weiyu':
              $scope.books[i].type='维语';
              break;
            case 'hayu':
              $scope.books[i].type='哈语';

          }
        }
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
