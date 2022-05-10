import "./Result.css";
import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

function Result(props) {
  const BarData = {
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

  const BarOptions = {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Current state in " + props.currentCountry,
      },
    },
  };

  const LineData = {
    // labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
    // datasets: [
    //   {
    //     data: dailyData.map((data) => data.confirmed),
    //     label: "Infected",
    //     borderColor: "#3333ff",
    //     fill: true,
    //   },
    //   {
    //     data: dailyData.map((data) => data.deaths),
    //     label: "Deaths",
    //     borderColor: "red",
    //     backgroundColor: "rgba(255, 0, 0, 0.5)",
    //     fill: true,
    //   },
    //   {
    //     data: dailyData.map((data) => data.recovered),
    //     label: "Recovered",
    //     borderColor: "green",
    //     backgroundColor: "rgba(0, 255, 0, 0.5)",
    //     fill: true,
    //   },
    // ],
  };

  return (
    <div className="Result">
      <Bar options={BarOptions} data={BarData} className="Bar" />;
      {/* <Line data={LineData} className="Line" /> */}
    </div>
  );
}

export default Result;
