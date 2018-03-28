$(function() {

  'use strict';

  var $groupWrapper = $('.group-wrapper'),
      $subgroupWrapper = $('.subgroup-wrapper'),
      $picturesWrapper = $('.pictures-wrapper');

  // Init group drag and drop, set the new order value
  $groupWrapper.sortable({
      update: function() {
          $groupWrapper.find('.group').each(function(i){
              $(this)
                  .find('.order')
                  .val(i+1);
      });
    }
  });

  // Init subgroup drag and drop, set the new order value
  $subgroupWrapper.sortable({
      update: function() {
          $subgroupWrapper.find('.subgroup').each(function(i){

              $(this)
                  .find('.order')
                  .val(i+1);
          });
      }
  });

  // Init picture drag and drop, set the new order value
  $picturesWrapper.sortable({
      update: function() {
        $picturesWrapper.find('.picture').each(function(i){

          $(this)
              .find('.order')
              .val(i+1);
        });
      }
  });
});
