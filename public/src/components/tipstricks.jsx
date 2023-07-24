import React, { useState, useEffect } from 'react';
// import SingleTips from './singleTips.jsx';
import axios from 'axios';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const About = (props) => {

  return (
    <div >
      {props.people.map((i) => (
        <Individual postnomials={i.postnomials.join(', ')} name={i.name} picture={i.picture} key={i._id} />
      ))}
    </div>
  )
}

export default About;