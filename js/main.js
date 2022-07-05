$(function () {
  var mixer = mixitup('.directions__items-list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })



  $('.team__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          dots: true,
          appendDots: $('.team__dots'),
        }
      }
    ]
  });
  $('.team__slick-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev');
  })
  $('.team__slick-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext');
  })



  $('.testimonials__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    dots: true,
    appendDots: $('.testimonials__dots'),
  });
  $('.testimonials__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev');
  })
  $('.testimonials__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext');
  })


  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    $('.program__acc-link').children('.program__acc-text').slideUp();
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).children('.program__acc-text').slideUp();
      $('.program__acc-link').removeClass('program__acc-link--active');
    } else {
      $(this).children('.program__acc-text').slideDown();
      $('.program__acc-link').removeClass('program__acc-link--active');
      $(this).addClass('program__acc-link--active');
    }
  })


  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });


  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)


  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--active');
    $('.header__top').toggleClass('header__top--open');
    $('.overlay').toggleClass('overlay--show');
  })

})