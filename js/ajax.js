$("document").ready(server_req);

function server_req(){
    $("#server_req").click(data);
    $("#load_req").on("click",load);
    document.querySelector("#get_req_xml").click = getxmldata();
    $("#get_req_json").click(json_data);
}

function getxmldata(){

    $(document).ajaxStart(function(){
        console.log("ajax is starting");
    });

    $(document).ajaxStop(function(){
        console.log("ajax is ending");
    });

    $(document).ajaxSend(function(){
        console.log("ajx has sent request");
    });

    $(document).ajaxError(function(){
        console.log("Hmm error has occured");
    });

    $(document).ajaxSuccess(function(){
        console.log("request has got success");
    });

    $(document).ajaxComplete(function(){
        console.log("everything is finished");
    });



    $.get("xmldata.xml",function(result){
        // var result = result.getElementsByTagName("name")[0];
        // result = result.firstChild.nodeValue;
        // console.log("XML data is:"+result);


        var page_title = result.getElementsByTagName("title")[0].firstChild.nodeValue;
        console.log("XML page title is:"+page_title);
    });  
}
function load (){
    // console.log("event is working");
    $("#data_show").load("index.html .extra_text");
}
function data(){
    var data = {
        url: "samplefile.txt",
        type:"GET",
        dataType: "text",
        error: errormsg,
        complete: function(){
            console.log("req is completed");
        },
        success: successmsg
    };

    $.ajax(data);
    
}

function errormsg(){
    console.log("there is an error in the request");
}
function successmsg(result){
    // console.log("File data is: "+result);
    $("#data_show").html(result);
}

function get_req(){
    $.get("samplefile.txt",successmsg);
}

function json_data(){
    var flicker_api = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallbackc=?";
    $.getJSON(flicker_api,{
        tags: "space needle",
        tagmode: "any",
        type: "json"
    },sucess_json_msg);
}

function sucess_json_msg(result){
    $.each(result.items,function(i,item){
        $("<img").attr("src",item.media.m)
        .appendTo("#data_show");
        if(i==4){
            return false;
        }
    });
}