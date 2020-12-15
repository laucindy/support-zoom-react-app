import React from "react";
import { Link } from 'react-router-dom'
import './User.scss'

const User = (props) => {
  const user = props.user;

  return (
    <div className="user">
      <img className="user__gravatar" src="{micropost.gravatar}" />
      <p className="user__name"><Link to="/">{user.name}</Link> | <a className="delete" href="/">delete</a> </p>
    </div>
  )
};

export default User;
