$( document ).ready(function() {
    console.log( "ready!" );
});

var lowerNav = $('.nav.navbar-nav');

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    lowerNav.css('font-size', 20);
    console.log( "rdy!" );
  } else {
    lowerNav.css('font-size', 30);
  }
});
