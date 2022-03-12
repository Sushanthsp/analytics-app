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
          <p>Skill Test</p>
          <TopBox />
          <QuickStat />
          <ComparisionGraph/>
        </div>

        <div className="rightbar">
          <h3>Syllabus wise analysis</h3>
          <div className="sidBar">

         
          <HorizontalBar color={"#428af7"} text='HTML TOOLS, FORMS, HISTORY' value={80} />
          <HorizontalBar color={"#f89140"} text='Tags and References in HTML' value={60} />
          <HorizontalBar color={"#f3565e"} text='Tables and CSS Basics' value={24} />
          <HorizontalBar color={"#5cca73"} text='loreum ipsum this is paragraph' value={96} />
          </div>

          <div className="doughnut">
          <DougnutChart/>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Middlebar;
