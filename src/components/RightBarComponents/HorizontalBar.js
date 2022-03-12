import React from "react";
import "./HorizontalBar.css";
import ProgressBar from "./Progress";

function HorizontalBar({ value, color, text }) {
  return (
    <div className="horizontalBar">
      <h4>{text}</h4>
      <ProgressBar color={color} width={"250px"} value={value} max={100} />
    </div>
  );
}

export default HorizontalBar;
