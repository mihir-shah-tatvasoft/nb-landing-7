//GSAP ScrollTrigger Initialization
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);

//GSAP ScrollSmoother Initialization
gsap.registerPlugin(ScrollSmoother);
// let smoother = ScrollSmoother.create({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-content",
//     smooth: 2,
//     smoothTouch: 0.1,
//     effects: true,
// });

$(".car-slider").slick({
    dots: true,
    // infinite: true,
    // speed: 300,
    slidesToShow: 4,
    slideToScroll: 1,
    // autoplaySpeed: 2000,
    autoplay: true,
    // centerMode: true,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slideToScroll: 1,
                centerMode: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slideToScroll: 1,
                centerMode: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            },
        },
    ],
});

// Testimonials
$(".slider-thumb").slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slideToScroll: 1,
    autoplay: true,
    centerMode: true,
    asNavFor: ".slider-content",
    focusOnSelect: true,
    variableWidth: true,
    prevArrow:
        "<button type='button' class='slick-prev'><img src='./images/ic-arrow-prev.svg' alt='Prev Icon'></button>",
    nextArrow:
        "<button type='button' class='slick-next'><img src='./images/ic-arrow-next.svg' alt='Next Icon'></button>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slideToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slideToScroll: 1,
                fade: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".slider-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    // speed: 1000,
    adaptiveHeight: true,
    arrows: false,
    // fade: true,
    asNavFor: ".slider-thumb",

});

// Hero Animations
const heroAnimation = gsap.timeline();
heroAnimation
    .from(".hero .hero-content h2", {
        opacity: 0,
        x: -300,
        duration: 1,
    })
    .from(
        ".hero .hero-content p",
        {
            opacity: 0,
            x: -300,
            duration: 0.8,
        },
        "-=0.8"
    )
    .from(
        ".hero .hero-content .gsap-block",
        {
            opacity: 0,
            y: 300,
            duration: 0.6,
        },
        "-=0.5"
    )
    .from(
        ".hero .hero-mockup-block .car-wrap",
        {
            y: -200,
            x: "110%",
            duration: 1.5,
            scale: 0.1,
        },
        "<"
    );

// Book Your Drive Animations
const bookYourDriveAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".book-your-drive",
        start: "top bottom",
        end: "+=400",
    },
});
bookYourDriveAnimation
    .from(".book-your-drive .row.row-cols-1 > *", {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.2,
    })
    .from(
        ".book-your-drive .btn-primary",
        {
            opacity: 0,
            y: 100,
            duration: 0.5,
        },
        "-=0.5"
    );

// carRentalSteps Animations
const carRentalStepsAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".car-rental-steps",
        start: "top center",
        end: "+=400",
    },
});
carRentalStepsAnimation
    .from(".car-rental-steps .page-title", {
        opacity: 0,
        y: 80,
        duration: 0.8,
    })
    .from(
        ".car-rental-steps .title-info",
        {
            opacity: 0,
            y: 80,
            duration: 0.5,
        },
        "-=0.5"
    )
    .from(".car-rental-steps .row > *", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.2,
    });

// About Us Animations
const aboutUsAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-us",
        start: "top center",
        end: "+=700",
    },
});
aboutUsAnimation
    .from(".about-us .about-us-mockup", {
        opacity: 0,
        x: -300,
        duration: 0.8,
    })
    .from(
        ".about-us .about-us-content > *",
        {
            opacity: 0,
            x: 100,
            duration: 0.8,
            stagger: 0.2,
        },
        "<"
    );

// Popular Cars Animations
const PopularCarsAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".popular-cars",
        start: "top center",
        end: "+=800",
    },
});
PopularCarsAnimation.from(".popular-cars .container > *", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: 0.2,
});

// why Us Animations
const whyUsAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".why-us",
        start: "top center",
        end: "+=600",
    },
});
whyUsAnimation
    .from(".why-us .page-title", {
        opacity: 0,
        y: 80,
        duration: 0.8,
    })
    .from(
        ".why-us .title-info",
        {
            opacity: 0,
            y: 80,
            duration: 0.5,
        },
        "-=0.5"
    )
    .from(".why-us .row > *", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.2,
    });

// testimonials Animations
const testimonialsAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top center",
        end: "+=600",
    },
});
testimonialsAnimation.from(".testimonials", {
    opacity: 0,
    duration: 0.8,
});

// Pricing Animations
const pricingAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".pricing-wrapper",
        start: "top center",
        end: "+=600",
    },
});
pricingAnimation
    .from(".pricing-wrapper .page-title", {
        opacity: 0,
        y: 80,
        duration: 0.8,
    })
    .from(
        ".pricing-wrapper .title-info",
        {
            opacity: 0,
            y: 80,
            duration: 0.5,
        },
        "-=0.5"
    )
    .from(".pricing-wrapper .row > *", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.2,
    });

// Contact Us Animations
const contactUsAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-us",
        start: "top center",
        end: "+=400",
    },
});
contactUsAnimation
    .from(".contact-us .contact-us-block > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
    })
    .from(
        ".contact-us .man-wrap",
        {
            x: 300,
            opacity: 0,
            duration: 0.8,
        },
        "<"
    );

// Footer Animations
const footerAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer",
    },
});
footerAnimation
    .from(".footer .logo-div-outer", {
        opacity: 0,
        x: "-100%",
        duration: 0.8,
    })
    .staggerFrom(
        ".footer .other-links",
        0.4,
        {
            opacity: 0,
            y: "100%",
            duration: 0.5,
            stagger: 0.2,
        },
        "-=0.2"
    )
    .from(
        ".footer .social-wrap-outer",
        {
            opacity: 0,
            x: "100%",
            duration: 0.5,
        },
        "-=0.5"
    )
    .from(
        ".footer .copy-block",
        {
            opacity: 0,
            duration: 0.5,
        },
        "<"
    );
