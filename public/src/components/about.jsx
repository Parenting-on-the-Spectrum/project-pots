import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";

const About = (props) => {

  let image = {
    display: 'flex',
    width: 20,
    height: 20,
  },

  return (
    <div>
            <img src="https://i1.wp.com/handtohold.org/wp-content/uploads/2022/01/Cynthia-Shogreen-1.31.2022.png"
      alt="Cynthia" styles={image}></img>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
        Cynthia Shogreen
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
        BCBA, LMHC, MBA
      </Typography>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} padding="1%" align="center">
        Creater
      </Typography>

    </div>
  )
}

export default About;