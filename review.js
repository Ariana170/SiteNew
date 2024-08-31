var slideIndex = 1;
showSlides(slideIndex);

var autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 10000); // Change slide every 10 seconds

function plusSlides(n) {
    clearInterval(autoSlideInterval); // Clear the interval to reset it
    showSlides(slideIndex += n);
    autoSlideInterval = setInterval(function() {
      plusSlides(1);
    }, 10000); // Reset the interval after manual change
  }
  
  function currentSlide(n) {
    clearInterval(autoSlideInterval); // Clear the interval to reset it
    showSlides(slideIndex = n);
    autoSlideInterval = setInterval(function() {
      plusSlides(1);
    }, 10000); // Reset the interval after manual change
  }

// Auto-slide functionality

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("review");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1} // Wrap around to the first slide
    if (n < 1) {slideIndex = slides.length} // Wrap around to the last slide
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Hide all slides
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block"; // Show the current slide
    dots[slideIndex-1].className += " active"; // Highlight the current dot
  }
