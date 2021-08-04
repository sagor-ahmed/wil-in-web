 /*---------------------------------------------

 [Table of Content]
 ----------------------
 01: Preloader
 02: Mixit UP
 03: Lity
 04: Swiper Slider
 05: Back to Top
 ----------------------------------------------*/

 (function ($) {
     "use strict";



     $(".client-slider-active").owlCarousel({
         items: 6,
         dots: false,
         loop: true,
         autoplay: true,
         margin: 70,
         responsive: {
             0: {
                 items: 2
             },
             480: {
                 items: 3
             },
             768: {
                 items: 3
             },
             992: {
                 items: 4
             },
             1200: {
                 items: 6
             },
             1600: {
                 items: 6
             }
         },

     });





     // One Page Nav




     // mainSlider

     function mainSlider() {
         var BasicSlider = $('.slider-active');
         BasicSlider.on('init', function (e, slick) {
             var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
             doAnimations($firstAnimatingElements);
         });
         BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
             var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
             doAnimations($animatingElements);
         });
         BasicSlider.slick({

             dots: true,
             infinite: true,
             speed: 500,
             fade: true,
             cssEase: 'linear',
             arrows: false,
             autoplay: false,
             autoplaySpeed: 1000,
             responsive: [
                 {
                     breakpoint: 1024,
                     settings: {
                         infinite: true,
                         dots: true
                     }
    },
                 {
                     breakpoint: 600,
                     settings: {}
    },
                 {
                     breakpoint: 480,
                     settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                     }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


         });

         function doAnimations(elements) {
             var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
             elements.each(function () {
                 var $this = $(this);
                 var $animationDelay = $this.data('delay');
                 var $animationType = 'animated ' + $this.data('animation');
                 $this.css({
                     'animation-delay': $animationDelay,
                     '-webkit-animation-delay': $animationDelay
                 });
                 $this.addClass($animationType).one(animationEndEvents, function () {
                     $this.removeClass($animationType);
                 });
             });
         }
     }
     mainSlider();







     ////////////////////////////////////////////////////

     // 01. Sticky Js

     $(window).on('scroll', function () {

         var scroll = $(window).scrollTop();

         if (scroll < 245) {

             $("#header-sticky").removeClass("sticky");

         } else {

             $("#header-sticky").addClass("sticky");

         }
     });



     // One Page Nav

     ////////////////////////////////////////////////////

     // 05. Mobile Menu Js    



     // Toggel Menu
     $('#menu-toggle').click(function (e) {
         e.preventDefault();

         $('.navigation').slideToggle();

     });


     ////////////////////////////////////////////////////

     // 0. WOW JS

     new WOW().init();


 })(jQuery);
