import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Modal, Link } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
              <Button color="inherit" onClick={(e) => pageClick(e, 'about')}>About Us</Button>
              <Button color="inherit" onClick={handleOpen}>Follow Us</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  Follow us on social media!
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <Link href="#" padding="10px" onClick={() => window.open('https://www.instagram.com/')} underline="hover">{<InstagramIcon/>}</Link>
                      <Link href="#" padding="10px" onClick={() => window.open('https://facebook.com/')} underline="hover">{<FacebookIcon/>}</Link>
                      <Link href="#" padding="10px" onClick={() => window.open('https://twitter.com/')} underline="hover">{<TwitterIcon/>}</Link>
                      <Link href="#" padding="10px" onClick={() => window.open('https://www.linkedin.com/')} underline="hover">{<LinkedInIcon/>}</Link>
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