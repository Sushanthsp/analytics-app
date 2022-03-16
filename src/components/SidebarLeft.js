import React from "react";
import "./SidebarLeft.css";
import SidebarOption from "./SidebarOption";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function SidebarLeft() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_compose">
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          <SidebarOption
            Icon={WorkspacePremiumOutlinedIcon}
            selected="true"
            title="Skill Test"
          />
          <SidebarOption Icon={EmojiEventsIcon} title="Internships" />
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          <SidebarOption
            Icon={WorkspacePremiumOutlinedIcon}
            selected="true"
            title="Skill Test"
          />
          <SidebarOption Icon={EmojiEventsIcon} title="Internships" />
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          <SidebarOption
            Icon={WorkspacePremiumOutlinedIcon}
            selected="true"
            title="Skill Test"
          />
          <SidebarOption Icon={EmojiEventsIcon} title="Internships" />
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          <SidebarOption
            Icon={WorkspacePremiumOutlinedIcon}
            selected="true"
            title="Skill Test"
          />
          <SidebarOption Icon={EmojiEventsIcon} title="Internships" />
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          <SidebarOption
            Icon={WorkspacePremiumOutlinedIcon}
            selected="true"
            title="Skill Test"
          />
          <SidebarOption Icon={EmojiEventsIcon} title="Internships" />
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
          <SidebarOption
            Icon={WorkspacePremiumOutlinedIcon}
            selected="true"
            title="Skill Test"
          />
          <SidebarOption Icon={EmojiEventsIcon} title="Internships" />
        </div>
      </div>
      
    </div>
  );
}

export default SidebarLeft;
