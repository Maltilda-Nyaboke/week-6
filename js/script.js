$(document).ready(function(){
    $(".design-two").hide();
    $(".design-one").click(function(){
        $(".design-one").toggle();
        $(".design-two").toggle();
    })
})