import React from "react";
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <a id="logo" href="/">sample app</a>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/">Account</Link>
          <ul className="dropdown__content">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li className="divider"></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </li>
        <li><Link to="/newpost"><button>New Post</button></Link></li>
      </ul>
    </div>
  )
};

export default Header;
