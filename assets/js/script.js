(function($) {
    "use strict";
    $(document).ready(function() {
        $('.a-nav-toggle').on('click', function() {
            if ($('html').hasClass('body-menu-opened')) {
                $('html').removeClass('body-menu-opened').addClass('body-menu-close');
                $('.hide-menu').fadeOut();
            } else {
                $('html').addClass('body-menu-opened').removeClass('body-menu-close');
                $('.hide-menu').fadeIn();
            }
        });
        if ($('.a-pagepiling').length) {
            $('.a-pagepiling').pagepiling({
                scrollingSpeed: 280,
                menu: '#menu, #menuMain',
                anchors: ['About', 'Services', 'Skills', 'Resume', 'Portfolio', 'Testimonials', 'Weapons', 'Contact'],
                loopTop: false,
                loopBottom: false,
                navigation: {
                    'position': 'right'
                },
                onLeave: function() {
                    $('.a-progressbar .progress-bar').each(function() {
                        if ($('.slide-skills').hasClass('active')) {
                            $(this).width($(this).attr('aria-valuenow') + '%');
                        } else {
                            $(this).width('0');
                        }
                    });
                    typedText();
                    countNumber();
                }
            });
        }

        function typedText() {
            $('.a-slide-typed').each(function() {
                var thisSlide = $(this);
                if (thisSlide.hasClass('active')) {
                    var typedDiv = '.a-typed-' + thisSlide.data('name');
                    $(typedDiv).html('');
                    var typedText = thisSlide.find('.a-typed').data('text');
                    var typedT = new Typed(typedDiv, {
                        strings: [typedText],
                        typeSpeed: 60,
                        startDelay: 1000,
                        loop: false,
                        showCursor: false
                    });
                }
            });
        }
        typedText();

        function countNumber() {
            $('.slide-portfolio').each(function() {
                var thisSlide = $(this);
                if (thisSlide.hasClass('active')) {
                    $('.success-box').each(function() {
                        var $t = $(this),
                            n = $t.find(".count-text").attr("data-stop"),
                            r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                        if (!$t.hasClass("counted")) {
                            $t.addClass("counted");
                            $({
                                countNum: $t.find(".count-text").text()
                            }).animate({
                                countNum: n
                            }, {
                                duration: r,
                                easing: "linear",
                                step: function() {
                                    $t.find(".count-text").text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $t.find(".count-text").text(this.countNum);
                                }
                            });
                        }
                    });
                }
            });
        }
        countNumber();
        if ($('.portfolio-wrap').length) {
            $('.portfolio-wrap').slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: true,
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 776,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
        }
        if ($('.testimonials-wrap').length) {
            $('.testimonials-wrap').slick({
                infinite: true,
                autoplay: false,
                arrows: false,
                dots: true,
                fade: true,
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
    });
    $(window).on('load', function() {
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }
        if ($('.a-intro').length) {
            $('.a-intro').addClass('active');
        }
    });
})(window.jQuery);