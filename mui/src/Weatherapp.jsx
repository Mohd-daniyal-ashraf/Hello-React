import Searchbox from "./seachbox";
import Infobox from "./Infobox";
import { useState } from "react";
export default function Weatherapp() {
  const [weatherinfo, setWeatherinfo] = useState({
    city: "Lucknow",
    temp: 12,
    mintemp: 12,
    maxtemp: 12,
    humidity: 12,
    feelslike: "Thusty",
    weather: "Haze",
  });

  let updateInfo = (res) => {
    setWeatherinfo(res);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Know Weather</h1>
      <Searchbox updateInfo={updateInfo} />
      <Infobox info={weatherinfo} />
    </div>
  );
}
