import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Modal, Box } from "@mui/material";
import SingleProvider from './singleProvider.jsx';

const Providers = (props) => {

  return (
    <div >
      {props.providers.map((i) => (
        <SingleProvider name={i.name} link={i.link} location={i.location} key={i._id} />
      ))}
    </div>

  )
}

export default Providers;