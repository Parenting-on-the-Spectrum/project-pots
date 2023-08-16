import React, { useState, useEffect } from 'react';
import singleCareVid from './singleCareVid.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CareGiverVideos = (props) => {

  return (
    <div >
    {/* {props.tips.map((t) => (
      <SingleTips title={t.title} info={t.info} key={t._id} />
    ))} */}
    Caregiver
  </div>
  )
}

export default CareGiverVideos;
/*
    props.PROP_NAME_HERE.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
*/