import React from 'react';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

const SingleService = (props) => {

  return (
    <div>
      <Typography color="text.secondary">
        <Link href="#" onClick={() => {
          window.open(props.link)
        }}>
          {props.name} | {props.services} </Link>
      </Typography>
    </div>

  )
}

export default SingleService;