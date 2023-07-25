import React, { useState, useEffect } from 'react';
import SingleTips from './singleTips.jsx';
import axios from 'axios';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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