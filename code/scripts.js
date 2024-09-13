// navbar
//////////////////////////////////////////////////////////////////////////

jQuery(function($) {

		var $nav = $('#mobile-nav'),
				$win = $(window),
				winH = $win.height();		// Get the window height.

		$win.on("scroll", function () {
			 $nav.toggleClass("navbar-scrolled", $(this).scrollTop() > 25 );
			 $nav.toggleClass("navbar-vh-scrolled", $(this).scrollTop() > winH );
		}).on("resize", function(){ // If the user resizes the window
			 winH = $(this).height(); // you'll need the new height value
		});

});



// 100vh Fix on mobile
//////////////////////////////////////////////////////////////////////////

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});




// smooth scrolling
//////////////////////////////////////////////////////////////////////////
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});


// navbar open
//////////////////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-menu");
const navBar = document.querySelector(".mobile-nav");
const slice = document.querySelectorAll(".slice")

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("nav-open");

	navBar.classList.toggle("navBar");

	slice.forEach(link => {
		link.classList.toggle("closeBurger");
	});

});

$(".nav-menu li a").click(function(){
  $(".nav-menu").removeClass("nav-open");
	$(".slice").removeClass("closeBurger");
});

// no right click
//////////////////////////////////////////////////////////////////////////

//	function nocontext(e) {
//	 var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
//		if (clickedTag == "IMG") {
//		return false;
//		}
//	}
//	document.oncontextmenu = nocontext;



// rellax scrolling
//////////////////////////////////////////////////////////////////////////


function myFunction(x) {
	if (x.matches) { // mobile
		var rellax = new Rellax('.rellax', {
			speed: 0.5
		});
		var rellax = new Rellax('.rellaxSlow', {
			speed: -0.5
		});
	} else { // desktop
		var rellax = new Rellax('.rellax', {
			speed: 2
		});
		var rellax = new Rellax('.rellaxSlow', {
			speed: -2
		});
	}
}

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


// cookie consent
//////////////////////////////////////////////////////////////////////////

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#222222"
    },
    "button": {
      "background": "#fecc5e"
    }
  }
  //"position": "bottom-right"
});
