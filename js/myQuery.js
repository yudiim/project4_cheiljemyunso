$(document).ready(function(){
    // 탑버튼
    $("#topBtn").click(function(){
        $('html,body').stop().animate({ scrollTop : 0});
    });

    // 토글 메뉴
    var toggle = 0;
    var count = 0;
    $("#hamburger").click(function(){
        if (toggle == 0) {
            $("#drawer-menu").animate({ "right" : "0" }, 500, "swing");
            toggle = 1;
            console.log(toggle);
        } else {
            $("#drawer-menu").animate({ "right" : "-100%" }, 500, "swing");
            toggle = 0;
            console.log(toggle);
        }
    });

    // 메뉴 닫기
    $(".close_btn").click(function(){
        $("#drawer-menu").animate({ "right" : "-100%" }, 500, "swing");
        toggle = 0;
        console.log(toggle);
    })

    // 슬라이드 업다운
    $("#gnb li.main_list").click(function(){
        $(this).siblings().children("ul.sub_menu").stop().slideUp(100);
        $(this).children("ul.sub_menu").stop().slideDown('fast');
    });
});