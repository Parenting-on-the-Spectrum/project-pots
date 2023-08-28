import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";

const SingleKidVid = (props) => {

  return (
    <div flex="left" padding='10%'>
      <img src={props.thumbnails.medium.url} justify-content="left" padding='500%'></img>
      <div><Typography>{props.title}: {props.description}</Typography></div>
    </div>
  )
}

export default SingleKidVid;