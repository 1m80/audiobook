'use strict';

angular.module('tianshanyunApp')
  .controller('NewbookCtrl', function ($http, $window, $routeParams, $location, $scope) {
    $scope.uploadcontent = false;
    $scope.uploadaudio = false;
    $scope.uploadcover = false;

    $scope.date = getDate();
    $http.get('/api/things/appid').success(function(response) {
    	$scope.appid = response+1;
    });
    $scope.addNewbook = function() {
    	var newbook = {
    		appid: $scope.appid,
    		name: $scope.bookname,
    		date: $scope.date,
    		classify: $scope.classify,
    		type: $scope.booklang,
    		audio: $scope.uploadaudio,
    		content: $scope.uploadcontent,
    		cover: $scope.uploadcover
    	}
    	$http.post('/api/things', newbook);
    	var fromUrl = $location.protocol()+'://'+$location.host()+':'+$location.port()+'/'+$routeParams.booklang; 
    	$window.location.href = fromUrl;
    }

    function getDate() {
    	var myDate = new Date();
    	return myDate.getFullYear().toString()+'-'+(myDate.getMonth()+1).toString()+'-'+myDate.getDate().toString();
    }
  });
