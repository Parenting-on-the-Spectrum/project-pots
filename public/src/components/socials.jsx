// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import { Box, Typography, AppBar, Toolbar, Button, IconButton, Modal } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Socials = (props) => {
  console.log(props)
  return (<div>here</div>)

  // return (
  //   <Modal
  //     open={true}
  //     onClose={props.active(false)}
  //     aria-labelledby="modal-modal-title"
  //     aria-describedby="modal-modal-description"
  //   >
  //     <Box >
  //       <Typography id="modal-modal-title" variant="h6" component="h2">
  //         Text in a modal
  //       </Typography>
  //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //       </Typography>
  //     </Box>
  //   </Modal>
  // )

}

export default Socials;