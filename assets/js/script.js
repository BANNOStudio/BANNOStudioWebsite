(function ($) {
  "use strict";

  // Sticky Menu
  $(window).scroll(function () {
    if ($(".navigation").offset().top > 100) {
      $(".navigation").addClass("nav-bg");
    } else {
      $(".navigation").removeClass("nav-bg");
    }
  });

  // Background-images
  $("[data-background]").each(function () {
    $(this).css({
      "background-image": "url(" + $(this).data("background") + ")",
    });
  });

  // background color
  $("[data-color]").each(function () {
    $(this).css({
      "background-color": $(this).data("color"),
    });
  });

  // progress bar
  $("[data-progress]").each(function () {
    $(this).css({
      bottom: $(this).data("progress"),
    });
  });

  /* ########################################### hero parallax ############################################## */
  window.onload = function () {
    var parallaxBox = document.getElementById("parallax");
    var heroLogo = document.querySelector(".hero-logo img"); // Ensure this selector matches your HTML

    parallaxBox.onmousemove = function (event) {
      event = event || window.event;
      var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;
        
      // Adjust the speed value here
      mouseParallax(heroLogo, x, y, 10); // Increase or decrease the number to change the effect
    };
  };

  function mouseParallax(element, mouseX, mouseY, speed) {
    var parentWidth = element.parentElement.offsetWidth;
    var parentHeight = element.parentElement.offsetHeight;
    var x = (mouseX - parentWidth / 2) / parentWidth * speed;
    var y = (mouseY - parentHeight / 2) / parentHeight * speed;
    element.style.transform = `translate(${x}px, ${y}px)`;
  }
  /* ########################################### /hero parallax ############################################## */

  // testimonial-slider
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });

  // clients logo slider
  $(".client-logo-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Shuffle js filter and masonry
  var Shuffle = window.Shuffle;
  var jQuery = window.jQuery;

  var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
    itemSelector: ".shuffle-item",
    buffer: 1,
  });

  jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
    var input = evt.currentTarget;
    if (input.checked) {
      myShuffle.filter(input.value);
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const blurbButton = document.querySelector('a[href="#portfolio-section"]');
    if (blurbButton) {
        blurbButton.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#portfolio-section").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
  });
})(jQuery);
