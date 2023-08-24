$('.banner-slider_container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: `<i class="fa-solid fa-arrow-left banner-left"></i>`,
    nextArrow: `<i class="fa-solid fa-arrow-right banner-right"></i>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

new VenoBox({
    selector: '.Portofolio-image',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
});

// services slider

$('.services_slider-container').slick({
    vertical: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: `<i class="fa-solid fa-angle-up angleUp"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-down angleDown"></i>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
// testimonial slider

$('.testimonila-image-slider').slick({
    vertical: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.testimonial-text-slider',
    prevArrow: `<i class="fa-solid fa-angle-up angleUp"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-down angleDown"></i>`,
});
$('.testimonial-text-slider').slick({
    asNavFor: '.testimonila-image-slider',
    vertical: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
});

// counter
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

// venobox

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
});
