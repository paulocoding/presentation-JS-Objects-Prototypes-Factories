var moveSlide = function(slides, current, n){
  $(slides[current]).hide();
  current += n;
  if(current >= slides.length){
    current = 0;
  } else if (current < 0){
    current = slides.length-1;
  }
  $(slides[current]).fadeIn();  
  updateProgressBar(slides, current);
  return current;
};

var updateProgressBar = function(slides, current){  
  var totalSlides = slides.length;
  var percent = (((current+1)/totalSlides)*100).toString() + "%";
  $('.progress').css("width", percent);
};