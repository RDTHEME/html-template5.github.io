/************* Template Init Js File ************************
    Template Name: ziptop
    Author: RDTHEME
    Version: 1.0
    Copyright 2018
*************************************************************/

/*------------------------------------------------------------------------------------
    
costom.js
=============

01 - Scrollit 
02 - Navbar Scrolling


-------------------------------------------------------------------------------------*/

$(function() {
  "use strict";
  var wind = $(window);

  /*==================================
	 1.ScrollIt 
	====================================*/

  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -15
  });

  /*==================================
	2.Navbar Scrolling 
	====================================*/

  wind.on("scroll", function() {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar");
    if (bodyScroll > 600) {
      navbar.addClass("fixed-top");
    } else {
      navbar.removeClass("fixed-top");
    }
  });
});
