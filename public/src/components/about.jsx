import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';

const About = (props) => {

  return (
    <div>

{/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}

      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
      <img src="https://i1.wp.com/handtohold.org/wp-content/uploads/2022/01/Cynthia-Shogreen-1.31.2022.png"
      alt="Cynthia" width="300" height="300" align="center"></img>
        Cynthia Shogreen
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
        BCBA, LMHC, MBA
      </Typography>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} padding="1%" align="center">
        Creator
      </Typography>

    </div>
  )
}

export default About;