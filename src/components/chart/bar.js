import React from "react";
import "./bar.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import data from "../Data/data.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 10;
defaults.plugins.title.color = "hsl(25, 47%, 15%)";


function Barfun() {
  return (
    <div className="container">
      <Bar
        data={{
          labels: data.map((data) => data.day), // Empty labels array to exclude weekdays
          datasets: [

            {

              label: "Spending",

              data: data.map((data) => data.amount),
              backgroundColor: data.map((_, index) =>
                index === 2 ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
              ),

              borderRadius: 5,
              pointStyle: "circle", // Set the point style to 'circle'
            },
          ],

        }}
        options={{
          plugins: {
            title: {
              text: "Spending - Last 7 Days",

              font: {
                size: 20,
                family: "DM Sans",
              },
            },
            tooltip: {
              enabled: true,
              intersect: false,
              mode: "index",
              position: "nearest",
              callbacks: {
                label: function (context) {
                  let label = ""; // Remove the color box icon
                  if (context.parsed.y !== null) {
                    label += "$" + context.parsed.y.toFixed(2);
                  }
                  return label;
                },
              },
              backgroundColor: "hsl(25, 47%, 15%)",
              bodyFontColor: "white",
              cornerRadius: 5,
              displayColors: false,
            },
          },
          tooltips: {
            enabled: false,
          },
          legend: {
            display: false, // Hide the legend
          },
        }}
      />
    </div>
  );
}

export default Barfun;
