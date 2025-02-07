// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation for service items
const serviceItems = document.querySelectorAll('.service-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

serviceItems.forEach(item => {
    observer.observe(item);
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});