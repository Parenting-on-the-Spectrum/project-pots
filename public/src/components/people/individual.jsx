import React, { useState, useEffect } from 'react';
import { Typography, Modal, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Fade';

const Individual = (props) => {
  const [flipped, setFlip] = useState(false);

  const flips = () => { setFlip(!flipped) }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const cardState = () => {
    return (
      flipped === false ? (
        <Zoom in={true} style={{ transitionDelay: `${props.delay}ms` }}>
          <Box sx={{ margin: '3%', justifyContent: 'center' }} onClick={flips}>
            <img src={props.picture}
              alt={props.name} width="250" height="250" justify-content="center" style={{ borderRadius: '15px' }} ></img>
            <Card sx={{ minWidth: 275, borderRadius: '10px' }}>
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                  {props.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {props.postnomials}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Zoom>
      )
        :
        (
          <Box sx={{ margin: '3%', justifyContent: 'center' }} onClick={flips}>
            <Card sx={{ minWidth: 275, borderRadius: '10px', minHeight: 350 }}>
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                  {props.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {props.postnomials}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )
    )
  };

  useEffect(() => { cardState() }, [flipped]);

  return cardState()
}

export default Individual;