document.addEventListener("DOMContentLoaded", function () {
    // Add animation class to banner elements on page load
    document.querySelector('.main-banner h1').classList.add('buttonAppear');
    document.querySelector('.main-banner p').classList.add('buttonAppear');
    document.getElementById('contactBtn').classList.add('buttonAppear');
});
// Get the header element
const header = document.querySelector('.light-bar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down more than 100 pixels (adjust as needed)
    if (window.scrollY > 100) {
        // Add the scrolled class to the header
        header.classList.add('scrolled-header');
    } else {
        // Remove the scrolled class if the user is at the top
        header.classList.remove('scrolled-header');
    }
});
