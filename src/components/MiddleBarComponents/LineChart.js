import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useContext } from "react";
import { UpdateContext } from "../Context/updateContext";

var options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function LineChart() {
  const { percentile } = useContext(UpdateContext);

  const lab = ["0%", "20%", "40%", "60%", "80%", "100%"];

  const data = {
    labels: lab,
    datasets: [
      {
        label: "Percentile",
        data: ["0", "25", percentile, "20", "15", "0"],
        fill: false,
        borderColor: "#438af6",
      },
    ],
  };

  return (
    <div>
      <div className="graph">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
