import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const About = (props) => {

  return (
    <div display="flex">

<img src="https://i1.wp.com/handtohold.org/wp-content/uploads/2022/01/Cynthia-Shogreen-1.31.2022.png"
      alt="Cynthia" width="300" height="300" justify-content="center"></img>
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          Cynthia Shogreen
        </Typography>
        <Typography variant="h6" color="text.secondary">
          BCBA, LMHC, MBA, Creator
        </Typography>
        <Typography variant="h7" color="text.secondary">
          Add more about here
        </Typography>
      </CardContent>
    </Card>

    </div>
  )
}

export default About;