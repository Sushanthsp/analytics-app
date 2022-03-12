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
                      <Avatar alt="sushanth" src="https://media.istockphoto.com/photos/portrait-of-a-smiling-young-businessman-picture-id1297832726?b=1&k=20&m=1297832726&s=170667a&w=0&h=L4wrhC9DI1fCmtKs9z2O1tzuOpSuekY9os4zBBaQFJg= "  sx={{ width: 56, height: 56 }}/>
                      <h3>Sushanth S Poojary</h3>
                  </div>     
        </div>
      </div>
    </div>
  );
}

export default Header;
