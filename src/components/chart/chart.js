import React from "react";
import "./chart.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import data from "../Data/data.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Chart() {
  return (
    
    <div className="head-container">
      <Bar
  data={{
    labels: data.map((data) => data.day),
    datasets: [
      {
        data: data.map((data) => data.amount),
        backgroundColor: ["hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)"],
        borderRadius: 5,
      },
    ],
  }}
  options={{
    plugins: {
      title: {
        text: "Spending - Last 7 Days",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            
            if (context.parsed.y !== null) {
              label += '$' + context.parsed.y.toFixed(2); // Add dollar sign and format amount
            }

            return label;
          },
        },
      },
    },
  }}
/>

      <div className="bottomText">
        Total this month
    </div>
    </div>
    
   
  );
}

export default Chart;
