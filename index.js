 window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const animateOnScroll = function() {
    const elements = document.querySelectorAll('.watch-card, .feature-card, .section-header > *');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});