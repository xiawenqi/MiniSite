
var handleCoverFlow = function(){

	 var el = $('#form-coverflow' );
	 var select = Math.ceil(el.children().length / 2) - 1;
	 el.coverflow({
	 	// overlap: 0.8,
	 	angle: 0
	 });
	 
	 
	 el.coverflow('select', select);
};

var FormDownload = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	handleCoverFlow();
        	// handleSearchFieldToggle();
        }
    };
}();