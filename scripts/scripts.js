$(document).ready(function(){

  const $animation_elements = $('.animation-element');
  const $window = $(window);



  //check to see if animateable elements are in window view
  function check_if_in_view(){
    let window_height = $window.height(),
        window_top_position = $window.scrollTop(),
        window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function(){
      let $element = $(this),
          element_height = $element.outerHeight(),
          element_top_position = $element.offset().top,
          element_bottom_position = (element_top_position + element_height);

    //check if element is in viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
    });
  }

// ***** EVENT LISTENERS *****

  $window.on('scroll resize', check_if_in_view);

  //triggers a scroll event so if items are already in view
  //on load the element will animate`
  $window.trigger('scroll');


});

