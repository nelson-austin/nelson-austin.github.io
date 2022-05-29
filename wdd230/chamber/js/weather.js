function weather() {

    const apiKey = 'fddb75827544bb7915ab737cd8bd0e60';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${apiKey}&units=imperial`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather, wind } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
        }.svg`;

        if (main.temp < 50 && wind.speed > 3) {
        let windchill = 35.74 + (.6215 * main.temp) - (35.75 * wind.speed ** .16) + (.4275 * main.temp * wind.speed ** .16);
        } else {
            windchill = 'N/A';
        }

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp"><span>Temperature: ${Math.round(main.temp)}<sup>°F</sup></span></div>
        <div class="city-windspeed"><span>Wind Speed: ${Math.round(wind.speed)} mph</span></div>
        <div class="city-windchill"><span>Windchill: ${windchill}</span></div>
        <figure>
            <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
        }">
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        `;
        li.innerHTML = markup;
        document.querySelector('.cities').appendChild(li);
    })

}

weather();