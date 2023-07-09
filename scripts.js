// Get the navbar links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listeners to the navbar links
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Remove the active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the active class to the clicked link
    this.classList.add('active');
  });
});