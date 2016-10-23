$(function () {
    $('ul.nav li.dropdown').hover(function(){
    	$(this).addClass('open');
    	$('.dropdown-menu', this).fadeIn();
    }, function(){
    	$(this).removeClass('open');
    	$('.dropdown-menu', this).fadeOut('fast');
    });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
  	{
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}
  	);
});