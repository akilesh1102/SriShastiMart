// Smooth Scroll Animation
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating Animation for Hero Image
const heroImage = document.querySelector('.hero-image img');
let direction = 1;
setInterval(() => {
    const currentTransform = getComputedStyle(heroImage).transform;
    if (currentTransform === 'matrix(1, 0, 0, 1, 0, 20)') {
        direction = -1;
    } else if (currentTransform === 'matrix(1, 0, 0, 1, 0, 0)') {
        direction = 1;
    }
    heroImage.style.transform = `translateY(${direction * 20}px)`;
}, 3000);

// Product Card Hover Animation
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.05)';
        product.style.transition = 'transform 0.3s';
    });
    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)';
    });
});

// Contact Popup
const contactButtons = document.querySelectorAll('.cta-btn');
const contactPopup = document.querySelector('.contact-popup');

contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.classList.add('show');
    });
});

window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.classList.remove('show');
    }
});