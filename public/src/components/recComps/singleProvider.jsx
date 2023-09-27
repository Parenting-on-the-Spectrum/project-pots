import React from 'react';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

const SingleProvider = (props) => {

  return (
    <div>
      <Typography color="text.secondary">
        <Link href="/resourcePage" onClick={() => {
          window.open(props.link)
        }}>
          {props.name} | {props.location} </Link>
      </Typography>
    </div>

  )
}

export default SingleProvider;