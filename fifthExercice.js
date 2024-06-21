$(document).ready(function() {
    $("#ajouter").click(function() {
        let newElement = $("#nouvelElement").val();
        if (newElement !== "") {
            $("#maListe").append("<li>" + newElement + "</li>");
            $("#nouvelElement").val(""); 
        }
    });

    $("#maListe").on("click", "li", function() {
        $(this).remove();
    });
});
