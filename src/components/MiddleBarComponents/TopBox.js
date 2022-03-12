import React, { useState } from "react";
import "./TopBox.css";
import Button from "@mui/material/Button";
import Modals from "./Modal";

function TopBox() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="container">
        <div className="text">
          <div className="img">
            <img
              src="https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png"
              alt=""
            />
          </div>

          <div className="middleP">
            <h3>Hypertext Markpup language</h3>
            <p>Question: 08 | Duration: 15mins | Submitted on 05 June 2021</p>
          </div>
        </div>
        <div className="button">
          <Button onClick={handleOpen} variant="contained">
            Update
          </Button>
          {open && <Modals open={open} handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}

export default TopBox;
