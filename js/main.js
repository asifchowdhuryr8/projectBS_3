$(document).ready(function(){

$('.slider').slick({    /* Selecting slider class & applying slick funtion to make sure that testimonial slides work perfectly */
  infinite: true,   /* use to make sure the quotes will show everytime when user click on arrow.It won't stop showing */
  slideToShow: 1,   /* use to display 1 quote each time */
  slideToScroll: 1  /* 1 quote will display on each click */
});

});

$('.carousel').carousel({
  interval: 2500,
  wrap: true,
  pause: 'hover',
  keyboard: true
});