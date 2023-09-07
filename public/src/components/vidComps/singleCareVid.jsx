import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

const SingleCareVid = (props) => {
  return (
    <div flex="left" margin='80%' >
      <Link href={`https://www.youtube.com/watch?v=${props.id}`} target="_blank" rel="noopener">
        <img src={props.thumbnails.medium.url} justify-content="left" padding='500%'></img>
        </Link>
      <div ><Typography sx={{marginRight: "15%"}}>{props.title}: {props.description}</Typography></div>
    </div>
  )
}

export default SingleCareVid;