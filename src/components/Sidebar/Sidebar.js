import React from "react";
import './Sidebar.scss'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {props.children}
    </div>
  )
};

export default Sidebar;
