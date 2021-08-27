    //상단메뉴
$(function(){
    $(".gnb>li").mouseover(function(){
        $(this).children(".subMenu").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function(){
        $(this).children(".subMenu").stop().slideUp();
    });

    //이미지 fadein/out
    setInterval(function(){
        $(".slide>li:first").fadeOut(1000).next().next().fadeIn(1000);
        $(".slide>li:first").insertAfter(".slide>li:last");
    },3000);

    // popup
    $(".notice>li:first").click(function(){
        $('.popUp').show();
    });
    $(".close").click(function(){
        $('.popUp').hide();
    });


    //탭메뉴
    $(".tabMenu a").click(function(){
        $(this).addClass("on").siblings("a").removeClass("on");
        let idx = $(this).index();
        $(".tabContent>ul").eq(idx).show().siblings("ul").hide();
    });


    });
