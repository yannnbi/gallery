const shapes = document.querySelectorAll('.transition-shape');
const links = document.querySelectorAll('.transition-link');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.href;

        // Start preloading the next page
        const preload = fetch(href, { method: 'GET', mode: 'no-cors' }).catch(() => {});

        // Pick a random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        // Position at link center
        const rect = link.getBoundingClientRect();
        shape.style.left = `${rect.left + rect.width / 2 - 100}px`;
        shape.style.top = `${rect.top + rect.height / 2 - 100}px`;

        // Reset and start animation
        shape.style.display = 'block';
        shape.classList.remove('animate');
        requestAnimationFrame(() => shape.classList.add('animate'));

        // Navigate after animation ends
        shape.addEventListener('animationend', () => {
            window.location.href = href; // go to next page
        }, { once: true });
    });
});


// Loading screen fade-out
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 500);
});
