import React from "react";
import './MicropostsList.css'
import Micropost from '../Micropost'

const MicropostsList = (props) => {
  const microposts = props.microposts;
  
  return (
    <div className="microposts__column">
      <h1>Feed</h1>
      {microposts.map((micropost) => <Micropost micropost={micropost} key={micropost.id} />)}
    </div>
    
  )
};

export default MicropostsList;
