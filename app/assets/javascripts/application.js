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
//= require_tree ./plugins
//= require_tree ./groups


$(function() {

	'use strict'

    var $window = $(window),
        $body = $('body'),
        $viewportMeta = $('meta[name="viewport"]'),
        $navItem = $('.js-nav-item'),

        $header = $('.header'),
        $headerLogo = $header.find('.logo'),
        $headerOpenDropdown = $header.find('.js-open-drop-down'),

        $menuWrapepr = $('.menu'),
        $page = $menuWrapepr.find('.page'),
        $allgroups = $page.find('.js-all-groups'),

        $gallertWrapepr = $('.gallery'),
        $picture = $gallertWrapepr.find('.picture'),
        $showMore = $gallertWrapepr.find('.show-more'),
        $hideMore = $gallertWrapepr.find('.hide-more'),

        $allPictures = $('.picture'),
        $visiblePictures;

    $('.js-visible-group').on('click', function () {
        var $visibleGroup = $(this),
            $hiddenRelated = $visibleGroup.siblings('.js-hidden-group');

        $visibleGroup.hide();

        $hiddenRelated.show().trigger('focus');

        $hiddenRelated.on('blur', function () {
            var $hiddenRelatedVal = $hiddenRelated.val();

            $visiblegroup.name($hiddenRelatedVal).show();

            $(this).off('blur').hide();
        });
    });

    function mobileMetatag() {
        if ( navigator.userAgent.match(/(iPhone|Android)/) && $window.width() < 768 ) {
            if ($window.width() < $window.height()) {
                $viewportMeta.attr('content', 'width=640, user-scalable=no');
            } else if ($window.width() > $window.height()) {
                $viewportMeta.attr('content', 'width=767, user-scalable=no');
            }
        }
    }

    function showHidePicture() {
        $visiblePictures = $('.picture:visible');

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

    function headerShadow(scrolled){
        if (scrolled > 0) {
            $header.addClass("header-shadow");
        } else {
            $header.removeClass("header-shadow");
        }
    }

    function logoToggle(scrolled){
        if (scrolled >= 1) {
            $headerLogo.slideUp();
        } else {
            $headerLogo.slideDown()
        }
    }

    $window.on('orientationchange', function () {
        $viewportMeta.attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        mobileMetatag();

        $headerLogo.css('display','inline-block')
    });

    $navItem.on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            $showPage = $page.filter('.' + $this.attr('rel'));

        $showPage
            .fadeIn(500)
            .siblings()
           	.hide();
    });

    $window.on('scroll', function(){
        var scrolled = $window.scrollTop();

        headerShadow(scrolled);

        if ($window.width() < 768 && $window.width() < $window.height()) {
            logoToggle(scrolled);
        }
    });

    $picture.each(function (i) {
        var $this = $(this);

        if ($window.width() < 768 && i > 2) {
            $this.hide();
        } else if ($window.width() >= 768 && i > 5){
            $this.hide();
        }

        if (i === $allPictures.length-1) {
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
        var $headerHeight = 0,
            menuScrollVal = $('.nav-1').offset().top;

        $('.page-0')
            .fadeIn(500)
            .siblings()
            .hide();

        if ($window.width() < 768) {
            $headerHeight = 280;
        } else {
            $headerHeight = $header.height();
        }

        $body.animate({scrollTop: menuScrollVal - $headerHeight}, 1000);
    });

    $gallertWrapepr.find('a').simpleLightbox();

    if ($window.width() < 768 && $window.width() < $window.height()) {
        logoToggle($window.scrollTop());
    }

    headerShadow($window.scrollTop());

    mobileMetatag();
});
