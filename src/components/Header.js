import React from "react";
import "./Header.css";
import logo from "./logo.svg";
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
          <img src={logo} alt="logo" />
        </div>

        <div className="headerRight">
                  <div className="profile">
                      <Avatar alt="sushanth" src=""  sx={{ width: 56, height: 56 }}/>
                      <h3>Sushanth S Poojary</h3>
                  </div>     
        </div>
      </div>
    </div>
  );
}

export default Header;
