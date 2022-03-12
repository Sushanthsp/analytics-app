import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, selected }) {
  return (
    <div>
      <div className={`SidebarOption ${selected && "sidebarOption--active"}`}>
        <Icon />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default SidebarOption;
