import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { weatherData } from "./helper.js";
export default function Searchbox() {
  let [city, setCity] = useState("");
  let change = (e) => {
    setCity(e.target.value);
  };

  let handlesubmit = (e) => {
    e.preventDefault();
    console.log("Dcds");
    setCity("");
    weatherData(city);
  };

  return (
    <div className="searchbox">
      <form action="" onSubmit={handlesubmit}>
        <TextField
          id="city"
          value={city}
          onChange={change}
          label="City name"
          variant="outlined"
          required
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
