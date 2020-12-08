
$(function(){  
  /*
1. popup img
--------------
  */
  
  $('.product__item-information').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: true,
		}
	});
  
  /*
2. scroll top
--------------
  */
    
    $('#topBtn').on('click' ,function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);

    });


/*
3. header fixed
--------------
  */

$(window).scroll(function(){
    var sticky = $('.header__inner'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 200) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });


/*
4. anchor link
--------------
  */


 $('#nav a[href^="#"]').on('click', function(event) {
  $('.navActive').removeClass('navActive');
  $(this).addClass('navActive');
  
  var target = $(this.getAttribute('href'));; 
  if( target.length ) {
      event.preventDefault();

      console.log($("body").scrollTop, target.offset().top)
      $('html').animate({
        scrollTop: target.offset().top
      }, 1000);
  }

});

  /*
5. Sorting item
--------------
  */

var mixer = mixitup('.products__inner-box');
var mixshow = $('.mix[style]');
var mix = $('.mix[style]').length;
var blog_show = $(".product__button-btn");
var blog_hide = $(".product__button-hiden");


  /*
6. show button
--------------
  */
//HIDE BUTTONS
$(blog_show).hide();
$(blog_hide).hide();

//FIND THE NUMBER OF DIVS WITH STYLE SET TO INLINE-BLOCK
if (mix > 0) {
    $(blog_show).show() ;
    mixshow.slice().hide();
}

//SHOW-HIDE BUTTONS
$(blog_hide).click(function () {
    mixshow.slice().hide();
    $(blog_show).show();
    $(blog_hide).hide();
});

$(blog_show).click(function () {
    mixshow.show();
    $(blog_hide).show();
    $(blog_show).hide();
  });



  /*
7. animated burger menu
--------------
  */

const menuBtn = document.querySelector('.header__menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

  /*
8. show burger menu
--------------
  */
$('.header__menu-btn').on('click', function(){
  $('.menu__list').slideToggle();
 
});


});
