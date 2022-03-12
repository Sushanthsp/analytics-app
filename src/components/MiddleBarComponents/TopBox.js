import React from "react";
import "./TopBox.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

function TopBox() {
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
            <p>Hypertext Markpup language Hypertext Markpup language</p>
          </div>

        </div>
        <div className="button">
          <Button variant="contained">Update</Button>
        </div>
      </div>
    </div>
  );
}

export default TopBox;
