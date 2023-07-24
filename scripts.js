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

  // Get the target section's ID from the href attribute
  const targetId = this.getAttribute('href');

  // Scroll smoothly to the target section
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth'
  });
  
// Add class to elements when they appear in the viewport
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}

const options = {
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver(handleIntersection, options);

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the video element
  const video = document.getElementById('project-video');

  // Get the video controls elements
  const currentTimeElement = document.getElementById('current-time');
  const durationElement = document.getElementById('duration');
  const playButton = document.getElementById('play-button');
  const rewindButton = document.getElementById('rewind-button');
  const fastForwardButton = document.getElementById('fast-forward-button');

  // Add event listeners for video events
  video.addEventListener('loadedmetadata', () => {
    // Display the duration of the video
    durationElement.textContent = formatTime(video.duration);
  });

  video.addEventListener('timeupdate', () => {
    // Update the current time of the video
    currentTimeElement.textContent = formatTime(video.currentTime);
  });

  // Helper function to format time in MM:SS format
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Add event listeners for video controls
  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.textContent = 'Pause';
    } else {
      video.pause();
      playButton.textContent = 'Play';
    }
  });

  rewindButton.addEventListener('click', () => {
    video.currentTime -= 10; // Rewind by 10 seconds
  });

  fastForwardButton.addEventListener('click', () => {
    video.currentTime += 10; // Fast forward by 10 seconds
  });
});
