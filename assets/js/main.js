/************* Main Js File ************************
    Template Name: ziptop
    Author: RDTHEME
    Version: 1.0
    Copyright 2018
    *************************************************************/

/*------------------------------------------------------------------------------------
    
main.js
=============

01 - owl corosol 
02 - WATER RIPPLES EFFECT
03 - Portfolio Image
04 - PRELOADER

-------------------------------------------------------------------------------------*/

(function($) {
  "use strict";

  jQuery(document).ready(function($) {
    /* 
		=================================================================
		01 - owl corosol  Clints
		=================================================================	
        */

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 100,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 2,
          nav: false,
          loop: true
        }
      }
    });

    //owl corosol Clints end

    /* 
		=================================================================
		02 - WATER RIPPLES EFFECT
		=================================================================	
        */

    $("#home,.ziptop-hire-area,.end").ripples({
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02
    });

    /* 
		=================================================================
		03 - Portfolio Image
		=================================================================	
		*/

    // IMAGE LOADED JQUERY START
    $(".grid").imagesLoaded(function() {
      // images have loaded
      //PORTFOLIO START
      var $grid = $(".grid").isotope({
        itemSelector: ".gallery",
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: ".gallery"
        }
      });
      // filter items click
      $(".portfolio-filter").on("click", "li", function() {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue
        });
      });
      // filter items on button click
      $(".portfolio-filter").on("click", "li", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
      //PORTFOLIO END
    });
    // IMAGE LOADED JQUERY END
  }); //document ready js file div end

  /* 
=================================================================
04 - PRELOADER
=================================================================	
*/

  jQuery(window).load(function() {
    //PRELOADING START
    $("#preload")
      .delay(350)
      .fadeOut("slow");
    //PRELOADING END
  });
})(jQuery);
