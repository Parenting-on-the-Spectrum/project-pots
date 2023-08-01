import React from 'react';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

const Providers = (props) => {

  return (
    <div>
      <Typography color="text.secondary">
        <Link href={props.link}>{props.name} | {props.location}</Link>
      </Typography>
    </div>

  )
}

export default Providers;