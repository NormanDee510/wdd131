// Display current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('modified-date').textContent = document.lastModified;

// Hamburger menu toggle functionality
const hamburgerButton = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', function() {
    navMenu.classList.toggle('visible');
    hamburgerButton.textContent = navMenu.classList.contains('visible') ? 'X' : '☰';
});
