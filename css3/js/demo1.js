/**
 * Created by 123 on 2015/10/21.
 */
/*$("body").ready(function(){*/
    $("#banner").append('<div class="bannerad"><img src="images/weixin-640x100.jpg"/></div>').show();
    $(".bannerad").click(function(){
        $(".bannerad").append('<div class="clapperboard"><img class="clapperboard_top" src="images/action_top.png"/><img class="clapperboard_bottom" src="images/action_bt.png"/></div><div class="cover"><img class="cover1" src="images/cover1.jpg"/><img class="cover2" src="images/cover2.jpg" /><div class="flash"></div></div>');
    });

/*
});*/
