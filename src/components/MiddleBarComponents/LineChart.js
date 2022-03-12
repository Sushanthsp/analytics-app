import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useContext } from "react";
import { UpdateContext } from "../Context/updateContext";


function LineChart() {

  const { percentile } = useContext(UpdateContext);
  
const data = {
  labels: ["0%","20%","40%","60%","80%","100%"],
  datasets: [
    {
      label: "Percentile",
      data: ["0", "25", percentile,"20", "15", "0"],
      fill: false,
      borderColor: "#438af6"
    }
  ]
};

  return (
    <div>
      <div className="graph">
      <Line data={data} />
      </div>
    </div>
  );
}

export default LineChart;
