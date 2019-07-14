$("document").ready(function(){
    $("#add_data").click(add_data);
    $("#remove_data").click(remove_data);
    $("#show_data").click(show_data);   

    // document.getElementById("show").onClick(show_button);
    // $("#show").on("change",show_button(evt.target.checked));
    // document.getElementById("#show").addEventListener("change",
    //         function(evt){show_button(evt.target.checked);});
    

    $("#show").on('change',function(evt){
        show_button(evt.target.checked);
    });
});

function add_data(){
    $("div:first").data({"student_number":5421,
        "name":"Nouman"});
    
}

function remove_data(){
    $("div:first").removeData();
}

function show_data(){
    // $("div:first").text(JSON.stringify($("div:first").data(),null," "));
    
    var data = $("div:first").data();

    $("div:first").text(data);
    console.log(data);
}

function show_button(con){
    // console.log("checkbox is working");
    // if(this.checked)
    // {
    //     // console.log("if clause is working");
    //     $("#add_data").css("display","none");
    //     $("#remove_data").css("display","none");
    //     $("#show_data").css("display","none");
    // }
    // else{
    //     $("#add_data").css("display","inline");
    //     $("#remove_data").css("display","inline");
    //     $("#show_data").css("display","inline");
    // }
    console.log(con ?"everything is fine":"not fine");

}

