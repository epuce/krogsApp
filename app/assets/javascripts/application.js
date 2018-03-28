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

	'use strict';

    var $window = $(window),
        $body = $('body'),
        $viewportMeta = $('meta[name="viewport"]'),
        $navItem = $('.js-nav-item'),

        $header = $('.header'),
        $headerLogo = $header.find('.logo'),

        $menuWrapepr = $('.menu'),
        $page = $menuWrapepr.find('.page'),
        $allGroups = $page.find('.js-all-groups'),
        $firstPage = $page.filter('.page-0'),

        galleryWrapper = $('.gallery'),
        $picture = galleryWrapper.find('.picture'),
        $showMore = galleryWrapper.find('.show-more'),
        $hideMore = galleryWrapper.find('.hide-more'),

        $picturesWrapper = $('.pictures-wrapper'),
        $checkPicture = $picturesWrapper.find('.js-toggle-check'),

        $allPictures = $('.picture'),
        $visiblePictures;

    galleryWrapper.find('a').simpleLightbox();

    function mobileMetatag() {
        if ( navigator.userAgent.match(/(iPhone|Android)/) && $window.width() < 768 ) {
            if (matchMedia('(orientation:landscape)').matches) {
                $viewportMeta.attr('content', 'width=640, user-scalable=no');
            } else {
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

    function scrollToElement(scroll) {
        console.log(scroll);

        $window.scrollTop(scroll);
    }

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

    $window.on('orientationchange', function () {
        $viewportMeta.attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        mobileMetatag();

        $headerLogo.css('display','inline-block')
    });

    $window.on('scroll', function(){
        var scrolled = $window.scrollTop();

        headerShadow(scrolled);
    });

    $navItem.on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            destElementOffset = $body.find('.'+$this.attr('rel')).offset().top;

        scrollToElement(destElementOffset - $header.outerHeight(true))
    });

    $checkPicture.on('click', function () {
        var $this = $(this),
           $isActiveField = $this.find('.is-active');

        $this.toggleClass('disabled');

        if ($isActiveField.prop('checked')) {
            $isActiveField.prop('checked', false);
        } else {
            $isActiveField.prop('checked', true);
        }
    });

    $('.js-visible-group').on('click', function () {
        var $this = $(this),
            $hiddenRelated = $this.siblings('.js-hidden-group');

        $this.hide();

        $hiddenRelated.show().trigger('focus');

        $hiddenRelated.on('blur', function () {
            var $hiddenRelatedVal = $hiddenRelated.val();

            $this.name($hiddenRelatedVal).show();

            $this.off('blur').hide();
        });
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

    $allGroups.on('click', function () {
        var  menuScrollVal = $('.nav-1').offset().top;

        $firstPage
            .fadeIn(500)
            .siblings()
            .hide();

        scrollToElement(menuScrollVal - $header.height())
    });

    headerShadow($window.scrollTop());

    mobileMetatag();
});
