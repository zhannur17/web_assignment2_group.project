// -------- NEW FINAL --------//

const apiKey = "7613c962373766adc9263c6711302df3"; 

const cities = [
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  { name: "Dubai", lat: 25.2048, lon: 55.2708 },
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Rome", lat: 41.9028, lon: 12.4964 },
  { name: "Istanbul", lat: 41.0082, lon: 28.9784 },
  { name: "Bali", lat: -8.4095, lon: 115.1889 },
  { name: "Sydney", lat: -33.8688, lon: 151.2093 },
  { name: "Cairo", lat: 30.0444, lon: 31.2357 },
  { name: "London", lat: 51.5072, lon: -0.1276 },
  { name: "Santorini", lat: 36.3932, lon: 25.4615 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 }
];

const container = document.getElementById("weatherContainer");

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const card = document.createElement("div");
    card.classList.add("weather-card");

    card.innerHTML = `
      <h3>${city.name}</h3>
      <p><strong>${data.weather[0].main}</strong> (${data.weather[0].description})</p>
      <p>🌡️ Temp: ${data.main.temp.toFixed(1)}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
    `;

    container.appendChild(card);
  } catch (err) {
    console.error("Error fetching weather for", city.name, err);
  }
}

cities.forEach(getWeather);


