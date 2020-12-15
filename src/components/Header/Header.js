import React from "react";
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <a id="logo" href="/">sample app</a>
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Users</a></li>
        <li><a href="/">Account</a></li>
        <li><button>New Post</button></li>
      </ul>
    </div>
  )
};

export default Header;
