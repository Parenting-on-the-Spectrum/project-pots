import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCareVid from './singleCareVid.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CareGiverVideos = (props) => {
  const [careVids, setCareVids] = useState([]);
  const [slice, setSlice] = useState(4)
  var counter = 0;

  let careGivers = () => {
    axios.get('/careVids')
      .then((snips) => {
        setCareVids(snips.data.slice(1));
      })
      .catch((err) => err.stack)
  }

  const show = () => {
    if (slice < careVids.length) {
      return (
        <center>
          <Button variant="contained" onClick={(e) => {
            e.preventDefault();
            setSlice(slice + 4)
          }}>
            More Videos
          </Button>
        </center>
      )
    }
    else { return; }
  }

  useEffect(() => {
    careGivers();
    show();
  }, []);

  return (
    careVids.length === 0 ?
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
      :
      <div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {careVids.slice(0, slice).map((k) => (
          <SingleCareVid thumbnails={k.snippet.thumbnails} description={k.snippet.description}
            title={k.snippet.title} key={counter++} id={k.id.videoId} />
        ))}
      </Box>
      {show()}
      </div>
  )
}

export default CareGiverVideos;