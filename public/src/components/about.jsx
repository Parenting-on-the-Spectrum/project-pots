import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";

const About = (props) => {

  return (
    <div>
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