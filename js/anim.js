$("document").ready(anim_start);

function anim_start(){

    $("#show").click(function(){
        // $("div:first").show();
        // $("div:first").show("slow");
        // $("div:first").show("fast");
        // $("div:first").show(1000);
        // $("div:first").show(10000);
        // $("div:first").show(1000,"swing");
        $("div:first").show(1000,"linear");
    });

    $("#hide").on("click",function(){
        // $("div:first").hide();
        // $("div:first").hide("fast");
        // $("div:first").hide("slow");
        // $("div:first").hide(2000);
        // $("div:first").hide(1000);
        $("div:first").hide(1000,"linear");
        // $("div:first").hide(1000,"swing");
    });

    document.getElementById("toggle").onclick = function(){
        // $("div:first").toggle();
        // $("div:first").toggle("fast");
        // $("div:first").toggle("slow");
        // $("div:first").toggle(2000);
        // $("div:first").toggle(1000);
        // $("div:first").toggle(1000,"linear");
        // $("div:first").toggle(1000,"swing");
        $("div:first").toggle(1000,function(){
            $(this).text("animation is done");
        });

    }



    $("#fade_in").click(
    function(){
        // console.log("event is working");
        // $("#box").fadeIn();
        // $("div:nth-child(1)").fadeIn(2000);
        //  $("div:nth-child(1)").fadeIn("slow");
        //  $("div:nth-child(1)").fadeIn("fast");
        //  $("div:nth-child(1)").fadeIn("fast","linear");
         $("div:nth-child(1)").fadeIn("fast","swing");

    });

    $("#fade_out").on("click",function(){
        // $("#box").fadeOut();
        // $("div:last").prev().fadeOut("slow");
        // $("div:last").prev().fadeOut("fast");
        // $("div:last").prev().fadeOut("fast","swing");
        // $("div:last").prev().fadeOut("fast","linear");
        $("div:last").prev().fadeOut(2000,"linear");
    });


    document.querySelector("#fade_to").addEventListener("click",function(){
        // console.log("event is working");
        // $("div:first").fadeTo(200,0.3);
        // $("div:first").fadeTo(100,0.2);
        $("div:nth-child(1)").fadeTo(100,0.8);
    });

    document.querySelector("#combination_anim").onclick = function(){
        // console.log("it's working");
        $("#box").fadeOut(1000)
        .fadeIn(1000).fadeTo(2000,0.3)
        .fadeOut(3000,"swing").fadeIn("slow","linear")
        .fadeTo(100,1);
    }

    $("#slide_up").click(function(){
        $("div:first").slideUp();

        //we can specify all keyword and extra parameters as we did before in previous animation
    });
    
    $("#slide_down").click(function(){
        $("div:first").slideDown();

        //we can specify all keyword and extra parameters as we did before in previous animation
    });
 
    $("#slide_toggle").click(function(){
        $("div:first").slideToggle();

        //we can specify all keyword and extra parameters as we did before in previous animation
    });
}

function anim_fun(){
    // // $("div:nth-child(1)").animate({"font-size": "1.5em"},1000);
    $("div:nth-child(1)").animate({fontSize: "1.5em",
    width:"500px",
    left:"+=200px"}
    ,1000);
    
    // $("div:nth-child(1)").animate({"width": "300px"},1000);
    // $("div:nth-child(1)").animate({"width": "300px"},1000，"swing");

}