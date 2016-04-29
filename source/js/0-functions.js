var moveSlide = function(slides, current, n){
  $(slides[current]).hide();
  current += n;
  if(current >= slides.length){
    current = 0;
  } else if (current < 0){
    current = slides.length-1;
  }
  $(slides[current]).fadeIn();
    
  return current;
};