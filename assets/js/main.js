(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

 // PouUp 
  $('.Hint_btn').click( function (){ 
    $('.sudoku_wrp').addClass('active');   
    $('body').addClass('bodyactive');   
  }); 



$(".cell_slider").owlCarousel({
  margin: 30,
  items: 1,
  navText: [
    '<i class="left"><img src="assets/img/arrow-left.svg" alt=""></i>',
    '<div class="last_item"> <i class="right"><img src="assets/img/arrow-left.svg" alt=""></i> <i class="done"><img src="assets/img/done.svg" alt=""></i> </div>'
  ],
  nav: true,
  dots: true
});
 
})(jQuery);


