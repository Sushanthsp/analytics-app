import React from 'react'
import './DougnutChart.css'
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useContext } from 'react';
import { UpdateContext } from '../Context/updateContext';

function DougnutChart() {
  const {  score } = useContext(UpdateContext);
  const data = {
    labels: ["0%","20%","40%","60%","80%","100%"],
    datasets: [
      {
        label: "Percentile",
        data: [100-score,score+30],
        fill: true,
        backgroundColor:["#438af6","#edf2fe"]
      }
    ]
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
            You Scored {score} questions out of 15. However it still needs some imrovement
      </h4>
        </div>
      </div>
      <Doughnut data={data}/>
    </div>
  )
}

export default DougnutChart