var handleLanguageSwitcher = function(){
	$("#language-eng").on("change", function(){
		if(this.checked){
			$(this).parent().addClass("checked");
		}else{
			$(this).parent().removeClass("checked");
		}
	});
};

handleSearchFieldToggle = function(){
	// $(".search-btn").on("click", function(){
	// 	$("#searchbar").toggleClass("open");
	// });
};

var Index = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	handleLanguageSwitcher();
        	handleSearchFieldToggle();
        }
    };
}();