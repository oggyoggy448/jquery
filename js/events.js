// console.log($("section").html());
$("document").ready(function(){

    $("#sect").on("mouseover mouseleave",mouseover1);
    // mouseover event execute when a user moves his mouse cursor inside the element content
    // mouseleave event execuate when a user moves his mouse cursor out of element of content
    // on function turns on the event written inside its parameters

    function mouseover1(){
        console.log("mouse is moving");
        // $("#sect").toggleClass("body_color_change");
        $("#sect").css({'background-color':"blue"});
    }
    $("#turnoff_evt").on("click",function(){
        // console.log("it's working");
        $("#sect").off("mouseover mouseleave",mouseover1);
        $("#sect").css("background-color","green");

    });
    $("#dbl_click").dblclick(function(){
        console.log("double clicked worked");
    });

    $(window).resize(function(){
        $("#sect").html("windows is resizing");
    });

    $("#hover").hover(function(){
        console.log("hovering is working fine");
    });

    $("#one_time_evt").one("click",function(){
        console.log("this event will work once");
    });


    $("#type_char").on("keypress",function(evt){
        var code = String.fromCharCode(evt.charCode);
        $("#type_char_text").text(code);
    });
    // $("section").text("this isn't a blank section now");
    $("#evt_info").click({name:"event1"},function(evt){
        // console.log("this event is working") ;
        console.log("target:"+evt.target.id);
        console.log("metaKey:"+evt.metaKey);
        console.log("type:"+evt.type);
        console.log("which:"+evt.which);

        console.log("pageX:"+evt.pageX);
        console.log("pageY:"+evt.pageY);
        console.log("clientX"+evt.clientX);
        console.log("clientY:",evt.clientY);
        console.log("data:",evt.data.name);
    });




    $("#c_content").click(function(){
        $("#sect").html("Content has been changed");
    });

    $("#c_c_with_tag").click(function(){
        $("#sect").html("<h1>Content has been changed</h1>");
    });
    
    $("#u_o_variable").click(function(){
        var element = $("<p> A new data </p>");
        $("#sect").html(element);
    });

    $("#append_fun").click(function(){
        $("#sect").append("data has been added");
    });

    $("#prepend_fun").click(function(){
        $("#sect").prepend("data has been added");
    });

    $("#append_to_fun").click(function(){
        $("#p1").appendTo("#p2");
    });
    
    $("#prepend_to_fun").click(function(){
        $("#p2").prependTo("#p1");
    });

    $("#before").click(function(){
        $("#sect").before("<p>**************************************</p>");
    });

    $("#after").click(function(){
        $("#sect").after("**************************************");
    });


    $("#i_before").click(function(){
        $("<h1> el before </h1>").insertBefore("#p2");
    });
    
    $("#i_after").click(function(){
        $("#p2").insertAfter("#sect");
        // $("<p> data </p> ").insertAfter("#sect");

    });

    $("#wrap_fun").click(function(){
        $("p").wrap("<div/>");
    });
    
    $("#wrap_all_fun").click(function(){
        $("p").wrapAll("<div style='color: blue;'/>");
    });


    $("#remove_fun").click(function(){
        // it remove all the content and also event handeling 
        // $("p").remove(); 
    });
    
    $("#detach_fun").click(function(){
        // it remove the element but not the content and also event handeling 
        // $("p").detach(); 
    });


    $("#replace_fun").click(function(){
        $("<p> data </p>").replaceAll("#sect");
    });

    $("#replace_with_fun").click(function(){
        // $("#sect").replaceWith("<h1> data </h1>");
        $("#p1").replaceWith(replace);
    });

    function replace(){
        // console.log(typeof($(this).text));
        // console.log($(this).text());

        if ($(this).text().indexOf(1) == 1){
            return "<p> new tag </p>";
        }
        else {
            return this.outerHTML;
        }
    }
});

