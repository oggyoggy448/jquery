// $("div p").css("background-color","yellow");

// $("div > p").css("background-color","red");
// $("div + p").css("background-color","blue");
$("div ~ p").css("background-color","green");

$("p[id]").css("border","4px solid blue");
$("p[id=para01]").css("border","4px solid blue");

//must contain the first letter of pa in id attribute
$("p[id^=loc]").css("border","4px solid blue");

//any tag with attrb value en
$("p[id*=eng-").css("background-color","blue");

$("#id");
$(".classname");
$("tagname");
$("*");


$("p:contains('41')").css("background-color","green");
$("p:contains('41')").css("color","white");

$("article:parent").css("background-color","cyan");

$("section:has(p[id])").css("border","blue");

//select first paragraph tag inside section tag
$("section p:first-child");

$("section p:last-of-type");

$("section p:nth-child(2)");

//select all tags that comes after the 2nd tag and it's multipliers
$("section p:nth-child(2n)").css("background-color","yellow"); 

//select all children elements of section tag.
$("section").children().css("background-color","cyan");

//select prev and next element
$("#bbbbbbbbbb1").prev().css('margin',"20px");
$("#bbbbbbbbbb1").next().css('margin',"20px");

//Apply css on all the parents
// $("#bbbbbbbbbb1").parents().css('border',"2px solid green");

//apply css on all parents excluding body tag and and also stop there
// $("#bbbbbbbbbb1").parentsUntil("body").css('border',"2px solid green");

//find a perticular elements inside the main div tag
$("section").find("#bbbbbbbbbb3").css("border","2px dotted black");


var left_margin =0;
var border = 3;

$("div p").each(function(index,element){
    $(element).css('margin-left',"20px")
        .css("margin-top","10px")
        .css("border",border+"px solid black")
        .css("left-margin",left_margin);    
        left_margin+=2;
        border++;
        console.log(index);
        if(index ==0){
            console.log(index);
        }
        else if(index ==1){
            console.log(index);
        }
});


$("#footer p:nth(0)").css("background-color","lightblue");
$("#footer p:nth(1)").css("background-color","yellow");
$("#footer p:nth(2)").css("background-color","green");
$("#footer p:nth(3)").css("background-color","blue");
$("#footer p:nth(4)").css("background-color","lightgreen");

