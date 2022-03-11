import React from "react";
import "./TopBox.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function TopBox() {
  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  }
    const handleOpen = " ";
    const handleClose = "";
  return (
    <div>
      <div className="container">
        <div className="img">
          <img
            src="https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png"
            alt=""
          />
        </div>
        <div className="text">
          <h3>HTML this is paragraph</h3>
          <p>this is paragraph this is paragraph</p>
        </div>
        <div className="button">
          <Button onClick={handleOpen} variant="contained">Open modal</Button>
          <Modal
           
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title">Text in a modal</h2>
              <p id="parent-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <ChildModal />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TopBox;
