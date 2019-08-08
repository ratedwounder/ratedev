$(document).ready(function () {
    $("#list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#start").on("click", "button", function (event) {
        event.preventDefault();
        var id = $(this).attr('action'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

$(function () {
    $('.preloader').find('i').fadeOut().end().delay(1000).fadeOut('slow');
});

$(".parts").click(function () {
    $(".service__wrapper").toggle();
    $(".repair__wrapper").hide();
});

$(".repair").click(function () {
    $(".repair__wrapper").toggle();
    $(".service__wrapper").hide();
});