$(function() {
  $('.pop-up').hide();
  $('.pop-up').delay(5000).fadeIn(1000);

      $('.close-button').click(function (e) {

      $('.pop-up').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');
      e.stopPropagation();
    });
 });
