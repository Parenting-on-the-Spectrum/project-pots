import React, { useState, useEffect } from 'react';
import SingleCommunity from './singleCommunity.jsx';

const Community = (props) => {

  return (
    <div >
      {props.community.map((i) => (
        <SingleCommunity name={i.name} link={i.link} location={i.location} key={i._id} />
      ))}
    </div>
  )
}

export default Community;