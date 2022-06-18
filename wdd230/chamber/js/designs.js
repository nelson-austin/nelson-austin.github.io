const now = new Date();
const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.getElementById('date').innerHTML = `<em>${date}</em>`;

var text;
switch (new Date().getDay()) {
    case 1:
        text = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
        break;
    case 2:
        text = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
        break;
    default:
        text = '';
}
document.getElementById('invite').innerHTML = text;

let currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;

let y = document.lastModified;
document.getElementById('modified').innerHTML = `Last Updated: ${y}`;


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


// DISCOVER PAGE - Local Storage
const visitsDisplay = document.querySelector(".visits");

let lastVisit = Number(window.localStorage.getItem("visits-ls"));

if (lastVisit !== 0) {
	visitsDisplay.textContent = `Last visit: ${Math.floor((Date.now() - lastVisit) / 86400000)} days ago`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

localStorage.setItem("visits-ls", Date.now());

// JOIN PAGE
document.getElementById('formdate').value = date;
