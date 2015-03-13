$(document).ready(function() {

  var navbar = $('.top-bar');

  $('nav ul li a').click(function(e){
    e.preventDefault();
    var id = $(this).attr("href");
    var top = $(id).offset().top - 50;
    $('html, body').animate({scrollTop: top}, 500);
  });

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
    $('#characters .carousel').slick('slickPrev');
  });

  $('#carousel-right').click(function() {
    $('#characters .carousel').slick('slickNext');
  });

  $('#modal .content a').click(function() {
    $('#modal').css({'display': 'none'});
  });

  $('.seasons').click(function(e) {

    var id = e.target.parentElement.id
    switch(e.target.parentElement.id) {
      case 'season-one':
        $('#modal .content p').text('Season One');
        $('#modal .content .image').css({"background-image": 'url(../data/mp1_assets/seasonone.jpg)'});
        break;
      case 'season-two':
        $('#modal .content p').text('Season Two');
        $('#modal .content .image').css({"background-image": 'url(../data/mp1_assets/seasontwo.jpg)'});
        break;
      case 'season-three':
        $('#modal .content p').text('Season Three');
        $('#modal .content .image').css({"background-image": 'url(../data/mp1_assets/seasonthree.jpg)'});
        break;

      case 'season-four':
        $('#modal .content p').text('Season Four');
        $('#modal .content .image').css({"background-image": 'url(../data/mp1_assets/seasonfour.jpg)'});
        break;

      case 'season-five':
        $('#modal .content p').text('Season Five');
        $('#modal .content .image').css({"background-image": 'url(../data/mp1_assets/seasonfive.jpg)'});
        break;

      case 'season-six':
        $('#modal .content p').text('Season Six');
        $('#modal .content .image').css({"background-image": 'url(../data/mp1_assets/seasonsix.jpg)'});
        break;
    }

    $('#modal').css({'display': 'block'});
  });

});
