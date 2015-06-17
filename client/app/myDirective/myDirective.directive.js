'use strict';

angular.module('tianshanyunApp')


.directive('ezBook',['bookService', function(bookService){
  return {
    restrict : 'EA',
    link : function(scope,element){
      var book = scope.book;
      var iptsChk = element.find('input[type="checkbox"]');
      if (book.audio) {
        $(iptsChk[0]).attr('checked','');
      }
      if (book.content) {
        $(iptsChk[1]).attr('checked','');
      }
      if (book.cover) {
        $(iptsChk[2]).attr('checked','');
      }
      if (book.upload) {
        $(iptsChk[3]).attr('checked','');
      }
      if (book.repair) {
        $(iptsChk[4]).attr('checked','');
      }
      var btn = element.find('button');
      var ipts=element.find('input').toArray();
      $(btn[0]).on('click', function(){
        $(btn[0]).css('display','none');
        $(btn[1]).css('display', 'inline');
        ipts.forEach(function(ipt){
          $(ipt).removeAttr('disabled');
        });
      });
      $(btn[1]).on('click', function(){
        $(btn[0]).css('display','inline');
        $(btn[1]).css('display','none');
        ipts.forEach(function(ipt){
          $(ipt).attr('disabled','');
        });
        var newbook = {_id:book._id,date:ipts[0].value, appid:ipts[1].value, name:ipts[2].value, classify:ipts[3].value, audio:ipts[4].checked, content:ipts[5].checked, cover:ipts[6].checked, upload:ipts[7].checked, matter:ipts[8].value, repair:ipts[9].checked};
        bookService.updateBook(newbook);
      });
    }
  };
}])
.directive('acAdd', ['bookService', function(bookService) {
	return {
		restrict: 'EA',
		compile: function(element) {
			element.on('click', function(){
				$('#book-list').append('<li class="list-group-item"><ul class="books" ez-book><li class="col-md-1"></li><input type="date"  value="" placeholder="yyyy-MM-dd" class="col-md-1" ng-required=""/><input type="number" value="" class="col-md-1" ng-required=""/><input type="text" value=""  class="col-md-1"/><input type="text" value="" class="col-md-2"/><input type="checkbox" class="col-md-1"/><input type="checkbox" class="col-md-1"/><input type="checkbox" class="col-md-1"/><input type="text" class="col-md-1"/><input type="checkbox" value="" class="col-md-1"/><input type="checkbox" class="col-md-1"/></ul></li>');
				$('#btn-sure').css('display','inline');
				element.css('display','none');
			});
		}
	};
}])
.directive('acSure', ['bookService', function(bookService) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {		
			element.on('click', function(){
				var lis = $('#book-list ul.books:last');
				var ipts = $(lis[0]).find('input');

        if(ipts[2].value===''||ipts[2].value===null){
          $(element.parent()[0]).append('<div class="alert alert-danger" role="alert"><strong>警告</strong>:书名不允许为空!</div>');
        } else {
          $('#btn-add').css('display','inline');
          element.css('display', 'none');
          var j = {date:ipts[0].value, appid:ipts[1].value, name:ipts[2].value, classify:ipts[3].value, audio:ipts[4].checked, content:ipts[5].checked, cover:ipts[6].checked, upload:ipts[7].checked, matter:ipts[8].value, repair:ipts[9].checked,type:attrs.data};
          bookService.addBook(j);
          location.reload();
        }
				
			});
		}
	};
}])
.directive('paging', function () {
  return {
    restrict: 'E',
      //scope: {
      //    numPages: '=',
      //    currentPage: '=',
      //    onSelectPage: '&'
      //},
      template: '',
      replace: true,
      link: function (scope, element, attrs) {
        scope.$watch('numPages', function (value) {
          scope.pages = [];
            for (var i = 1; i <= value; i++) {
              scope.pages.push(i);
            }
            if (scope.currentPage > value) {
              scope.selectPage(value);
            }
        });
        scope.isActive = function (page) {
          return scope.currentPage === page;
        };
        scope.selectPage = function (page) {
          if (!scope.isActive(page)) {
            scope.currentPage = page;
            scope.onSelectPage(page);
          }
        };
        scope.selectPrevious = function () {
          if (!scope.noPrevious()) {
            scope.selectPage(scope.currentPage - 1);
            }
        };
        scope.selectNext = function () {
          if (!scope.noNext()) {
            scope.selectPage(scope.currentPage + 1);
          }
        };
        scope.noPrevious = function () {
          return scope.currentPage == 1;
        };
        scope.noNext = function () {
          return scope.currentPage == scope.numPages;
        };
      }
    };
});