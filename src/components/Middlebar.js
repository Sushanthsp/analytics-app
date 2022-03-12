import React from "react";
import "./Middlebar.css";
import TopBox from "./MiddleBarComponents/TopBox";
import QuickStat from "./MiddleBarComponents/QuickStat";

function Middlebar() {
  return (
    <div className="main">
      <div className="main_body">
        <div className="middlebar">
          <TopBox />
          <QuickStat/>
        </div>

        <div className="rightbar">
          <h3>rightbar</h3>
        </div>
      </div>
    </div>
  );
}

export default Middlebar;
