import React, { useState, useEffect } from 'react';
import SingleTips from './singleTips.jsx';

const TipsTricks = (props) => {

  return (
    <div >
    {props.tips.map((t) => (
      <SingleTips title={t.title} info={t.info} key={t._id} />
    ))}
  </div>
  )
}

export default TipsTricks;