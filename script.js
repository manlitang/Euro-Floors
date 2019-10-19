if (window.innerWidth < 992) {
	window.onload = function() {

		// MOBILE NAV
		document.getElementById("menu-btn").addEventListener("click", function(event){
			event.preventDefault(); 
			document.getElementById("body-id").classList.add("nav-active");
		});
	
		document.getElementById("menu-btn-close").addEventListener("click", function(event){
			event.preventDefault();
			document.getElementById("body-id").classList.remove("nav-active");
		});

		document.getElementById("body-id").addEventListener("click", function(event){
			document.querySelector("nav").classList.remove("nav-active");
		});
	}
}

if (window.innerWidth < 600) {
    document.getElementById("banner1").src="images/banner1-mobile.jpg";
    document.getElementById("banner2").src="images/banner2-mobile.jpg";
    document.getElementById("banner3").src="images/banner3-mobile.jpg";
    document.getElementById("banner4").src="images/banner4-mobile.jpg";
}


var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); 
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}

function linkClick() {
    document.getElementById("products-link").style.color = "#F5F5F5"
    document.getElementById("products-link").style.background = "#5E5E5E";
    document.getElementById("products-link").style.borderRadius = "4px";
    document.getElementById("products-link").style.fontWeight = "700";

    document.getElementById("contact-link").style.color = "#707070"
    document.getElementById("contact-link").style.background = "#F5F5F5";
    document.getElementById("contact-link").style.fontWeight = "normal";

  }

  function linkClick2() {
    document.getElementById("contact-link").style.color = "#F5F5F5"
    document.getElementById("contact-link").style.background = "#5E5E5E";
    document.getElementById("contact-link").style.borderRadius = "4px";
    document.getElementById("contact-link").style.fontWeight = "700";

    document.getElementById("products-link").style.color = "#707070"
    document.getElementById("products-link").style.background = "#F5F5F5";
    document.getElementById("products-link").style.fontWeight = "normal";
  }

