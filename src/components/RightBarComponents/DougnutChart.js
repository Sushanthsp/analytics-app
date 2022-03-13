import React from "react";
import "./DougnutChart.css";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useContext } from "react";
import { UpdateContext } from "../Context/updateContext";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DougnutChart() {
  const { score } = useContext(UpdateContext);
 
  const data = {
    datasets: [
      {
        label: "Percentile",
        data: [15-score, score],
        fill: true,
        backgroundColor: ["#438af6", "#edf2fe"],
      },
    ],
  };

  return (
    <div>
      <div className="footc">
        <div className="head">
          <div className="te">
            <h3>Question Analysis</h3>
          </div>
          <div className="scor">
            <h3>{score}/15</h3>
          </div>
        </div>
        <div className="para">
          <h4>
            You Scored {score} questions out of 15. However it still needs some
            imrovement
          </h4>
        </div>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DougnutChart;
