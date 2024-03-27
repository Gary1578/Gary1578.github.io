$(document).ready(function(){
    $("#menu_li_left").mouseover(function(){
        $("#menu_options_left").slideDown("slow");
        //$("#menu_options_left").css('display', 'block');
    }); 
    $("#menu_li_left").mouseout(function(){
        $("#menu_options_left").slideUp("slow");
    });
    $("#menu_li_right").mouseover(function(){
        $("#menu_options_right").slideDown("slow");
    });
    $("#menu_li_right").mouseout(function(){
        $("#menu_options_right").slideUp("slow");
    });
});