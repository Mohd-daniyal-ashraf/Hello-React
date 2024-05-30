import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { weatherData } from "./helper.js";

// --------------------------------------------------------------

export default function Searchbox({ updateInfo }) {
  let [city, setCity] = useState("");
  let change = (e) => {
    setCity(e.target.value);
  };

  let handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Dcds");
    setCity("");
    let info = await weatherData(city);
    if (info) {
      updateInfo(info);
    }
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
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
