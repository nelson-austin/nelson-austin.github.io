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
