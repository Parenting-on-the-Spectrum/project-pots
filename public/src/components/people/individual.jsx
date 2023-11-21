import React, { useState, useEffect } from 'react';
import { Typography, Modal, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Fade';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Individual = (props) => {
  const [flipped, setFlip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const styler = () => {
    if (isHovering) {
      return {
        opacity: 0.5,
      }
    }
  }

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
        <Zoom in={true} style={{ transitionDelay: '100ms' }}>
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
          <Zoom in={true} style={{ transitionDelay: '100ms' }}>
            <Box sx={{ margin: '3%', justifyContent: 'center' }}>
              <Card sx={{ width: 275, borderRadius: '10px', height: 350 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    {props.bio}
                  </Typography>
                </CardContent>
                <ArrowBackIcon onClick={flips}
                  style={styler()}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)} />
              </Card>
            </Box>
          </Zoom>
        )
    )
  };

  useEffect(() => { cardState() }, [flipped]);

  return cardState()
}

export default Individual;