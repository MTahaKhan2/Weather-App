 async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const apiKey = 'b1b15e88fa797225412429c1c50c122a1';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      document.getElementById('weatherResult').innerHTML = `<p>Fetching weather...</p>`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          const weatherHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ ${data.main.temp}°C</p>
            <p>☁️ ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind: ${data.wind.speed} km/h</p>
          `;
          document.getElementById('weatherResult').innerHTML = weatherHTML;
        } else {
          document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
        }
      } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error retrieving weather data.</p>`;
      }
    }

    function toggleTheme() {
      document.body.classList.toggle('light-theme');
    }