let hamburger = document.getElementById('hamburger');
let navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});