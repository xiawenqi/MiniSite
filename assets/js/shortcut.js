"use strict";
(function() {
    var a = function(b) {
        var c = b.keyCode;
        if (b.ctrlKey && b.shiftKey && (c == 82 || c == 86 || c == 72)) {
            b.preventDefault();
            chrome.runtime.sendMessage({
                msg: "capture_hotkey",
                keyCode: c
            })
        }
    };
    if (document.body.hasAttribute("huaban_collector_injected")) {
        return
    }
    document.body.setAttribute("huaban_collector_injected", true);
    document.body.addEventListener("keydown", a, false)
}());