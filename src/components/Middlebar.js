import React from "react";
import "./Middlebar.css";
import TopBox from "./MiddleBarComponents/TopBox";

function Middlebar() {
  return (
    <div className="main">
      <div className="main_body">
        <div className="middlebar">
         <TopBox/>
        </div>

        <div className="rightbar">
          <h3>rightbar</h3>
        </div>
      </div>
    </div>
  );
}

export default Middlebar;
