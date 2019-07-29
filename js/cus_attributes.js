$("document").ready(function(){
    //changing the attr values
    
    // console.log($("#container").attr('height'));
    // console.log($("#container").attr('width'));

    
    // $("div p").each(function(){
    //     console.log($(this).attr("id"+" "));
    // });

    // setting the attr value to p2
    $("div p").attr("class","p2");

    // attr is returning the value of id attr
    console.log(typeof($("div p").attr("id")));

    //it will remove the attr with its value
    $("#p2").removeAttr("class");

    // console.log("It will return undefined:" + $("#p2").attr("class"));

    //it will set more than one attr at the same time
    $("#p2").attr({class: "p2",style: "background-color: blue"});
});

