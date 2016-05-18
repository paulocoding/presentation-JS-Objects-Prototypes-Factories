var main = function () {
  var currentSlide = 0;
  var slides = $('.slide');
  updateProgressBar(slides, currentSlide);

  slides.hide();
  $(slides[0]).fadeIn();

  // keyboard events handling
  $('html').keydown(function(event) {
    if (event.which === 13) {
    event.preventDefault();
    }
    if (event.which === 32 || event.which === 39 || event.which === 68)
    {
      // move one slide forward
      currentSlide = moveSlide(slides, currentSlide, 1);
    }
    if (event.which === 37 || event.which === 65)
    {
      // move one slide back
      currentSlide = moveSlide(slides, currentSlide, -1);
    }
  });
  
  
  // navigation arrows images:
  $('.arrow-l').click(function() {
      currentSlide = moveSlide(slides, currentSlide, -1);    
    }
  );
  $('.arrow-r').click(function() {
      currentSlide = moveSlide(slides, currentSlide, 1);    
    }  
  );
  


  // mouse click to advance
//  $('html').mousedown(function(event) {
//    if (event.which === 1) {
//            currentSlide = moveSlide(slides, currentSlide, 1);
//    }
//  });

};
// end of main function

$(document).ready(main);
