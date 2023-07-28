import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Individual = (props) => {

  return (
    <div display="flex">
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
          <Typography variant="h7" color="text.secondary">
            Add more about here
          </Typography>
        </CardContent>
      </Card>

    </div>
  )
}

export default Individual;