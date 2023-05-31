import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = (props) => {
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
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h6">
              Who We Are
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | About Us | Our Mission | Follow Us`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer;