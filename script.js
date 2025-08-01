
// const btn = document.getElementById('triggerBtn');
const shapes = document.querySelectorAll('.transition-shape');
const links = document.querySelectorAll('.transition-link');

// btn.addEventListener('click', (e) => {
//   // Get button's position relative to viewport
//   const rect = e.target.getBoundingClientRect();
//   const x = rect.left + rect.width / 2;
//   const y = rect.top + rect.height / 2;

//   // Pick a random shape
//   const shape = shapes[Math.floor(Math.random() * shapes.length)];

//   // Position the shape at the button's center
//   shape.style.left = `${x - 100}px`; // assuming shape is 200x200
//   shape.style.top = `${y - 100}px`;

//   // Reset and animate
//   shape.classList.remove('animate');
//   shape.offsetHeight; // force reflow
//   shape.classList.add('animate');

//   // Cleanup after animation
//   shape.addEventListener('animationend', () => {
//     shape.classList.remove('animate');
//     shape.style.display = 'none';
//   }, { once: true });

//   shape.style.display = 'block';
// });




links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Stop link navigation for now

        const href = link.getAttribute('href'); // Save target URL

        // Get link position
        const rect = link.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Pick random shape
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

        // Position the shape at the button's center
        shape.style.left = `${x - 100}px`; // assuming shape is 200x200
        shape.style.top = `${y - 100}px`;

        // Reset and animate
        shape.classList.remove('animate');
        shape.offsetHeight; // force reflow
        shape.classList.add('animate');

        // Cleanup after animation
        shape.addEventListener('animationend', () => {
        shape.classList.remove('animate');
        shape.style.display = 'none';
        }, { once: true });

        shape.style.display = 'block';

        //After animation ends, go to new page
        shape.addEventListener('animationend', () => {
        window.location.href = href;
        }, { once: true });
    });
});


window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  loader.classList.add('fade-out');
  
  // Optional: remove from DOM after fade-out
  setTimeout(() => {
    loader.remove();
  }, 500); // match CSS transition duration
});
