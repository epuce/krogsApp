$(function() {

  'use strict'

  var $groupWrapper = $('.group-wrapper'),
      $subgroupWrapper = $('.subgroup-wrapper');

  // Init group drag and drop, set the new order value
  $groupWrapper.sortable({
    update: function() {
      $(this).find('.group').each(function(i){
        $(this)
          .find('.order')
          .val(i+1);
      });
    }
  });

  // Init subgroup drag and drop, set the new order value
  $subgroupWrapper.sortable({
    update: function() {
      $(this).find('.subgroup').each(function(i){

        console.log(i)

        $(this)
          .find('.order')
          .val(i+1);
      });
    }
  });
});
