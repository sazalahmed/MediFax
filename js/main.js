$(function () {

    "use strict";

    //======menu search js======
    $(".menu_search_icon").on("click", function () {
        $(".menu_search").addClass("show_search");
    });

    $(".close_search").on("click", function () {
        $(".menu_search").removeClass("show_search");
    });


    //======menu fix js======
    if ($('.tf__main_menu').offset() != undefined) {
        var navoff = $('.tf__main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.tf__main_menu').addClass('menu_fix');
            } else {
                $('.tf__main_menu').removeClass('menu_fix');
            }
        });
    }


    //=======SELECT2====== 
    $(document).ready(function () {
        $('.select_2').select2();
    });


    //=======COUNTER JS=======
    $('.counter').countUp();


    //*=======SCROLL BUTTON=======
    $('.tf__scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 500) {
            $('.tf__scroll_btn').fadeIn();
        } else {
            $('.tf__scroll_btn').fadeOut();
        }
    });


    //======= VENOBOX.JS.=========
    $('.venobox').venobox();


    //*========STICKY SIDEBAR=======
    $("#sticky_sidebar").stickit({
        top: 10,
    })



    //=======OFFER ITEM SLIDER======
    // $('.related_product_slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     dots: false,
    //     arrows: true,
    //     nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    //     prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    //     responsive: [
    //         {
    //             breakpoint: 1400,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 arrows: false,
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });


    //======wow js=======
    new WOW().init();


    //=======SMALL DEVICE MENU ICON======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });

});
