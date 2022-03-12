import React from "react";
import "./ComparisionGraph.css";
import Button from "@mui/material/Button";


function ComparisionGraph() {
  return (
    <div>
          <div className="gcontainer">
          <div className="gheader">
        <div className="gStat">
            
            <div className="gnumbers">
              <h2 className="grank">
                567
              </h2>
              <h4 className="gbottom">
               rank
                          </h4>
                          
                      </div>
                      <div className="gicon">
              <Button variant="contained">icon</Button>
            </div>
          </div>
        </div>
              
                  <div className="graph">
                      this is graph
                  </div>

             
             
              
              
      </div>
    </div>
  );
}

export default ComparisionGraph;
