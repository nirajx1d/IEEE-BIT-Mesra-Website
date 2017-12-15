$(document).ready(function(){

  /*$('#slider').hover(
    function(){
    $('#slider').animate({top:'+=10px'},500);
  },
  function(){
    $('#slider').animate({top:'-=10px'},500);
  }
  );*/

  //Below code block is for smooth scrolling on clicking of internal links 
  $('#slider').click(function(e){
    e.preventDefault();  //To prevent the default action on clicking the internal links
    var linkHref = $(this).attr('href');  
    $('html,body').animate({
      scrollTop: $(linkHref).offset().top
    },700);       //700 milliseconds...
  });

  //Hover effect on the ieee logo(main page)
  $('.ieee-logo').hover(
    function(){
      $(this).addClass('ieee-logo-hover');
    },
    function(){
      $(this).removeClass('ieee-logo-hover');
    }
    );


});