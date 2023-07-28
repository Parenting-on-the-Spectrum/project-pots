import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Modal, Box } from "@mui/material";
import SingleCommunity from './singleCommunity.jsx';

const Community = (props) => {
  console.log(props)

  return (

         <div >
          Comunity Resources
      {props.community.map((i) => (
        <SingleCommunity name={i.name} link={i.link} location={i.location} key={i._id} />
      ))}
    </div>


  )
}

export default Community;