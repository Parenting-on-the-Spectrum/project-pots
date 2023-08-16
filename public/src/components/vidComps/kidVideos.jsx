import React, { useState, useEffect } from 'react';
import SingleKidVid from './singleKidVid.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const KidVideos = (props) => {
  var counter = 0;
  return (
    props.kids.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <div >
        {props.kids.map((k) => (
          <SingleKidVid thumbnails={k.snippet.thumbnails} description={k.snippet.description}
            title={k.snippet.title} key={counter++} />
        ))}
      </div>
  )
}

export default KidVideos;