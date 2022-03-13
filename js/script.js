$(document).ready(function(){
    $(".design-two").hide();
    $(".design-one").click(function(){
        $(".design-one").toggle();
        $(".design-two").toggle();
    })
    $(".design-one").mouseleave(function(){
        $(".design-two").hide()
        $(".design-one").show();
    })
    $(".design-four").hide();
    $(".design-three").click(function(){
        $(".design-three").toggle();
        $(".design-four").toggle();
    })
    $(".design-six").hide();
    $(".design-five").click(function(){
        $(".design-five").toggle();
        $(".design-six").toggle();
    })



 $(".work1").hover(function(){
     $(this).css("opacity","0,9");
     $("h2").css("color","blue")
     
 })
 $(".work2").hover(function(){
    $(this).css("border","solid 20px purple");
    $()
})
$(".work3").hover(function(){
    $(this).css("background-color","yellow");
})
$(".work4").hover(function(){
    $(this).css("background-color","yellow");
})
$(".work5").hover(function(){
    $(this).css("background-color","yellow");
})
$(".work6").hover(function(){
    $(this).css("background-color","yellow");
})
$(".work7").hover(function(){
    $(this).css("background-color","yellow");
})
$(".work8").hover(function(){
    $(this).css("background-color","yellow");
})

$("button#button").submit(function(){

})
})