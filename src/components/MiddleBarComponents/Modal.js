import React, { useState } from "react";
import "./Modal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { UpdateContext } from "../Context/updateContext";
import { useContext } from "react";
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid #193282",
  boxShadow: 24,
  p: 4,
  borderRadius : 4
};

function Modals({ handleClose, open }) {
  const { setScores } = useContext(UpdateContext);

  const [input, setInput] = useState({ rank: "", percentile: "", score: "" });

  const handleClick = (e) => {
    e.preventDefault();
    setScores(input.rank, input.percentile, input.score);
    setInput({ rank: "", percentile: "", score: "" });
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mcontainer">
            
              <div className="mheader">
                <div className="left">
                  <h2>Update Skill Scores</h2>
                </div>
                <div className="logo"><img src="https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png" alt="" /></div>
              </div>

              <div className="mbody">
                <div className="ranks">
                <div className="mranks">
                  <LooksOneRoundedIcon />
                  <h4>Update Your Rank</h4>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="rank"
                      onChange={onChange}
                      value={input.rank}
                    />
                  </div>
                </div>

                <div className="ranks">
                <div className="mranks">
                  <LooksTwoRoundedIcon />
                  <h4>Update your percentile(Out of 100%)</h4></div>
                  <div className="input">
                    <input
                      type="text"
                      name="percentile"
                      onChange={onChange}
                      value={input.percentile}
                    />
                  </div>
                </div>

              
                <div className="ranks">
                <div className="mranks">
                  <Looks3RoundedIcon />
                  <h4>Update your current Score(Out of 15)</h4></div>
                  <div className="input">
                    <input
                      type="text"
                      name="score"
                      onChange={onChange}
                      value={input.score}
                    />
                  </div>
              </div>
              
              </div>

              <div className="mfooter">
                <div className="mbuttons">

                  <div className="cancelBut">
                    <Button variant="outlined" onClick={handleClose}>close</Button>
                  </div>

                  <div className="updateBut">
                    <Button variant="contained" onClick={handleClick}>Update<ArrowRightAltIcon/></Button>
                  </div>

                </div>

              </div>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;
