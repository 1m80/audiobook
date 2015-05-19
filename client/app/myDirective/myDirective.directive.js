'use strict';

angular.module('tianshanyunApp')


.directive("ezBook",['bookService', function(bookService, $rootScope){
  return {
    restrict : "EA",
    link : function(scope,element,attrs){
      var book = scope.book;
      var ipts_chk = element.find("input[type='checkbox']");
      if (book.audio) {
        $(ipts_chk[0]).attr("checked","");
      }
      if (book.content) {
        $(ipts_chk[1]).attr("checked","");
      }
      if (book.cover) {
        $(ipts_chk[2]).attr("checked","");
      }
      if (book.upload) {
        $(ipts_chk[3]).attr("checked","");
      }
      if (book.repair) {
        $(ipts_chk[4]).attr("checked","");
      }
      var btn = element.find('button');
      var ipts=element.find('input').toArray();
      $(btn[0]).on('click', function(){
        $(btn[0]).css("display","none");
        $(btn[1]).css('display', 'inline');
        ipts.forEach(function(ipt){
          $(ipt).removeAttr("disabled");
        })
      });
      $(btn[1]).on('click', function(){
        $(btn[0]).css('display','inline');
        $(btn[1]).css('display','none');
        ipts.forEach(function(ipt){
          $(ipt).attr("disabled","");
        });
        var newbook = {_id:book._id,date:ipts[0].value, appid:ipts[1].value, name:ipts[2].value, classify:ipts[3].value, audio:ipts[4].checked, content:ipts[5].checked, cover:ipts[6].checked, upload:ipts[7].checked, matter:ipts[8].value, repair:ipts[9].checked};
        bookService.updateBook(newbook);
      });
    }
  };
}])
.directive('acAdd', function($rootScope) {
	return {
		restrict: 'EA',
		compile: function(element, attrs) {
			element.on('click', function(){
				$('#book-list').append('<li class="list-group-item"><ul class="books" ez-book><li class="col-md-1"></li><input type="text"  value=""/><input type="text" value=""/><input type="text" value="" /><input type="text" value=""/><input type="checkbox"/><input type="checkbox" /><input type="checkbox"/><input type="checkbox"/><input type="text"/><input type="checkbox" value=""/></ul></li>');
				$("#btn-sure").css("display",'inline');
				element.css('display','none');
			});
		}
	}
})
.directive('acSure', ['bookService', function(bookService, $rootScope) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {		
			element.on('click', function(){
				var lis = $('#book-list ul.books:last');
				var ipts = $(lis[0]).find('input');
				$('#btn-add').css('display','inline');
				element.css('display', 'none');
				var j = {date:ipts[0].value, appid:ipts[1].value, name:ipts[2].value, classify:ipts[3].value, audio:ipts[4].checked, content:ipts[5].checked, cover:ipts[6].checked, upload:ipts[7].checked, matter:ipts[8].value, repair:ipts[9].checked};
        console.log (ipts[3].value);
        console.log(j);
				bookService.addBook(j);
				location.reload();
			});
		}
	}
}]);