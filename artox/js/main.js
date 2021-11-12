$('.slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    adaptiveHeight: true
});



$('#slide1prev').on('click',function(){
  $(".slider-wrapper").slick('slickPrev');
});

$('#slide1next').on('click',function(){
  $(".slider-wrapper").slick('slickNext');
});

$('.sld1').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 0)
});


$('.sld2').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 1)
});

$('.sld3').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 2)
});

$('.sld4').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 3)
});

$('.sld5').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 4)
});

$('.sld6').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 5)
});

$('.sld7').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 6)
});

$('.sld8').on('click',function(){
  $(".slider-wrapper").slick('slickGoTo', 7)
});

$('.slider-wrapper2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  adaptiveHeight: true
});

$('#slide2prev').on('click',function(){
  $(".slider-wrapper2").slick('slickPrev');
});

$('#slide2next').on('click',function(){
  $(".slider-wrapper2").slick('slickNext');
});

$('.toslide1').on('click',function(){
  $(".slider-wrapper2").slick('slickGoTo', 0)
});

$('.toslide2').on('click',function(){
  $(".slider-wrapper2").slick('slickGoTo', 1)
});

$('.toslide3').on('click',function(){
  $(".slider-wrapper2").slick('slickGoTo', 2)
});

$('.toform').on('click', function (e) {
  e.preventDefault();
  
  $('html, body').animate({
      scrollTop: $('#here').offset().top
  }, 1000, 'linear');
});

$('.mob-btn, .sc-btn6, .scf3, .scf4').on('click', function (e) {
  e.preventDefault();
  
  $('html, body').animate({
      scrollTop: $('#here').offset().top
  }, 1000, 'linear');
});


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  console.log(scroll)
  if (scroll >  500) {
      $('.mob_fixed').css('display', 'flex');
      counter = 1;

  } else {
    $('.mob_fixed').hide('linear');
  }

});

$('.scf1').on('click', function (e) {
  e.preventDefault();
  
  $('html, body').animate({
      scrollTop: $('.header').offset().top
  }, 1000, 'linear');
});

$('.scf2').on('click', function (e) {
  e.preventDefault();
  
  $('html, body').animate({
      scrollTop: $('.sec2').offset().top
  }, 1000, 'linear');
});

  


 