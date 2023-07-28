import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Modal, Box } from "@mui/material";

const Providers = (props) => {

  return (
    <div>
      {props.name}, {props.link}, {props.location}
    </div>

  )
}

export default Providers;