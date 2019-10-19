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

function expand(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    expandImg.style.display = "block";
    var hideImg = document.getElementById("default-img");
    hideImg.style.display = "none";
  }

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("expandedImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var imgDefault = document.getElementById("default-img");
var modalImg = document.getElementById("img01");
imgDefault.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}