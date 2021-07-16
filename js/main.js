// WORK IN PROGRESS

var pageCount = function() {
    function doPageCount() {
        var userip = "asdf"; // Change This

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:5000/update/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "ip": userip
        }));
    }
    return {
        doPageCount: doPageCount
    }
}();

$(document).ready(function () {
    pageCount.doPageCount();
});