if ($.fn.slick) {
    $('.service-slider').slick({
        dots: false,
        speed: 2000,
        autoplayTimeout: 7000,
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
    {

          breakpoint: 1240,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
    },
    {
          breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
    },
    {
        breakpoint: 901,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
    },
    {
        breakpoint: 768,
        settings: {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    },
    {
        breakpoint: 600,
        settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    },
    {
        breakpoint: 480,
        settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
    ]
    });
}