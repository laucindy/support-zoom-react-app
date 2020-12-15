import React from "react";
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>      
    </div>
  )
};

export default Footer;
