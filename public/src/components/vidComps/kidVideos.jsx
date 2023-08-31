import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleKidVid from './singleKidVid.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const KidVideos = (props) => {
  const [kids, setKids] = useState([]);
  var counter = 0;

  let kidVidFetch = () => {
    axios.get('/kideos')
      .then((snips) => {
        setKids(snips.data.slice(1));
      })
      .catch((err) => err.stack)
  }

  useEffect(() => {
    kidVidFetch();
  }, []);

  return (
    kids.length === 0 ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      :
      <div display="flex">
        {kids.map((k) => (
          <SingleKidVid thumbnails={k.snippet.thumbnails} description={k.snippet.description}
            title={k.snippet.title} key={counter++} id={k.id.videoId}/>
        ))}
      </div>
  )
}

export default KidVideos;