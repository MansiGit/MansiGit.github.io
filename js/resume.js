(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Show the top button when scrolling down
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) { // Adjust this value to control when the button appears
    $('.container-top').addClass('show-button');
  } else {
    $('.container-top').removeClass('show-button');
  }
});

// Scroll to the top when the button is clicked
$('.top-button').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 800); // You can adjust the animation speed (800ms)
  return false;
});

})(jQuery); // End of use strict


function websiteVisits(response){
  document.querySelector("#visits").textContent = response.value;
}

var button = document.getElementById("download-resume");
button.addEventListener("click", function() {
  gtag("event", "click", {
    "event_category": "Resume Download",
    "event_label": "Downloaded",
    "value": 1
  });
});


// Show the top button when scrolling down
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) { // Adjust this value to control when the button appears
    $('.container-top').addClass('show-button');
  } else {
    $('.container-top').removeClass('show-button');
  }
});

// Scroll to the top when the button is clicked
$('.top-button').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 800); // You can adjust the animation speed (800ms)
  return false;
});
