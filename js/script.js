jQuery(document).ready(function () {
    $('.number').counterUp({
        delay: 10,
        time: 3000
    });

    //  Menu nav toggle
    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('#nav__link').toggleClass('active');
    });

    $(function () {
        var header = $('#nav'),
            introH = $('#header').innerHeight(),
            scrollOffset = $(window).scrollTop();

        // ! Fixed header
        checkScroll(scrollOffset);
        $(window).on('scroll', function () {
            scrollOffset = $(this).scrollTop();
            checkScroll(scrollOffset);
        });

        function checkScroll(scrollOffset) {
            if (scrollOffset >= introH) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }
    });

    // Smooth scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav__link a').removeClass('active');
        $this.addClass('active');

        $('#nav__link').removeClass('active');
        $('#nav_toggle').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 100);
    });

    $(function () {
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        $('.gallery').isotope({
            // options
            itemSelector: '.items'
        });

        let $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function () {

            let filterValue = $(this).attr('data-filter');

            $gallery.isotope({
                filter: filterValue
            });

        });

        $('.filtering').on('click', 'span', function () {

            $(this).addClass('active').siblings().removeClass('active');

        });

    });

    // MagnificPopup
    $(document).ready(function () {
        $('.portfolio-container').magnificPopup({
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            }
        });
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

    });

    // Slick slider
    $(function () {
        $('.slick-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            responsive: [{
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 410,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });

});

// Init AOS
(function ($) {
    "use strict";

    function aosInit() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
    }
    $(window).on('load', function () {
        aosInit();
    });

})(jQuery);

new WOW(). init();
