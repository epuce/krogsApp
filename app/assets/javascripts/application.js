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
    var $viewportMeta = $('head meta'),
        $page = $('.page'),
        food = $page.children(),
        nextPage,
        maxPageHeight = 200,
        height = 0;

    if ( navigator.userAgent.match(/(iPhone|android)/)) {
        $viewportMeta.attr('content', 'width=640, user-scalable=no, minimal-ui');
    }




    food.each(function(index) {
        var $this = $(this);
        height = height + $this.height();

        if (height > maxPageHeight) {
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
            $('.menu-text-wrapper').slick({});
        }
    });
});
