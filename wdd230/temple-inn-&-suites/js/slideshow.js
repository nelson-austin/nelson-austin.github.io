let slideIndex = 0;
let featuredIndex = 0;
showSlides();
showFeatured();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

function showFeatured() {
    let i;
    let featuredSlides = document.getElementsByClassName("featuredSlides");
    for (i = 0; i < featuredSlides.length; i++) {
      featuredSlides[i].style.display = "none";  
    }
    featuredIndex++;
    if (featuredIndex > featuredSlides.length) {featuredIndex = 1}    
    
    featuredSlides[featuredIndex-1].style.display = "block";  
    
    setTimeout(showFeatured, 8000); // Change image every 2 seconds
  }