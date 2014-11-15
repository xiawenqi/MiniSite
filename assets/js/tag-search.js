
/* 点击阅读全文按钮弹出新闻 */
var handleArticleToggle = function(){
	$("[data-click=show-article]").on("click", function(){
		$(".article-news-pop").show();
	});
	$("[data-click=close-article]").on("click", function(){
		$(".article-news-pop").hide();
	});
};

/* 博客滚动条效果 */
var handleArticleScroll = function(){

	$("#scroller").slimScroll({
		height: $(window).height(),
		railColor: '#18171e',
		railOpacity: 0.5,
		color: '#57595c',
		alwaysVisible: true
	});
};

/* 时间线的滚动效果  */
var handleTimeLineScroll = function(){
	var timeLine = $("#timeline-line");
	var containerWidth = timeLine.find(".line").width();
	var events = timeLine.find(".events");
	// 单个元素宽度
	var liWidth = events.find("li").outerWidth(true);
	// 事件容器的宽度
	var eventsWidth = liWidth * events.find("li").length;
	events.width(eventsWidth);

	var leftBoundry = 0;
	var rightBoundry = containerWidth - eventsWidth;

	events.draggable({
		axis: "x" 
	});


	// 左右方向键事件绑定
	timeLine.find(".line-wrap-inner").find(".left").on("click", function(e){
		e.preventDefault();
		events.css("left", rightBoundry);
	});
	timeLine.find(".line-wrap-inner").find(".right").on("click", function(e){
		e.preventDefault();
		events.css("left", leftBoundry);
	});
};

var TagSearch = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	handleArticleScroll();
        	handleArticleToggle();
        	handleTimeLineScroll();
        }
    };
}();