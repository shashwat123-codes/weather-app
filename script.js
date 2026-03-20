async function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "7496d5677c79ff6f45e63bfacbcca7c3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("result").innerHTML = "City not found ❌";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>🌥 Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    console.log(error);
    document.getElementById("result").innerHTML = "Error fetching data";
  }
}