import React, { useState, useEffect } from 'react';
import SingleTips from './singleTips.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TipsTricks = (props) => {
  return (
    props.tips.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <div >
        {props.tips.map((t) => (
          <SingleTips title={t.title} info={t.info} key={t._id} />
        ))}
      </div>
  )
}

export default TipsTricks;