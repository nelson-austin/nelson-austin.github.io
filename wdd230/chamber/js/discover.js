// DISCOVER PAGE - Local Storage
const visitsDisplay = document.querySelector(".visits");

let lastVisit = Number(window.localStorage.getItem("visits-ls"));

if (lastVisit !== 0) {
	visitsDisplay.textContent = `Last visit: ${Math.floor((Date.now() - lastVisit) / 86400000)} days ago`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

localStorage.setItem("visits-ls", Date.now());

// DISCOVER PAGE - Lazy loading
const images = document.querySelectorAll('[data-src]');

function preLoadImage(img) {
    const src = img.getAttribute('data-src');
    img.onload = () => {img.removeAttribute('data-src');};
    if(!src) {
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }   else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})