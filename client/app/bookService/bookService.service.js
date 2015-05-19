'use strict';



angular.module('tianshanyunApp')
  .factory('bookService', ['$http', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      addBook: function (newBook) {
        $http.post('/api/things/',newBook);
      },
      updateBook: function(book) {
        $http.put('/api/things/'+book._id, book);
      }
    };
}]);
