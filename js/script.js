$(document).ready(function(){
    //배너 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:{
            delay:2300,
            disableOnInteraction: false
        },
        navigation: {
            nextE1: ".swiper-button-next",
            prevE1: ".swiper-button-prev",
        }

    });

    $('.hamburger').click(function(){
        $('.sub-menu').toggleClass('active');
        $('.header').toggleClass('active');
        $('.icon svg').toggleClass('active');
        $('.hamburger span').toggleClass('active');
    });

    //aos 구동
    AOS.init();

    //sec-2 남자 글씨+이미지 위치 바꾸기
    const ww = $(window).width();
    if(ww < 660){
        $('.sec-2 .boy .txt-box').insertAfter('.sec-2 .boy .img-box');

    }else{
        $('.sec-2 .boy .img-box').insertAfter('.sec-2 .boy .txt-box');
    }
});