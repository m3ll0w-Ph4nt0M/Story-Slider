$(document).ready(function () {

  $('.timeline-info').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.timeline-pagination',
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.timeline-pagination').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.timeline-info',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  function activeslide_bg() {
    let activeSlide = $('.timeline-pagination').find('.slick-active');
    let dataSlideBg = activeSlide.data('slide-bg');
    $('div[id*="bg-"]').removeClass('active');
    setTimeout(function () {
      $('#' + dataSlideBg).addClass('active');
    }, 800)
  }
  activeslide_bg();
  $('.timeline-pagination').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    activeslide_bg();
  });

});