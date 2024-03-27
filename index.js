$(document).ready(function(){
    $("#menu li").bind("click", function(){
        num = $("#menu li").index(this)
        switch(num){
            case 0:
                $("#menu_option_list1").slideUp("slow");
                $("#menu_option_list2").slideUp("slow");
                break;
            case 1:
                $("#menu_option_list0").slideUp("slow");
                $("#menu_option_list2").slideUp("slow");
                break;
            case 2:
                $("#menu_option_list1").slideUp("slow");
                $("#menu_option_list0").slideUp("slow");
        }
        $("#menu_option_list"+num+"").slideDown("slow");

    });  
  /*  $("#menu_li_left").bind("click",function(){
        if($("#menu_options_left").is(":visible")){
            $("#menu_options_left").slideUp("slow");
        }
        else{
            if($("#menu_options_right").is(":visible")){
                $("#menu_options_right").slideUp("slow");
            }
            $("#menu_options_left").slideDown("slow");
        }
        //$("#menu_options_left").css('display', 'block');
    }); 
    $("#menu_li_right").bind("click", function(){
        if($("#menu_options_right").is(":visible")){
            $("#menu_options_right").slideUp("slow");
        }
        else{
            if($("#menu_options_left").is(":visible")){
                $("#menu_options_left").slideUp("slow");
            }
            $("#menu_options_right").slideDown("slow");
        }        
    });*/
        
});