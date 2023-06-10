import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography, Button } from "@mui/material";


const Footer = (props) => {

  let pageClick = (e, page) => {
    e.preventDefault();
    props.setPage(page)
  }

  // let CustomLink = (page) => <Link to={'social'} />;

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "red",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg" >
        <Grid container direction="column" alignItems="flex">
          <Grid item xs={12}>
            <Typography color="black" variant="h6" align="center">
              Who We Are
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1" align="center">
            {/* <p>{new Date().getFullYear()}</p> */}
            <Button color="inherit" onClick={(e) => pageClick(e, 'about')}>About Us</Button>
            <Button color="inherit" onClick={(e) => pageClick(e, 'mission')}>Our Mission</Button>
            <Button color="inherit" onClick={(e) => pageClick(e, 'social')}>Follow Us</Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer;