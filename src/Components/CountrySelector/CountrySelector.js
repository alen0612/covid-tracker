import "./CountrySelector.css";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Axios from "axios";

function CountrySelector(props) {
  const [countries, setCountries] = useState(["Global"]);
  const [currentCountry, setCurrentCountry] = useState("Global");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api/countries")
      .then((res) => {
        //console.log(res.data.countries);
        Object.entries(res.data.countries).forEach(([key, value]) => {
          setCountries((prev) => [...prev, value.name]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setCurrentCountry(event.target.value);
    props.setCurrentCountry(event.target.value);
    //console.log(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
    }, 750);
  };

  /*value={country}*/
  return (
    <div className="CountrySelector">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        transitionDuration={150}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCountry}
          label="Country"
          onChange={handleChange}
          onClose={handleToggle}
        >
          {countries.map((c, i) => (
            <MenuItem key={i} value={c}>
              {c}
            </MenuItem>
          ))}
          {/* <MenuItem value={"Global"}>Global</MenuItem>
          <MenuItem value={"Ten"}>Ten</MenuItem>
          <MenuItem value={"Twenty"}>Twenty</MenuItem>
          <MenuItem value={"Thirty"}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}

export default CountrySelector;
