import React from "react";
import "./ComparisionGraph.css";
import LineChart from "./LineChart";
import StackedLineChartSharpIcon from "@mui/icons-material/StackedLineChartSharp";
import { useContext } from "react";
import { UpdateContext } from "../Context/updateContext";

function ComparisionGraph() {
  const { percentile } = useContext(UpdateContext);

  return (
    <div>
      <div className="gcontainer">
        <div className="gheader">
          <div className="gStat">
            <div className="gnumbers">
              <h3 className="grank">Comparision graph</h3>
              <h4 className="gbottom">
                You Scored {percentile} percent which is lower than the Average
                percentile 72% of all the engineers who took this assesment
              </h4>
            </div>
            <div className="gicon">
              <StackedLineChartSharpIcon />
            </div>
          </div>
        </div>

        <div className="graph">
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default ComparisionGraph;
