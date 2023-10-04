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

  let counter = 0;

  return (
    leaders.length === 0 ?
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
      :
      <center><Box sx={{ display: 'inline-flex', width: ' 80%', flexWrap: 'wrap' }}>
        {leaders.map((i) => (
          <Individual postnomials={i.postnomials.join(', ')} name={i.name} picture={i.picture} key={i._id} delay={counter += 200} />
        ))}
      </Box>
      </center>
  )
}



export default About;