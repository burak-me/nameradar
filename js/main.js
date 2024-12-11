// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Screenshot slider hover durumunda durma
const slider = document.querySelector('.screenshot-slider');

slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});

// Görüntüye tıklandığında büyük gösterme
const screenshots = document.querySelectorAll('.screenshot-slider img');
screenshots.forEach(screenshot => {
    screenshot.addEventListener('click', () => {
        screenshot.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err.message);
        });
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Add gradient animation to feature cards
const cards = document.querySelectorAll('.feature-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(37, 38, 64, 1) 0%,
                rgba(26, 27, 46, 1) 100%
            )
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'var(--card-background)';
    });
});
