// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import Logo from './logo.PNG';

const App = () => {

  return (
    <div>
      <Header/>
      <Footer/>
    </div>

  )
}

export default App;