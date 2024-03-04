//css scroll animation start
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
//css scroll animation end

// slick slider CAMPUS FACILITIES start
$(document).ready(function () {
  $(".latest-news-slider").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',

    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
// slick slider department-slider start
// slick slider butext-counter-slider start
$(document).ready(function () {
  $(".butex-counter-slider").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',

    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
// slick slider department-slider start
$(document).ready(function () {
  $(".department-slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
// list-of-departments-slider start
$(document).ready(function () {
  $(".list-of-departments-slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// butex-prospectus-slider start
$(document).ready(function () {
  $(".butex-prospectus-slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// faculty-gallery-image-slider start
$(document).ready(function () {
  $(".faculty-gallery-image-slider").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',

    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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

// vertical slider start
$(".slick", ".vertical-slider").slick({
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
// vertical slider end
// vertical slider start
$(".slick", ".recent-news-slider").slick({
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
// vertical slider end
$(".slick", ".recent-events-slider").slick({
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
// vertical slider end
// vertical slider start
$(".slick", ".notice-board-slider").slick({
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
// vertical slider end
// butext
let items = document.querySelectorAll(
  ".carousel-butex-prospectus .carousel-item"
);

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
