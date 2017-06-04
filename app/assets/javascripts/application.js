// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
    var $window = $(window),
        $body = $('body'),
        $viewportMeta = $('meta[name="viewport"]'),
        $header = $('.header'),
        $navItem = $('.js-nav-item'),
        $headerLogo = $header.find('.logo'),
        $headerOpenDropdown = $header.find('.js-open-drop-down'),
        $group = $header.find('.group'),
        $menuWrapepr = $('.menu'),
        $page = $menuWrapepr.find('.page'),
        $allgroups = $page.find('.js-all-groups'),
        $gallertWrapepr = $('.gallery'),
        $picture = $gallertWrapepr.find('.picture'),
        $showMore = $gallertWrapepr.find('.show-more'),
        $hideMore = $gallertWrapepr.find('.hide-more'),
        $allPictures = $('.picture'),
        $visiblePictures,
        $headerHeight = 0;


    function mobileMetatag() {
        if ( navigator.userAgent.match(/(iPhone|Android)/) && $window.width() < 768 ) {
            if ($window.width() < $window.height()) {
                $viewportMeta.attr('content', 'width=640, user-scalable=no');
            } else if ($window.width() > $window.height()) {
                $viewportMeta.attr('content', 'width=767, user-scalable=no');
            }
        }
    }

    mobileMetatag();

    $window.on('orientationchange', function () {
        $viewportMeta.attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        mobileMetatag();
    });

    $navItem.on('click', function(e) {
        // if ((window.location.href).indexOf('/') === -1) {
            e.preventDefault();
            var $this = $(this),
                $toScroll = $('.' + $this.attr('rel')),
                $headerHeight = 0,
                scrollVal = $toScroll.offset().top;

            if ($window.width() < 768) {
                $headerHeight = 280;
            } else {
                $headerHeight = $('.header').height();
            }

            if ($this.hasClass('js-page')) {
                var menuScrollVal = $('.nav-1').offset().top;

                $toScroll
                    .fadeIn(500)
                    .siblings()
                    .hide();

                $body.animate({scrollTop: menuScrollVal - $headerHeight}, 1000);
            } else {
                $body.animate({scrollTop: scrollVal - $headerHeight}, 1000);
            }
        // }
    });

    $headerOpenDropdown.on('click', function(e){
        var scrollTop = $body.scrollTop();

        if (!$(e.target).hasClass('nav-admin-item')) {
            if ($group.is(':visible')) {
                $group.slideUp(function () {
                    if (scrollTop < 1) {
                        $header.removeClass("header-shadow");
                    }
                });
            } else {
                $group.slideDown();

                if (scrollTop < 1) {
                    $header.addClass("header-shadow");
                }
            }
        }

        $group.toggleClass('active')
    });


    function headerShadow(scrolled){
        if (scrolled > 0) {
            $header.addClass("header-shadow");
        } else {
            $header.removeClass("header-shadow");
        }
    }

    function logoToggle(scrolled){
        // if (scrolled >= 1 && $window.width() < 768) {
        //     $headerLogo.slideUp();
        // } else {
        //     $headerLogo.slideDown()
        // }
    }

    $window.on('scroll', function(){
        var scrolled = $window.scrollTop();

        headerShadow(scrolled);

        if ($window.width() < 768) {
            logoToggle(scrolled)
        }

        if ($group.is(':visible')) {
            $group.slideUp();
        }
    });


    $picture.each(function (i) {
        var $this = $(this);

            $visiblePictures = $('.picture:visible');

        if ($window.width() < 768) {
            if (i > 2) {
                $this.hide();
            }
        } else {
            if (i > 5) {
                $this.hide();
            }
        }

        console.log(i === $visiblePictures.length-1)
        
        if (i === $visiblePictures.length-1) {
            showHidePicture()
        }
    });

    $showMore.on('click', function () {
            var $allPictures = $('.picture');

                $visiblePictures = $('.picture:visible');

        $picture.each(function (i) {
            var $this = $(this);

            if ($window.width() > 1024) {
                if (i < $visiblePictures.length+ 3) {
                    $this.slideDown(700);
                }
            } else if ($window.width() > 767) {
                if (i < $visiblePictures.length + 2) {
                    $this.slideDown(700);
                }
            } else {
                if (i < $visiblePictures.length + 1) {
                    $this.slideDown(700);
                }
            }

            if ($allPictures.length <= $visiblePictures.length + 1) {
                $showMore.hide();
                $hideMore.fadeIn();
            }
        });
    });

    function showHidePicture() {
        $visiblePictures = $('.picture:visible');

        console.log($allPictures.length,$visiblePictures.length )

        if ($allPictures.length === $visiblePictures.length) {
            $showMore.hide();
            $hideMore.hide();
        } else if ($allPictures.length <= $visiblePictures.length + 1) {
            $showMore.show();
            $hideMore.hide();
        } else {
            $showMore.show();
            $hideMore.hide();
        }
    }

    $hideMore.on('click', function () {
        $picture.each(function (i) {
            var $this = $(this);

            if ($window.width() < 768) {
                if (i > 2) {
                    $this.slideUp(700);
                }
            } else {
                if (i > 5) {
                    $this.slideUp(700);
                }
            }
        });

        $showMore.fadeIn();
        $hideMore.hide();
    });

    $allgroups.on('click', function () {
        $('.page-0')
            .fadeIn(500)
            .siblings()
            .hide();

        var $this = $(this),
            $toScroll = $('.' + $this.attr('rel')),
            $headerHeight = 0,
            menuScrollVal = $('.nav-1').offset().top;


        if ($window.width() < 768) {
            $headerHeight = 280;
        } else {
            $headerHeight = $('.header').height();
        }

        $body.animate({scrollTop: menuScrollVal - $headerHeight}, 1000);
    });

    $gallertWrapepr.find('a').simpleLightbox();

    headerShadow($window.scrollTop());
    logoToggle($window.scrollTop())
});
