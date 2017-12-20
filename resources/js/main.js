$(document).ready(function(){

  $('#main-text').hide().delay(400).fadeIn('slow');
  $('.ieee-logo').hide().delay(400).fadeIn('slow');
  $('#scroll-down-icon').hide().delay(200).fadeIn('slow');
  
  //Below code block is for smooth scrolling on clicking of internal links  
  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

  //Hover effect on the ieee-logo
  $('.ieee-logo').hover(
    function(){
      $(this).animate({width: '+=6.83px'},{duration: 100, queue: false}).animate({height: '+=2px'},{duration: 100, queue: false});
      
    }, function(){
      $(this).animate({width: '-=6.83px'},{duration: 100, queue: false}).animate({height: '-=2px'},{duration: 100, queue: false});
    }
  );

  //when height is greater than 40px then shrink class is added to nav bar
	//you can change color of navbar after scrolling in css
	$(window).scroll(function() {
  	if($(document).scrollTop() > 40) {
    	$('#nav-bar').addClass('shrink');
    }
    else {
    $('#nav-bar').removeClass('shrink');
    }
  });
    

});