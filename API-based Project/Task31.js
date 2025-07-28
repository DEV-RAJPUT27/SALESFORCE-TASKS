
    const apiKey = "1b75a25c538e4d2ea98202104252807";

    function getWeather() {
      let city = document.getElementById("cityInput").value;
      if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
      }
      fetchWeather(city);
    }

    function getLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const query = `${lat},${lon}`;
          fetchWeather(query);
        }, () => {
          alert("Unable to retrieve your location.");
        });
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    }

    function fetchWeather(query) {
      let currentURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;
      let forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=5`;

      fetch(currentURL)
        .then(response => response.json())
        .then(data => {
          document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
          document.getElementById("localTime").innerText = `Local Time: ${data.location.localtime}`;
          document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
          document.getElementById("conditionText").innerText = `Condition: ${data.current.condition.text}`;
          document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
          document.getElementById("wind").innerText = `Wind: ${data.current.wind_kph} kph`;
          document.getElementById("weatherIcon").src = `https:${data.current.condition.icon}`;

          document.getElementById("resultBox").style.display = "block";
        })
        .catch(error => {
          alert("City not found. Please try again.");
          console.error(error);
        });

      fetch(forecastURL)
        .then(response => response.json())
        .then(data => {
          let forecastHTML = "";
          data.forecast.forecastday.forEach(day => {
            forecastHTML += `
              <div class="forecast-day">
                <p>${day.date}</p>
                <img src="https:${day.day.condition.icon}" alt="">
                <p>${day.day.avgtemp_c}°C</p>
                <p>${day.day.condition.text}</p>
              </div>
            `;
          });
          document.getElementById("forecastBox").innerHTML = forecastHTML;
          document.getElementById("forecastBox").style.display = "flex";
        });
    }
  