import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleKidVid from './singleKidVid.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const KidVideos = (props) => {
  const [kids, setKids] = useState([]);
  const [slice, setSlice] = useState(4)
  var counter = 0;

  let kidVidFetch = () => {
    axios.get('/kideos')
      .then((snips) => {
        setKids(snips.data.slice(1));
      })
      .catch((err) => err.stack)
  }

  const show = () => {
    if (slice < kids.length) {
      return (
        <center style={{padding: '2%'}}>
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
    kidVidFetch();
    show()
  }, [slice]);

  return (
    kids.length === 0 ?
      <center>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </center>
      :
      <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {kids.slice(0, slice).map((k) => (
            <SingleKidVid thumbnails={k.snippet.thumbnails} description={k.snippet.description}
              title={k.snippet.title} key={counter++} id={k.id.videoId} />
          ))}
        </Box>
        {show()}
      </div>
  )
}

export default KidVideos;