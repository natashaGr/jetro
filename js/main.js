$(function () {
  $('.slider-top__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: 'ondemand',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrows.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"> <img src="images/next-arrows.svg" alt="next"></button>',
    asNavFor: '.slider-down__inner',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.slider-down__inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    asNavFor: '.slider-top__inner',

  });

  $('.header__menu-btn').click(function () {
    $(this).toggleClass('open');
    $('.header__menu-item').slideToggle();
  });

});