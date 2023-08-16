import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Individual from './individual.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const About = (props) => {
  return (
    props.resources.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <div >
        {props.people.map((i) => (
          <Individual postnomials={i.postnomials.join(', ')} name={i.name} picture={i.picture} key={i._id} />
        ))}
      </div>
  )
}

export default About;