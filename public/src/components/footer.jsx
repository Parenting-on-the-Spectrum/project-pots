import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography, Button, Modal } from "@mui/material";
import Socials from './socials.jsx';


const Footer = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let pageClick = (e, page) => {
    e.preventDefault();
    props.setPage(page)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
              <Button color="inherit" onClick={handleOpen}>Follow Us</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer;