import React from "react";
import "./QuickStat.css";
import { useContext } from "react";
import { UpdateContext } from "../Context/updateContext";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotesSharpIcon from "@mui/icons-material/NotesSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";

function QuickStat() {
  const { rank, percentile, score } = useContext(UpdateContext);

  return (
    <div>
      <div className="topCon">
        <h3 className="h">Quick Statistics</h3>
        <div className="container">
          <div className="Stat">
            <div className="fStat">
              <div className="icon">
                <EmojiEventsIcon />
              </div>
              <div className="numbers">
                <h2 className="rank">{rank}</h2>
                <h4 className="bottom">YOUR RANK</h4>
              </div>
            </div>
          </div>
          <div className="Stat">
            <div className="fStat">
              <div className="icon">
                <NotesSharpIcon />
              </div>
              <div className="numbers">
                <h2 className="rank">{percentile}</h2>
                <h4 className="bottom">PERCENTILE</h4>
              </div>
            </div>
          </div>
          <div className="Stat">
            <div className="fStat">
              <div className="icon">
                <CheckBoxSharpIcon />
              </div>
              <div className="numbers">
                <h2 className="rank">{score}/15</h2>
                <h4 className="bottom">CORRECT ANSWERS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStat;
