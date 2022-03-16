import React from "react";
import "./Middlebar.css";
import TopBox from "./MiddleBarComponents/TopBox";
  import SidebarOption from "./SidebarOption";
 import DashboardIcon from "@mui/icons-material/Dashboard";

function Middlebar() {
  return (
    <div className="main">
      <div className="main_body">
        <div className="middlebar">
         
          <TopBox />
          <TopBox />
          <TopBox />
          <TopBox />
          <TopBox />
           
        </div>

        <div className="rightbar">
          <div className="sidBar">
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
            <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Middlebar;
