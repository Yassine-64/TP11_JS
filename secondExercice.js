$(document).ready(function() {
    let counter = 0;
    $("#counterValue").text(counter);

    $("#increase").click(function() {
        counter++;
        $("#counterValue").text(counter);
    });

    $("#decrease").click(function() {
        counter--;
        $("#counterValue").text(counter);
    });

    $("#reset").click(function() {
        counter = 0;
        $("#counterValue").text(counter);
    });
});
