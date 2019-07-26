$(document).ready(function() {
    particlesJS.load('particles-js', 'particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
});

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