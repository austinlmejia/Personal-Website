var slideIndex = 1;


function setup() {
   showSlides(slideIndex);
   // $("body").fadeIn(3000).delay(2000).("#greyOut").fadeIn(3000);
   // $("body").fadeIn(3000).then(
   //    $("#greyOut").fadeIn(3000)
   // );

   $("body").fadeIn(3000);
      setTimeout(bringInText, 1500);
      setTimeout(bringInSubText, 2500);

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function bringInText() {
   $("#greyOut").fadeIn(3000);
}

function bringInSubText() {
   $("#subStartText").fadeIn(2000);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(document).ready(setup);
