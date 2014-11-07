
var handleCoverFlow = function(){
	 $('#form-coverflow').coverflow();
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