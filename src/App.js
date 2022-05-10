import "./App.css";
import Axios from "axios";
import Card from "./Components/Card/Card";
import CountrySelector from "./Components/CountrySelector/CountrySelector";
import { useEffect, useState } from "react";
import Result from "./Components/Result/Result";

function App() {
  const [currentCountry, setCurrentCountry] = useState("Global");
  const [infected, setInfected] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    if (currentCountry === "Global") {
      Axios.get("https://covid19.mathdro.id/api/")
        .then((res) => {
          //console.log(res.data);
          setInfected(res.data.confirmed.value);
          setRecovered(res.data.recovered.value);
          setDeaths(res.data.deaths.value);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Axios.get("https://covid19.mathdro.id/api/countries/" + currentCountry)
        .then((res) => {
          //console.log(res.data);
          setInfected(res.data.confirmed.value);
          setRecovered(res.data.recovered.value);
          setDeaths(res.data.deaths.value);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    Axios.get("https://covid19.mathdro.id/api")
      .then((res) => {
        //console.log(res.data.lastUpdate);
        let date = res.data.lastUpdate.slice(0, 10);
        let time = res.data.lastUpdate.slice(11, 19);
        setLastUpdate(date + " " + time);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentCountry]);

  let tmp = false;

  if (!tmp) {
    tmp = true;
    Axios.get("https://api.covidtracking.com/v1/us/daily.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="Covid-tracker">Covid Tracker</div>
      <div className="Last-update">Last update : {lastUpdate}</div>
      <Card infected={infected} recovered={recovered} deaths={deaths} />
      <CountrySelector setCurrentCountry={setCurrentCountry} />
      <Result
        infected={infected}
        recovered={recovered}
        deaths={deaths}
        currentCountry={currentCountry}
      />
    </div>
  );
}

export default App;
