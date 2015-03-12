$(document).ready(function() {

  var navbar = $('.top-bar');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 200) {
      navbar.addClass('nav-small')
    }
    else {
      navbar.removeClass('nav-small');
    }

    $('nav ul li a').css({'border-bottom': 'none'});
    var offsetCharacters = $('#characters').offset().top - 51;
    var offsetSeasons = $('#seasons').offset().top - 51;
    var offsetSocial = $('#social').offset().top - 51;
    var activeTab = {"border-bottom": '2px solid white'};
    if(scroll < offsetCharacters && scroll > offsetSeasons) {
      $('#a-seasons').css(activeTab);
    }
    if(scroll < offsetSocial && scroll > offsetCharacters) {
      $('#a-characters').css(activeTab);
    }
    if(scroll >= offsetSocial) {
      $('#a-social').css(activeTab);
    }
  });

  $('#characters .carousel').slick({
    dots: false,
    arrows: false,
    speed: 500
  });

  $('#carousel-left').click(function() {
    console.log('whut');
    $('#characters .carousel').slick('slickPrev');
  });

  $('#carousel-right').click(function() {
    $('#characters .carousel').slick('slickNext');
  });

});
