// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Get the navbar
var navbar = document.getElementById("meniu_prim");
var navbarphone = document.getElementById("out_nav_phone");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var stickyphone = navbarphone.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.scrollY >= stickyphone) {
    navbarphone.classList.add("sticky")
  } else {
    navbarphone.classList.remove("sticky");
  }
}

