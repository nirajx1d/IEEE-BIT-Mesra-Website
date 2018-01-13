function mytoast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$(document).ready(function(){

  $('#main-text').hide().delay(400).fadeIn('slow');
  $('.ieee-logo').hide().delay(400).fadeIn('slow');
  $('#scroll-down-icon').hide().delay(200).fadeIn('slow');
  $('#container-2').load('../../about-us.html').fadeIn(500);
  
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
    },
    function(){
      $(this).animate({width: '-=6.83px'},{duration: 100, queue: false}).animate({height: '-=2px'},{duration: 100, queue: false});
    }
  );

  //when height is greater than 40px then shrink class is added to nav bar

  //you can change color of navbar after scrolling in css
  $(window).scroll(function() {
    if($(document).scrollTop() > 40) {
      $('#nav-bar').addClass('shrink'),document.getElementById("btn").style.display = "block";
    }
    else {
    $('#nav-bar').removeClass('shrink'),document.getElementById("btn").style.display = "none";
    }
  });

  var curr_active="#home"; 
  $("#home").click(function(){
    $("#container-2").hide().load('../../about-us.html').fadeIn(1200);
    if(curr_active!="#home"){
      $(curr_active).removeClass("active");
      $("#home").addClass("active");
      curr_active="#home";
    }
  })
  $("#members").click(function(){
    $('#container-2').hide().load('../../members.html').fadeIn(600);
    if(curr_active!="#members"){
      $(curr_active).removeClass("active");
      $("#members").addClass("active");
      curr_active="#members";

    }
  });
  $("#about-us").click(function(){
    $('#container-2').hide().load('../../about-us.html').fadeIn(600);
    if(curr_active!="#about-us"){
      $(curr_active).removeClass("active");
      $("#about-us").addClass("active");
      curr_active="#about-us";
    }
  });
  $("#event").click(function(){
    $('#container-2').hide().load('../../events.html').fadeIn(600);
    if(curr_active!="#event"){
      $(curr_active).removeClass("active");
      $("#event").addClass("active");
      curr_active="#event";
    }
  });
  
});

