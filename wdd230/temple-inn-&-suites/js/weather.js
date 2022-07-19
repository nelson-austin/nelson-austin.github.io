const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-111.89&appid=fddb75827544bb7915ab737cd8bd0e60&units=imperial';

let threeDayForecast = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => {

    threeDayForecast.push(data.list[0]);
    data.list.slice(1).map((item) => {
        const hour = item.dt_txt.split(" ")[1];

        if (hour === "18:00:00") {
            threeDayForecast.push(item);
        }
    });

    for (let i = 0; i < 4; i++) {
        const currentTemp = document.querySelector("#current-temp" + (i + 1));
        const weatherIcon = document.querySelector("#weather-icon" + (i + 1));
        const currentWindSpeed = document.querySelector("#wind-speed" + (i + 1));
        const iconsrc = `https://openweathermap.org/img/wn/${threeDayForecast[i].weather[0].icon}@4x.png`;
        const desc = threeDayForecast[i].weather[0].description;
        const captionDesc = document.querySelector("#figcaption" + (i + 1));

        currentTemp.innerHTML = `${threeDayForecast[i].main.temp.toFixed(0)}`;
        currentWindSpeed.innerHTML = `${threeDayForecast[i].wind.speed.toFixed(0)}`;

        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.innerHTML = threeDayForecast[i].weather[0].description;

        const currentHumidity = document.querySelector("#humidity" + (i + 1));

        currentHumidity.innerHTML = `${threeDayForecast[i].main.humidity.toFixed(0)}`;
    }
    for (let i = 1; i < 4; i++) {
        const week_day = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
        const string = threeDayForecast[i].dt_txt;

        const date = new Date(string + 'z');
        const day = date.getDay();
        console.log(week_day[day]);
        document.querySelector(".day" + (i + 1)).innerHTML = `${week_day[day]}`;
    }
});