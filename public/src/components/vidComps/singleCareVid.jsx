import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const SingleCareVid = (props) => {
  const card = (
    <React.Fragment>
      <center><img src={props.thumbnails.medium.url} width='100%' sx={{justifyContent: "center"}} ></img></center>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`https://www.youtube.com/watch?v=${props.id}`} target="_blank" rel="noopener">
          Learn more
        </Link>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: '300px', padding: '2%'}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default SingleCareVid;