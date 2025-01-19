
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    
    hamburgerButton.addEventListener('click', function() {
        navMenu.classList.toggle('visible');
    });

  
    const yearElement = document.getElementById('year');
    const modifiedDateElement = document.getElementById('modified-date');

    yearElement.textContent = new Date().getFullYear();
    modifiedDateElement.textContent = document.lastModified;
});
