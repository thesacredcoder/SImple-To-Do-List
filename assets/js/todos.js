// Check Off specific todos by clicking
$("ul").on("click", "li", function() {
 $(this).toggleClass("completed")
});

// CLick on X to delete the todo
$("ul").on( "click", "span", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

$("input[type = 'text']").keypress(function(e) {
    if(e.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span> <i class = 'fa fa-trash'></i> </span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type = 'text']").fadeToggle();
});