function mytoast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$(document).ready(function(){
  $('#main-text').hide().delay(400).fadeIn('slow');
  $('.ieee-logo').hide().delay(400).fadeIn('slow');
  $('#scroll-down-icon').hide().delay(800).fadeIn('slow');
  $('#container-2').load('../../about-us.html').fadeIn('slow');
  
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
  $(window).scroll(function() {
    if($(document).scrollTop() > 40) {
      $('#nav-bar').addClass('shrink'),document.getElementById("btn").style.display = "block";
      $('#nav-bar-2').addClass('shrink'),document.getElementById("btn").style.display = "block";
      
    }
    else {
    $('#nav-bar').removeClass('shrink'),document.getElementById("btn").style.display = "none";
    $('#nav-bar-2').removeClass('shrink'),document.getElementById("btn").style.display = "none";
    
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

  $('#pg').click(function(){
    $('#container-2').hide().load('../../photo-gallery.html').fadeIn(600);
    $('#container-2').css("height","auto");
    if(curr_active!="#pg"){
      $(curr_active).removeClass("active");
      $("#pg").addClass("active");
      curr_active="#pg";
    }
  });
  $('#contact-us').click(function(){
    $('#container-2').hide().load('../../contact-us.html').fadeIn(600);
    if(curr_active!="#contact-us"){
      $(curr_active).removeClass("active");
      $("#contact-us").addClass("active");
      curr_active="#contact-us";
    }
  });
  
  var curr_active2=curr_active+"2"; 
  $("#home2").click(function(){
    $("#container-2").hide().load('../../about-us.html').fadeIn(1200);
    if(curr_active2!="#home2"){
      $(curr_active2).removeClass("active");
      $("#home2").addClass("active");
      curr_active2="#home2";
    }
  })
  $("#members2").click(function(){
    $('#container-2').hide().load('../../members.html').fadeIn(600);
    if(curr_active2!="#members2"){
      $(curr_active2).removeClass("active");
      $("#members2").addClass("active");
      curr_active2="#members2";
    }
  });
  $("#about-us2").click(function(){
    $('#container-2').hide().load('../../about-us.html').fadeIn(600);
    if(curr_active2!="#about-us2"){
      $(curr_active2).removeClass("active");
      $("#about-us2").addClass("active");
      curr_active2="#about-us2";
    }
  });
  $("#event2").click(function(){
    $('#container-2').hide().load('../../events.html').fadeIn(600);
    if(curr_active2!="#event2"){
      $(curr_active2).removeClass("active");
      $("#event2").addClass("active");
      curr_active2="#event2";
    }
  });

  $('#pg2').click(function(){
    $('#container-2').hide().load('../../photo-gallery.html').fadeIn(600);
    $('#container-2').css("height","auto");
    if(curr_active2!="#pg2"){
      $(curr_active2).removeClass("active");
      $("#pg2").addClass("active");
      curr_active2="#pg2";
    }
  });
  $('#contact-us2').click(function(){
    $('#container-2').hide().load('../../contact-us.html').fadeIn(600);
    if(curr_active2!="#contact-us2"){
      $(curr_active2).removeClass("active");
      $("#contact-us2").addClass("active");
      curr_active2="#contact-us2";
    }
  });
  

  
});

