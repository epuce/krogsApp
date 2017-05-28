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
        $navItem = $('.nav-item'),
        $headerLogo = $header.find('.logo'),
        $menuWrapepr = $('.menu'),
        $page = $menuWrapepr.find('.page'),
        $gallertWrapepr = $('.gallery'),
        $picture = $gallertWrapepr.find('.picture'),
        $showMore = $gallertWrapepr.find('.show-more'),
        $hideMore = $gallertWrapepr.find('.hide-more'),
        food = $page.children(),
        nextPage,
        height = 0;

    if ( navigator.userAgent.match(/(iPhone|Android)/)) {
        $viewportMeta.attr('content', 'width=640, user-scalable=no');
    }

    $navItem.on('click', function(e) {
        // If () {
            e.preventDefault();
            var toScroll = $('.'+$(this).attr('rel')).offset().top;

            $body.scrollTop(toScroll - 290);
        // }
    });

    function headerShadow(scrolled){
        if (scrolled >= 1) {
            $header.addClass("header-shadow");
        } else {
            $header.removeClass("header-shadow");
        }
    }

    function logoToggle(scrolled){
        if (scrolled >= 1 ) {
            $headerLogo.slideUp();
        } else {
            $headerLogo.slideDown()
        }
    }

    $window.on('scroll', function(){
        var scrolled = $window.scrollTop();

        headerShadow(scrolled);

        if ($window.width() < 768) {
            logoToggle(scrolled)
        }
    });


    $picture.each(function (i) {
        var $this = $(this);

        if ($window.width() < 769) {
            if (i > 2) {
                $this.hide();
            }
        } else {
            if (i > 5) {
                $this.hide();
            }
        }
    });


    $showMore.on('click', function () {
        $picture.each(function (i) {
            var $this = $(this),
                $visiblePictures = $('.picture:visible');

            if (i < $visiblePictures.length + 2) {
                $this.slideDown(700);
            }

            if (i < $visiblePictures.length + 1) {
                $showMore.fadeOut();
                $hideMore.fadeIn();
            }
        });
    });

    $hideMore.on('click', function () {
        $picture.each(function (i) {
            var $this = $(this),
                $visiblePictures = $('.picture:visible');

            if (i > $visiblePictures.length - 4) {
                $this.slideUp(700);
            }

            if (i > $visiblePictures.length - 2) {
                $showMore.fadeIn();
                $hideMore.fadeOut();
            }
        });
    });

    $gallertWrapepr.find('a').simpleLightbox();

    headerShadow($window.scrollTop());
    logoToggle($window.scrollTop())
});
