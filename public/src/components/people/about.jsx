import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Individual from './individual.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const About = (props) => {
  const [leaders, setLeaders] = useState([]);

  const leads = () => {
    axios.get('/leaders')
      .then((staff) => {
        setLeaders(staff.data);
      })
      .catch((err) => err.stack)
  }

  useEffect(() => {
    leads();
  }, []);

  return (
    leaders.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <div >
        {leaders.map((i) => (
          <Individual postnomials={i.postnomials.join(', ')} name={i.name} picture={i.picture} key={i._id} />
        ))}
      </div>
  )
}



export default About;