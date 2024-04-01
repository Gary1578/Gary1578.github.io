$(document).ready(function(){
    $("#mobile_menu").bind("click", function(){
        $("#mobile_menu").css("background-color", "black");
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