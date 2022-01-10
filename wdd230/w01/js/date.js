let x = document.lastModified;
document.getElementById('date').innerHTML = `Last Updated: ${x}`;

let currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;