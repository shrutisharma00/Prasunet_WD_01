// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = '#333';
        navbar.style.boxShadow = 'none';
    }
});
