var handleArticleToggle = function(){
	$("[data-click=show-article]").on("click", function(){
		$(".article-news-pop").show();
	});
	$("[data-click=close-article]").on("click", function(){
		$(".article-news-pop").hide();
	});
};

var handleArticleScroll = function(){

	$("#scroller").slimScroll({
		height: $(window).height(),
		railColor: '#18171e',
		railOpacity: 0.5,
		color: '#57595c',
		alwaysVisible: true
	});
};

var TagSearch = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	handleArticleScroll();
        	handleArticleToggle();
        }
    };
}();