import React from "react";
import './ProfileCard.scss'

const ProfileCard = (props) => {
  const user = props.user;
  return (
    <div className="profile_card">
      <img className="gravatar" src="{user.gravatar}" />
      <p className="name">{user.name}</p>
      <div className="info">
        <div><span>Microposts</span>{user.microposts}</div>
        <div><span>Followers</span>{user.followers}</div>
        <div><span>Following</span>{user.following}</div>
      </div>
    </div>
  )
};

export default ProfileCard;
