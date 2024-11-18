// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    
    // Handle click on the 'Explore More' button in the Hero section
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function () {
        alert('Thank you for exploring RabatConnect! Discover more about Rabat!');
    });

    // Animate Social Media Icons on Hover
    const socialIcons = document.querySelectorAll('.social-icon img');
    
    socialIcons.forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.1)';
        });

        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Scroll-based animation trigger for content sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
