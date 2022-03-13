$(document).ready(function(){
    $(".design-one").click(function(){
        $(".design-one").toggle();
        $(".design-two").toggle();
    })
    $(".design-two").click(function(){
        $(".design-one").toggle();
        $(".design-two").toggle();
    })
    // $(".design-one").mouseleave(function(){
    //     $(".design-two").hide()
    //     $(".design-one").show();
    // })
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



 
$("button#button").submit(function(){

})
})