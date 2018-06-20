$(document).ready(function() {

    $(".left").clone().appendTo(".right");

    $(".row").parent().css("background-color", "green");
    $(".container").children().css("background-color", "#f6f6f6");
    $(".target:odd").addClass("animated flip")
    $(".target:even").addClass("animated bounce")
    $(".goodbye").addClass("animated hinge")
});