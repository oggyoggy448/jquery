$("document").ready(function(){
    
    //giving the color to value
    // $("p[align]").css("background-color","blue");

    //accessing the color using css property
    const color = $("p").css("background-color");
    // console.log(typeof(color));

    //giving the properties in form of object
    // var property = {color: "white", margin: "20px" , padding: "10px", "font-size":"1.5em", "text-transform":"uppercase"};
    
    // $("p[align]").css(property);
    // console.log(typeof(property));

    //addClass adds the new class attr value in class attr
    // $("p").addClass("property");

    // remove a class attr value from the class attr
    // $("p").removeClass("property");

    //remove the class attr value if it is there otherwise add it
    $("p[align]").click(function(){
        //it will remove the css properties if they are showing otherwise it will show them if they hidden
        $("p").toggleClass("property");
    });

});