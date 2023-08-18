import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleTips from './singleTips.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TipsTricks = (props) => {
  const [tipTrick, setTipTrick] = useState([]);

  const tips = () => {
    axios.get('/tipstricks')
      .then((tricks) => {
        setTipTrick(tricks.data);
      })
      .catch((err) => err.stack)
  }

  useEffect(() => {
    tips();
  }, []);

  return (
    tipTrick.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <div >
        {tipTrick.map((t) => (
          <SingleTips title={t.title} info={t.info} key={t._id} />
        ))}
      </div>
  )
}

export default TipsTricks;