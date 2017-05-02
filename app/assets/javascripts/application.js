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
        $viewportMeta = $('head meta'),
        $header = $('.header'),
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

    if ( navigator.userAgent.match(/(iPhone|android)/)) {
        $viewportMeta.attr('content', 'width=640, user-scalable=no, minimal-ui');
    }

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

    food.each(function(index) {
        var $this = $(this),
            maxPageHeight = 390 - $this.height();

            height = height + $this.height();

        if (height >= maxPageHeight) {
            if (index+1 < food.length){
                $this.parents('.page').after('<div class=\'page\'></div>');
            }

            nextPage = $this.parents('.page').next();

            if ($this.hasClass('group-title')) {
                $this.nextAll().andSelf().appendTo(nextPage);
            } else {
                $this.nextAll().appendTo(nextPage);
            }

            height = 0;
        }

        if (index+1 === food.length) {
            $('.page').each(function () {
                $(this).find('.food')
                    .first()
                    .before('<div class=\'eur\'>EUR</div>');
            });

            $menuWrapepr.slick({
                dots: true
            });
        }
    });

    $window.on('scroll', function(){
        var scrolled = $window.scrollTop();

        headerShadow(scrolled);

        if ($window.width() < 768) {
            logoToggle(scrolled)
        }
    });

    if ($window.width() < 768) {
        $picture.each(function (i) {
            var $this = $(this);
            if (i > 2) {
                $this.hide();
            }
        });
    }

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
