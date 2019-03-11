$(document).ready(function() {
 $('.header-block__site-name').addClass("buba");


 $(".main-block__tab-link").click(function () {
 
	 // выключить все закладки  
	 $(".main-block__tab-link--active").removeClass("main-block__tab-link--active");
	 
	 // включить эту закладку  
	 $(this).addClass("main-block__tab-link--active");
	 
	 // свернуть все элементы с классом 'content' 
	 $(".main-block__tab-content").slideUp();
	 
	 // теперь определить значение атрибута 'title'  и найти элемент с этим id.  Затем развернуть его. 
	 var content_show = $(this).attr("title");
	 $("#"+content_show).slideDown();
	 
	 });



	
});


