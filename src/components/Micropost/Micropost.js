import React from "react";
import './Micropost.scss'

const Micropost = (props) => {
  const micropost = props.micropost
  return (
    <div className="micropost">
      <img className="micropost__gravatar" src="{micropost.gravatar}" />
      <div className="micropost__info">
        <p className="micropost__title">
          <span className="micropost__title-name">{micropost.user}</span> - {micropost.created_at}
        </p>
        <p className="micropost__content">{micropost.content}</p>
        <p className="micropost__followers">{micropost.followers} followers</p>
      </div>
      
    </div>
  )
};

export default Micropost;
