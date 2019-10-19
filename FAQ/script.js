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

var collA = document.getElementsByClassName("coll1");
var a;

// WHEN BUTTON IS CLICKED, ADD CLASS "ACTIVE" AND HEIGHT OF ELEMENT "CONTENT"

for (a = 0; a < collA.length; a++) {
  collA[a].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}