import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Modal, Box } from "@mui/material";
import SingleService from './singleService.jsx';

const Services = (props) => {

  return (
    <div >
      {props.services.map((i) => (
        <SingleService name={i.name} link={i.link} type={i.type} key={i._id} />
      ))}
    </div>

  )
}

export default Services;