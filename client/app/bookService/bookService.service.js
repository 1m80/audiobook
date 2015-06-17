'use strict';



angular.module('tianshanyunApp')
  .factory('bookService', ['$http','$rootScope', function ($http, $rootScope) {
    // Service logic
    // ...

    // Public API here
    return {
      addBook: function (newBook) {
        $http.post('/api/things/',newBook);
      },
      updateBook: function(book) {
        $http.put('/api/things/'+book._id, book);
      },
      newAppid: function(){
        console.log($rootScope);
      }
    };
}]);
