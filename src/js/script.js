$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="icons/arrows/next.svg" alt="next"></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="icons/arrows/prev.svg" alt="prev"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
      }
    }
  ]
});