import "./Result.css";
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Result(props) {
  const data = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "This will be hide",
        data: [props.infected, props.recovered, props.deaths],
        backgroundColor: [
          "rgba(63, 63, 194, 0.8)",
          "rgba(48, 193, 48, 0.8)",
          "rgba(237, 83, 83, 0.8)",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Current state in " + props.currentCountry,
      },
    },
  };

  return (
    <div className="Result">
      <Bar options={options} data={data} className="Bar" />;
    </div>
  );
}

export default Result;
