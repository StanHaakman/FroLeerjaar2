$(document).ready( function() {
  // test
  // $('main').hide(3000).delay(1000).show(3000);
  $('.held img').mouseenter( function() {
    $(this).fadeTo(2000, 0);
  }).mouseleave( function() {
    $(this).fadeTo(1000, 1);
  }).click( function() {
    $(this).next().toggle(2000);
  });

$('footer').click(function () {
  $(this).animate( {
      top: '-=20px',
      opacity: '-=.2'
  }, 900)
}).dblclick (function () {
  $(this).animate( {
      top: '+=30px',
      opactivy: '1'
  }, 900)
});

});

//
