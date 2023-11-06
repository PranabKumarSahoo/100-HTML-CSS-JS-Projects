const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
const locationError = document.getElementById("location-error");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", () => {
    const cityName = cityInput.value;
    if (cityName === "") {
        weatherInfo.innerHTML = "&#42;Input field is required.".fontcolor('red');
    }
    else {
        const apiKey = "aac49b9077eb4a821e39072e6a069303";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const cityName = data.name;
                const temperature = Math.round(data.main.temp) + "°C";
                const description = data.weather[0].description;
                const windspeed = data.wind.speed + " m/s";
                const humid = data.main.humidity + "%";
                const weather = `<p><b>City:</b> ${cityName}</p><p><b>Description:</b> ${description}</p><p><b>Temperature:</b> ${temperature}</p><p><b>Wind Speed:</b> ${windspeed}</p><p><b>Humidity:</b> ${humid}</p>`;
                weatherInfo.innerHTML = weather;

                const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                weatherIcon.src = weatherIconUrl;

                locationError.style.display = "none";
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                locationError.style.display = "block";
                weatherInfo.innerHTML = "";
                weatherIcon.src = "";
            });
    }
});