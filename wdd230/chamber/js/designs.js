function menuFeatures() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += " responsive";
    }  else {
        x.className = "topnav";
    }
}

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

// WEATHER ICON //



// function weather() {

//     const apiKey = 'fddb75827544bb7915ab737cd8bd0e60';

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${apiKey}&units=metric`;
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const { main, name, sys, weather } = data;
//         const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
//         weather[0]["icon"]
//         }.svg`;

//         const li = document.createElement("li");
//         li.classList.add("city");
//         const markup = `
//         <h2 class="city-name" data-name="${name},${sys.country}">
//             <span>${name}</span>
//             <sup>${sys.country}</sup>
//         </h2>
//         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
//         <figure>
//             <img class="city-icon" src="${icon}" alt="${
//         weather[0]["description"]
//         }">
//             <figcaption>${weather[0]["description"]}</figcaption>
//         </figure>
//         `;
//         li.innerHTML = markup;
//         document.querySelector('.cities').appendChild(li);
//     })

// }

// weather();