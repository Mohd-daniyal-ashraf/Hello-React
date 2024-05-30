async function weatherData(city) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1031e82180981b48e6b9fba105594774";
  try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsondata = await response.json();
    let alldata = {
      city: city,
      temp: jsondata.main.temp,
      mintemp: jsondata.main.temp_min,
      maxtemp: jsondata.main.temp_max,
      humidity: jsondata.main.humidity,
      feelslike: jsondata.main.feels_like,
      weather: jsondata.weather[0].description,
    };
    console.log(alldata);
    return alldata;
  } catch (err) {
    console.log("error");
  }
}
export { weatherData };
