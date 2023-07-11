import React, { useState, useEffect } from 'react';
import Individual from './individual.jsx';
import axios from 'axios';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const About = (props) => {


  return (
    <div >
      {props.people.map((i) => (
        <Individual postnomials={i.postnomials.join(', ')} name={i.name} picture={i.picture} key={i.leader_id} />
      ))}
    </div>
  )
}

export default About;