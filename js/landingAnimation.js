$(".car-slider").slick({
    dots: true,
    // infinite: true,
    // speed: 300,
    // slidesToShow: 4,
    // slideToScroll: 2,
    // autoplaySpeed: 2000,
    // autoplay: true,
    // centerMode: true,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slideToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slideToScroll: 1,

            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
});


// Testimonials 
$(".slider-thumb").slick({
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slideToScroll: 1,
    autoplaySpeed: 2000,
    // autoplay: true,
    centerMode: true,
    asNavFor: '.slider-content',
    variableWidth: true,
    prevArrow: "<button type='button' class='slick-prev btn'><img src='./images/ic-arrow-prev.svg' alt='Prev Icon'></button>",
    nextArrow: "<button type='button' class='slick-next btn'><img src='./images/ic-arrow-next.svg' alt='Next Icon'></button>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slideToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slideToScroll: 1,

            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
});
$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    // speed: 1000,
    adaptiveHeight: true,
    arrows: false,
    fade: true,
    asNavFor: '.slider-thumb',
});