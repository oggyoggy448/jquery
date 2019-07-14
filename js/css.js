$("document").ready(function(){
    
    //giving the color to value
    // $("p[align]").css("background-color","blue");

    //accessing the color using css property
    const color = $("p").css("background-color");
    // console.log(typeof(color));

    //giving the properties in form of 
    // var property = {color: "white", margin: "20px" , padding: "10px", "font-size":"1.5em", "text-transform":"uppercase"};
    // $("p[align]").css(property);
    // console.log(typeof(property));

    //adding a class
    // $("p").addClass("property");
    // remove a class
    // $("p").removeClass("property");

    //toggle the class
    $("p[align]").click(function(){
        $("p").toggleClass("property");
    });

});