$("document").ready(function(){
    
    //select the first element
    $("p:first").css("background-color","blue");
    $("p:first").css("color","white");
    
    //select the last element
    $("p:last").css("color","white");
    $("p:last").css("background-color","green");

    //select even 
    $("p:even").css("border","3px solid red");

    //select odd 
    $("p:odd").css("padding-left","20px");

    //selecting the element with id p1 inside a div tag
    $("div #p1").css("border","10px solid blue");

    //select an element being animated
    $(":animated");

    //select an element being focus
    $(":focus").text("hi there");

    $("p:not(expression")
    $(":lt");
    $(":gt");
    $(":eq");


});