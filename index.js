$(document).ready(function(){
    var menu_click = 0;
    $("#mobile_menu").bind("click", function(){
        if(menu_click == 0){
            $("#mobile_menu").css("background-color", "rgba(190,193,194,1)");
            menu_click++;
        }
        else{
            $("#mobile_menu").css("background", "none");
            menu_click = 0;
        }
    });
    $("#menu li").bind("click", function(){
        num = $("#menu li").index(this);
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
                break;
        }
        if($("#menu_option_list"+num+"").is(":visible")){
            $("#menu_option_list"+num+"").slideUp("slow");
        }   
        else{
            $("#menu_option_list"+num+"").slideDown("slow");
        }
    });       
});