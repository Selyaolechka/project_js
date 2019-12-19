//IE < 10 pollify for requestAnimationFrame
window.requestAnimFrame = function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            callback()
        }
}();


$(document).ready(function () {

    $(".mainWrapper").fullpage({

        anchors: ["one", "two", "three"],

        menu: ".menu",


    });



});