$(document).ready(function(){
    $(".design-one").click(function(){
        $(".design-one").toggle();
        $(".design-two").toggle();
    })
    $(".design-two").click(function(){
        $(".design-one").toggle();
        $(".design-two").toggle();
    })
    
    $(".design-four").hide();
    $(".design-three").click(function(){
        $(".design-three").toggle();
        $(".design-four").toggle();
    })
    $(".design-four").click(function(){
        $(".design-three").toggle();
        $(".design-four").toggle();
    })
    $(".design-six").hide();
    $(".design-five").click(function(){
        $(".design-five").toggle();
        $(".design-six").toggle();
    })
    $(".design-six").hide();
    $(".design-six").click(function(){
        $(".design-five").toggle();
        $(".design-six").toggle();
    })

$(".work1").hover(function(){
    $(".work1-text").show();
    $(".work1-text h3").show();
})
$(".work1").mouseleave(function(){
    $(".work1-text").hide();
    $(".work1-text h3").hide();
})

$(".work2").hover(function(){
    $(".work2-text").show();
    $(".work2-text h3").show();
})
$(".work2").mouseleave(function(){
    $(".work2-text").hide();
    $(".work2-text h3").hide();
})
$(".work3").hover(function(){
    $(".work3-text").show();
    $(".work3-text h3").show();
})
$(".work3").mouseleave(function(){
    $(".work3-text").hide();
    $(".work3-text h3").hide();
})
$(".work4").hover(function(){
    $(".work4-text").show();
    $(".work4-text h3").show();
})
$(".work4").mouseleave(function(){
    $(".work4-text").hide();
    $(".work4-text h3").hide();
})
$(".work5").hover(function(){
    $(".work5-text").show();
    $(".work5-text h3").show();
})
$(".work5").mouseleave(function(){
    $(".work5-text").hide();
    $(".work5-text h3").hide();
})
$(".work6").hover(function(){
    $(".work6-text").show();
    $(".work6-text h3").show();
})
$(".work6").mouseleave(function(){
    $(".work6-text").hide();
    $(".work6-text h3").hide();
})
$(".work7").hover(function(){
    $(".work7-text").show();
    $(".work7-text h3").show();
})
$(".work7").mouseleave(function(){
    $(".work7-text").hide();
    $(".work7-text h3").hide();
})
$(".work8").hover(function(){
    $(".work8-text").show();
    $(".work8-text h3").show();
})
$(".work8").mouseleave(function(){
    $(".work8-text").hide();
    $(".work8-text h3").hide();
})

 
$("button#button").click(function(){
   alert("THANK YOU FOR CONTACTING US WE'LL GET BACK TO YOU SOON")
})
})