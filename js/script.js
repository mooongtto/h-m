$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.sub-menu').toggleClass('active');
        $('.hamburger span').toggleClass('active');
        $('.icon svg').toggleClass('active');
    });

    // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:{
            delay:1500,
            disableOnInteraction: false
        },
        navigation: {
            nextE1: ".swiper-button-next",
            prevE1: ".swiper-button-prev",
        }

      });
});