$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 40) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Footer margin set for stick to bottom
  // function footerAdj() {
  //   var footerH = $(".footer").innerHeight();
  //   $(".footer").css({ "margin-top": -footerH });
  //   $(".main-content").css({ "padding-bottom": footerH });
  // }
  // footerAdj();
  // $(window).resize(function () {
  //   footerAdj();
  // });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------
  //Datepicker
  $(".datepicker").each(function () {
    var $this = $(this);
    var $container = $this.closest(".date");
    $this.datepicker({
      autoclose: true,
      // container: $container,
    });
  });


  window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");
    console.log("Happy Scrolling 🙂");

    function smoothScroll(target, duration) {
      var targetSection = document.querySelector(target);
      var offset = 50;
      var targetPosition = targetSection.offsetTop - offset;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }

    var myLink = document.querySelectorAll('.navbar-nav a[href^="#"]');
    myLink.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        var duration = 500; // Set the duration of the scroll animation (in milliseconds)
        smoothScroll(target, duration);
      });
    });
  });


  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
