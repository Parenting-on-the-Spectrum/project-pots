import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropDown from './dropdown.jsx';
// MUI components
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}

        >
          {/* <MenuIcon /> */}
          <DropDown/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Project Pots
        </Typography>
        <Button color="inherit">Login?</Button>
      </Toolbar>
    </AppBar>
  </Box>
  </div>
  )
}

export default Header;