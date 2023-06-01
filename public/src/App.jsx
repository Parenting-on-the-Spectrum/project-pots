// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
// MUI components go here
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>

  )
}

export default App;