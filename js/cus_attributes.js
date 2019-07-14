$("document").ready(function(){
    // console.log($("#container").attr('height'));
    // // console.log($("#container").attr('width'));
    // $("div p").each(function(){
    //     console.log($(this).attr("id"+" "));
    // });

    $("div p").attr("class","p2");
    console.log(typeof($("div p").attr("id")));


    $("#p2").removeAttr("class");

    // console.log("It will return undefined:" + $("#p2").attr("class"));
    $("#p2").attr({class: "p2",style: "background-color: blue"});
});

