// Get the navigation links
var navLinks = document.querySelectorAll('nav a');

// Add event listeners to each link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    // Remove the active class from all links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    // Add the active class to the clicked link
    link.classList.add('active');
    // Get the target section
    var targetSection = document.querySelector(link.getAttribute('href'));
    // Scroll to the target section
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});
