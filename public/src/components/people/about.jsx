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
    <center>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
      </center>
      :
      <center><Box sx={{ display: 'inline-flex', width: ' 80%', flexWrap: 'wrap', justifyContent: 'center' }}>
        {leaders.map((i) => (
          <Individual postnomials={i.postnomials.join(', ')} name={i.name}
          bio={i.bio} picture={i.picture} key={i._id} />
        ))}
      </Box>
      </center>
  )
}



export default About;