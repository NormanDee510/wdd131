
document.getElementById("hamburger").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
