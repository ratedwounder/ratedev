$(document).ready(function(){
    $('.header__nav-mobile').click( function(){
        $('.header__menu-mobile').fadeToggle();
        $('.nav-mobile__icon-open').toggle();
        $('.nav-mobile__icon').toggle();
    });
});


$(document).ready(function() {
    setInterval(function(){
      $('.start__btn').animate({opacity:0.5},{duration:1000});
      $('.start__btn').animate({opacity:1},{duration:0}); 
    }, 1600);
});