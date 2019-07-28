$(function(){
    // alert("Hello,jquery");

    //different selectors
    // $("#m-name").text("Hey....! Chongqing University");
    // $(".m-name").text("Hey....! Chongqing University");
    // $("p.m-name").text("Hey....! Chongqing University");
    // $("p").text("Hey....! Chongqing University");
    
    
    // by attributes
    // $("p[id=m-name]").text("changed");
    // $("p[id^=m]").text("changed");
    // $("p[id*=m]").text("changed");


    //select the direct child elements
    // $("header").children().attr("style","color:red");
    //select the element by finding a element inside header
    // $("header").find("#heading").css("text-transform","uppercase");
    // $("header").find("*").css("text-transform","uppercase");

    // $("#heading").parent().attr("style","background-color:red");
    // $("#heading1").parentsUntil("body").attr({style: "background-color:red"});

    // $("#hea4ding").prev().attr("style","color:red");
    // $("#hea4ding").prevAll().attr("style","color:red");
    //   $("#hea4ding").prevUntil(".heading").attr("style","color:red");

    //    $("#hea4ding").next().attr("style","color:red");
    // $("#hea4ding").nextAll().attr("style","color:red");
    //   $("#hea4ding").nextUntil(".heading").attr("style","color:red");


    // var index = $("section").children().index($("#hea4ding"));
    // console.log(index);

    // $($("section").children().get(index)).attr("style","background-color:red");
    

    //add class 
    // $("#m-name").addClass("blue");
    // $("#m-name").removeClass("blue");

    // $("#m-name").attr("class","blue-color");
    // $("#m-name").attr("class"); // will return only a perticular value
    
    //removeAttr does not araise any exception even we don't declare that class before.
    // $("#m-name").removeAttr("class");

    // alert($("#m-name").attr("class"));

    // $("#m-name").text("<h1>updated</h1>");
    // $("#m-name").html("<h1>updated</h1>");

    // $("#m-name").click(function(){
    //     console.log("it's working");
    // });

    // $("p").each(function(){
    //     $(this).text("updated");
    // });

    // $("p").text("updated");

    // $("div").mouseout(function(){
    //     // console.log('its working');
    //     $(this).removeClass("property");
        
    // });

    // $("div").hover(function(){
    //     var elem = $(this).prevUntil("section");
        // console.log(elem);
        // elem.addClass("property");

        // $("div").(function(){
        //     $(this).text("done");
        // });
    // });

    // $("#m-name").click(function(evt){
    //     // console.log("page location is: "+evt.pageX +"/"+evt.pageY);
    //     console.log("which event is execuated: "+evt.which);
    // });
    // 
    

    //button is only registered with single click not with double click event (dblclick)   

    // $("#name").focus(function(){
    //     // console.log("it's been working I'm taking worries by the way");
    //     $(this).next("span[class=hidden]").removeAttr("hidden");
    // }).blur(function(){
    //     // console.log("working,cool");
    //     $("span.hidden").attr("hidden","hidden");
    // });

    // $("#select_country").change(function(){
    //     var lang = $(this).val();
    //     // console.log(lang);
    //     if(lang =="English"){
    //         value_fun("level 1","level 2","level 3");
    //     }
    //     else if(lang == "Chinese"){
    //         value_fun("chinese level 1"," Chinese level 2"," Chinese level 3");
    //     }
    //     else {
    //         value_fun("Japnese level 1", "Japnese level 2","Japnese level 3");   
    //     }
    // });

    // function value_fun(v1,v2,v3){
    //     $("#value_1").text(v1);
    //     $("#value_2").text(v2);
    //     $("#value_3").text(v3);
    // }

    // $("#select_country").change(function(){
    //     // console.log("working");
    //     var lang = $("#select_country").val();
    //     // console.log(typeof(lang));
    //     // $("#select_country").append(lang);
    //     $("#write_country").empty();
    //     $("#write_country").text("<option>"+lang+"1</option>");
    //     $("#write_country").append("<option>"+lang+"2</option>");
    //     $("#write_country").append("<option>"+lang+"3</option>");
    //     $("#write_country").append("<option>"+lang+"4</option>");

    // }).focus(function(){
    //     $("span.hidden").removeAttr("hidden").html("Select an element among list");
        
    // });

    // $("#select_country").mouseenter(function(){
    //     $("span.hidden").removeAttr("hidden").html("select a element amoung list");
    // }).mouseleave(function(){
    //     console.log("working");
    //     $("span[class=hidden]").attr("hidden","hidden");
    // });

    // $("#select_country").hover(function(){
    //     // console.log("working");
    //     //mouseenter event
    //     $(".hidden").removeAttr("hidden").html("select a element");
    // },function(){ //mouseleave event 
    //     $("span[class]").attr("hidden","hidden");
    // });

    // console.log($("#select_country").val());
    // var lang = "English UK";
    // $("#select_country").append("<option> "+ lang + "</option>");

    // console.log($("#select_country").html());
    // console.log($("#select_country").text());
    // console.log($("#select_country").html("<option> value </option>"));

    // $("select[id=select_country]").attr("id","super_id");
    // console.log($("select:first").attr("id"));

    // $("#select_country").hover(function(){
    //     console.log("wokring");
    //     $("body").addClass("body-color");
    // },function(){
    //     $("body").removeClass("body-color");
    // });


    // $("select:first").mouseenter(function(){
    //     $("body").attr("style","background-color:blue");
    // }).mouseleave(function(){
    //     $("body").attr("style","background-color:white");

    // });


    // $("body").css("background-color","blue");
    // console.log($("body").css("background-color"));
    // $("body").css({"background-color":"blue","margin-top":"20px"});
    // var color_pro = {"background-color":"blue","margin-top":"20px" }
    // $("body").css(color_pro);

    // $("select:first").on("click",function(){
    //     console.log("done click");
    //     $(this).off("click");
    // });

    // $("form").on("mouseenter mouseleave","select:first",function(){
    //     console.log("done mouseenter|mouseleave");
    //     $(this).off("mouseenter");
    // });

    // $("form").delegate("#s_btn","click",evt_click);

    // $("button:first").click(function(){
    //     $("form").html($("form").html()+"<button type='button' id='s_btn'> new button </button>");
    // });

    // function evt_click(){
    //     console.log("working");
    // }

    // $("form").undelegate("#s_btn","click",evt_click);

    // $("button:first").one("click",function(){
    //     console.log("working")
    // });

    // 
    // var id=null;
    // $('button').each(function(){
    //     // console.log(this.id.length);
    //     // console.log($(this).attr("id").length);
    //     if(id==null){
    //         id = $(this).attr("id");
    //     }
    //     id += " "+$(this).attr("id");
        // console.log('working:'+$(this).text());
    // });
    // console.log(id);
    // var names = id.split(' ');
    // console.log(typeof([names]));
    // for(index=0;index<names.length;index++){
    //     switch (index) {
    //         case 0:
    //             console.log("number00");
    //             break;
            
    //         case 1:
    //             console.log("number01");
    //             break;
            
    //         case 2:
    //             console.log("number02");
    //             break;
            
    //         case 3:
    //             console.log("number03");
    //             break;
            
    //         default:
    //             console.log("number>04");
    //             break;
    //     }
    // }

    

    // var coll = ["number1","number2","number3","number4","number5"];
    // var index = 0;
    // $.each([0,1,2,3,4],function(){
    //     console.log(coll[index]);
    //     index++;
    // });

    // console.log(typeof(eval("12343")));
    // var ob = $('button:first');
    // console.log(eval(ob.text()));
    // console.log(typeof(eval(ob.text())));

    // ob.append("<p> done </p>");
    // ob.removeClass("validated")
    // console.log(ob.attr("class"));

    // ob.addClass("validated");
    // console.log(ob.attr("class"));



    // $("#s_text").append("<div> this data will come after the main text</div>");
    // $("#s_text").prepend("<div>this data will come before the main text</div>");
    // $("<div> this data will come also before the main tag </div>").prependTo($("#s_text"));
    // $("<div> this data will come also after the main tag </div>").appendTo($("#s_text"));


    // $("#s_text").before("<h1>header</h1><hr>");
    // $("<h2> header2 </h2> <hr> ").insertBefore("#s_text");
    
    // $("#s_text").after("<h1>footer01</h1><hr>");
    // $("<h2> footer02 </h2> <hr>").insertAfter("#s_text");

    // $(".s_text").wrap("<section> </section>");
    // $(".s_text").wrapAll("<section> </section>");
    // $(".s_text").wrapInner   ("<section> </section>");

    // $("#animation").click(function(){
    //     // $('p'). toggle(4000,"swing");
    //     // $('p'). toggle("fast","swing");
    //     $('p').hide("slow","swing");
    //     $('p').show(10000,"swing");
    // });


    // $('p').show(750);

    // $("#animation").click(function(){
    //     // $('p'). fadeToggle(4000,"swing");
    //     // $('p'). fadeToggle("fast","swing");
    //     $('p').fadeIn("slow","linear");
    //     $('p').fadeOut(10000,"swing",function(){alert("animation applied");});
    // });

    // $("#animation").click(function(){
    //     // $('p'). slideToggle(4000,"swing");
    //     // $('p'). slideToggle("fast","swing");
    //     $('p').slideUp("slow","linear");
    //     $('p').slideDown(5000,"swing",function(){alert("animation applied");});
    // });

    // $("p:first").replaceWith("<section style='color: blue;'> Updated value </section>");
    // $("<section> update value </section>").replaceAll("p:first");

    //remote the whole tag 
    // $("p").remove();
    //remove the contents
    // $("p").empty();


    // $text = $("p").clone();  //variable creation in jquery
    // $("button").click(function(){
    //     // $text.removeAttr(); //if there is some id 
    //     $(this).after($text.clone());
    // });

    // $("button").click(function(){
    //     $section = $("div").clone();
    //     $(this).after($section.clone());
        
    //     $("div").fadeToggle(2000,"swing");
    // });

    // $("button").click(function(){
        // $("button").prev().toggle(3000,'swing').promise().done(function(data){
        //     //data parameter is optional, it will be used in case of ajax
        //     alert("animation is complete");
        // }).fail(function(data){
        //     //data parameter is optional, it will be used in case of ajax
        //     console.log("it will be executed when the animation got fail due to some reason");
        // }).progress(function(data){
        //     //data parameter is optional, it will be used in case of ajax
        //     console.log("it will inform us information about the status of work");
        // });

        //instead of chaining function, we can put every call in a single function called then 
    //     $('button').prev().slideToggle(3000,'linear').promise().then(function(data){
    //         //success
    //         alert("success");
    //     },function(data){
    //         //failed
    //         alert("failed");
    //     },function(data){
    //         alert('progress');
    //     });


    // });

    worker.addEventListener('message',function(e){
        if(e.data == "READY"){
            $("p").append("<li> I'm Ready </li>");
        
        $("button").click(function(){
            worker.postMessage($("p").val());
        });
        $("p").focus();
    }
    else{
        $("p").append("<li>"+e.data +"</li>");
        $("p").focus();
    }
    });
}); 