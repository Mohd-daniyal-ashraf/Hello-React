async function weatherData(city) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1031e82180981b48e6b9fba105594774";
  let response = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  let jsondata = await response.json();
  console.log(jsondata);
}
export { weatherData };
