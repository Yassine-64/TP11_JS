$(document).ready(function() {
    let square = $("#square");
    let colors = ["green", "red", "yellow"];
    let currentColorIndex = 0;

    $("#growButton").click(function() {
        square.animate({
            width: "+=50",
            height: "+=50"
        }, 500);
    });

    $("#shrinkButton").click(function() {
        square.animate({
            width: "-=50",
            height: "-=50"
        }, 500);
    });

    $("#colorButton").click(function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        square.animate({
            backgroundColor: colors[currentColorIndex]
        }, 500);
    });
});
