import React, { useState, useEffect } from 'react';
import SingleKidVid from './singleKidVid.jsx';

const KidVideos = (props) => {
  var counter = 0;

  return (
    <div >
    {props.kids.map((k) => (
      <SingleKidVid thumbnails={k.snippet.thumbnails} description={k.snippet.description}
      title={k.snippet.title} key={counter++} />
    ))}
  </div>
  )
}

export default KidVideos;