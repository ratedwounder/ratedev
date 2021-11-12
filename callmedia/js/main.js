$(function () {
    var menu = document.querySelector(".header"),
        burger = $('.header__burger');


    burger.click(function (event) {
        event.preventDefault();
        toggleMenuLock();
    });

    $('.scrollto').click(function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        scrollToBlock(href.length > 2 ? href : '.call__box');
    });

    if($(window).width() < 767){
        $(".salary__slider").slick({
            slidesToShow:                   3,
            slidesToScroll:                 3,
            arrows:                     false,
            dots:                       false,
            infinite:                   true,
            speed:                      1000,
            centerMode:                 true,
            focusOnSelect:              true,
            responsive: [
                {
                    breakpoint:         767,
                    settings: {
                        slidesToShow:     1,
                        slidesToScroll:   1,
                    }
                }
            ]
        });
    }
    //     else {
    //     window.addEventListener('scroll', function (event) {
    //         var mainHeight = document.querySelector(".main").offsetHeight - 140;
    //         160 < this.pageYOffset ? menu.classList.add('fixed-zero') : menu.classList.remove('fixed-zero');
    //         this.pageYOffset > mainHeight ? menu.classList.add('fixed-sticky') : menu.classList.remove('fixed-sticky');
    //     })
    // }

    


    $('.arr-prev').on('click', function () {
        $(".reviews__slides").slick('slickPrev');
    });

    $('.arr-next').on('click', function () {
        $(".reviews__slides").slick('slickNext');
    });

    //func
    function toggleMenuLock() {
        burger.toggleClass('active');
        $('.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    }

    function scrollToBlock(toBlock) {
        var heightMenu = $(window).width() > 767 ? 80 : 68;
        $('html, body').animate( { scrollTop: $(toBlock).offset().top - heightMenu } , 1500 );
        if(burger.hasClass('active'))
            toggleMenuLock()
    }
});