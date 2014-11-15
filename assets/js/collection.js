
/* 滑动底部时，计算上面时间轴应该对应shift的距离 */
var calculateTopShift = function(shift){
	var upWidth = $("#collection-content").find(".event-ponits-list").width();
	var downWidth = $("#timeline-line").find(".events").width();
	return Math.floor(shift * upWidth / downWidth);
};

/* 滑动上面时间轴时，计算底部应该对应shift的距离 */
var calculateDownShift = function(shift){
	var upWidth = $("#collection-content").find(".event-ponits-list").width();
	var downWidth = $("#timeline-line").find(".events").width();
	return Math.floor(shift * downWidth / upWidth);
};

/* 滑动底部 */
var shiftBottom = function(shift){
	var events = $("#timeline-line").find(".events");
	events.css("left", shift);
};

/* 滑动顶部  */
var shiftCollectionDistance = function(shift){
	var eventList = $("#collection-content").find(".event-ponits-list");
	eventList.css("left", shift);
};

/* 根据index滑动顶部  */
var shiftCollection = function(index){
	var collections = $("#collection-content");
	var eventList = collections.find(".event-ponits-list");
	var liWidth = eventList.find("li").outerWidth(true);

	eventList.css("left", index * liWidth);
	shiftBottom(calculateDownShift(index * liWidth));
}

/* 收藏轴的滚动效果 */
var handleCollectionScroll = function(){
	var collections = $("#collection-content");
	var collectionList = collections.find(".event-ponits-list");
	var liWidth = collectionList.find("li").outerWidth(true);

	var collectionsWidth = collectionList.find("li").length * liWidth;
	collectionList.width(collectionsWidth);

	// 左右方向键
	collections.find(".left").on("click", function(e){
		e.preventDefault();

		var curShift = parseInt(collectionList.css("left"));
		var curIndex = curShift / liWidth;
		shiftCollection(curIndex - 1);
	});
	collections.find(".right").on("click", function(e){
		e.preventDefault();

		var curShift = parseInt(collectionList.css("left"));
		var curIndex = curShift / liWidth;
		shiftCollection(curIndex + 1);
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
	}).on("drag", function(event, ui){
		// 拖拽同时会调整收藏时间轴的位置
		var shift = ui.position.left;
		console.log(shift);
		shiftCollectionDistance(calculateTopShift(shift));
	});


	// 左右方向键事件绑定
	timeLine.find(".line-wrap-inner").find(".left").on("click", function(e){
		e.preventDefault();
		events.css("left", rightBoundry);
		shiftCollectionDistance(calculateTopShift(rightBoundry));
	});
	timeLine.find(".line-wrap-inner").find(".right").on("click", function(e){
		e.preventDefault();
		events.css("left", leftBoundry);
		shiftCollectionDistance(calculateTopShift(leftBoundry));
	});
};

var Collection = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	handleTimeLineScroll();
        	handleCollectionScroll();
        }
    };
}();