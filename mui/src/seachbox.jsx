import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { weatherData } from "./helper.js";

// --------------------------------------------------------------

export default function Searchbox({ updateInfo }) {
  let [error, setError] = useState(false);
  let [city, setCity] = useState("");
  let change = (e) => {
    setCity(e.target.value);
  };

  let handlesubmit = async (e) => {
    e.preventDefault();
    setCity("");
    let info = await weatherData(city);
    if (info) {
      updateInfo(info);
      setError(false);
    } else {
      setError(true);
    }
    console.log(error);
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
        {error && <p style={{ color: "red" }}>No such Place exsit</p>}
      </form>
    </div>
  );
}
