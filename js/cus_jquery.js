$("document").ready(function(){
    $("#text").append("<p> text has been added");
    $("#p1").append("detail has been added");

    $("p.extra_text").css("background-color","blue");
    $(".extra_text").css("color","white");

    $("code#code1.code2").css("border","2px solid black");
    $("sup:first").css("padding-left","50%");


    //adding child element inside a div with id p_lang
    var p_lang_text = $("<h5>");
    p_lang_text.append("<h3>So many languages to cover</h3>");
    p_lang_text.append("So many languages to cover");
    $("#p_lang").html(p_lang_text);

    //adding text before the text in element with class p_lang_text
    $(".p_lang_text").prepend("PYTHON:");

    //adding text inside the html element
    $(".p_lang_text01").text("<h2> PYTHON: </h2>");


    //registering the events 
    $("#event").on("mousemove",on_mouse_move);
    $("#event").on("click",on_click);
    $("#event").on("mouseleave",on_mouse_leave);


    //animation is applying using button with id animation on div elem with id anim_area
    $("#animation").click(function(){
        $("#anim_area").animate({width: 300},300).
            animate({height: 500},400)
            .animate({left: 300},200)
            .animate({top: "+100",borderWidth: 100},"slow");
    });

    //ajax function using button 
    $("#get_data").click(ajax_result);
    $("#mix_data").click(ajax_fun);

});

function on_mouse_move(evt){
    $("#event").text(evt.type+" "+evt.pageX+" "+ evt.pageY +" "+ evt.which + " "+evt.metaKey);
}

function on_click(evt){
    $("#event").text(evt.type+" "+evt.pageX+" "+evt.pageY);
}

function on_mouse_leave(){
    $("#event").text("mouse over");
    $("#event").off("mousemove",on_mouse_move);
    
}

function ajax_result(){
    $.ajax("samplefile.txt",
        {success: setContent,
        type: "GET",
        dataType: "text"}
    );
}

function setContent(data,status,jqxhr){
    $("#using_ajax").text(data);
}

function ajax_fun(){
    $("#using_ajax").load("samplehtml.html");
}