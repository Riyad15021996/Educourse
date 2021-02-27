(function($) {
    'use strict'


    /*
    ========================================
    Preloader
    ========================================
    */
    /* if ($('#preloader').length) {
        $(window).on('load', function() {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    } */


    /* 
    =====================================================
        SearchBar
    ======================================================
    */

    if ($('.search-toggler').length) {
        $('.search-toggler').on('click', function() {
            $('.search-contents').toggleClass('show');
        });
        $('.close-search').on('click', function() {
            $('.search-contents').removeClass('show');
        });

    }

    /* 
    =====================================================
        Start active menu
    ======================================================
    */
    var sections = jQuery('section'),
        nav = jQuery('nav'),
        nav_height = nav.outerHeight();

    jQuery(window).on('scroll', function() {
        var cur_pos = jQuery(this).scrollTop();

        sections.each(function() {
            var top = jQuery(this).offset().top - nav_height,
                bottom = top + jQuery(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                jQuery(this).addClass('active');
                nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    /*
    ========================================
    Activate scrollspy to add active class to navbar items on scroll
    ========================================
    */
    // 
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    /*
    ========================================
    scroll nav bar class add
    ========================================
    */

    if ($('#mainNav').length) {
        /* window.onscroll = function() { myFunction() }; */

        var navbar = document.getElementById("mainNav");
        var sticky = navbar.offsetTop;
        $(window).on('scroll', function() {
            var wScroll = $(this).scrollTop();
            if (wScroll > 60) {
                $('.menu-one').addClass('top-nav-fixed');
            } else {
                $('.menu-one').removeClass('top-nav-fixed');
            };
        });
    }

    // Responsive Menu
    $(document).ready(function() {
        // jQuery code
        $("[data-trigger]").on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass("show");
            $('body').toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
        });

        $(".btn-close, .screen-overlay").click(function(e) {
            $(".screen-overlay").removeClass("show");
            $(".mobile-offcanvas").removeClass("show");
            $("body").removeClass("offcanvas-active");
        });

    }); // jquery end
	
    /*
    ========================================
        Parallax
    ========================================
    */

    jarallax(document.querySelectorAll('.parallax'), {
        // options here
        speed: 0.3,
    });

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('.counts').length) {
        $('.counts').countUp({
            'time': 2000,
            'delay': 20
        });
    }

    /*
    ========================================
        Magnific Popup
    ========================================
    */
    $('.video-play-btn').magnificPopup({
        type: 'iframe'
    });

    /*
    ========================================
        Testimonial
    ========================================
    */

    $('.testimonial-one-all, .testimonial-two-all').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        center: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /*
    ========================================
        Related Carousel
    ========================================
    */
    $('.related-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        center: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    /*
    ========================================
        Blog-details Carousel
    ========================================
    */
    $('.blog-right-slide').owlCarousel({
        loop: true,
        nav: true,
        center: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /*
    ========================================
        accordion
    ========================================
    */
    if ($('.accordion').length) {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

        $(".accordion > .accordion-item").on('click', function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    }

    /*
    ========================================
        Wow Animated
    ========================================
    */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animate', // animation css class (default is animated)
        offset: 1, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();

    /*
    ========================================
        Select Js
    ========================================
    */
    $('select').each(function() {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function() {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


})(jQuery);