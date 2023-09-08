import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCareVid from './singleCareVid.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CareGiverVideos = (props) => {
  const [careVids, setCareVids] = useState([]);
  var counter = 0;

  let careGivers = () => {
    axios.get('/careVids')
      .then((snips) => {
        setCareVids(snips.data.slice(1));
      })
      .catch((err) => err.stack)
  }

  useEffect(() => {
    careGivers();
  }, []);

  return (
    careVids.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <Box sx={{ display: 'inline-flex', width: ' 80%' }}>
        {careVids.map((k) => (
          <SingleCareVid thumbnails={k.snippet.thumbnails} description={k.snippet.description}
            title={k.snippet.title} key={counter++} id={k.id.videoId} />
        ))}
      </Box>

  )
}

export default CareGiverVideos;