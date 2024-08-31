window.onscroll = function() {myFunctionphone()};

var navbarphone = document.getElementById("out_nav_phone");

var stickyphone = navbarphone.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionphone() {
  if (window.scrollY >= stickyphone) {
    navbarphone.classList.add("sticky")
  } else {
    navbarphone.classList.remove("sticky");
  }
}