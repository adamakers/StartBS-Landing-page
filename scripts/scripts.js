$(document).ready(function(){

  const $doc = $(document);
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

  //smooth scroll handler
  function smoothScroll(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  }

  //navigation color change
  function changeHeader(event) {
    const $nav = $('.navbar');
    let scrollPosition = $(this).scrollTop();
    
    if (scrollPosition >= 55) {
      $nav.addClass('lit');
    } else {
      $nav.removeClass('lit');
    }
  }


// ***** EVENT LISTENERS *****

  $window.on('scroll resize', function(){
    check_if_in_view();
    changeHeader();
  });

  $doc.on('click', 'a', smoothScroll);

  //triggers a scroll event so if items are already in view
  //on load the element will animate`
  $window.trigger('scroll');


});

