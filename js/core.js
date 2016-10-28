$( document ).ready(function() {
    console.log( "ready!" );
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('li').addClass('large-scroll');
    console.log( "rdy!" );
  } else {
    $('li').removeClass('large-scroll');
  }
});
