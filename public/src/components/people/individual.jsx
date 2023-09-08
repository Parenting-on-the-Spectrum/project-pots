import React from 'react';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

const Individual = (props) => {

  return (
    <Box sx={{margin: '5%'}}>
      <img src={props.picture}
        alt={props.name} width="300" height="300" justify-content="center"></img>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            {props.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {props.postnomials}
          </Typography>
          {/* <Typography variant="h7" color="text.secondary">
            Add more about here
          </Typography> */}
        </CardContent>
      </Card>

    </Box>
  )
}

export default Individual;