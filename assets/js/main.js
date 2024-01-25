// slick slider CAMPUS FACILITIES start
$(document).ready(function () {
  $(".latest-news-slider").slick({
    autoplay: true, // Auto-play the slides
    arrows: true, // Show navigation arrows
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time

    // nextArrow: '<button id="next">Next >',
    // prevArrow: '<button id="previous">previous >',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
