import React from "react";
import "./QuickStat.css";
import Button from "@mui/material/Button";

function QuickStat() {
  return (
    <div>
      <div className="container">
        <div className="Stat">
        <div className="fStat">
            <div className="icon">
              <Button variant="contained">icon</Button>
            </div>
            <div className="numbers">
              <h2 className="rank">
                567
              </h2>
              <h4 className="bottom">
               rank
              </h4>
            </div>
          </div>
        </div>
        <div className="Stat">
        <div className="fStat">
            <div className="icon">
              <Button variant="contained">icon</Button>
            </div>
            <div className="numbers">
              <h2 className="rank">
                567
              </h2>
              <h4 className="bottom">
               rank
              </h4>
            </div>
          </div>
        </div>
        <div className="Stat">
        <div className="fStat">
            <div className="icon">
              <Button variant="contained">icon</Button>
            </div>
            <div className="numbers">
              <h2 className="rank">
                567
              </h2>
              <h4 className="bottom">
               rank
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStat;
