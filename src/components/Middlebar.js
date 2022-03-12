import React from "react";
import "./Middlebar.css";
import TopBox from "./MiddleBarComponents/TopBox";
import QuickStat from "./MiddleBarComponents/QuickStat";
import ComparisionGraph from "./MiddleBarComponents/ComparisionGraph";
import HorizontalBar from "./RightBarComponents/HorizontalBar";
import DougnutChart from "./RightBarComponents/DougnutChart";

function Middlebar() {
  return (
    <div className="main">
      <div className="main_body">
        <div className="middlebar">
          <TopBox />
          <QuickStat />
          <ComparisionGraph/>
        </div>

        <div className="rightbar">
          <h3>Syllabus wise analysis</h3>
          <HorizontalBar color={"#ff7979"} text='loreum ipsum this is paragraph' value={20} />
          <HorizontalBar color={"#ff7979"} text='loreum ipsum this is paragraph' value={20} />
          <HorizontalBar color={"#ff7979"} text='loreum ipsum this is paragraph' value={20} />
          <HorizontalBar color={"#ff7979"} text='loreum ipsum this is paragraph' value={20} />
          
          <DougnutChart/>
        </div>
      </div>
    </div>
  );
}

export default Middlebar;
